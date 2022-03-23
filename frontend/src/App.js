import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Header from './components/header';
import Loading from './components/Loading';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import BackToTop from './components/BackToTop';
import AuthConfirmEmail from './features/Auth/pages/ConfirmEmail';
import PublicRoutes from './helpers/PublicRoutes';
import PrivateRoutesUser from './helpers/PrivateRoutesUser';
// import AuthMain from './features/Auth/pages/Main';
// import HomePage from './features/Introduce/pages/Home';
// import ContactPage from './features/Introduce/pages/Contact';
// import AboutPage from './features/Introduce/pages/About';
// import UserProfile from './features/Information/pages/UserProfile';
// Lazy loading components
const AuthMain = React.lazy(() => import('./features/Auth/pages/Main'));
const HomePage = React.lazy(() => import('./features/Introduce/pages/Home'));
const ContactPage = React.lazy(() => import('./features/Introduce/pages/Contact'));
const AboutPage = React.lazy(() => import('./features/Introduce/pages/About'));
const UserProfile = React.lazy(() => import('./features/Information/pages/UserProfile'));
//

function App() {
  return (
    <Router>
      <Header />
      <BackToTop key={250} />
      <Routes>
        <Route path='*' element={<NotFound />} />

        <Route path="/" element={<Navigate to='/home' replace />} />

        {/* public routes */}
        <Route
          path='/home'
          element={
            <React.Suspense fallback={<Loading />} >
              <HomePage />
            </React.Suspense>
          }
        />

        <Route
          path='/about'
          element={
            <React.Suspense fallback={<Loading />} >
              <AboutPage />
            </React.Suspense>
          }
        />

        <Route
          path='/contact'
          element={
            <React.Suspense fallback={<Loading />} >
              <ContactPage />
            </React.Suspense>
          }
        />

        {/* use logged in routes */}
        <Route element={<PublicRoutes />} >
          <Route
            path="/login"
            element={
              <React.Suspense fallback={<Loading />} >
                <AuthMain />
              </React.Suspense>
            }
          />

          <Route
            path="/register"
            element={
              <React.Suspense fallback={<Loading />} >
                <AuthMain />
              </React.Suspense>
            }
          />

          <Route
            path="/forgot-password"
            element={
              <React.Suspense fallback={<Loading />} >
                <AuthMain />
              </React.Suspense>
            }
          />
        </Route>

        {/* logged in & role: User */}
        <Route element={<PrivateRoutesUser />}>
          <Route
            path='/profile'
            element={
              <React.Suspense fallback={<Loading />}>
                <UserProfile />
              </React.Suspense>
            }
          />
        </Route>

        {/* middle routes */}
        <Route
          path='/confirm-email/:token'
          element={<AuthConfirmEmail />}
        />
      </Routes>
      <NewsLetter />
      <Footer />
    </Router>
  );
}

export default App;
