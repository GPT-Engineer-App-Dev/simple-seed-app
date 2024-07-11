const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl">Bare Bones App</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl mb-4">Welcome to Bare Bones App</h2>
        <p>This is a minimal web application. Start building your features here.</p>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2023 Bare Bones App
      </footer>
    </div>
  );
};

export default Index;