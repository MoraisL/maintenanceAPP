"use client";

import { useState } from "react";
import { Footer } from "../components/footer";
import { Aside } from "../components/aside";
import { LoginForm } from "../components/login/LoginForm";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />
        <main className="flex-1 flex justify-center items-center bg-gray-900">
          {!isAuthenticated ? (
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          ) : (
            <div className="text-white text-center">
              <h1 className="text-2xl font-bold">Bem-vindo ao Sistema!</h1>
              {/* Adicione o conteúdo que deseja exibir após o login aqui */}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
