import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Grandpa from './components/Grandpa/Grandpa';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Main from './Layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('t-shirt.json'),
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: () => fetch('t-shirt.json'),
          element: <Home></Home>
        },
        {
          path: '/orders',
          element: <Order></Order>
        },
        {
          path: '/grandpa',
          element: <Grandpa></Grandpa>
        }
      ]
    },
    { path: '*', element: <h2>This Page is Not Found 404</h2> },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
