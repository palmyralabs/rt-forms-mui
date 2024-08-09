import { IEndPoint, PalmyraStoreFactory, PalmyraTreeStore, StoreFactory, TreeQueryStore } from "@palmyralabs/palmyra-wire";

import { useRef, useState } from "react";
import AsyncTreeMenu from "../../src/palmyra/mui/menu/AsyncTreeMenu";
import { Button } from "@mui/material";
import { IAsyncTreeEditor } from "../../src/palmyra/mui/menu/types";
import { AsyncTreeMenuEditor } from "../../src/palmyra";

const TreeMenu = () => {
    const [readOnly, setReadOnly] = useState<boolean>(true);

    const storeFactory: StoreFactory<any> = new PalmyraStoreFactory({ baseUrl: '/testdata' });
    const treeRef = useRef<IAsyncTreeEditor>();
    const MenuEndPoint: IEndPoint = '/menuData.json';
    const SideMenuEndPoint: IEndPoint = '/menuData.json';
    const treeStore: TreeQueryStore<any, any> = new PalmyraTreeStore({ target: "/testdata" }, SideMenuEndPoint);

    const submitValue = () => {
        const formStore = storeFactory.getFormStore({}, '/menuData.json');
        const rootMenu = treeRef.current.getValue();
        const record = {
            rootMenu,
            name: 'admin',
            status: 1
        }
        formStore.put(record).then(() => {

        });
    }

    const editMenu = () => {
        setReadOnly(false)
    }

    return <>
        <div style={{ display: 'flex', backgroundColor: 'white' }}>
            {readOnly ? <div> <Button className="filled-button" onClick={editMenu}>Edit</Button> </div> :
                <div> <Button className="filled-button" onClick={submitValue}>Submit</Button></div>}
            <div style={{ width: "30%", marginTop: '10px' }}>Menu
                <AsyncTreeMenuEditor ref={treeRef} storeFactory={storeFactory} endPoint={MenuEndPoint}
                    groupId={1} fineGrained={true} readOnly={readOnly} />
            </div>
            <div style={{ width: "40%", marginTop: '10px' }}>Side Menu
                <AsyncTreeMenu store={treeStore} />
            </div>
            <div style={{ width: "30%", marginTop: '10px' }}>Static Side Menu
            
            </div>
        </div>
    </>
}

export default TreeMenu;