import React from "react"
import { NeuFeedback } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuFeedback
 * @kind spinner
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=13415-8115&t=zNHXgiSlbm8JSxwV-4
 */

figma.connect(NeuFeedback, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=13415-8115&t=zNHXgiSlbm8JSxwV-4", {
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
	},

	example: ({ color, size}) => {
		return (
			<NeuFeedback
				kind= "spinner"
				color= { color }
				label={ 'Loading...' }
				text={ 'Please wait' }
				size={ size }
			/>
		)
	}
})
