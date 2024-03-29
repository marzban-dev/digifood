import classNames from "classnames";
import { TFoodProps } from "./types";
import { OrderTime, Rate } from "components/shared";
import { useNavigate } from "react-router-dom";
import { calculateDiscount } from "store/reducers/utils";

const Food: React.FC<TFoodProps> = ({
    id,
    variant = "column",
    name,
    orderTime,
    price,
    rate,
    discount,
    picture,
    fullWidth,
    restaurant,
    onClick,
    navigateTo
}) => {
    const navigate = useNavigate();

    const additionalInfoContainerClasses = classNames("flex flex-col justify-between", {
        "p-3 h-[140px] w-full": variant === "column",
        "h-full py-[10px] pr-4 pl-2 w-[calc(100%_-_120px)]": variant === "row",
    });

    const additionalInfoWrapperClasses = classNames("flex", {
        "justify-start": !discount,
        "justify-between": discount,
        "mt-5 items-end": variant === "column",
        "flex-col items-start w-full": variant === "row",
    });

    const foodCountInCartClasses = classNames("text-mono-ink-lighter text-small font-semibold whitespace-nowrap", {
        "ml-4": !discount,
    });

    const rowTemplateContainerClasses = classNames(
        "h-[120px] bg-white rounded-md shadow-main flex justify-start items-center",
        {
            "min-w-[335px] max-w-[335px]": !fullWidth,
            "w-full": fullWidth,
        }
    );

    const onContainerClicked = () => {
        if (onClick) onClick();

        if(navigateTo) navigate(navigateTo);
        else navigate(`/restaurant/${restaurant}/product/${id}`);
    };

    const columnVariantTemplate = (
        <div className="min-w-[160px] max-w-[160px] h-[270px] bg-white rounded-md shadow-main">
            <div className="h-[130px] w-full relative cursor-pointer" onClick={onContainerClicked}>
                <img src={picture} alt="salad" className="w-full h-full rounded-t-md object-cover absolute top-0" />
                {discount && (
                    <div className="w-[40px] h-[20px] absolute top-4 bg-accent-redd rounded-r-[2px] flex justify-center items-center">
                        <span className="text-accent-redd-tint-40 font-semibold text-[12px]">
                            -{discount}%
                        </span>
                    </div>
                )}
            </div>
            <div className={additionalInfoContainerClasses}>
                <div>
                    <h3 className="text-mono-ink-light text-medium-16">{name}</h3>
                    <div className="flex justify-start items-center gap-5 mt-[6px]">
                        <Rate stars={rate} />
                        <OrderTime time={orderTime} />
                    </div>
                </div>
                <div className={additionalInfoWrapperClasses}>
                    <div className="flex justify-center items-end">
                        <span className="text-title-4 text-primary font-bold mr-1">
                            ${price - calculateDiscount(price, discount)}
                        </span>
                        {discount && (
                            <span className="line-through text-mono-ink-lightest text-[14px] translate-y-px">
                                ${price}
                            </span>
                        )}
                    </div>
                    {/* <span className={foodCountInCartClasses}>x 1 in cart</span> */}
                </div>
            </div>
        </div>
    );

    const rowVariantTemplate = (
        <div className={rowTemplateContainerClasses}>
            <div className="h-full w-[120px] relative cursor-pointer">
                <img
                    src={picture}
                    alt="salad"
                    className="w-full h-full rounded-md object-cover absolute top-0"
                    loading="lazy"
                    onClick={onContainerClicked}
                />
                {discount && (
                    <div className="w-[40px] h-[20px] absolute top-[6px] bg-accent-redd rounded-r-[2px] flex justify-center items-center">
                        <span className="text-accent-redd-tint-40 font-semibold text-[12px]">-{discount}%</span>
                    </div>
                )}
            </div>
            <div className={additionalInfoContainerClasses}>
                <div className={additionalInfoWrapperClasses}>
                    <div className="flex items-start justify-between w-full">
                        <div className="flex justify-center items-start">
                            <span className="text-title-4 text-primary font-bold mr-1">
                                ${price - calculateDiscount(price, discount)}
                            </span>
                            {discount && (
                                <span className="line-through text-mono-ink-lightest text-[14px] translate-y-px">
                                    ${price}
                                </span>
                            )}
                        </div>
                        <Rate stars={rate} />
                    </div>
                    <h3 className="text-mono-ink-light text-medium-16 mt-[6px]">{name}</h3>
                </div>
                <div>
                    <div className="flex justify-start items-center gap-5 mt-[6px]">
                        <OrderTime time={30} />
                    </div>
                </div>
            </div>
        </div>
    );

    if (variant === "column") return columnVariantTemplate;
    else return rowVariantTemplate;
};

export default Food;
