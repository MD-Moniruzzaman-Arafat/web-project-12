
const CurrentlyCookingTable = () => {
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
                        <tr>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                        </tr>
                        <tr>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Zemlak, Daniel and Leannon</td>
                        </tr>
                        <tr>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Carroll Group</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td>Total Time = 45 minutes</td>
                            <td>Total Calories = 1050 calories</td>

                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default CurrentlyCookingTable;