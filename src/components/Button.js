import PropTypes from "prop-types"
import {createElement} from "react";

export default function Button({label, as = 'button', variant = 'default', ...props}) {
	return createElement(as, {
		className: variant,
		...props
	}, label)
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	as: PropTypes.string.isRequired,
	variant: PropTypes.shape({
		name: PropTypes.string.isRequired,
		surname: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired
	})
}
