import AdminLogin from "../components/adminLogin";

export function PublicRoute({setIsAuthenticated}){
    return(
        <>
        <AdminLogin setIsAuthenticated={setIsAuthenticated}></AdminLogin>
        </>
    )
}