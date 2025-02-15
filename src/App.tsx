import React, { FC } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "./routes";

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* kick it all off with the root route */}
        {renderRoutes(routes)}
      </BrowserRouter>
    </div>
  );
};

export default App;
