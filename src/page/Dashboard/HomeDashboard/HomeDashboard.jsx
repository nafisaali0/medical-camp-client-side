import useUsers from './../../../hooks/useUsers';

const HomeDashboard = () => {

    const [users] = useUsers();
    const currentUser = users?.length > 0 ? users[0] : {};

    return (
        <>
            <div>
                   <h1>{currentUser?.name}</h1>
            </div>
        </>
    )
}

export default HomeDashboard

