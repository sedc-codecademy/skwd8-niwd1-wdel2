export function TodoListItem(props) {
    return (
        <div>{props.item.done.toString()} - {props.item.text}</div>
    );
}