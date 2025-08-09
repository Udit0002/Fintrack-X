import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div
      className="flex justify-center pt-60 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/rm222batch3-mind-12.jpg')" }}
    >
      {children}
    </div>
  );
};

export default AuthLayout;
