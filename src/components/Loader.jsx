import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loader = () => {
    return (
        <>
            <div className="max-w-[1300px] mx-auto flex justify-center items-center my-12">
                <DotLottieReact
                    src="https://lottie.host/965aaf31-80df-4388-913b-ee93e4eb6cfd/brZWJ6LGN5.lottie"
                    loop
                    autoplay
                    style={{ width: 250, height: 250 }}
                />
            </div>
        </>
    );
};

export default Loader;