"use client";

import { useState } from "react";
import { Footer } from "../components/footer";
import { Aside } from "../components/aside";
import { Card } from "../components/card";
import CostControl from "../components/costs/CostControl";
import TableComponent from "../components/table";
import { BarChart } from "@tremor/react";

const Home = () => {
  

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />
        <main className="flex-1 flex flex-col bg-gray-900">
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">  
            Sistema de Gestão de Manutenção
          </h1>


        <div className="flex-grow bg-gray-900 text-white p-4">
          <CostControl />
        </div>


        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
