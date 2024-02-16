import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DefaultPanel from "./defaultPanel/defaultPanel";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <DefaultPanel/>
        },
    ], {basename: "/Korneliia08/library"});
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}

export default App;