import { AnimatePresence } from "framer-motion";
import { TSlidesContentProps } from "./types";
import SlideContent from "./slide-content";

const SlidesContent: React.FC<TSlidesContentProps> = ({ activeSlideIndex }) => {
    console.log("content rerendered");

    return (
        <AnimatePresence exitBeforeEnter>
            {activeSlideIndex === 0 && (
                <SlideContent
                    key="1"
                    title="Order Food Around You"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae tincidunt semper"
                />
            )}
            {activeSlideIndex === 1 && (
                <SlideContent
                    key="2"
                    title="Fast Delivery"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae tincidunt semper"
                />
            )}
            {activeSlideIndex === 2 && (
                <SlideContent
                    key="3"
                    title="Safe Delivery"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae tincidunt semper"
                />
            )}
        </AnimatePresence>
    );
};

export default SlidesContent;
