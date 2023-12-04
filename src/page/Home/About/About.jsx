import aboutImage from '../../../assets/images/newBanner/about.avif'

const About = () => {
    return (
        <>
            <section className="bg-[#ece8d9] py-16">
                <div className="container mx-auto overflow-hidden">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                        About Us
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md text-lg font-semibold">
                            <p className="text-gray-700 mb-4 ">
                                Welcome to Amelia, your dedicated partner in organizing impactful and compassionate medical camps. At [Agency Name], we believe in the power of healthcare outreach to transform lives and communities.
                            </p>
                            <p className="text-gray-700 mb-4">
                                <h1 className="font-bold text-xl">Our Mission</h1>
                                Empowering Communities Through Health: Our mission is to make quality healthcare accessible to every corner of society. We strive to bridge the gap between medical services and underserved communities by organizing comprehensive and community-centric medical camps.
                            </p>
                            <p className="text-gray-700 mb-4">
                                <h1 className="font-bold text-xl">Our Impact</h1>
                                Over the years, Amelia has made a significant impact on countless lives. Through our medical camps, we have been able to detect and address health concerns early, provide life-saving interventions, and empower individuals with knowledge to take charge of their well-being.
                            </p>
                        </div>
                        <div className="overflow-hidden bg-white rounded-lg shadow-md">
                            <img
                                src={aboutImage}
                                alt="About Us"
                                className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;