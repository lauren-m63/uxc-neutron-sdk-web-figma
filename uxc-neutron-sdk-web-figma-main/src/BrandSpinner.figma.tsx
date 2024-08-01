import React from "react"
import { NeuFeedback } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuFeedback
 * @kind brand
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=12361-15806&t=zNHXgiSlbm8JSxwV-4
 */

figma.connect(NeuFeedback, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=12361-15806&t=zNHXgiSlbm8JSxwV-4", {
	props: {
		size: figma.enum("Size", {
			Default: "default",
			Small: "small",
			Large: "large",
		}),
	},

	example: ({ size }) => {
		return (
			<NeuFeedback 
				kind= "brand" 
				label={ 'Loading...' }
				text={ 'Please wait' }
				size={ size } 
			/>
		)
	}
})