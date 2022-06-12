import { generatePath } from "react-router-dom";
import routes from "./routes";

export const getPath = (name, params = {}) => {
	let currentRoute = name.split('.').reduce((currentRoute, route) => {
		return currentRoute ? currentRoute.children.find(r => r.name === route) : routes.find(r => r.name === route)
	}, false)
	return generatePath(currentRoute.path, params)
}
