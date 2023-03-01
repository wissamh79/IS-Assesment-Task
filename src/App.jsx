import reactLogo from "./assets/react.svg";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Permissions from "./pages/Permissions";
function App() {
  return (
    <Routes>
      {/* public routes */}

      {/* protect routes */}

      <Route path="/" element={<Layout />}>
        <Route index element={<Permissions />} />
      </Route>

      {/* catch all */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
