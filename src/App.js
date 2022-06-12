import { SiteContext, AuthContext } from "./context"
import { Routes, useRoutes, Route, Link, NavLink } from "react-router-dom"
import classNames from "classnames";
import routes from "./routes";
import { getPath } from "./utils";
import CustomLink from "./components/CustomLink";

import Blog from "./pages/blog/Blog";

function App() {

	return (
		<SiteContext>
			<AuthContext>
				<nav className="h-10 bg-black flex items-center gap-x-4 justify-center">
					<CustomLink to="index" className={({ isActive }) => classNames({
						"text-sm text-white border-b-2": true,
						"border-transparent": !isActive,
						"border-red-500": isActive,
					})}>Anasayfa</CustomLink>
					<CustomLink to="contact" className={({ isActive }) => classNames({
						"text-sm text-white border-b-2": true,
						"border-transparent": !isActive,
						"border-red-500": isActive,
					})}>İletişim</CustomLink>
					<CustomLink to="blog" className={({ isActive }) => classNames({
						"text-sm text-white border-b-2": true,
						"border-transparent": !isActive,
						"border-red-500": isActive,
					})}>
						{({isActive}) => isActive ? 'Blog (Aktif)' : 'Blog'}
					</CustomLink>
				</nav>
				{useRoutes(routes)}
			</AuthContext>
		</SiteContext>
	)
}

export default App;
