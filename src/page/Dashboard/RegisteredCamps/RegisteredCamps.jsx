import DataTable from "react-data-table-component";
import useRegisteredCamp from "../../../hooks/useRegisteredCamp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import usePayment from "../../../hooks/usePayment";
import Swal from "sweetalert2";
import useAxioslocalhost from "../../../hooks/useAxioslocalhost";


const RegisteredCamps = () => {

    const [registeredCamp, refetch] = useRegisteredCamp();
    const [paymentsCamp] = usePayment();

    const axiosLocalhost = useAxioslocalhost()

    const handleDelete = (id) => {
        console.log("delete")

        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete it this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosLocalhost.delete(`/registerCamps/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your registered camp has been deleted.',
                                'success'
                            )
                            refetch();
                        }
                    })
            }
        })
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
            selector: row => row.id,

        },
        {
            name: 'Camp Image',
            cell: (row) => <img src={row.campimage} alt={row.owner_name} style={{ width: '100px', height: '100px', margin: '3px' }} />,

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
            cell: (row) => {
                const payment = paymentsCamp.find(payment => payment.campId === row._id);
                if (payment) {
                    return (
                        <button className="btn" disabled>{payment.status === 'paid' ? 'paid' : 'pending'}</button>
                    )
                } else {
                    return <Link to={`/dashboard/payment/${row._id}`}><button className="btn">Pay</button></Link>
                }
            },
        },
        {
            name: 'Confirmation Status',
            cell: () => <button className="btn">Pending</button>
        },
        {
            name: 'Action',
            cell: (row) => {
                const payment = paymentsCamp.find(payment => payment.campId === row._id);
                if (payment) {
                    return (
                        <button className="btn" onClick={() => handleDelete(row._id)} disabled>Cancel</button>
                    )
                } else {
                    return <button className="btn" onClick={() => handleDelete(row._id)}>Cancel</button>
                }
            }
        }
    ]

    const data = registeredCamp.map((eachCamp, index) => ({
        id: index + 1,
        _id: eachCamp._id,
        campName: eachCamp.campName,
        campimage: eachCamp.image,
        venue: eachCamp.venue,
        campFees: eachCamp.campFees,
        date: eachCamp.date,
    }));


    return (
        <>
            <Helmet>
                <title>Amelia | Register Camps</title>
            </Helmet>
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