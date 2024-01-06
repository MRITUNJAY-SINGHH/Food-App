/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
// import SignUp from './Pages/SignUp';
// import Dashboard from './Pages/Dashboard';
// import AboutUs from './Pages/AboutUs';
// import ContactUs from './Pages/ContactUs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ErrorPage from './Pages/404Page';
import MaintenancePage from './Pages/Maintainece';
import Error500Page from './Pages/505Page';
import SignUpPage from './Pages/SignUp';
import ForgotPasswordPage from './Pages/ForgetPassword';
import ResetPasswordPage from './Pages/ResetPassword';

const FullScreenLayout = ({ children }) => {
   return <div>{children}</div>;
};

const CommonLayout = ({ children }) => {
   return (
      <div>
         <Header />
         {children}
         <Footer />
      </div>
   );
};

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path='/login'
               element={
                  <FullScreenLayout>
                     <Login />
                  </FullScreenLayout>
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
               path='/reset-password'
               element={
                  <FullScreenLayout>
                     <ResetPasswordPage />
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

            {/* Add more routes as needed */}
            <Route index element={<CommonLayout></CommonLayout>} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
