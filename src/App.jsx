import { Toaster } from "react-hot-toast";
import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { routes } from "./routes";

function App() {

  return (
    <div>
       {routes}
      <ToastContainer autoClose={2000} position="top-left" />
      <Toaster position="center-center" />
    </div>
  );
}

export default App;
