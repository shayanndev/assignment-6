import { FaStar } from 'react-icons/fa';
import Image from "next/image";

function Courses() {
    const products = [
        {
            id: 1,
            image: "/images/project1.png",
            category: "Design",
            title: "UI/UX Design 201"
        },
        {
            id: 2,
            image: "/images/project2.png",
            category: "Programming",
            title: "Introduction to Python"
        },
        {
            id: 3,
            image: "/images/project3.png",
            category: "Business",
            title: "Data Analysis for Beginners"
        },
        {
            id: 4,
            image: "/images/project4.png",
            category: "Art",
            title: "Art Specialization"
        },
        {
            id: 5,
            image: "/images/project5.png",
            category: "Law",
            title: "Rule of Law"
        },
        {
            id: 6,
            image: "/images/project6.png",
            category: "Tech",
            title: "Introduction to Webflow"
        },
    ];

    return (
        <div className="px-8 md:py-20 md:px-0">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                    Courses
                </h2>
                <p className="text-lg text-gray-800 my-6 mb-12">
                    Your Ultimate Guide to Learning
                </p>
            </div>

            <div className="flex justify-center mb-12 space-x-4">
                <button className="px-6 py-2 text-sm md:text-lg font-medium  border-b-2 border-gray-600 rounded-sm">
                    Popular
                </button>
                <button className="px-6 py-2 text-sm md:text-lg font-medium text-gray-60 rounded-sm">
                    Recommend
                </button>
                <button className="px-6 py-2 text-sm md:text-lg font-medium text-gray-60 rounded-sm">
                    Best Price
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16">
                {products.map((product) => (
                    <div key={product.id} className="bg-white shadow-lg rounded-sm overflow-hidden">
                        <Image src={product.image} alt={product.title} width={100} height={100} className="w-full h-48 object-cover" />

                        <div className="p-4">
                            <div className="flex justify-between items-center text-sm text-gray-600">
                                <span className="font-bold text-gray-900">{product.category}</span>
                                <div className="font-bold text-gray-900 flex items-center">
                                    <FaStar className="text-gray-300 mr-1" />
                                    <span>5.0</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mt-2">{product.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquid hic atque.</p>
                            <div className="flex justify-start items-center gap-10 mt-4">
                                <button className="px-4 py-2 border border-gray-600 text-gray-800 hover:text-gray-900 rounded">
                                    Enroll Now
                                </button>
                                <span className="text-lg font-bold text-gray-800">$400</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-24">
                <button className="px-4 py-2 border border-gray-600 text-gray-800 hover:text-gray-900 rounded">
                    View All Courses
                </button>
            </div>

        </div>
    );
}

export default Courses;
