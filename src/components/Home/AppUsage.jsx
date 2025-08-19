import useAllUsers from "../../hooks/useAllUsers"
import useParcelsStats from "../../hooks/useParcelsStats"
import booked from "../../assets/booklet.png"
import deliver from "../../assets/receive.png"
import user from "../../assets/user.png"
import CountUp from "react-countup"



export default function AppUsage() {

    const { stats, isLoading, error } = useParcelsStats();

    if (isLoading) return <p className="text-center text-primary mt-10">Loading!</p>;
    if (error) return <p className="text-center text-error mt-10">oops! Failed to load stats.</p>;

    return (
        <>
            <h1 className="text-xl md:text-4xl text-center mb-8 mt-16 text-primary bg-base-100 ">Our Features!</h1>
            <div className="mb-10 w-full flex justify-center">

                <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-5 md:gap-10 mb-5 bg-base-100 px-5 md:px-2">
                    <div className="stat place-items-center bg-base-200 rounded-lg">
                        <div className="stat-figure text-secondary">
                            <img src={booked} alt="booked" className="w-10 h-10" />
                        </div>
                        <div className="stat-title text-primary">Parcels Booked</div>
                        <div className="stat-value text-primary">
                            <CountUp start={0} end={stats?.bookedParcels || 0}
                                delay={1} duration={3}></CountUp>
                        </div>

                    </div>
                    {/* bookedParcels, deliveredParcels, registeredUsers */}
                    <div className="stat place-items-center bg-base-200 rounded-lg">
                        <div className="stat-figure text-secondary">
                            <img src={deliver} alt="deliver" className="w-10 h-10" />
                        </div>
                        <div className="stat-title text-primary"> Parcels Delivered</div>
                        <div className="stat-value text-primary">
                            <CountUp start={0} end={stats?.deliveredParcels || 0} delay={1} duration={3}></CountUp>
                        </div>

                    </div>

                    <div className="stat place-items-center bg-base-200 rounded-lg">
                        <div className="stat-figure text-secondary">
                            <img src={user} alt="user" className="w-8 h-8" />
                        </div>
                        <div className="stat-title text-primary"> Registered users</div>
                        <div className="stat-value text-primary">
                            <CountUp start={0} end={stats?.registeredUsers || 0} delay={1} duration={3}></CountUp>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}