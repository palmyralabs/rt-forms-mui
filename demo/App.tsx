import { BrowserRouter, Route, Routes } from "react-router-dom";
import TreeMenu from "./treeMenu/TreeMenu";
import CardPage from "./card/CardPage";
import { MainLayout } from "./layout/main/MainLayout";
import { SimplGrid } from "./pages/grid/SimpleGrid";

const App = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout appTitle='Palmyra UI' />} >
                    <Route path="/tree" element={<TreeMenu />} />
                    <Route path="/card" element={<CardPage />} />
                    <Route path="dataGrid/simple" element={<SimplGrid />} />


                    <Route path="*" element={<h1>Under Construction</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
}

export default App;