import Image from "next/image";

function Trust() {
    return (
        <div className="py-24 px-12 bg-gray-100">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-center gap-10">

                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                        Trusted by 2000+ companies worldwide.
                    </h2>
                </div>


                <div className="w-full flex gap-6 overflow-x-auto scrollbar-hide">
                    <Image
                        src="/images/company1.png"
                        alt="Company 1"
                        width={100}
                        height={50}
                        className="object-contain flex-shrink-0"
                    />
                    <Image
                        src="/images/company2.png"
                        alt="Company 2"
                        width={100}
                        height={50}
                        className="object-contain flex-shrink-0"
                    />
                    <Image
                        src="/images/company3.png"
                        alt="Company 3"
                        width={100}
                        height={50}
                        className="object-contain flex-shrink-0"
                    />
                    <Image
                        src="/images/company4.png"
                        alt="Company 4"
                        width={100}
                        height={50}
                        className="object-contain flex-shrink-0"
                    />
                    <Image
                        src="/images/company5.png"
                        alt="Company 5"
                        width={100}
                        height={50}
                        className="object-contain flex-shrink-0"
                    />
                </div>
            </div>
        </div>
    );
}

export default Trust;
