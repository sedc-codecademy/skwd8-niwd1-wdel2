export function CustomButton(props) {
    return (
        <button onClick={props.isClicked}>
            {props.children}
        </button>
    );
}