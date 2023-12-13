
// It is recommended to define things that will not change, out of the Functional Component
// When this is out of the component, React will not re-render it
type myObject = { name: string, pet: boolean };
const myObject: myObject = { name: "Robertyo", pet: true };

const returnMessage = (): string => {
    const newMessage: string = "My first App";
    return newMessage
}

interface propTypes {
    subTitle?: number
    title: string;
}

// Component to render
export const FirstApp: React.FC<propTypes> = ({ title, subTitle }): JSX.Element => {

    const component: JSX.Element =
        // <> : Represents a fragment
        <>
            <h1 data-testid="test-title">
                {title}
            </h1>
            <br></br>
            <h2 data-testid="test-subTitle">
                {subTitle}
            </h2>

            <br></br>
            {returnMessage()}

            <code>
                {JSON.stringify(myObject)}
            </code>

            <p>This is a text</p>
        </>

    return (component)
}
