import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/pages/Layout.jsx';
import Home from './components/pages/Home.jsx';
import Explore from './components/pages/Explore.jsx';
import Pricing from './components/pages/Pricing.jsx';
import License from './components/pages/License.jsx';
import Collections from './components/pages/Collections.jsx';
import Leaderboard from './components/pages/Leaderboard.jsx';
import Challenges from './components/pages/Challenges.jsx';
import Signup from './components/pages/Signup.jsx'; 
import Login from './components/pages/Login.jsx';
import AuthLayout from './components/auth/AuthLayout.jsx';
import Profile from './components/auth/Profile.jsx';
import Notifications from './components/auth/Notifications.jsx';  
import Bookmarks from './components/auth/Bookmarks.jsx';
import Subscription from './components/auth/Subscription.jsx';
import Billing from './components/auth/Billing.jsx';
import Upload from './components/auth/Upload.jsx';


const  App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="explore" element={<Explore />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="license" element={<License />} />
      <Route path="collections" element={<Collections />} />
      <Route path="leaderboard" element={<Leaderboard />} />
      <Route path="challenges" element={<Challenges />} /> 
      
      </Route> 
      
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} /> 

      <Route path="/user" element={<AuthLayout/>}>
      <Route index element={<Profile />} /> 
      <Route path="Notifications" element={<Notifications />} />
      <Route path="Bookmarks" element={<Bookmarks />} />
      <Route path="Subscription" element={<Subscription />} />
      <Route path="Billing" element={<Billing />} />
      <Route path="Upload" element={<Upload />} /> 
      </Route> 

    </Routes>
    </BrowserRouter>
    </>

   
  );
}

export default App;
