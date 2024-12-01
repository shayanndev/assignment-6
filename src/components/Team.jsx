import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Image from "next/image";

function Team() {
    const teams = [
        {
            id: 1,
            image: "/images/team1.png",
            name: "james Nduku",
            designation: "Marketing Coordinator"
        },
        {
            id: 2,
            image: "/images/team2.png",
            name: "Joseph Munyambu",
            designation: "Nursing Assistant"
        },
        {
            id: 3,
            image: "/images/team3.png",
            name: "Joseph Ngumbau",
            designation: "Medical Assistant"
        },
        {
            id: 4,
            image: "/images/team4.png",
            name: "Erick Kipkemboi",
            designation: "Web Designer"
        },
        {
            id: 5,
            image: "/images/team5.png",
            name: "Stephen Kerubo",
            designation: "President of Sales"
        },
        {
            id: 6,
            image: "/images/team6.png",
            name: "John Leboo",
            designation: "Dog Trainer"
        },

    ];

    return (
        <div className="p-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                    Our Team
                </h2>
                <p className="text-lg text-gray-800 my-6 mb-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16">
                {teams.map((team) => (
                    <div key={team.id} className="">
                        <div className="flex items-center justify-center flex-col gap-2">
                            <Image src={team.image} alt={team.name} width={100} height={100} className="w-16 h-16" />
                            <h3 className="text-lg font-bold text-gray-900 mt-2">{team.name}</h3>
                            <p className="text-sm text-gray-700">{team.designation}</p>
                            <div className="flex space-x-4 mt-4">
                                <a href="https://www.linkedin.com/in/shayankhandev" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-black transition-colors">
                                    <FaLinkedin size={20} />
                                </a>
                                <a href="https://github.com/shayanndev" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-black transition-colors">
                                    <FaGithub size={20} />
                                </a>
                                <a href="https://x.com/_shayannk" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-black transition-colors">
                                    <FaTwitter size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Team;
