import { SubPage } from "layouts";
import { fakeFoods } from "api/foods";
import WishListFood from "components/WishlistFood/wishlist-food";
import { useTypedSelector } from "hooks/useTypedSelector";
import EmptyStatus from "components/shared/EmptyStatus/empty-status";

const WishlistSubPage = () => {
    const wishlist = useTypedSelector((state) => state.user.wishlist);
    const foods = fakeFoods.filter((food) => wishlist.includes(food.id));

    return (
        <SubPage backLink="/profile" title="Wishlist">
            {foods.map((food) => (
                <div className="mt-6 w-full grid grid-cols-[repeat(auto-fill,_335px)] gap-5 px-4 pb-10 pt-2 justify-evenly">
                    <WishListFood
                        id={food.id}
                        name={food.name}
                        picture={food.picture}
                        price={food.price}
                        discount={food.discount}
                        restaurant={food.restaurant}
                        key={food.id}
                    />
                </div>
            ))}
            {foods.length === 0 && (
                <div className="w-full h-[calc(100vh_-_138px)] flex justify-center items-center">
                    <EmptyStatus title="Empty Wishlist" description="You don't have a food you like." />
                </div>
            )}
        </SubPage>
    );
};

export default WishlistSubPage;