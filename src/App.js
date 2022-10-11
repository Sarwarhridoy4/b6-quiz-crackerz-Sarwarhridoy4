import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Topic from './components/Topic/Topic';
import Main from './Layouts/Main';

function App() {
  //creating router
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path: '/home',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path: '/topic',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Topic></Topic>
        },
        {
          path: '/statistics',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics></Statistics>
        },
        {
          path: '/blogs',
          element:<Blogs></Blogs>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
