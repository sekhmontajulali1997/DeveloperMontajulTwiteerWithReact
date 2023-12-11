import { createBrowserRouter } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";

const Router = createBrowserRouter([...PublicRouter, ...PrivateRouter
]);
// export 


export default Router