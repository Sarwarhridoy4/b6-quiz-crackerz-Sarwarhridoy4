import { createBrowserRouter, RouterProvider } from "react-router";
import { Suspense, lazy } from "react";
import "./App.css";
import Main from "./Layouts/Main";

const NotFound = lazy(() => import("./components/404/NotFound"));
const Blogs = lazy(() => import("./components/Blogs/Blogs"));
const Home = lazy(() => import("./components/Home/Home"));
const Statistics = lazy(() => import("./components/Statistics/Statistics"));
const Topic = lazy(() => import("./components/Topic/Topic"));
const Quiz = lazy(() => import("./Qiuz/Quiz"));

const withSuspense = (Component) => (
  <Suspense
    fallback={
      <div className='min-h-[50vh] grid place-items-center'>
        <span className='loading loading-spinner loading-lg text-primary' />
      </div>
    }
  >
    <Component />
  </Suspense>
);

function App() {
  //creating router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: withSuspense(Home),
        },
        {
          path: "/home",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: withSuspense(Home),
        },
        {
          path: "/topic",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: withSuspense(Topic),
        },
        {
          path: "item/:itemid",
          loader: async ({ params }) => {
            // console.log(params);
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.itemid}`
            );
          },
          element: withSuspense(Quiz),
        },
        {
          path: "/topic/item/:itemid",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.itemid}`
            );
          },
          element: withSuspense(Quiz),
        },
        {
          path: "/statistics",
          element: withSuspense(Statistics),
        },
        {
          path: "/blogs",
          element: withSuspense(Blogs),
        },
      ],
    },
    {
      path: "*",
      element: withSuspense(NotFound),
    },
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
