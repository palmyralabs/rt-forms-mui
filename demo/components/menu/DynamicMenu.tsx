
import { PalmyraTreeStore } from "@palmyralabs/palmyra-wire";
import { AsyncTreeMenu } from "../../../src/palmyra";


const DynamicMenu = ({ sidebarWidth }) => {



    const treeStore = new PalmyraTreeStore({ target: '/demoData/menu' }, "/flatMenu.json");

    return (
        <div style={{ width: "100%" }}>
            <div>
                <AsyncTreeMenu store={treeStore} />
            </div>
        </div>
    )
}

export default DynamicMenu;
