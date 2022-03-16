import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from './components/header';
import Loading from './components/Loading';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import BackToTop from './components/BackToTop';
import AuthConfirmEmail from './features/Auth/pages/ConfirmEmail';
const AuthMain = React.lazy(() => import('./features/Auth/pages/Main'));

function App() {
  return (
    <Router>
      <Header />
      <BackToTop key={250} />
      <Routes>
        <Route path='*' element={<NotFound />} />

        <Route path="/" element={<Navigate to='/login' replace />} />

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
