import { createBrowserRouter } from "react-router-dom";

import Form from "./Form";
import CarDetailes from "./CarDetailes";

const router = createBrowserRouter([
  { path: "/", element: <Form /> },
  { path: "/carDetailes", element: <CarDetailes /> },
]);
export default router;
