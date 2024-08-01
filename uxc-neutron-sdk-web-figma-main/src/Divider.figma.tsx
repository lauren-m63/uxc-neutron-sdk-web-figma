import React from "react"
import figma from "@figma/code-connect"

/**
 * @name n/a
 * @kind n/a
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=10622-20476&t=0vcUtgK6keKLRvT6-4
 */

figma.connect("https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=10622-20476&t=0vcUtgK6keKLRvT6-4", {
	props: {
		color: figma.enum("Color", {
			Blue: "neu-blue",
			Orange: "neu-orange",
			Gray: "neu-gray",
			Green: "neu-green",
			Yellow: "neu-yellow",
			Red: "neu-red",
		}),

		margin: figma.enum("Inset", {
			"0 px": undefined,
			"16 px": "mx-3",
		})
	},

	example: () => {
		return (
			<hr />
		)
	}
})
