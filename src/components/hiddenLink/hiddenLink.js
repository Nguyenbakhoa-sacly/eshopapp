
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/slice/AuthSlice";

const ShowOnLogin = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    //da longin thi mat logout
    if( isLoggedIn ){
        return children
    }
    return null;
}
const ShowOnLogOut = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    if( !isLoggedIn ){
        return children
    }
    return null;
}

export{ ShowOnLogOut}
export default ShowOnLogin;