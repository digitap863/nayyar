
function BlogDetailsection({ content }) {
    return (
        <div className="w-full bg-[#F7F7F4] py-16 sm:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Blog Content */}
                <div className="prose prose-lg max-w-none">
                    {/* Introduction Section */}
                    {content?.introduction && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-semibold text-black mb-4">
                                Introduction
                            </h2>
                            <p className="text-gray-700 text-base leading-relaxed">
                                {content.introduction}
                            </p>
                        </div>
                    )}

                    {/* Main Sections */}
                    {content?.sections && content.sections.map((section, index) => (
                        <div key={index} className="mb-12">
                            <h2 className="text-2xl font-semibold text-black mb-4">
                                {section.title}
                            </h2>
                            <p className="text-gray-700 text-base leading-relaxed mb-6">
                                {section.description}
                            </p>

                            {/* Quote if exists */}
                            {section.quote && (
                                <div className="bg-gray-50 border-l-4 border-blablue p-6 my-8 rounded-r-lg">
                                    <p className="text-gray-800 italic text-base leading-relaxed mb-4">
                                        "{section.quote.text}"
                                    </p>
                                    {section.quote.author && (
                                        <div className="flex items-center gap-3">
                                            {section.quote.authorImage && (
                                                <img
                                                    src={section.quote.authorImage}
                                                    alt={section.quote.author}
                                                    className="w-10 h-10 rounded-full object-cover"
                                                />
                                            )}
                                            <div>
                                                <p className="font-semibold text-black text-sm">
                                                    {section.quote.author}
                                                </p>
                                                {section.quote.authorTitle && (
                                                    <p className="text-gray-600 text-xs">
                                                        {section.quote.authorTitle}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Additional content if exists */}
                            {section.additionalContent && (
                                <p className="text-gray-700 text-base leading-relaxed">
                                    {section.additionalContent}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogDetailsection
