import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "/scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";

function App() {
  const mode = useSelector((state) => state.global.mode); // mode is stored in our state
  const theme = useMemo(() => createTheme(themeSettings(mode)),[mode]); // the mode is passed here see mui docs
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}> {/*layout is the componenet that we ll not import but will create. we will have navbar and sidebar exist on every single page and thats what our layout componenet will have*/}
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard/>} /> {/* this will render dashboard component when navigated to  / which directs to /dashboards itself n the above line */}
              <Route path="/products" element={<Products/>} />
              <Route path="/customers" element={<Customers/>} />
              <Route path="/transactions" element={<Transactions />}/>
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily/>} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
