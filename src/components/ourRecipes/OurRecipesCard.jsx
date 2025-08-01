import { MdOutlineWatchLater } from "react-icons/md";
import itemImage from "../../assets/item1.jpg"
import { AiOutlineFire } from "react-icons/ai";
const OurRecipesCard = () => {
    return (
        <>
            <div className="card bg-[#FFFFFF] max-w-96 shadow-sm">
                <figure>
                    <img
                        className="p-5 rounded-4xl"
                        src={itemImage}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Spaghetti Bolognese</h2>
                    <p>Classic Italian pasta dish with savory meat sauce.</p>
                    <div className="border-y-1 border-[#2828281A] py-4">
                        <h3>Ingredients: 6</h3>
                        <ul class="list-disc text-[#878787] font-light ml-5 mt-2">
                            <li>500g ground beef</li>
                            <li>1 onion, chopped</li>
                            <li>2 cloves garlic, minced</li>
                        </ul>
                    </div>
                    <div className="text-[#282828CC] font-light flex items-center gap-2 my-2">
                        <span className="flex items-center gap-2"><MdOutlineWatchLater /> 30 minutes</span>
                        <span className="flex items-center gap-2"><AiOutlineFire /> 600 calories</span>
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-[#0BE58A] text-[#150B2B] rounded-full px-5 text-xs">Want to Cook</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurRecipesCard;