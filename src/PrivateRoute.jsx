import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children, roleRequired }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (roleRequired && user.role !== roleRequired) return <Navigate to="/not-authorized" />;
  return children;
}
