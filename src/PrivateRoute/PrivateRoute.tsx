import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = () => {
  const { user, isAuthenticated, logoutUser, refreshToken } = useAuth();

  useEffect(() => {
    const checkTokenExpiration = async () => {
      const accessToken = user?.accessToken;
      let tokenExp: Date | null = null;

      if (accessToken) {
        const decodedToken = jwtDecode(accessToken);
        if (decodedToken && typeof decodedToken.exp === 'number') {
          tokenExp = new Date(decodedToken.exp * 1000);
          const now = new Date();
          // Check if token is expired in the next 5 minutes
          if (tokenExp.getTime() - now.getTime() < 5 * 60 * 1000) {
            try {
              await refreshToken();
            } catch (error) {
              console.error(error);
              logoutUser();
            }
          }
        }
      }
    };

    checkTokenExpiration();
  }, [user, refreshToken, logoutUser]);

  if (!isAuthenticated){
    return <Navigate to="/inicio-sesion" />
  }
  return <Outlet />;
};

export default PrivateRoute; 