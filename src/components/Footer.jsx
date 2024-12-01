import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="p-10 md:p-20">

            <div className="py-10 mb-20">
                <div className="mx-auto flex flex-col gap-5 md:flex-row items-center md:space-y-0 md:justify-between">

                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-800">Subscribe to our Newsletter</h3>
                        <p className="text-gray-800 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <div className="space-y-4 w-full md:w-auto">

                        <div className="flex flex-col items-center md:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 border border-black rounded focus:outline-none w-full md:w-auto"
                            />
                            <div className="hover:bg-black hover:text-white border border-black px-6 py-2 rounded text-center w-full">
                                Subscribe
                            </div>
                        </div>

                        <p className="md:text-left text-center text-xs text-gray-500">
                            By subscribing you agree to with our Privacy Policy
                        </p>
                    </div>
                </div>
            </div>


            <div className="mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

                    <div className="flex items-start justify-center md:justify-start text-center md:text-left">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={30}
                            height={30}
                            className="object-contain"
                        />
                        <span className="ml-1 text-2xl font-bold">Ddsgnr</span>
                    </div>


                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Courses</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-800 hover:text-black">Business</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-black">Development</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-black">Technology</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-black">Design</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-black">Programming</a>
                            </li>
                        </ul>
                    </div>


                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-800 hover:text-black">Career</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-black">Resume</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-black">Learning</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-black">Interview Preparation</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-black">Jobs</a>
                            </li>
                        </ul>
                    </div>


                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">About Us</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-800 hover:text-black">Contact</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-black">Help/Support</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-black">FAQs</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-black">Terms and Conditions</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-black">Partners</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-gray-700 mb-6" />

                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
                        <p className="text-sm text-gray-700">2023 Ddsgnr. All right reserved.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-800 hover:text-black text-sm underline">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-800 hover:text-black text-sm underline">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-800 hover:text-black text-sm underline">
                                Cookies Settings
                            </a>
                        </div>
                    </div>

                    <div className="flex space-x-4 text-center">
                        <a href="#" className="text-gray-800 hover:text-black">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-gray-800 hover:text-black">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-gray-800 hover:text-black">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-gray-800 hover:text-black">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
