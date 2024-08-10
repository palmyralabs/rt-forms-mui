import { IEndPoint, PalmyraTreeStore, TreeQueryStore } from "@palmyralabs/palmyra-wire";
import AsyncTreeMenu from "../../src/palmyra/mui/menu/AsyncTreeMenu";

const SideMenu = () => {
    const SideMenuEndPoint: IEndPoint = '/menuData.json';
    const treeStore: TreeQueryStore<any, any> = new PalmyraTreeStore({ target: "/testdata" }, SideMenuEndPoint);

    return <>
        <div style={{ display: 'flex', backgroundColor: 'white' }}>
            <div style={{ width: "40%", marginTop: '10px' }}>Side Menu
                <AsyncTreeMenu store={treeStore} />
            </div>
        </div>
    </>
}

export default SideMenu;