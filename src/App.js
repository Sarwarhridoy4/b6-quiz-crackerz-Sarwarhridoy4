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
          element:<Home></Home>
        },
        {
          path: '/home',
          element:<Home></Home>
        },
        {
          path: '/topic',
          element:<Topic></Topic>
        },
        {
          path: '/statistics',
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
