import {Helmet} from "react-helmet";
import {Formik, Field, Form} from "formik";
import {Input, Textarea, Select, Checkbox, Radio, File} from "../components/form"
import {ExampleSchema} from "../validations";
import { getTodos } from "../services/todos";
import {useEffect, useState} from "react";

export default function Home() {

	const [loading, setLoading] = useState(true)
	const [todos, setTodos] = useState(false)

	useEffect(() => {
		getTodos().then(res => setTodos(res))
			.finally(() => setLoading(false))
	}, [])

	return (
		<>
			<Helmet>
				<title>Test Uygulama</title>
			</Helmet>
			<h1>Home Page</h1>

			{loading && 'Yükleniyor..'}
			{!loading && todos && todos.map(todo => (
				<div>
					{todo.title}
				</div>
			))}
			{todos && todos.length === 0 && (
				<>Henüz bir todo eklemediniz!</>
			)}

			<Formik
				validationSchema={ExampleSchema}
				initialValues={{
					name: 'Tayfun',
					surname: '',
					about: '',
					level: '',
					rules: false,
					gender: '1',
					skills: ['php', 'css'],
					avatar: false
				}}
				onSubmit={(values, actions) => {
					console.log(values)
					console.log(actions)
					setTimeout(() => {
						actions.setSubmitting(false)
					}, 2000)
				}}
			>
				{({isSubmitting, values}) => (
					<Form style={{display: 'none'}} className="p-4 grid gap-y-4">
						<Input label="Adınız" name="name"/>
						<Input label="Soyadınız" name="surname"/>
						<Textarea label="Hakkınızda" name="about"/>
						<Select label="Cinsiyetiniz" name="gender" options={[
							{key: '1', value: 'Kadın'},
							{key: '2', value: 'Erkek'},
						]}/>
						<Checkbox label="Kuralları kabul ediyorum" name="rules"/>
						<Radio label="Seviye" name="level" options={[
							{key: 'beginner', value: 'Başlangıç'},
							{key: 'jr', value: 'Jr. Dev'},
							{key: 'sr', value: 'Sr. Dev'},
						]}/>
						<File label="Avatar Yükle" name="avatar"/>
						<button
							className="text-white bg-black disabled:text-gray-700 disabled:bg-gray-100 h-12 rounded px-8 text-sm"
							type="submit" disabled={isSubmitting}>Gönder
						</button>
						<pre>
							{values.avatar?.name}
						</pre>
					</Form>
				)}
			</Formik>
		</>
	)
}
