import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateForm from "./component/createForm";
import Home from "./component/Home";

export default function App() {

  return (
    <>
      <div className="bg-gray-400 py-12 h-full">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="create" element={<CreateForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
