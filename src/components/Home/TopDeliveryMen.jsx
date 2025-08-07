import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";


export default function TopDeliveryMen() {

  const axiosSecure = useAxiosSecure();

  const { data: topDeliveryMen = [] } = useQuery({
    queryKey: ['topDeliveryMen'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/top-delivery-men')
      console.log(data.topDeliveryMen)
      return data.topDeliveryMen;
    }
  })
  console.log('topDeliveryMen', topDeliveryMen)

  return (
     <>
     <h1 className="text-4xl text-center mb-8 mt-16">Our top 3 delivery Man!</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-5">
      {

        topDeliveryMen.map((person) => (<div className="p-4">
          <div className="card bg-base-100 w-96 shadow-lg">
            
            <div className="flex gap-3 p-3">
              <figure>
                <img
                  className="w-10 h-10 rounded-full" src={person?.image} alt="img" />
              </figure>
              <h2 className="card-title">{person?.name}</h2>
            </div>

            <div className="card-body p-4">

              <p>No. of delivered parcels: {person?.totalDeliveredParcels}</p>
              <p>Average Rating: {person?.averageRating}</p>

            </div>
          </div>



        </div>

        ))

      }
    </div>
    </>
  )
}
