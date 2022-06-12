import {Helmet} from "react-helmet";
import { Formik, Field, Form } from "formik";
import Input from "../components/form/Input";
import Textarea from "../components/form/Textarea";
import Select from "../components/form/Select";
import Checkbox from "../components/form/Checkbox";
import Radio from "../components/form/Radio";
import File from "../components/form/File";

export default function Home() {
	return (
		<>
			<Helmet>
				<title>Test Uygulama</title>
			</Helmet>
			<h1>Home Page</h1>
			<Formik
				initialValues={{
					name: 'Tayfun',
					surname: '',
					about: '',
					level: 'jr',
					rules: true,
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
				{({ isSubmitting, values }) => (
					<Form>
						<Input label="Adınız" name="name" /> <br/>
						<Input label="Soyadınız" name="surname" /> <br/>
						<Textarea label="Hakkınızda" name="about" /> <br />
						<Select label="Cinsiyetiniz" name="gender" options={[
							{key: '1', value: 'Kadın'},
							{key: '2', value: 'Erkek'},
						]} /> <br />
						<Checkbox label="Kuralları kabul ediyorum" name="rules" /> <br />
						<Radio label="Seviye" name="level" options={[
							{key: 'beginner', value: 'Başlangıç'},
							{key: 'jr', value: 'Jr. Dev'},
							{key: 'sr', value: 'Sr. Dev'},
						]} />
						<File label="Avatar Yükle" name="avatar" />
						<button className="text-white bg-black disabled:text-gray-700 disabled:bg-gray-100" type="submit" disabled={isSubmitting || !values.rules}>Gönder</button>

						<pre>{values.avatar.size}</pre>
					</Form>
				)}
			</Formik>
		</>
	)
}
