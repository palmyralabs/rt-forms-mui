import { BrowserRouter, Route, Routes } from "react-router-dom";
import TreeMenu from "./treeMenu/TreeMenu";
import CardPage from "./card/CardPage";
import { MainLayout } from "./layout/main/MainLayout";
import { SimplGrid } from "./pages/grid/SimpleGrid";
import ServerCardPage from "./card/ServerCardPage";
import SideMenu from "./treeMenu/SideMenu";
import TextFieldPage from "./pages/form/TextFieldPage";
import { ServerGrid } from "./pages/grid/ServerGrid";
import DatePickerPage from "./pages/form/DatePickerPage";

const App = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout appTitle='Palmyra UI' />} >
                    <Route path="/palmyra-ui/textField" element={<TextFieldPage />} />
                    <Route path="/palmyra-ui/datePicker" element={<DatePickerPage />} />
                    <Route path="/palmyra-ui/layout/treeMenu" element={<TreeMenu />} />
                    <Route path="/palmyra-ui/layout/sideMenu" element={<SideMenu />} />
                    <Route path="/palmyra-ui/layout/card" element={<CardPage />} />
                    <Route path="/palmyra-ui/layout/serverCard" element={<ServerCardPage />} />
                    <Route path="dataGrid/simple" element={<SimplGrid />} />
                    <Route path="dataGrid/apiGrid" element={<ServerGrid />} />
                    <Route path="*" element={<h1>Under Construction</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
}

export default App;