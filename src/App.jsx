import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Blog/Home";
import CreateAccount from "./components/auth/CreateAccount";
import Blogs from "./components/Blog/Blogs";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateBlog from "./components/Blog/CreateBlog";
import MyBlogs from "./components/Blog/MyBlogs";
import SingleBlog from "./components/Blog/SingleBlog";
import Oauth2RedirectHandler from "./components/auth/Oauth2RedirectHandler";

const App = () => {
  return (

    <BrowserRouter>
      <Navbar />
      <Toaster position='bottom-center' reverseOrder={true} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createAccount' element={<CreateAccount />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='/blogs' element={
          <ProtectedRoute>
            <Blogs />
          </ProtectedRoute>}
        />
        <Route path='/my-blogs' element={
          <ProtectedRoute>
            <MyBlogs />
          </ProtectedRoute>}
        />
        <Route path='/create-blog' element={
          <ProtectedRoute>
            <CreateBlog />
          </ProtectedRoute>}
        />
        <Route path='/blogs' element={
          <ProtectedRoute>
            <Blogs />
          </ProtectedRoute>}
        />
        <Route path='/blog/:blogId' element={
          <ProtectedRoute>
            <SingleBlog />
          </ProtectedRoute>}
        />

        <Route path='/oauth2/redirect' element={Oauth2RedirectHandler} />

      </Routes>
    </BrowserRouter>

  );

}
export default App