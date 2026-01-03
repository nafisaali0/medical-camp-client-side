import payment from "../../../assets/images/services/payment-removebg-preview.png"
import workshop from "../../../assets/images/services/workshop2-removebg-preview.png"
import feedback from "../../../assets/images/services/feedback1-removebg-preview.png"

const Services = () => {

    const servicesData = [
        { id: 0, title: "Secure Payment", image: payment },
        { id: 1, title: "Join Workshops", image: workshop },
        { id: 2, title: "Share Feedback", image: feedback },
    ]
    const aosAnimations = ["fade-right", "fade-up", "fade-left"];
    
    return (
        <div className="max-w-[800px] mx-auto">
            <div className="mb-10 text-textDark">
                <h1 className="text-3xl font-bold text-center">Our Services at Amelia!</h1>
            </div>

            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
                {servicesData?.map(item => (
                    <div
                        key={item.id}
                        data-aos={aosAnimations[item.id]}
                        className="card bg-primarylight/30 shadow-lg hover:shadow-xl border border-primarySemiDark"
                    >
                        <figure>
                            <img
                                src={item.image}
                                className="w-full h-full object-cover rounded-t-xl"
                                alt={item.title}
                            />
                        </figure>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-lg">{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
