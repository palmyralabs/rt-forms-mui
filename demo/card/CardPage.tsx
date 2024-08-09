import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import ServerCardLayout from "../../src/palmyra/card/ServerCardLayout";
import CardLayout from "../../src/palmyra/card/CardLayout";

const CardPage = () => {

    const storeFactory = new PalmyraStoreFactory({ baseUrl: "/testdata" })
    const store = storeFactory.getGridStore({}, '/cardData.json', 'id')

    const serverCard = (props: any) => {
        return <>
        <div className="card-view-x4">
            <div style={{ backgroundColor: "rgb(220, 220, 220)", padding: '10px' }}>
                {props.data.name}
            </div>
            </div>
        </>
    }

    const card = () => {
        return <>
            <div style={{ backgroundColor: "rgb(220, 220, 220)", padding: '10px' }}>
                Card 1
            </div>
        </>
    }

    return <>
        <ServerCardLayout Child={serverCard} store={store} title={"Card Page"}/>
        <CardLayout dataList={["1", "2"]} Child={card} childKeyProvider={((data, index) => index)} childProps={{}} />
    </>
}

export default CardPage;
