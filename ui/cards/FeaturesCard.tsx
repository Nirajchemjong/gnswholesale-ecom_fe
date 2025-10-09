 

type FeaturesCardTypes = {
    img?: {
        link?: string;
        node?: React.ReactNode;  // optional primitive string
        alt?: string;    // optional primitive string
    };
    title: string;     // primitive string
    des: string;       // primitive string
    onClick: () => void;
};


const FeaturesCard: React.FC<FeaturesCardTypes> = ({ img, title, des, onClick }) => {
    return (
        <div className="features-card group bg-[#F7F7FC] space-y-2.5 flex-col items-center justify-center text-center w-80" onClick={onClick}>
            <div className="w-16 h-16 bg-white flex items-center justify-center mx-auto p-3 rounded-full group-hover:bg-primary-2 transition-all duration-300 text-primary group-hover:text-white">
                {img?.node ? (
                    img.node
                ) : img?.link ? (
                    <img
                        src={img.link}
                        alt={img.alt ?? ""}
                        className="w-full h-full object-cover"
                    />
                ) : null}
            </div>
            <div className="features-card__content">
                <div className="title font-extrabold text-[18px] capitalize text-text-primary">
                    {title}
                </div>
                <div className="description font-extralight text-[14px] text-text-secondary">{
                    des}</div>
            </div>
        </div>

    )

}

export default FeaturesCard;
