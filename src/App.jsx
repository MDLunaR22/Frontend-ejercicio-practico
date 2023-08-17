import { useEffect, useState } from 'react';
import { ViewPrincipal } from './Pages/ViewPrincipal'
import { AppRoutes } from './Routes/AppRoutes';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga con un setTimeout
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Cambia el tiempo de carga según tus necesidades
  }, []);

  return (
    <div className="app">
      {isLoading ? <ViewPrincipal /> : <AppRoutes />}
    </div>
  );
}

export default App
