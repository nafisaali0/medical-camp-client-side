import payment from "../../../assets/images/services/payment-removebg-preview.png"
import workshop from "../../../assets/images/services/workshop2-removebg-preview.png"
import feedback from "../../../assets/images/services/feedback1-removebg-preview.png"

const Services = () => {

    const servicesData = [
        { id: 1, title: "Secure Payment", image: payment },
        { id: 2, title: "Join Workshops", image: workshop },
        { id: 3, title: "Share Feedback", image: feedback },
    ]

    return (
        <div className="max-w-[800px] mx-auto">
            <div className="mb-10 text-textDark">
                <h1 className="text-3xl font-bold text-center">Our Services at Amelia!</h1>
            </div>

            <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="3000"
                data-aos-easing="ease-in"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
                {servicesData?.map(item => (
                    <div
                        key={item.id}
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
