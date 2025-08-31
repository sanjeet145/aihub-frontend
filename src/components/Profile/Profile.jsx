import Cookie from "js-cookie"
import { useAuth, useIsAuthenticated } from "../../context/AuthContext"
export default function Profile(){
    const token = Cookie.get("token")
    const isAuthenticated = useIsAuthenticated();
    return(
        <>
        <h1> This is profile</h1>
        <p>{token}</p>
        {isAuthenticated ? "Authenticated" : "Not Authenticated"}
        </>
    )
}