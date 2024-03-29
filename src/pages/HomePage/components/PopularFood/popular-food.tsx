import { Food } from "components";
import { SeeAll } from "components/shared";
import { fakeFoods as popularFoods } from "api/foods";

const PopularFood: React.FC = () => {
    return (
        <section className="w-full mt-8">
            <div className="w-full flex justify-between items-center px-5">
                <h3 className="text-mono-ink text-title-3 font-bold">Popular Food</h3>
                <SeeAll link="/popular-food" />
            </div>
            <div
                className="w-full flex gap-4 justify-start items-center px-5 py-3 mt-3 overflow-x-scroll pb-3 hover:scrollbar-custom scrollbar-custom-hide">
                {popularFoods
                    .slice(0, 8)
                    .sort((a, b) => b.rate - a.rate)
                    .map((food) => (
                        <Food
                            key={food.id}
                            id={food.id}
                            variant="column"
                            name={food.name}
                            orderTime={food.orderTime}
                            price={food.price}
                            rate={food.rate}
                            discount={food.discount}
                            picture={food.picture}
                            restaurant={food.restaurant}
                            navigateTo={`/restaurant/${food.restaurant[Math.floor(Math.random() * food.restaurant.length)]}/product/${food.id}`}
                        />
                    ))}
            </div>
        </section>
    );
};

export default PopularFood;
