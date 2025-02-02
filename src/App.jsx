import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import Meals from './pages/Meals';
import Mealdetails from './pages/Mealdetails';
import NotFound from './pages/NotFound';

import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';

function App() {
  useEffect(() => {
    initFlowbite();
  }, []);

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Meals />,
        },
        {
          path: '/mealdetails',
          element: <Mealdetails />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
