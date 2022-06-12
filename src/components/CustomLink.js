import { NavLink } from "react-router-dom";
import { getPath } from "../utils";

export default function CustomLink({ to, params = {}, children, ...props }) {
	return <NavLink to={getPath(to, params)} {...props}>
		{children}
	</NavLink>
}
