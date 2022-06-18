import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import {getPath} from "../utils";

export default function PrivateRoute({ children }) {

	const location = useLocation()
	const { user } = useSelector(state => state.auth)

	if (!user) {
		return <Navigate to="/auth/login" state={{
			return_url: location.pathname
		}} replace={true} />
	}

	return children
}
