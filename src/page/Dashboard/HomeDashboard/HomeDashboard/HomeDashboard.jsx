import useUsers from '../../../../hooks/useUsers';
import AdminDasboard from '../AdminDasboard/AdminDasboard';
import ParticipentDashboard from '../ParticipentDashboard/ParticipentDashboard';

const HomeDashboard = () => {

    const [users] = useUsers();
    const currentUser = users?.length > 0 ? users[0] : {};

    return (
        <>
            {
                currentUser?.role === "Admin" ? <AdminDasboard /> : currentUser?.role === "Participant" ? <ParticipentDashboard /> : <></>
            }
        </>
    )
}

export default HomeDashboard

