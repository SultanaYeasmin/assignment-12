import useAllUsers from "../../hooks/useAllUsers"
import useParcelsStats from "../../hooks/useParcelsStats"
import booked from "../../assets/booklet.png"
import deliver from "../../assets/receive.png"
import user from "../../assets/user.png"
import CountUp from "react-countup"



export default function AppUsage() {

    const { stats, isLoading, error } = useParcelsStats();

    return (
        <>
            <h1 className="text-4xl text-center mb-8 mt-16">Our Features!</h1>
            <div className="flex justify-center mb-10 w-full">

                <div className="stats shadow">
                    <div className="stat place-items-center">
                        <div className="stat-figure text-secondary">
                            <img src={booked} alt="booked" className="w-10 h-10" />
                        </div>
                        <div className="stat-title">Parcels Booked</div>
                        <div className="stat-value">
                            <CountUp start={0} end={stats?.bookedParcels || 0} delay={1} duration={3}></CountUp>
                        </div>

                    </div>
                    {/* bookedParcels, deliveredParcels, registeredUsers */}
                    <div className="stat place-items-center">
                        <div className="stat-figure text-secondary">
                            <img src={deliver} alt="deliver" className="w-10 h-10" />
                        </div>
                        <div className="stat-title"> Parcels Delivered</div>
                        <div className="stat-value">
                            <CountUp start={0} end={stats?.deliveredParcels || 0} delay={1} duration={3}></CountUp>
                        </div>

                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-figure text-secondary">
                            <img src={user} alt="user" className="w-8 h-8" />
                        </div>
                        <div className="stat-title"> Registered users</div>
                        <div className="stat-value">
                            <CountUp start={0} end={stats?.registeredUsers || 0} delay={1} duration={3}></CountUp>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}