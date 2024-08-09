import { BrowserRouter, Route, Routes } from "react-router-dom";
import TreeMenu from "./treeMenu/TreeMenu";
import CardPage from "./card/CardPage";

const App = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/tree" element={<TreeMenu />} />
                <Route path="/card" element={<CardPage />} />
            </Routes>
        </BrowserRouter>
    </>
}

export default App;