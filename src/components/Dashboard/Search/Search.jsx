import Swal from "sweetalert2";
import ParcelDataRow from "../TableRows/ParcelDataRow";
import { GrPowerReset } from "react-icons/gr";

const Search = ({ parcels, parcelsDateRange, setParcelsDateRange }) => {

    const handleSearch = (e) => {
        e.preventDefault();
        const date_from = e.target.dateFrom.value;
        const date_to = e.target.dateTo.value;
        if (date_from > date_to) {
            Swal.fire({
                icon: 'warning',
                text: 'Please enter valid Date!'
            });
            return;
        }

        const parcelsWithinRange = parcels.filter((parcel) => {
            const requested_date = new Date(parcel.requested_delivery_date);

            return requested_date >= new Date(date_from) && requested_date <= new Date(date_to)
        })
        console.log(parcelsWithinRange);
        setParcelsDateRange(parcelsWithinRange)

    }

    return (
        <>
            <form onSubmit={handleSearch} className="card-body">
                <div className="flex gap-4 p-10 justify-center">
                    <label className="input input-bordered input-sm flex items-center gap-2">
                        <span className="text-green-600 font-bold">  Date from </span>
                        <input type="date" name="dateFrom" className="grow" placeholder="" />
                    </label>
                    <label className="input input-bordered input-sm flex items-center gap-2">
                        <span className="text-green-600 font-bold"> Date to </span>
                        <input type="date" name="dateTo" className="grow" placeholder="" />
                    </label>
                    <label className="input input-bordered input-sm flex items-center gap-2">
                        <input type="submit" className="grow" value="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                    <label className="input input-bordered input-sm flex items-center gap-2">
                        <input  type="button" className="grow" value="Reset"
                        onClick={()=>setParcelsDateRange(null)}
                        />
                      <GrPowerReset/>
                    </label>
                </div>
            </form >


        </>



    );
};

export default Search;