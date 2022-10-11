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
          element:<Home></Home>,
          loader: async () => {
            return fetch ('https://openapi.programming-hero.com/api/quiz')
          },
        },
        {
          path:'/home',
          element:<Home></Home>,
          loader: async () => {
            return fetch ('https://openapi.programming-hero.com/api/quiz')
          },
        },
        {
          path:'/topics/:topicId',
          element:<Topics></Topics>,
          loader: async ({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)

          },
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
