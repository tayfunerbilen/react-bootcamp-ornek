import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {getPostDetail} from "../../services/posts";
import { Helmet } from "react-helmet";

export default function Detail() {

	const [post, setPost] = useState(false)
	const { postId } = useParams()

	useEffect(() => {
		getPostDetail(postId)
			.then(res => setPost(res))
	}, [postId])

	if (!post) {
		return 'Yükleniyor..'
	}

	return (
		<>
			<Helmet>
				<title>{post.title} - Blog</title>
				<meta name="description" content={post.body.substr(0, 220)}/>
			</Helmet>
			<h1 className="text-xl font-medium mb-2">{post.title}</h1>
			<p>{post.body}</p>
		</>
	)
}
