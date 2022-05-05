import { SubPage } from "layouts";
import { foods as popularFoods } from "api/fakeApi";
import { Food } from "components";

const PopularFoodSubPage: React.FC = () => {
    return (
        <SubPage backLink="/home" title="Popular Food">
            <div className="mt-6 w-full grid grid-cols-[repeat(auto-fill,_335px)] gap-5 px-4 py-2 justify-evenly">
                {popularFoods.map((food) => (
                    <Food
                        id={food.id}
                        name={food.name}
                        orderTime={food.orderTime}
                        picture={food.picture}
                        price={food.price}
                        rate={food.rate}
                        discount={food.discount}
                        variant="row"
                        restaurant={food.restaurant}
                        key={food.id}
                    />
                ))}
            </div>
        </SubPage>
    );
};

export default PopularFoodSubPage;