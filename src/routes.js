import { lazy, Suspense } from "react";

import Loader from "./components/Loader";
const Home = lazy(() => import("./pages/Home"))
const Contact = lazy(() => import("./pages/Contact"));
const BlogLayout = lazy(() => import("./pages/blog"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const BlogDetail = lazy(() => import("./pages/blog/Detail"));
const Blog404 = lazy(() => import("./pages/blog/Blog404"));
const Page404 = lazy(() => import("./pages/Page404"));

const routes = [
	{
		path: '/',
		name: 'index',
		element: <Suspense fallback={<Loader />}><Home /></Suspense>
	},
	{
		path: '/contact',
		name: 'contact',
		element: <Suspense fallback={<Loader />}><Contact /></Suspense>
	},
	{
		path: '/bloglar',
		name: 'blog',
		element: <Suspense fallback={<Loader />}><BlogLayout /></Suspense>,
		children: [
			{
				index: true,
				element: <Suspense fallback={<Loader />}><Blog /></Suspense>
			},
			{
				name: 'detail',
				path: 'konular/:postId',
				element: <Suspense fallback={<Loader />}><BlogDetail /></Suspense>
			},
			{
				path: '*',
				element: <Suspense fallback={<Loader />}><Blog404 /></Suspense>
			}
		]
	},
	{
		path: '*',
		element: <Suspense fallback={<Loader />}><Page404 /></Suspense>
	}
]

export default routes
