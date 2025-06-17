import AddUser from './addUser/AddUser';
import './App.css';
import User from './getUser/User';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Update from './updateuser/Update';
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const route = createBrowserRouter([
    {
      path:"/",
      element: <User />,
    },
    {
      path:"/add",
      element: <AddUser/>,
    },
    {
      path:"/update/:id",
      element: <Update />,
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router ={route}></RouterProvider>
    </div>
  );
}

export default App;
