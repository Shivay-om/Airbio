import React from 'react'
import card1 from '../../assets/images/blog1.webp'
import card2 from '../../assets/images/blog2.webp'
import card3 from '../../assets/images/blog3.webp'
import Header from '../Home/Header';
import { Link } from 'react-router-dom';

const posts = [
    {
        id: 1,
        imgSrc: card1,
        title: 'Beyond Clean Air: What to Look for in Your Next Biosafety Cabinet',
        date: '2024-11-25',
        time: '3 min read',
        readMore: 'blog1',
        // route: "blog1",
    },
    {
        id: 2,
        imgSrc: card2,
        title: 'Laminar Flow Hoods: Are You Sacrificing Safety for Cost?',
        date: '2024-11-24',
        time: '3 min read',
        readMore: 'blog2',
        // route: "blog2",
    },
    {
        id: 3,
        imgSrc: card3,
        title: 'Fume Hoods and the Future of Laboratory Safety: 5 Innovations to Watch',
        date: '2024-11-23',
        time: '3 min read',
        readMore: 'blog3',
        // route: "blog3",
    },
];

const BlogPage = () => {
    return (
        <div>
            <Header />
            <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />

            <div className="py-10 px-4 mb-16">
                <h1 className='text-3xl text-center font-[500px] md:pb-10 md:px-10  md:text-[40px] md:text-start mb-5 md:mb-0'>Our Articles and News</h1>
                <div className="max-w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
                        >
                            {/* Image */}
                            <div className="relative mb-4 group rounded-md overflow-hidden">
                                {/* Image */}
                                <img
                                    src={post.imgSrc}
                                    alt={post.title}
                                    className="w-full h-[195px] md:h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Full Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Link
                                        to={`/blog/${post.readMore}`}
                                        className="bg-black hover:bg-[#1782C5] rounded-full text-white py-2 px-5"
                                    >
                                        Read Full Blog
                                    </Link>
                                </div>
                            </div>


                            {/* Title */}
                            <div className="mb-2 lg:h-[84px]">
                                <h2 className="font-medium md:text-lg">{post.title}</h2>
                            </div>

                            {/* Info Section */}
                            <div className="text-sm text-gray-600 space-y-1">
                                <p className='text-end'>
                                    <a href={post.readMore} className="text-[#1782C5] hover:underline">
                                        Read More
                                    </a>
                                    {/* <img src={vector} alt="vector icon" /> */}
                                </p>
                                <div className='flex justify-between'>
                                    <p>{post.date}</p>
                                    <p>{post.time}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default BlogPage
