import CurrentlyCookingTable from "./CurrentlyCookingTable";

const CurrentlyCooking = ({ CurrentlyCook, min, calories }) => {
    return (
        <>
            <div className="max-w-70 mx-auto border-b-1 pb-2 border-[#28282826] text-center mt-5">
                <h1 className="font-bold">Currently cooking: {CurrentlyCook.length}</h1>
            </div>
            <CurrentlyCookingTable CurrentlyCook={CurrentlyCook} min={min} calories={calories} />
        </>
    );
};

export default CurrentlyCooking;