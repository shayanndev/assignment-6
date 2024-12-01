import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

function Navbar() {
    return (
        <div>
            <div className="bg-gray-100 border-b border-gray-300 hidden md:block">
                <div className="container mx-auto flex justify-between items-center py-3 px-6">
                    <div className="text-sm text-black font-medium">
                        <span>Phone: +123 456 7890</span>
                        <span className="ml-4">Email: muhammdshayan2006khan@gmail.com</span>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.linkedin.com/in/shayankhandev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 hover:text-gray-900 transition-colors"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://github.com/shayanndev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 hover:text-gray-900 transition-colors"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://x.com/_shayannk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 hover:text-gray-900 transition-colors"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a
                            href="https://www.instagram.com/shayantechs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 hover:text-gray-900 transition-colors"
                        >
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">

                    <div className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
                        <a href="#" className="flex items-center">
                            <Image
                                src="/images/logo.png"
                                alt="Logo"
                                width={25}
                                height={25}
                                className="object-contain"
                            />
                            <span className="ml-1">Ddsgnr</span>
                        </a>
                    </div>


                    <div className="md:hidden">
                        <HiMenu size={28} className="text-gray-800" />
                    </div>


                    <div className="hidden md:flex space-x-8 text-gray-900">
                        <a href="#" className="hover:text-gray-900">Home</a>
                        <a href="#" className="hover:text-gray-900">Courses</a>
                        <a href="#" className="hover:text-gray-900">Services</a>
                        <a href="#" className="hover:text-gray-900">Achievement</a>
                        <a href="#" className="hover:text-gray-900">About Us</a>
                        <a href="#" className="hover:text-gray-900">Testimonial</a>
                    </div>


                    <div className="hidden md:flex space-x-4">
                        <button className="px-4 py-2 border border-gray-600 text-gray-800 hover:text-gray-900 rounded">
                            Login
                        </button>
                        <button className="px-4 py-2 bg-black text-white hover:bg-blue-700 rounded">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
