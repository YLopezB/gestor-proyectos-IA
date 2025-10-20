import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StandardLayout from "./layouts/StandardLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Graphics from "./pages/Graphics";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <StandardLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/proyectos",
        element: <Projects />,
      },
      {
        path: "/graficos",
        element: <Graphics />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <div className="bg-zinc-900">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
