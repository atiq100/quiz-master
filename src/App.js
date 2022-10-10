import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Root from './components/Root';
import Statistic from './components/Statistic';
import Topics from './components/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/topics',
          element:<Topics></Topics>
        },
        {
          path:'/statistics',
          element:<Statistic></Statistic>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]

    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
