import './App.css';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import DefaultPanel from "./defaultPanel/defaultPanel";
import ComponentWhichDesplayAll from "./defaultPanel/dynamicSubPages/ComponentWhichDesplayAll/ComponentWhichDesplayAll";
import ContainerForArticlesAndAside
    from "./defaultPanel/staticComponents/ContainerForArticlesAndAside/ContainerForArticlesAndAside";
import ContainerForBlockOfLinksToSites
    from "./defaultPanel/staticComponents/ContainerForBlockOfLinksToSites/ContainerForBlockOfLinksToSites";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <DefaultPanel/>,
            children: [
                {
                    path: "/subPage",
                    element: <ComponentWhichDesplayAll/>
                },
                {
                    path: '',
                    element: <>
                        <ContainerForArticlesAndAside/>
                        <ContainerForBlockOfLinksToSites/>
                    </>
                },
                {
                    path: '*',
                    element: <Navigate to={''}/>
                }
            ]
        },
    ], {basename: "/library"});
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}

export default App;
