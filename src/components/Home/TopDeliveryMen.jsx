import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";


export default function TopDeliveryMen() {

  const axiosSecure = useAxiosSecure();

  const { data: topDeliveryMen = [] } = useQuery({
    queryKey: ['topDeliveryMen'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/top-delivery-men')
      //console.log(data.topDeliveryMen)
      return data.topDeliveryMen;
    }
  })
  //console.log('topDeliveryMen', topDeliveryMen)

  return (
     <>
     <h1 className="text-xl md:text-4xl text-center mb-4 md:mb-8 mt-8 md:mt-16 text-primary">Our top delivery Men!</h1>
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 justify-between px-5 md:px-2 gap-3 md:gap-10">
      {

        topDeliveryMen.map((person) => (<div className="p-4">
          <div className="card bg-base-200 max-w-lg w-full shadow-lg">
            
            <div className="flex gap-3 p-3">
              <figure>
                <img
                  className="w-10 h-10 rounded-full" src={person?.image} alt="img" />
              </figure>
              <h2 className="card-title text-primary" >{person?.name}</h2>
            </div>

            <div className="card-body p-4">

              <p className="text-textMuted">No. of delivered parcels: {person?.totalDeliveredParcels}</p>
              <p className="text-textMuted">Average Rating: {person?.averageRating}</p>

            </div>
          </div>



        </div>

        ))

      }
    </div>
    </>
  )
}
