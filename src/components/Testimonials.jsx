import Image from "next/image";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Testimonials() {
    return (
        <div className="p-10 md:p-20 bg-gray-100">
            <div className="md:text-left text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                    Customer Testimonials
                </h2>
                <p className="text-lg text-gray-800 my-6 mb-12">
                    What our clients say about us.
                </p>
            </div>


            <div className="space-y-8">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div className="bg-white p-6 space-y-5 border border-black">
                        <div className="flex space-x-1 text-black">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <FaStar key={index} />
                            ))}
                        </div>
                        <p className="text-gray-800 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                        </p>
                        <div className="flex items-center space-x-4 mt-4">
                            <Image
                                src="/images/team3.png"
                                alt="James Nduku"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                            <div>
                                <h4 className="text-gray-800 font-semibold">James Nduku</h4>
                                <p className="text-gray-500 text-sm">Software Engineer</p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block bg-white p-6 space-y-5 border border-black">
                        <div className="flex space-x-1 text-black">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <FaStar key={index} />
                            ))}
                        </div>
                        <p className="text-gray-800 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                        </p>
                        <div className="flex items-center space-x-4 mt-4">
                            <Image
                                src="/images/team1.png"
                                alt="Erick Kipkemboi"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                            <div>
                                <h4 className="text-gray-800 font-semibold">Erick Kipkemboi</h4>
                                <p className="text-gray-500 text-sm">Scrum Master</p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block bg-white p-6 space-y-5 border border-black">
                        <div className="flex space-x-1 text-black">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <FaStar key={index} />
                            ))}
                        </div>
                        <p className="text-gray-800 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                        </p>
                        <div className="flex items-center space-x-4 mt-4">
                            <Image
                                src="/images/team6.png"
                                alt="Stephen Kerubo"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                            <div>
                                <h4 className="text-gray-800 font-semibold">Stephen Kerubo</h4>
                                <p className="text-gray-500 text-sm">UI/UX Designer</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex justify-between items-center mt-8">
                    <div className="flex space-x-2">
                        <span className="text-3xl text-gray-900">•</span>
                        <span className="text-3xl text-gray-400">•</span>
                        <span className="text-3xl text-gray-400">•</span>
                        <span className="text-3xl text-gray-400">•</span>
                        <span className="text-3xl text-gray-400">•</span>
                    </div>

                    <div className="flex space-x-4">
                        <div className="rounded-full border border-black p-4">
                            <FaArrowLeft />
                        </div>
                        <div className="rounded-full border border-black p-4">
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
