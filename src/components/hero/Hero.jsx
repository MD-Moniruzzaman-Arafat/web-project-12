import banner from '../../assets/banner.jpg'

const Hero = () => {
    return (
        <>
            <div
                className="hero min-h-[600px] container mx-auto rounded-2xl"
                style={{
                    backgroundImage:
                        `url(${banner})`,
                }}
            >
                <div className="hero-overlay rounded-2xl"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="mb-5 text-5xl font-extrabold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">
                            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                        </p>
                        <div className='flex items-center justify-center'>
                            <button className="btn bg-[#0BE58A] border-0 shadow-none rounded-full text-xs lg:text-sm px-5 lg:px-10 mr-2">Explore Now</button>
                            <button className="btn btn-outline rounded-full text-xs lg:text-sm px-5 lg:px-10  ml-2">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Hero;