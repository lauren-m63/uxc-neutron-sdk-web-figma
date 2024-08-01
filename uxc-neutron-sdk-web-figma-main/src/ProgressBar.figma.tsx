import React from "react"
import { NeuFeedback } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuFeedback
 * @kind progress
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=6946-22818&t=zNHXgiSlbm8JSxwV-4
 */

figma.connect(NeuFeedback, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=6946-22818&t=zNHXgiSlbm8JSxwV-4", {
	props: {
		color: figma.enum("Color", {
			Blue: "blue",
			Orange: "orange",
		}),

		size: figma.enum("Size", {
			Default: "default",
			Small: "small",
			Large: "large",
		}),

		label: figma.boolean("Title", { 
			true: figma.string("↳ Title Label"),
			false: undefined,
		}),

		percent: figma.boolean("Progress Text", {
			true: figma.string("↳ Progress Value"), 
			false: undefined, 
		}),
	},

	example: ({ color, size, label, percent }) => {
		return (
			<NeuFeedback
				kind="progress" 
				color={ color }
				size={ size }
				label={ label } 
				percent={ percent } 
			/>
		)
	}
})
