export default function FeaturesCard({icon : Icon, title, para}) {
    return (
        
        <div>

            <div className="card max-w-lg w-full bg-base-200 card-md shadow-md">
                <div className="card-body">
                   
                    <h2 className="card-title text-primary text-lg md:text-xl"><Icon/>{title}</h2>
                    <p className="text-textMuted text-base md:text-lg">{para}</p>
                   
                </div>
            </div>
        </div>
    )
}