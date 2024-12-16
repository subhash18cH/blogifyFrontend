import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("JWT_TOKEN")
  if (!token) {
    return <Navigate to={"/login"} />
  }
  return children
}
export default ProtectedRoute