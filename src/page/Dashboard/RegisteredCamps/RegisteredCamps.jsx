import DataTable from "react-data-table-component";
import useRegisteredCamp from "../../../hooks/useRegisteredCamp";
import deleteIcon from "../../../assets/images/icon/delete.svg"
import { Link } from "react-router-dom";

const RegisteredCamps = () => {
    const [registeredCamp] = useRegisteredCamp();
    console.log(registeredCamp)

    const handleDelete = () => {
        console.log("delete")
    }

    const customStyles = {
        headRow: {
            style: {
                backgroundColor: 'black',
                color: 'white'
            }
        },
        headCells: {
            style: {
                fontSize: '16px',
                fontWeight: '600',
            }
        },
        cells: {
            style: {
                fontSize: '16px',
                fontWeight: '500',
                padding: '1rem',
                width: '50px'
            }
        },
    }
    const columns = [
        {
            name: 'Serial Number',
            selector: row => row.id
        },
        {
            name: 'Camp Name',
            selector: row => row.campName
        },
        {
            name: 'Camp Fees',
            selector: row => row.campFees
        },
        {
            name: 'Date',
            selector: row => row.date
        },
        {
            name: 'Location',
            selector: row => row.venue
        },
        {
            name: 'Payment Status',
            cell: () => <Link to={'/'}><button className="btn">Unpaid</button></Link>,
            // cell1: () => <Link to={'/pay'}><button className="btn">Pay</button></Link>,
        },
        {
            name: 'Confirmation Status',
            cell: () => <button className="btn">Pending</button>
        },
        {
            name: 'Action',
            cell: (row) => <Link to={'/'}><img src={deleteIcon} onClick={handleDelete} alt={row.owner_name} style={{ width: '20px', height: '20px', borderRadius: '50px', margin: '3px' }} /></Link>
        }       
    ]
   
    const data = registeredCamp.map((eachCamp, index) => ({
        id: index + 1,
        campName: eachCamp.campName,
        venue: eachCamp.venue,
        campFees: eachCamp.campFees,
        date: eachCamp.date,
    }));


    return (
        <>
            <div className="w-[100rem] p-3">
                <DataTable
                    columns={columns}
                    data={data}
                    customStyles={customStyles}
                    responsive
                    pagination
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[10, 15, 20]}>
                </DataTable>
            </div>
        </>
    );
};

export default RegisteredCamps;