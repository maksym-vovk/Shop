// import axios from "axios";
import store, {setShippingDetails} from "../../../store";


export default function submitShippingDetails() {
            store.dispatch(setShippingDetails(true))
}