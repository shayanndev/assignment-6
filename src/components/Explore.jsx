import Image from "next/image";

function Explore() {
    return (
        <div className="px-10 md:py-20 md:mx-10">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                    Explore Courses By Category
                </h2>
                <p className="text-lg text-gray-800 my-6 mb-12">
                    Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
                
                <div className="flex items-center bg-gray-100 shadow-lg rounded-lg p-4">
                    <Image
                        src="/images/explore1.png"
                        alt="Design & Development"
                        width={70}
                        height={70}
                        className="object-cover rounded-full"
                    />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Design & Development</h3>
                        <p className="text-sm text-gray-600">50+ courses available</p>
                    </div>
                </div>
                <div className="flex items-center bg-gray-100 shadow-lg rounded-lg p-4">
                    <Image
                        src="/images/explore2.png"
                        alt="Marketing"
                        width={70}
                        height={70}
                        className="object-cover rounded-full"
                    />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Marketing</h3>
                        <p className="text-sm text-gray-600">50+ courses available</p>
                    </div>
                </div>
                <div className="flex items-center bg-gray-100 shadow-lg rounded-lg p-4">
                    <Image
                        src="/images/explore3.png"
                        alt="Development"
                        width={70}
                        height={70}
                        className="object-cover rounded-full"
                    />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Development</h3>
                        <p className="text-sm text-gray-600">50+ courses available</p>
                    </div>
                </div>

                <div className="hidden md:flex items-center bg-gray-100 shadow-lg rounded-lg p-4">
                    <Image
                        src="/images/explore4.png"
                        alt="Communication"
                        width={70}
                        height={70}
                        className="object-cover rounded-full"
                    />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Communication</h3>
                        <p className="text-sm text-gray-600">50+ courses available</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center bg-gray-100 shadow-lg rounded-lg p-4">
                    <Image
                        src="/images/explore5.png"
                        alt="Digital Marketing"
                        width={70}
                        height={70}
                        className="object-cover rounded-full"
                    />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Digital Marketing</h3>
                        <p className="text-sm text-gray-600">50+ courses available</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center bg-gray-100 shadow-lg rounded-lg p-4">
                    <Image
                        src="/images/explore6.png"
                        alt="Self Development"
                        width={70}
                        height={70}
                        className="object-cover rounded-full"
                    />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Self Development</h3>
                        <p className="text-sm text-gray-600">50+ courses available</p>
                    </div>
                </div>

                
                <div className="hidden md:flex items-center bg-gray-100 shadow-lg rounded-lg p-4">
                    <Image
                        src="/images/explore7.png"
                        alt="Business"
                        width={70}
                        height={70}
                        className="object-cover rounded-full"
                    />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Business</h3>
                        <p className="text-sm text-gray-600">50+ courses available</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center bg-gray-100 shadow-lg rounded-lg p-4">
                    <Image
                        src="/images/explore8.png"
                        alt="Finance"
                        width={70}
                        height={70}
                        className="object-cover rounded-full"
                    />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Finance</h3>
                        <p className="text-sm text-gray-600">50+ courses available</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center bg-gray-100 shadow-lg rounded-lg p-4">
                    <Image
                        src="/images/explore9.png"
                        alt="Consulting"
                        width={70}
                        height={70}
                        className="object-cover rounded-full"
                    />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Consulting</h3>
                        <p className="text-sm text-gray-600">50+ courses available</p>
                    </div>
                </div>
            </div>

            <div className="text-center mt-24">
                <button className="px-4 py-2 border border-gray-600 text-gray-800 hover:text-gray-900 rounded">
                    View All Courses
                </button>
            </div>
        </div>

    )
}

export default Explore