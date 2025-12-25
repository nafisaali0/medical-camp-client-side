import useUsers from "../../../../hooks/useUsers";
import AdminLeftSide from "./AdminLeftSide";
import AdminRightSide from "./AdminRightSide";


const AdminDasboard = () => {

    const [users] = useUsers();
    const currentUser = users?.length > 0 ? users[0] : {};
    

    return (
        <>
            <div className="flex flex-col xl:flex-row gap-5 xl:justify-between">
                <AdminLeftSide currentUser={currentUser} />
                <AdminRightSide currentUser={currentUser} />
            </div>
        </>
    )
}

export default AdminDasboard;
