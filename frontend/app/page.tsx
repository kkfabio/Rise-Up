export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Título da sua plataforma conforme o Figma */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Rise-Up
        </h1>
        
        <p className="text-lg leading-8 text-gray-600">
          Bem-vindo à plataforma de treinamento interno. 
          O seu futuro começa aqui.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-10 font-medium">
            Acessar Plataforma
          </button>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-500">
        © 2026 Squad Rise-Up - Projeto ADS
      </footer>
    </div>
  );
}