import WantToCookTable from "./WantToCookTable";

const WantToCook = ({ wantToCook, setWantToCook, CurrentlyCook, setCurrentlyCook, min, setMin, calories, setCalories }) => {
    return (
        <>
            <div className="max-w-70 mx-auto border-b-1 pb-2 border-[#28282826] text-center">
                <h1 className="font-bold">Want to cook: {wantToCook.length}</h1>
            </div>
            <WantToCookTable wantToCook={wantToCook} setWantToCook={setWantToCook} CurrentlyCook={CurrentlyCook} setCurrentlyCook={setCurrentlyCook} min={min} setMin={setMin} calories={calories} setCalories={setCalories} />
        </>
    );
};

export default WantToCook;