import { useDispatch } from "react-redux";
import { logout } from "../actions/authActions";
import MainLayout from "./MainLayout";

export default function Todos() {

    const dispatch = useDispatch();

    return (
        <MainLayout title={'My Todos'} buttonText={'logout'} callback={() => { dispatch(logout()) } }>
            Todos component
        </MainLayout>
    );
}