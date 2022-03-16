import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from './components/header';
import Loading from './components/Loading';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import BackToTop from './components/BackToTop';
import AuthConfirmEmail from './features/Auth/pages/ConfirmEmail';

// Lazy loading components
const AuthMain = React.lazy(() => import('./features/Auth/pages/Main'));
const HomePage = React.lazy(() => import('./features/Introduce/pages/Home'));
const ContactPage = React.lazy(() => import('./features/Introduce/pages/Contact'));
const AboutPage = React.lazy(() => import('./features/Introduce/pages/About'));
// 

function App() {
  return (
    <Router>
      <Header />
      <BackToTop key={250} />
      <Routes>
        <Route path='*' element={<NotFound />} />

        {/* <Route path="/" element={<Navigate to='/login' replace />} /> */}

        <Route
          path='/'
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
