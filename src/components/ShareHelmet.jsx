import { Helmet } from "react-helmet-async";

const ShareHelmet = ({ HelmetTitle }) => {

    return (
        <>
            <Helmet>
                <title> Amelia | {HelmetTitle} </title>
            </Helmet>
        </>
    )

}

export default ShareHelmet

