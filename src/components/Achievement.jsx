function Achievement() {
    return (
        <div className="p-20">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                    Our Achievements
                </h2>
                <p className="text-lg text-gray-800 my-6 mb-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus.
                </p>
            </div>


            <div className="grid grid-cols-2 md:flex items-center justify-between gap-8 md:gap-12">
                <div className="text-center">
                    <h3 className="text-3xl md:text-5xl font-bold text-black">200+</h3>
                    <p className="text-sm md:text-lg text-gray-600 mt-2">Courses</p>
                </div>
                <div className="text-center">
                    <h3 className="text-3xl md:text-5xl font-bold text-black">50K</h3>
                    <p className="text-sm md:text-lg text-gray-600 mt-2">Mentors</p>
                </div>
                <div className="text-center">
                    <h3 className="text-3xl md:text-5xl font-bold text-black">370K</h3>
                    <p className="text-sm md:text-lg text-gray-600 mt-2">Students</p>
                </div>
                <div className="text-center">
                    <h3 className="text-3xl font-bold text-black">100+</h3>
                    <p className="text-sm md:text-lg text-gray-600 mt-2">Recognition</p>
                </div>
            </div>

        </div>
    );
}

export default Achievement;
