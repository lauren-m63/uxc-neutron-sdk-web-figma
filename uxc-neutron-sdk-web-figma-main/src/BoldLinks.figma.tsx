import React from "react"
import { Link } from "react-router-dom";
import figma from "@figma/code-connect"

/**
 * @name n/a
 * @kind n/a
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=11281-22399&m=dev
 */

figma.connect("https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=11281-22399&m=dev", {
	props: {
		label: figma.string("Label"),
	},

	example: ({ label }) => {
		return (
			<Link to={ 'LINK_URL_HERE' } className= 'fw-bold'>{ label }</Link>
		)
	}
})

