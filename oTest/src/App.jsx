import './App.css'
import {Box} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import MainPage from "./pages/MainPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";

function App() {

  return (
    <Box>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={''} exact element={<MainPage/>}/>
                <Route path={'auth'} exact element={<AuthPage/>}/>
            </Route>
        </Routes>

    </Box>
  )
}

export default App
