import { useHistory } from "react-router-dom";

export default function MainLayout(props) {

    const history = useHistory();

    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={ () => { history.push(props.path) }}>
                {props.buttonText}
            </button>
            
            <div>
                {props.children}
            </div>
        </div>
    );
}