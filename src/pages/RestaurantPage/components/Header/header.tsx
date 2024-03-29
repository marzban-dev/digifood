import RestaurantWallpaper from "assets/img/restaurant-wallpaper.jpg";
import { ReactComponent as BackIcon } from "assets/icons/BackWhite.svg";
import { ReactComponent as SearchIcon } from "assets/icons/SearchWhite.svg";
import { ReactComponent as InfoIcon } from "assets/icons/InfoWhite.svg";
import { ReactComponent as PickupIcon } from "assets/icons/Pickup.svg";
import { ReactComponent as FreeDeliveryIcon } from "assets/icons/Free Delivery.svg";
import { fakeRestaurants } from "api/restaurants";
import { Rate } from "components/shared";
import { useMediaQuery } from "react-responsive";
import HeaderLabel from "./header-label";
import { useNavigate, useParams } from "react-router-dom";

const Header: React.FC = () => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    const { restaurantId } = useParams<{ restaurantId: string }>();

    const categories = ["Hotdog", "Berger"];

    const renderCategories = () => {
        return categories.map((category, index) => {
            if (index + 1 !== categories.length) return category + ", ";
            else return category;
        });
    };

    const targetRestaurant = fakeRestaurants.find(res => res.id === Number(restaurantId))!;

    return (
        <header className="w-full h-[230px] relative">
            <div className="from-[rgba(0,0,0,0.6)] to-transparent bg-gradient-to-r w-full h-full absolute z-20"></div>
            <img className="object-cover w-full h-full absolute top-0 z-10" src={targetRestaurant.picture} alt="restaurant" />
            <div className="flex justify-between items-center absolute top-0 w-full p-4 z-30">
                <button onClick={() => navigate("/home")}>
                    <BackIcon className="w-6 h-6" />
                </button>
                <div className="flex justify-end items-center gap-3">
                    <button onClick={() => navigate("/search")}>
                        <SearchIcon className="w-6 h-6" />
                    </button>
                    <button>
                        <InfoIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>
            <div className="absolute bottom-0 p-4 pb-8 md:pb-4 z-30">
                <h1 className="text-title-2 font-bold text-white md:text-[32px]">{targetRestaurant.name}</h1>
                <div className="flex justify-start items-center gap-3 mt-2 md:mt-4">
                    <Rate stars={targetRestaurant.rate} count={300} size={isMobile ? "sm" : "md"} white />
                    <span className="text-small md:text-medium-16 text-mono-sky-lightest">{renderCategories()}</span>
                </div>
                <div className="flex justify-start items-center flex-wrap mt-4 gap-[5px]">
                    <HeaderLabel icon={PickupIcon} text="Pickup" />
                    <HeaderLabel icon={FreeDeliveryIcon} text="Free Delivery" />
                </div>
            </div>
        </header>
    );
};

export default Header;
