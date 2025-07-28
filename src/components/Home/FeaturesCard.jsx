export default function FeaturesCard({icon : Icon, title, para}) {
    return (
        
        <div>

            <div className="card w-96 bg-base-100 card-md shadow-md">
                <div className="card-body">
                   
                    <h2 className="card-title"><Icon/>{title}</h2>
                    <p>{para}</p>
                   
                </div>
            </div>
        </div>
    )
}