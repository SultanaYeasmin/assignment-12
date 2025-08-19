import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img11 from "../../assets/image-1.jpg";
import img1 from "../../assets/img1.jpg";
import img22 from "../../assets/img22.jpg";
import img3 from "../../assets/img3.jpg";
import img33 from "../../assets/img33.jpg";
import img44 from "../../assets/img-44.jpg";
import Slide from "./Slide";


const Banner = () => {
    return (
        <div className="w-full mx-auto">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
              >
                <div>
                    <Slide
                        image={img11}
                        heading="Delivering Trust & Parcel at a time!"
                    />
                </div>

                <div>
                    <Slide
                        image={img22}
                        heading=" Your Parcel, Our Priority!"
                    />
                </div>

                <div>
                    <Slide
                        image={img3}
                        heading="Track Every Step from Booking to Delivery!"
                    />
                </div>


                <div>
                    <Slide
                        image={img33}
                        heading="Smart Logistics for a Smarter You!"
                    />
                </div>

                <div>
                    <Slide
                        image={img44}
                        heading="Fast, Safe, and Reliable – that’s Transito!"
                    />
                </div>
            </Carousel>
        </div>
    )
}
export default Banner;