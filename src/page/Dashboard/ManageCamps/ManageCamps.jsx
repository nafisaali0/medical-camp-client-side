import useCamp from './../../../hooks/useCamp';
import DataTable from 'react-data-table-component';

const ManageCamps = () => {
    // const [camp] = useCamp();
    const [camp, refetch] = useCamp();

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
            name: 'Blog Owner',
            selector: row => row.date
        },
        // {
        //     name: 'Blog Owner Image',
        //     cell: (row) => <img src={row.owner_image} alt={row.owner_name} style={{ width: '50px', height: '50px', borderRadius: '50px', margin: '3px' }} />,
        // }
    ]
    // Assuming sortBlogs is an array of blog objects
    const data = camp.map((eachCamp, index) => ({
        id: index + 1,
        campName: eachCamp.campName,
        date: eachCamp.date,
        time: eachCamp.time,
        venue: eachCamp.venue,
        services: eachCamp.service,
        healthcareProfessionals: eachCamp.healthcareProfessionals,
        shortDescription: eachCamp.shortDescription,
    }));
    return (
        <>
            <div className='bg-base-100 text-xl drop-shadow-2xl'>
                <DataTable
                    columns={columns}
                    data={data}
                    customStyles={customStyles}
                    responsive
                    pagination
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[10, 15, 20]} />
            </div>
        </>
    );
};

export default ManageCamps;