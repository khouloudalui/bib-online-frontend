import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./Pages/Navigation";
import Home from "./Pages/Home";
import Page404 from "./components/Page404";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

// const Loading = (
//   <div className="d-flex justify-content-center vh-100 align-items-center">
//     <div className="spinner-grow text-info" role="status">
//       <span className="visually-hidden">Loading...</span>
//     </div>
//   </div>
// );

function App() {
  return (
    <div className="App">
      {/* <Suspense fallback={Loading}>
        <RouterProvider router={router} fallbackElement={Loading} />
      </Suspense> */}
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <main className="container">
            <Routes>
              <Route path="/" exact element={<Home />} />

              <Route path="/login" element={<Login />} />

              <Route path="/register" element={<Register />} />

              <Route path="*" element={<Page404 />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
