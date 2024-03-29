import MediaQuery from "react-responsive";
import { CartItems, DeliverTo, WalletBalance } from "./components";
import { ReactComponent as SearchIcon } from "assets/icons/Search.svg";
import { useNavigate } from "react-router-dom";
import { Profile } from "components";

const TopNavbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="py-3 px-5 md:py-2 md:pl-6 md:pr-4 flex md:bg-white md:shadow-[0_-4px_24px_0_#00000008] w-full z-[850] justify-between items-center">
            <div className="flex justify-between items-center gap-5">
                <DeliverTo />
                <CartItems />
                <MediaQuery minWidth={500}>
                    <button className="ml-1 flex justify-start items-center" onClick={() => navigate("/search")}>
                        <SearchIcon className="w-5 h-5 cursor-pointer"/>
                    </button>
                </MediaQuery>
            </div>
            <div className="flex justify-between items-center gap-3">
                <WalletBalance />
                <div className="hidden md:block">
                    <Profile />
                </div>
            </div>
        </nav>
    );
};

export default TopNavbar;
