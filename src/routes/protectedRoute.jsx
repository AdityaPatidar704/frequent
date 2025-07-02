import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated,element,...rest }) => {
        return isAuthenticated?<>{element}</>:<Navigate to="/"></Navigate>;
};

export default ProtectedRoute; 