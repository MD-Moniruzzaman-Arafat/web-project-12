
const WantToCookTable = () => {
    return (
        <>
            <div className="overflow-x-auto mt-5">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr>
                            <th></th>
                            <td>Name</td>
                            <td>Time</td>
                            <td>Calories</td>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <th> <button className="py-2 px-5 rounded-full text-[10px] bg-[#0BE58A]">Preparing</button> </th>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Zemlak, Daniel and Leannon</td>
                            <th><button className="py-2 px-5 rounded-full text-[10px] bg-[#0BE58A]">Preparing</button></th>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Carroll Group</td>
                            <th><button className="py-2 px-5 rounded-full text-[10px] bg-[#0BE58A]">Preparing</button></th>
                        </tr>
                    </tbody>
                    {/* <tfoot>
                        <tr>
                            <th></th>
                            <td>Name</td>
                            <td>Job</td>
                            <td>company</td>
                            <td>location</td>
                            <td>Last Login</td>
                            <td>Favorite Color</td>
                            <th></th>
                        </tr>
                    </tfoot> */}
                </table>
            </div>
        </>
    );
};

export default WantToCookTable;