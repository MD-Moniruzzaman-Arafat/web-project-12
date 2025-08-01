import CurrentlyCooking from "./CurrentlyCooking";
import OurRecipesCard from "./OurRecipesCard";
import OurRecipesTitle from "./OurRecipesTitle";
import WantToCook from "./WantToCook";

const OurRecipes = () => {
    return (
        <>
            <div className="my-20">
                <OurRecipesTitle />

                <div className=" container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-5">
                    <div className="col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-5 p-1 lg:p-0">
                        <OurRecipesCard />
                        <OurRecipesCard />
                        <OurRecipesCard />
                        <OurRecipesCard />
                        <OurRecipesCard />
                        <OurRecipesCard />
                    </div>
                    <div className="col-span-3 lg:col-span-2 bg-[#FFFFFF] rounded-xl shadow-sm p-5 w-full">
                        <WantToCook />
                        <CurrentlyCooking />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurRecipes;