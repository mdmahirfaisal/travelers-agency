import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import BlogDetails from './Pages/Home/BlogDetails/BlogDetails';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import UserProfile from './Pages/Dashboard/UserProfile/UserProfile';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakiAdmin';
import AddBlog from './Pages/Dashboard/AddBlog/AddBlog';
import ManageBlogs from './Pages/Dashboard/ManageBlogs/ManageBlogs';
import AddUserBlog from './Pages/Dashboard/AddUserBlog/AddUserBlog';
import MyBlogs from './Pages/Dashboard/MyBlogs/MyBlogs';
import ManageUsersBlog from './Pages/Dashboard/ManageUsersBlog/ManageUsersBlog';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/blogDetails/:id" element={<PrivateRoute><BlogDetails /></PrivateRoute>} />


            {/* Dashboard route  */}

            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route path="/dashboard/userProfile" element={<PrivateRoute> <UserProfile /></PrivateRoute>} />
              <Route path={`/dashboard/addAdminBlog`} element={<AddBlog />} />

              <Route path={`/dashboard/manageBlogs`} element={<PrivateRoute><ManageBlogs /> </PrivateRoute>} />

              <Route path={`/dashboard/makeAdmin`} element={<PrivateRoute><MakeAdmin /></PrivateRoute>} />

              <Route path={`/dashboard/manageUserBlogs`} element={<PrivateRoute><ManageUsersBlog /></PrivateRoute>} />

              <Route path={`/dashboard/myBlogs`} element={<PrivateRoute><MyBlogs /></PrivateRoute>} />

              <Route path={`/dashboard/addUserBlog`} element={<PrivateRoute><AddUserBlog /></PrivateRoute>} />

              <Route exact path="/dashboard" element={<PrivateRoute><UserProfile /></PrivateRoute>} />

            </Route>

            <Route path="/login" element={<Login />} />

            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
