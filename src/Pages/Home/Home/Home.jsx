import { useContext } from "react";
import { AuthContext } from './../../../Providers/AuthProviders/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <h1>Home component {user && <span>{user.displayName}</span>} </h1>
        </div>
    );
};

export default Home;