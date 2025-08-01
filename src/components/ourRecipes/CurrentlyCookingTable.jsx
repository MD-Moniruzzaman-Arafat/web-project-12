
const CurrentlyCookingTable = ({ CurrentlyCook, min, calories }) => {
    return (
        <>
            <div className="overflow-x-auto mt-5">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Time</td>
                            <td>Calories</td>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            CurrentlyCook.map(item => {
                                return (
                                    <tr>
                                        <td>{item?.recipe_name}</td>
                                        <td>{item?.preparing_time} min</td>
                                        <td>{item?.calories} calories</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td className="text-xs font-light">Total Time = <br /> {min} minutes</td>
                            <td className="text-xs font-light">Total Calories = <br /> {calories} calories</td>

                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default CurrentlyCookingTable;