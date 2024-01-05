import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
// import SignUp from './Pages/SignUp';
// import Dashboard from './Pages/Dashboard';
// import AboutUs from './Pages/AboutUs';
// import ContactUs from './Pages/ContactUs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ErrorPage from './Pages/ErrorPage';

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
