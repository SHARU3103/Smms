import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const dummyUsers = [
    { email: 'admin@example.com', password: 'admin123', role: 'admin' },
    { email: 'user1@example.com', password: 'user123', role: 'user' }
  ];

  const login = (email, password) => {
    const foundUser = dummyUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      return foundUser.role;
    } else {
      return null;
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
