import './App.css';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import DefaultPanel from "./defaultPanel/defaultPanel";
import ComponentWhichDesplayAll from "./defaultPanel/dynamicSubPages/ComponentWhichDesplayAll/ComponentWhichDesplayAll";
import ContainerForArticlesAndAside
    from "./defaultPanel/staticComponents/ContainerForArticlesAndAside/ContainerForArticlesAndAside";
import ContainerForBlockOfLinksToSites
    from "./defaultPanel/staticComponents/ContainerForBlockOfLinksToSites/ContainerForBlockOfLinksToSites";
import {Provider} from "react-redux";
import store from "./data/store";

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
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </>
    )
}

export default App;
