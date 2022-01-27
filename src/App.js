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
              <Route path="/dashboard/userProfile" element={<UserProfile />} />
              {/* <Route path={`/dashboard/addBlog`} element={<AddBlog/>} /> */}

              {/* <Route path={`/dashboard/manageBlogs`} element={<ManageBlogs />} /> */}

              <Route path={`/dashboard/makeAdmin`} element={<MakeAdmin />} />

              {/* <Route path={`/dashboard/editBlog/:id`} element={<EditBlog/>} /> */}

              {/* <Route path={`/dashboard/manageOrders`} element={<ManageOrders />} /> */}

              {/* <Route path={`/dashboard/myOrders`} element={<MyOrders></MyOrders>} /> */}

              {/* <Route path={`/dashboard/addReview`} element={<AddReview></AddReview>} /> */}

              <Route exact path="/dashboard" element={<UserProfile />} />

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
