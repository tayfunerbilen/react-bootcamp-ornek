import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import AuthLayout from "./pages/auth/AuthLayout"

import Contact from "./pages/Contact";
import BlogLayout from "./pages/blog";
import Blog from "./pages/blog/Blog";
import BlogDetail from "./pages/blog/Detail";
import Blog404 from "./pages/blog/Blog404";
import Page404 from "./pages/Page404";

let routes = [
	{
		path: '/',
		name: 'index',
		auth: true,
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <Home/>,
			}
		]
	},
	{
		path: '/auth',
		name: 'auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				name: 'login',
				element: <Login/>
			},
			{
				path: 'register',
				name: 'register',
				element: <Register />
			},
		]
	},
	{
		path: '/bloglar',
		name: 'blog',
		element: <BlogLayout/>,
		children: [
			{
				index: true,
				element: <Blog/>
			},
			{
				name: 'detail',
				auth: true,
				path: 'konular/:postId',
				element: <BlogDetail/>
			},
			{
				path: '*',
				element: <Blog404/>
			}
		]
	},
	{
		path: '*',
		element: <Page404/>
	}
]

const mapAuth = routes => routes.map(route => {
	if (route?.auth) {
		route.element = <PrivateRoute>{route.element}</PrivateRoute>
	}
	if (route?.children) {
		route.children = mapAuth(route.children)
	}
	return route
})

routes = mapAuth(routes)

export default routes
