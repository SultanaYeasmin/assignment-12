import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img11 from "../../assets/image-1.jpg";
import img1 from "../../assets/img1.jpg";
import img22 from "../../assets/img22.jpg";
import img3 from "../../assets/img3.jpg";
import img33 from "../../assets/img33.jpg";
import img44 from "../../assets/img-44.jpg";
import Search from "./Search";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
    return (
        <div className="w-full mx-auto my-2">
            <Carousel autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}>
                <div>
                    {/* <img  alt="img1" className="h-[450px] object-fill w-1/2" /> */}

                    <div className="hero bg-base-200 min-h-screen"
                        style={{
                            backgroundImage: `url(${img11})`,
                        }}
                    >
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div>

                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed once, initially

                                   
                                        'Delivering ',
                                        1000,
                                        'Delivering Trust',
                                        1000,
                                        'Delivering Trust & Parcel',
                                        2000,
                                        'Delivering Trust & Parcel at a Time!',
                                        2000,
                                    ]}
                                    speed={50}
                                    repeat={3}
                                    className="text-5xl font-bold text-white"
                                />

                                <Search />



                            </div>
                        </div>
                    </div>


                </div>
                <div>
                    {/* <img  alt="img1" className="h-[450px] object-fill w-1/2" /> */}

                    <div className="hero bg-base-200 min-h-screen object-contain"
                        style={{
                            backgroundImage: `url(${img22})`,
                            backgroundRepeat: "no-repeat",

                            backgroundSize: "cover",

                        }}>
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div>

                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed once, initially

                                        'Your ',
                                        2000,
                                        'Your Parcel, ',
                                        2000,
                                        'Your Parcel, Our Priority!',
                                        2000,
                                    ]}
                                    speed={50}
                                    repeat={3}
                                    className="text-5xl font-bold text-white"
                                />
                                <Search />
                            </div>
                        </div>
                    </div>


                </div>
                <div>
                    {/* <img  alt="img1" className="h-[450px] object-fill w-1/2" /> */}

                    <div className="hero bg-base-200 min-h-screen"
                        style={{
                            backgroundImage: `url(${img3})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}>
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div>
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed once, initially

                                        'From Booking  ',
                                        2000,
                                        'From Booking to Delivery, ',
                                        2000,
                                        'From Booking to Delivery, Track Every Step',
                                        2000,
                                        'From Booking to Delivery, Track Every Step with Transito.',
                                        2000,
                                    ]}
                                    speed={50}
                                    repeat={3}
                                    className="text-5xl font-bold text-white"
                                />


                                <Search />
                            </div>
                        </div>
                    </div>


                </div>
                <div>
                    {/* <img  alt="img1" className="h-[450px] object-fill w-1/2" /> */}

                    <div className="hero bg-base-200 min-h-screen" style={{
                        backgroundImage: `url(${img33})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}>
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div>

                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed once, initially

                                        'Smart  ',
                                      2000,
                                        'Smart Logistics ',
                                      2000,
                                        'Smart Logistics for a Smarter You.',
                                      2000,
                                    ]}
                                    speed={50}
                                    repeat={1}
                                    className="text-5xl font-bold text-white"
                                />
                                <Search />
                            </div>
                        </div>
                    </div>


                </div>

                <div>
                    {/* <img  alt="img1" className="h-[450px] object-fill w-1/2" /> */}

                    <div className="hero bg-base-200 min-h-screen" style={{
                        backgroundImage: `url(${img44})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}>
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div>
                                <h1 className="text-5xl font-bold text-white"></h1>
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed once, initially

                                        "Fast,",
                                        2000,
                                        "Fast, Safe, and ",
                                        2000,
                                        "Fast, Safe, and Reliable ",
                                        2000,
                                        "Fast, Safe, and Reliable – That’s Transito.",
                                        2000,
                                    ]}
                                    speed={50}
                                    repeat={1}
                                    className="text-5xl font-bold text-white"
                                />
                                <Search />
                            </div>
                        </div>
                    </div>


                </div>


            </Carousel>
        </div>
    )
}
export default Banner;