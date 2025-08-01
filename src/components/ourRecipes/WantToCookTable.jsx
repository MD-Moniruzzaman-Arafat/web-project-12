
const WantToCookTable = ({ wantToCook, setWantToCook, CurrentlyCook, setCurrentlyCook, min, setMin, calories, setCalories }) => {

    const CurrentlyCookFunction = (data) => {
        const removeItem = wantToCook.filter(item => item?.recipe_id !== data?.recipe_id)
        setWantToCook(removeItem)
        setCurrentlyCook([...CurrentlyCook, data])
        setMin(min + data.preparing_time)
        setCalories(calories + data.calories)
    }

    return (
        <>
            <div className="overflow-x-auto mt-5">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Time</td>
                            <td>Calories</td>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            wantToCook.map(item => {
                                return (
                                    <tr>
                                        <td>{item?.recipe_name}</td>
                                        <td>{item?.preparing_time} min</td>
                                        <td>{item?.calories} calories</td>
                                        <th> <button onClick={() => CurrentlyCookFunction(item)} className="py-2 px-5 rounded-full text-[10px] bg-[#0BE58A]">Preparing</button> </th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default WantToCookTable;