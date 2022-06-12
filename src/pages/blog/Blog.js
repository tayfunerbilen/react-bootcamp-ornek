import {useEffect, useState} from "react";
import {getAllPosts} from "../../services/posts";
import {Link, useLocation, useSearchParams} from "react-router-dom";
import { getPath } from "../../utils";
import { Helmet } from "react-helmet";

export default function Blog() {

	const [searchParams, setSearchParams] = useSearchParams()
	const location = useLocation()
	const [posts, setPosts] = useState(false)

	useEffect(() => {
		setSearchParams('sort=post_date&search=deneme')
		getAllPosts()
			.then(data => setPosts(data))
	}, [])

	return (
		<>
			<Helmet>
				<title>Blog</title>
			</Helmet>
			<h1 className="text-xl font-medium">Son Konular</h1>
			{!posts && 'Yükleniyor...'}
			{posts && posts.map(post => (
				<Link key={post.id} className="block p-4 border-b" to={getPath('blog.detail', {
					postId: post.id
				})}>
					{post.title}
				</Link>
			))}
		</>
	)
}
