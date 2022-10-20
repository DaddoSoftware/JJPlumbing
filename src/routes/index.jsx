import { Route, Routes } from "react-router";
import { Layout } from "../components/layout/layout";
import { Home } from "../pages/home";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
export default AppRoutes;
