import Search from "./Search";

export default function Slide({ image, heading }) {
    return (
        <div>
            <div className="hero bg-base-200 h-[250px] md:h-[450px]"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >               
                <div className="hero-content flex-col lg:flex-row-reverse p-4 bg-black/10">
                    <div>
                        <h1 className="text-2xl md:text-5xl font-bold text-white">
                            {heading}
                        </h1>

                        <Search />
                    </div>
                </div>
            </div>



        </div>
    )
}