/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ErrorPage from './Pages/404Page';
import MaintenancePage from './Pages/Maintainece';
import Error500Page from './Pages/505Page';
import SignUpPage from './Pages/SignUp';
import ForgotPasswordPage from './Pages/ForgetPassword';
import { DarkModeProvider } from './Common/DarkModeProvider';
import ChangePassword from './Pages/change-password';
import Contact from './Pages/ContactUs';
import Home from './Pages/Home';

import ScrollToTopButton from '../src/Common/ScrollTop';

const FullScreenLayout = ({ children }) => <div>{children}</div>;

const CommonLayout = ({ children }) => (
   <div>
      <Header />
      {children}
      <Footer />
   </div>
);

function App() {
   useEffect(() => {
      const handleBeforeUnload = (event) => {
         event.preventDefault();

         event.returnValue = '';
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
         window.removeEventListener('beforeunload', handleBeforeUnload);
      };
   }, []);
   return (
      <DarkModeProvider>
         <BrowserRouter>
            <Routes>
               <Route
                  path='/'
                  element={
                     <CommonLayout>
                        <Home />
                     </CommonLayout>
                  }
               />
               <Route
                  path='/login'
                  element={
                     <CommonLayout>
                        <Login />
                     </CommonLayout>
                  }
               />
               <Route
                  path='/contact-us'
                  element={
                     <CommonLayout>
                        <Contact />
                     </CommonLayout>
                  }
               />
               <Route
                  path='/sign-up'
                  element={
                     <FullScreenLayout>
                        <SignUpPage />
                     </FullScreenLayout>
                  }
               />
               <Route
                  path='/forget-password'
                  element={
                     <FullScreenLayout>
                        <ForgotPasswordPage />
                     </FullScreenLayout>
                  }
               />
               <Route
                  path='/change-password'
                  element={
                     <FullScreenLayout>
                        <ChangePassword />
                     </FullScreenLayout>
                  }
               />
               <Route
                  path='/maintenance'
                  element={
                     <FullScreenLayout>
                        <MaintenancePage />
                     </FullScreenLayout>
                  }
               />
               <Route
                  path='/error-500'
                  element={
                     <FullScreenLayout>
                        <Error500Page />
                     </FullScreenLayout>
                  }
               />
               <Route
                  path='/*'
                  element={
                     <FullScreenLayout>
                        <ErrorPage />
                     </FullScreenLayout>
                  }
               />
            </Routes>
            <ScrollToTopButton />
         </BrowserRouter>
      </DarkModeProvider>
   );
}

export default App;
