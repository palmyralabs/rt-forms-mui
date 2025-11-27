import { TestCheckBoxGroup } from "./TestCheckBoxGroup"
import { TestNumberField } from "./TestNumberField"
import { TestServerLookup } from "./TestServerLookup"
import { TestTextField } from "./TestTextField"

const TestingForm = () => {
    return (
        <div>
            <TestTextField />
            <TestNumberField />
            <TestCheckBoxGroup />
            <TestServerLookup />
        </div>
    )
}

export default TestingForm