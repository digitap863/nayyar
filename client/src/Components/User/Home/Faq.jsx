import { useState } from 'react'
import { FaArrowDown, FaMinus, FaPlus } from "react-icons/fa6"

function Faq() {
    const [openIndex, setOpenIndex] = useState(1) // Second item open by default

    const faqs = [
        {
            id: 1,
            question: "What documents are required to begin the process?",
            answer: "The required documents typically include passport copies, business plan, proof of address, and other relevant documentation depending on the license type and business activity."
        },
        {
            id: 2,
            question: "How long does the business setup process usually take?",
            answer: "The setup timeline depends on the license type and approvals required, but with our streamlined process, most clients receive their documentation and approvals within 24-72 hours, ensuring a fast and hassle-free start."
        },
        {
            id: 3,
            question: "Do you handle visa and PRO services as well?",
            answer: "Yes, we provide comprehensive visa and PRO services including employment visas, golden visas, visa renewals, and all PRO-related documentation and government procedures."
        },
        {
            id: 4,
            question: "Can you assist in choosing the right business license?",
            answer: "Absolutely! Our expert team will guide you through the different license types available and help you choose the most suitable option based on your business activities and goals."
        },
        {
            id: 5,
            question: "Are your services suitable for startups and small businesses?",
            answer: "Yes, our services are designed to cater to businesses of all sizes, from startups to established enterprises. We offer flexible packages tailored to your specific needs and budget."
        }
    ]

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="w-full bg-white py-16 md:pt-20 md:pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left Side - Header and CTA */}
                    <div className="flex flex-col justify-between min-h-[600px] md:w-[40%] w-full ">
                        {/* Title */}
                        <div className="mb-12 flex-shrink-0">
                            <h2 className="text-3xl sm:text-4xl font-semibold text-black leading-tight">
                                Frequently Asked
                                <br />
                                <span className="text-blue-600">Questions.</span>
                            </h2>
                        </div>

                        {/* CTA Box - Now in normal flow, pushed to bottom with flex */}
                        <div className="bg-gray-200 rounded-3xl p-8 mt-auto relative bottom-26">
                            <h3 className="text-xl font-semibold text-black mb-3">
                                Still have a question?
                            </h3>
                            <p className="text-gray-600 text-sm mb-6">
                               Our team is ready to assist you with anything you need.
                            </p>    
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 pl-8 pr-16 rounded-full transition-all flex items-center gap-3 group relative">
                                <span>Make A Call</span>
                                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform absolute right-1">
                                    <FaArrowDown className="text-blue-600 rotate-[-45deg] font-light w-4 h-4" />
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Right Side - FAQ Accordion */}
                    <div className="md:w-[60%] w-full">
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.id}
                                className="bg-white overflow-hidden transition-all duration-300 border-b border-gray-200"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-base font-semibold text-black pr-4">
                                        {faq.question}
                                    </span>
                                    <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                                        {openIndex === index ? (
                                            <FaMinus className="text-sm" />
                                        ) : (
                                            <FaPlus className="text-sm" />
                                        )}
                                    </div>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-6 pb-6">
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Faq