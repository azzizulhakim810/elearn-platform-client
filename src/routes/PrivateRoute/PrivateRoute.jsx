import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'


const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);

  if(loading) {
    return <span className="loading loading-spinner text-error text-6xl mx-auto flex justify-center items-center py-5 "></span>
  }
  if(user) {
    return children;
    
  }
  return <Navigate state={location.pathname} to='/login'></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;