import { useHistory } from "react-router-dom";

export default function MainLayout(props) {

    const history = useHistory();

    const handleNavigation = () => {
        if (props.path) {
            history.push(props.path);
        }
        else if (props.callback) {
            props.callback();
        }
    };

    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={handleNavigation}>
                {props.buttonText}
            </button>

            <div>
                {props.children}
            </div>
        </div>
    );
}