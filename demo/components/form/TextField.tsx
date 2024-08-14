
import { MuiTextField } from "../../../src/palmyra";
import FormX from "../wire/FormX";


const BasicSetup = `<MuiTextField attribute="name" placeholder="Enter Name" variant="outlined" autoFocus={true} label="Name" />
<MuiTextField attribute="name" placeholder="Enter Name" variant="filled" label="Name" />
<MuiTextField attribute="name" placeholder="Enter Name" variant="standard" label="Name" />
`;

const BasicTextField = () => {
    return (
        <FormX>
            <MuiTextField attribute="name"
                placeholder="Enter Name"
                variant="outlined"
                autoFocus={true}
                label="Name"
            />
            <MuiTextField attribute="name"
                placeholder="Enter Name"
                variant="filled"
                label="Name"
            />
            <MuiTextField attribute="name"
                placeholder="Enter Name"
                variant="standard"
                label="Name"
            />
        </FormX>
    )
}

const TypeValidationSetup = `<MuiTextField
    attribute="email"
    placeholder="example@email.com"
    required={true}
    validation={{ type: "email", errorMessage: "Invalid Email" }}
    label="Email"
/>`;

const TypeValidationTextField = () => {
    return (
        <FormX>
            <MuiTextField
                attribute="email"
                placeholder="example@email.com"
                required={true}
                validRule={{ rule:"email", errorMessage:'Invalid Email'}}
                label="Email"
            />
        </FormX>
    )
}


const LengthValidationSetup = `<MuiTextField
    attribute="name"
    placeholder="Enter Name"
    label="Name"
    length={{ min: 3, max: 6, errorMessage: "Minimum 3 & Maximum 6 letters only allowed" }}
/>`;

const LengthValidationTextField = () => {
    return (
        <FormX>
            <MuiTextField
                attribute="name"
                placeholder="Enter Name"
                label="Name"
                length={{ min: 3, max: 6, errorMessage: "Minimum 3 & Maximum 6 letters only allowed" }}
            />
        </FormX>
    )
}

const RegexValidationSetup = `<MuiTextField
    attribute="alphabet"
    placeholder="Alphabet"
    label="Alphabet"
    validation={{ regex: /^[a-zA-Z]+$/, errorMessage: "Alphabets only allowed" }}
/>`;

const RegexValidationTextField = () => {
    return (
        <FormX>
            <MuiTextField
                attribute="alphabet"
                placeholder="Alphabet"
                label="Alphabet"
                regExp={{ regex: /^[a-zA-Z]+$/, errorMessage: "Alphabets only allowed" }}
            />
        </FormX>
    )
}

const FunctionValidationSetup = `const customFn = (n: any): boolean => {
    if (isNaN(n)) {
        return false;
    } else {
        return true;
    }
}

<MuiTextField
    attribute="number"
    placeholder="Number"
    label="Number"
    validation={{ validateFn: customFn, errorMessage: "Numbers only allowed" }}
/>`;

const FunctionValidationTextField = () => {

    const customFn = (n: any): boolean => {
        if (isNaN(n)) {
            return false;
        } else {
            return true;
        }
    }

    return (
        <FormX>
            <MuiTextField
                attribute="number"
                placeholder="Number"
                label="Number"
                validFn={{ fn: customFn, errorMessage: "Numbers only allowed" }}
            />
        </FormX>
    )
}

const Setup = ''
// `<MuiTextField
//     attribute="alphabet"
//     placeholder="Alphabet"
//     label="Alphabet"
//     validation={{ regex: /^[a-zA-Z]+$/, errorMessage: "Alphabets only allowed" }}
// />`;

const AllTextField = () => {
    return (
        <FormX>
            <MuiTextField
                attribute="alphabet"
                placeholder="Alphabet"
                label="Alphabet"
                autoFocus
                defaultValue="Name"
                fieldProps={{ size: 'small' }}
                title="Alphabet"
                variant="outlined"
                regExp={{ regex: /^[a-zA-Z]+$/, errorMessage: "Alphabets only allowed" }}
            />
        </FormX>
    )
}

const EventListenerSetup = `const onChangeEventListener: IFieldEventListener = {
    onChange: function(key, value): void {
        console.log(key, value)
    }
}

const onBlurEventListener: IFieldEventListener = {
    onBlur: function(key, value): void {
        console.log(key, value)
    }
}

<MuiTextField
    attribute="name"
    label="Name"
    eventListener={onChangeEventListener}
/>

<MuiTextField
    attribute="city"
    label="City Name"
    eventListener={onBlurEventListener}
/>`;


const EventListenerTextField = () => {

    return (
        <FormX>
            <MuiTextField
                attribute="name"
                label="Name"
            />
            <MuiTextField
                attribute="city"
                label="City Name"
            />
        </FormX>
    )
}

const ValueListenerSetup = `const onValueEventListener: IFieldValueListener = {
    onValue: function (key, value, valid): void {
        console.log(key, value, valid)
    }
}

<MuiTextField
     attribute="name"
     label="Name"
     valueListener={onValueEventListener}
/>`;

const ValueListenerTextField = () => {

    return (
        <FormX>
            <MuiTextField
                attribute="name"
                label="Name"
            />
        </FormX>
    )
}

export {
    BasicSetup, BasicTextField,
    TypeValidationSetup, TypeValidationTextField,
    LengthValidationSetup, LengthValidationTextField,
    RegexValidationSetup, RegexValidationTextField,
    FunctionValidationSetup, FunctionValidationTextField,
    Setup, AllTextField,
    EventListenerSetup, EventListenerTextField,
    ValueListenerSetup, ValueListenerTextField
}