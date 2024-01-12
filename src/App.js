import { RouterProvider } from "react-router-dom";

import Form from "./components/Form";
import router from "./components/router";

const App = () => {
  return (
    <>
      <RouterProvider router={router}>
        <Form />
      </RouterProvider>
    </>
  );
};

export default App;
