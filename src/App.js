import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />

            {/* Dashboard route  */}

            {/* <Route path="/dashboard" element={<PrivateRoute><DashboardHome /></PrivateRoute>}>
              <Route path="/dashboard/userProfile" element={<UserProfile />} />
            </Route> */}

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
