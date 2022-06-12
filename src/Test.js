import {Fragment} from "react";

function Highlight({match, children, render}) {
	const types = {
		hashtag: /(#[\w]+)/,
		mention: /(@[\w]+)/,
	}
	const regex = new RegExp(types?.[match] || `(${match}+)`, 'gi')
	return children.split(regex)
		.map((part, index) => regex.test(part)  ? render(part) : part)
}

function Test() {

	const text = 'lorem ipsum #dollor amet @ipsum'

	const showPart = part => console.log(part)
	return (
		<>
			<div>
				<Highlight match="hashtag" render={part => <mark onClick={() => showPart(part)}>{part}</mark>}>
					{text}
				</Highlight>
			</div>
			<div>
				<Highlight match="mention" render={part => <mark onClick={() => showPart(part)}>{part}</mark>}>
					{text}
				</Highlight>
			</div>
			<div>
				<Highlight match="lorem" render={part => <mark onClick={() => showPart(part)}>{part}</mark>}>
					{text}
				</Highlight>
			</div>
		</>
	)
}

export default Test
