import { BrowserRouter, Route, Routes } from "react-router-dom";
import TreeMenu from "./treeMenu/TreeMenu";
import CardPage from "./card/CardPage";
import { MainLayout } from "./layout/main/MainLayout";
import { SimplGrid } from "./pages/grid/SimpleGrid";
import ServerCardPage from "./card/ServerCardPage";
import { ServerGrid } from "./pages/grid/ServerGrid";
import { ErrorBoundary as E } from './widgets/ErrorBoundary'
import { EditForm } from "./components/form/EditForm";
import PageableCardPage from "./card/PageableCardPage";
import { BasicView } from "./pages/View";

const App = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout appTitle='Palmyra UI' />} >
                    <Route path="/palmyra-ui/form" element={<E><EditForm /></E>} />
                    <Route path="/palmyra-ui/formView" element={<E><BasicView /></E>} />
                    <Route path="/palmyra-ui/layout/treeMenu" element={<TreeMenu />} />
                    <Route path="/palmyra-ui/layout/card" element={<CardPage />} />
                    <Route path="/palmyra-ui/layout/serverCard" element={<ServerCardPage />} />
                    <Route path="/palmyra-ui/layout/pageableCard" element={<PageableCardPage />} />
                    <Route path="dataGrid/simple" element={<SimplGrid />} />
                    <Route path="dataGrid/apiGrid" element={<ServerGrid />} />
                    <Route path="*" element={<h1>Under Construction</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
}

export default App;