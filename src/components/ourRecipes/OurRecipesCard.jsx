import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";
const OurRecipesCard = ({ recipe, setWantToCook, wantToCook }) => {

    const wantToCookFunction = () => {
        const findItem = wantToCook.find(item => item.recipe_id === recipe.recipe_id);
        if (!findItem) {
            setWantToCook([...wantToCook, recipe])
        }
    }

    return (
        <>
            <div className="card bg-[#FFFFFF] max-w-96 shadow-sm">
                <figure>
                    <img
                        className="p-5 rounded-4xl"
                        src={recipe?.recipe_image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe?.recipe_name}</h2>
                    <p>{recipe?.short_description}</p>
                    <div className="border-y-1 border-[#2828281A] py-4">
                        <h3>Ingredients: {recipe?.ingredients.length}</h3>
                        <ul className="list-disc text-[#878787] font-light ml-5 mt-2">
                            {
                                recipe?.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)
                            }
                        </ul>
                    </div>
                    <div className="text-[#282828CC] font-light flex items-center gap-2 my-2">
                        <span className="flex items-center gap-2"><MdOutlineWatchLater /> {recipe?.preparing_time} minutes</span>
                        <span className="flex items-center gap-2"><AiOutlineFire />{recipe?.calories} calories</span>
                    </div>
                    <div className="card-actions">
                        <button onClick={wantToCookFunction} className="btn bg-[#0BE58A] text-[#150B2B] rounded-full px-5 text-xs">Want to Cook</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurRecipesCard;