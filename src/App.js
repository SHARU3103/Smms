import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import LoginPage from './LoginPage';
import { PrivateRoute } from './PrivateRoute';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import NotAuthorized from './NotAuthorized';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute roleRequired="admin">
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/user-dashboard"
            element={
              <PrivateRoute roleRequired="user">
                <UserDashboard />
              </PrivateRoute>
            }
          />
          <Route path="/not-authorized" element={<NotAuthorized />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
