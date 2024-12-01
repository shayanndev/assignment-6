import Image from "next/image";

function Hero() {
    return (
        <div className="flex flex-col md:flex-row items-center">

            <div className="w-full md:w-1/2 p-8 md:p-16">
                <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6 md:mb-8">
                    Learn new skills online with ease
                </h1>
                <p className="text-lg text-gray-600 mb-6 md:mb-8">
                    Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                </p>
                <div className="flex space-x-4">
                    <button className="px-4 py-2 bg-black text-white hover:bg-blue-700 rounded">
                        Start Learning
                    </button>
                    <button className="px-4 py-2 border border-gray-600 text-gray-800 hover:text-gray-900 rounded">
                        Explore Courses
                    </button>
                </div>
            </div>


            <div className="w-full md:w-1/2">
                <Image
                    src="/images/hero.jpg"
                    alt="Hero Image"
                    width={800}
                    height={800}
                    className="object-cover w-full h-full"
                    priority
                />
            </div>
        </div>
    );
}

export default Hero;
