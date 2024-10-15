import { CardLayout } from "@palmyralabs/rt-forms";

const CardPage = () => {

    const card = () => {
        return <>
            <div style={{ backgroundColor: "rgb(220, 220, 220)", padding: '10px' }}>
                Card 1
            </div>
        </>
    }

    return <>
        <div style={{marginBottom: '10px'}}>Card Layout</div>
        <CardLayout dataList={["1", "2"]} Child={card} childKeyProvider={((data, index) => index)} childProps={{}} />
    </>
}

export default CardPage;