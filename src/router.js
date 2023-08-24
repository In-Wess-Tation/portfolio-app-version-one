import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Info from "./Pages/Info";
import Gallery from "./Pages/Gallery";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />}/>
            <Route path="/info" element={<Info />}/>
            <Route path="/gallery" element={<Gallery />}/>
        </Route>
    )
)