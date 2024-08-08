import "./App.css";
import Home from "./pages/Home/Home";
import Vacancies from "./pages/Vacancies/Vacancies";
import Events from "./pages/Events/Events";
import Video from "./pages/Video/Video";
import Organizations from "./pages/Organizations/Organizations";
import Community from "./pages/Сommunity/Community";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Companent/Login";
import Signup from "./Companent/SignUp";
import AddVacancy from "./Companent/addVacancy/addVacancy";
import RouteProtector from "./Companent/RouterProtect";
import AddEventList from "./Companent/addEvent/addEventList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/vacancies",
    element: <Vacancies />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/video",
    element: <Video />,
  },
  {
    path: "/organizations",
    element: <Organizations />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/addVacancy",
    element: (
      <RouteProtector>
        <AddVacancy />
      </RouteProtector>
    ),
  },
  {
    path: "/addEventList",
    element: (
      <RouteProtector>
        <AddEventList />
      </RouteProtector>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
