import { Badge } from "components/shared";
import { ReactComponent as CaloriesIcon } from "assets/icons/Calories.svg";
import { ReactComponent as OrganicIcon } from "assets/icons/Organic.svg";
import { ReactComponent as GluttenFreeIcon } from "assets/icons/Glutten Free.svg";
import { TFoodInformationsProps } from "./types";

const FoodInformations: React.FC<TFoodInformationsProps> = ({ informations }) => {
    return (
        <div className="w-full">
            <h4 className="text-mono-ink-light font-semibold text-medium-16">Information</h4>
            <div className="flex justify-start items-center flex-wrap gap-3 mt-3">
                <Badge icon={CaloriesIcon} text={informations.kal + " Kal"} />
                {informations.organic && <Badge icon={OrganicIcon} iconColor="#00B167" text="Organic" />}
                {informations.freeGluten && <Badge icon={GluttenFreeIcon} iconColor="#F26333" text="Free Gluten" />}
            </div>
        </div>
    );
};

export default FoodInformations;
