import { NavLink, useNavigate } from "react-router-dom";
import photo from "/src/assets/dev.png"

const Navbar = () => {
  const token = localStorage.getItem("JWT_TOKEN");
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem("JWT_TOKEN")
    navigate("/")
  }
  return (
    <div className="flex justify-between items-center h-14 border border-b-1">
      <img src={photo} className="w-12 ml-4" alt="dev logo" />
      <div className="flex space-x-2 mr-4">
        {!token && (<NavLink to={"/login"} className='py-2 px-4 rounded-lg hover:text-blue-700 hover:underline hover:bg-indigo-100'>Log in</NavLink>)}
        {token ? (
          <NavLink to={"/create-blog"} className='py-2 px-4 border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white hover:underline font-semibold rounded-lg'>Create Blog</NavLink>)
          : (
            <NavLink to={"/createAccount"} className='py-2 px-4 border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white hover:underline font-semibold rounded-lg'> Create account</NavLink>

          )}

        {token && (
          <NavLink to={"/blogs"} className='py-2 px-4 border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white hover:underline font-semibold rounded-lg'> All Blogs</NavLink>
        )}

        {token && (
          <NavLink to={"/my-blogs"} className='py-2 px-4 border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white hover:underline font-semibold rounded-lg'> My Blogs</NavLink>
        )}
        {token && (
          <button onClick={handleLogOut} className="py-2 px-4 border font-semibold rounded-lg bg-red-600 text-white hover:bg-red-500">
            Log out
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;