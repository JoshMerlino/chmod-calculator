import { useParams } from "react-router-dom";
import Home from "./Home";

export const path = "/:octet";

export default function Predefined() {
	const { octet } = useParams();
	return <Home octet={ octet }/>;
}
