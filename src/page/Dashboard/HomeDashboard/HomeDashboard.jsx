import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";


const HomeDashboard = () => {
    const { user } = useAuth();

    return (
        <>
            <Helmet>
                <title>Amelia | Dashboard Home</title>
            </Helmet>
            <div>
                <h2 className="text-3xl">
                    <span>Hi, Welcome </span>
                    {
                        user?.displayName ? user.displayName : 'Back'
                    }
                </h2>
            </div>
        </>
    );
};

export default HomeDashboard;