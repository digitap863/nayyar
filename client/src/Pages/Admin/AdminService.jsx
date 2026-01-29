import { useMemo, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { postForm } from '../../api/req';
import EditorToolbar, {
  formats,
} from "../../Components/Admin/EditorToolbar";
import Sidebar from '../../Components/Admin/Sidebar';


const ServiceForm = () => {
  const navigate = useNavigate();
  const quillRef = useRef(null);
  const [formData, setFormData] = useState({
    heading: '',
    description: '',
    slug: '',
    description1: '',
  });

  const [images, setImages] = useState({
    Image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const createSlug = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')        // Replace spaces with -
      .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
      .replace(/\-\-+/g, '-')      // Replace multiple - with single -
      .replace(/^-+/, '')           // Trim - from start of text
      .replace(/-+$/, '');          // Trim - from end of text
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    if (name === 'heading') {
      newFormData.slug = createSlug(value);
    }
    setFormData(newFormData);
  };

  const handleQuillChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      if (input.files) {
        const file = input.files[0];
        const formData = new FormData();
        formData.append('image', file);

        try {
          // Show a loading state if you want
          const res = await postForm('/upload-editor-image', formData);

          if (res.data.success) {
            const editor = quillRef.current?.getEditor(); // Get editor instance
            const range = editor?.getSelection();
            // Insert the image URL returned from the server
            if (editor && range) {
              editor.insertEmbed(range.index, 'image', res.data.url);
            } else {
              toast.error('Unable to insert image at the current cursor position.');
            }
          } else {
            toast.error('Image upload failed.');
          }
        } catch (error) {
          toast.error('An error occurred during image upload.');
          console.error(error);
        }
      }
    };
  };

  const modules = useMemo(() => ({
    toolbar: {
      container: "#t1", // Use the ID of your custom toolbar
      handlers: {
        image: imageHandler, // Override the default image handler
      },
    },

  }), []);


  const handleFileChange = (e) => {
    const { name, files } = e.target; // Get 'name' from e.target
    if (files && files[0]) {
      const file = files[0];

      // 1. SET THE FILE TO STATE FOR SUBMISSION
      setImages({ ...images, [name]: file }); // <-- THIS WAS MISSING

      // 2. CREATE THE PREVIEW
      const reader = new FileReader();
      reader.onload = () => { // <-- Set onload *before* readAsDataURL
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceData = new FormData();
    serviceData.append('heading', formData.heading);
    serviceData.append('description', formData.description);
    serviceData.append('slug', formData.slug);
    serviceData.append('description1', formData.description1);
    serviceData.append('eligibility', formData.eligibility);
    serviceData.append('duration', formData.duration);

    if (images.Image) {
      serviceData.append('Image', images.Image);
    } else {
      // Add a check in case the user didn't select a file
      toast.error('Please select an image.');
      return;
    }


    try {
      const response = await postForm('/add-service', serviceData);
      if (response.data.success) {
        console.log(response, "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        toast.success(response.data.message);
        navigate('/admin/servicelist');

      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('An error occurred while adding the Course.');
      console.error('Error submitting the Course:', error);
    }
  };

  return (
    <>
      <div className='min-h-screen bg-white dark:bg-gray-900'>
        <Sidebar />
        <div className='px-8 pt-8 sm:ml-64'>
          <div className="min-w-[20%] h-full">
            <div className="overflow-x-auto overflow-scroll h-[95vh] bg-white p-2 rounded-xl no-scrollbar">
              <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className='text-center uppercase font-bold text-2xl '>Add a Course</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Heading</label>
                    <input
                      type="text"
                      name="heading"
                      value={formData.heading}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Slug</label>
                    <input
                      type="text"
                      name="slug"
                      value={formData.slug}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-gray-100"
                    />
                  </div>

                </div>


                <div className="mb-2">
                  <label className="block text-gray-700 font-semibold mb-2">Description </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4 ">
                  <label className="block text-gray-700 font-semibold mb-2 ">Image</label>
                  <input
                    type="file"
                    name="Image"
                    onChange={handleFileChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {imagePreview && (
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Image Preview</label>
                    <img src={imagePreview} alt="Preview" className="h-20 w-20 rounded-md border border-gray-300" />
                  </div>
                )}

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Eligibility</label>
                    <input
                      type="text"
                      name="eligibility"
                      value={formData.eligibility}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Duration</label>
                    <input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>





                <div className="mb-6">
                  <EditorToolbar toolbarId={"t1"} />
                  <label className="block text-gray-700 font-semibold mb-2">Description 1</label>
                  <ReactQuill
                    ref={quillRef}
                    theme="snow"
                    value={formData.description1}
                    onChange={(value) => handleQuillChange(value, 'description1')}
                    placeholder={"Write something ..."}
                    modules={modules}
                    formats={formats}
                    className="h-40 mb-4 text-gray-700"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1D1EE3] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#1618C0] transition duration-200"
                >
                  Submit Service
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceForm;
