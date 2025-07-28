import { FaMapMarkerAlt, FaRocket, FaShieldAlt } from "react-icons/fa";
import FeaturesCard from "./FeaturesCard";

export default function Features() {
    return (
        <>
            <h1 className="text-4xl text-center mb-8 mt-16">Why choose Transito?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-10">

                <FeaturesCard
                    icon={FaShieldAlt}
                    title="Safe & Secure Handling"
                    para="We ensure your parcel is handled with top-tier security measures—sealed, tracked, and monitored every step of the way."
                />
                <FeaturesCard
                    icon={FaRocket}
                    title="Lightning-Fast Delivery"
                    para="With our optimized routes and active tracking, your parcel reaches its destination in record time—no more waiting!"
                />
                <FeaturesCard

                    icon={FaMapMarkerAlt}
                    title="Live Parcel Tracking"
                    para="Stay informed with real-time tracking updates—from pickup to drop-off—right from your dashboard or mobile app."
                />


            </div>
        </>

    )
}