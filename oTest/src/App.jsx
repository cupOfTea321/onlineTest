import './App.css'
import {Box} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import MainPage from "./pages/MainPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import AuthProvider from "./hok/AuthProvider.jsx";
import RequireAuth from "./hok/RequireAuth.jsx";

function App() {

  return (
    <Box>
        <AuthProvider>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={''} exact element={
                    <RequireAuth>
                        <MainPage/>
                    </RequireAuth>
                }/>
                <Route path={'auth'} exact element={<AuthPage/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Route>
        </Routes>
        </AuthProvider>
    </Box>
  )
}

export default App
