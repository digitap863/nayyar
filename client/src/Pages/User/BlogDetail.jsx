import Banner from '../../Components/User/BlogDetails/Banner.jsx';
import BlogDetailsection from '../../Components/User/BlogDetails/BlogDetailsection.jsx';
import Insight from "../../Components/User/Home/Insight.jsx";
import Layout from "./Layout/Layout.jsx";

// Import blog detail image
import authorImage from '../../assets/images/blogs/author.png';
import blogDetailImage from '../../assets/images/home/building.svg';

function BlogDetail() {
    // Blog content structure
    const blogContent = {
        introduction: "Starting a business in the UAE is an exciting milestone, but choosing the right company structure is crucial first step. Mainland and Free Zone setups are the two most common options, each offering distinct advantages depending on your business goals and operational needs.",
        sections: [
            {
                title: "Understanding Mainland Company Formation",
                description: "A Mainland company is formed via the Department of Economic Development and allows businesses to operate across the UAE and internationally. This structure offers flexibility in business activities and enables companies to bid for local clients without restrictions. It is particularly suitable for businesses planning to establish a physical presence, work with government entities, or trade operations within the UAE.",
                quote: {
                    text: "At our core, all of good progress is investment strategy. Growth is not about doing more—it's about doing what matters, and doing it well. Effective commit to helping leaders see through the noise, focus on priorities, and define results that make a difference.",
                    author: "Sophia Reyes",
                    authorTitle: "Managing Partner & Strategist",
                    authorImage: authorImage
                }
            },
            {
                title: "Understanding Free Zone Company Formation",
                description: "A Free Zone company is formed within a designated economic zone and is regulated by a specific Free Zone Authority. Free Zones offer 100% foreign ownership, full repatriation of capital and profits, and exemption from corporate and personal income taxes. However, Free Zones are often industry-focused, providing tailored infrastructure and support for specific sectors.",
                additionalContent: ""
            },
            {
                title: "Key Differences Between Mainland and Free Zone",
                description: "The primary distinction between Mainland and Free Zone companies lies in market access and operational flexibility. Mainland businesses can freely enter the UAE market, while Free Zones offer tax benefits but may restrict direct UAE market access. Mainland companies can operate anywhere in the UAE, while Free Zones are geographically bound. Choosing the structure that aligns with your business model and growth strategy is crucial.",
                additionalContent: ""
            }
        ]
    };

    return (
        <Layout>
            <Banner
                image={blogDetailImage}
                heading="Mainland vs Free Zone: Choosing the Right Setup"
            />
            <BlogDetailsection content={blogContent} />
            <Insight />
        </Layout>
    )
}

export default BlogDetail