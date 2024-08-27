import { Aside } from "./components/aside";
import { Footer } from "./components/footer";

export const MainContent = () => {
  return (
    <div className="flex-1 flex">
      <Aside />
      <main className="flex-1 flex flex-col bg-gray-900">
        {/* Conteúdo da página principal */}
      </main>
      <Footer />
    </div>
  );
};
