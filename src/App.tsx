import { Routes, Route, useLocation } from "react-router-dom";
import { AppLayout, SplashScreen } from "layouts";
import {
    AllCategoriesSubPage,
    HomePage,
    NearbyRestaurantSubPage,
    OnboardingPage,
    PopularFoodSubPage,
    SearchPage,
} from "pages";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const App = () => {
    const location = useLocation();
    const [isAppLoaded, setIsAppLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsAppLoaded(true), 1000);
    }, []);

    const routes = (
        <Routes location={location} key={location.pathname.split("/")[0]}>
            <Route path="/" element={<HomePage />} />
            <Route path="/all-categories" element={<AllCategoriesSubPage />} />
            <Route path="/popular-food" element={<PopularFoodSubPage />} />
            <Route path="/nearby-restaurant" element={<NearbyRestaurantSubPage />} />
            <Route path="/search">
                <Route path=":search" element={<SearchPage />} />
                <Route path="" element={<SearchPage />} />
            </Route>
            <Route path="/welcome" element={<OnboardingPage />} />
            <Route path="/*" element={<HomePage />} />
        </Routes>
    );

    return (
        <div className="App">
            <AppLayout>
                <AnimatePresence exitBeforeEnter>{isAppLoaded ? routes : <SplashScreen />}</AnimatePresence>
            </AppLayout>
        </div>
    );
};

export default App;
