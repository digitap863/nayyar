import { useMemo, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import 'react-quill-new/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { postForm } from '../../api/req';


const ServiceForm = () => {
  const navigate = useNavigate();
  const quillRef = useRef(null);


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




  return (
    <>

    </>
  );
};

export default ServiceForm;
