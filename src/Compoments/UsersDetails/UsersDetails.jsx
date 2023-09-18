import { useLoaderData } from "react-router-dom";


const UsersDetails = () => {
    const user = useLoaderData();
    const {name,website} = user;
    return (
        <div>
            <h2>Details about Users:{name}</h2>
            <p>website: {website}</p>
        </div>
    );
};

export default UsersDetails;