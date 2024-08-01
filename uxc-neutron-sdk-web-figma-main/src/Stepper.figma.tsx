import React from "react"
import { NeuStepper } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuStepper
 * @kind n/a
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=9809-11404&t=rpzQnxCUUS50vJ74-4
 */

figma.connect(NeuStepper, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=9809-11404&t=rpzQnxCUUS50vJ74-4", {
	props: {
		color: figma.enum("Color", {
			Blue: "blue",
			Orange: "orange",
		}),

		kind: figma.enum("Alignment", {
			Horizontal: "horizontal",
			Vertical: "vertical",
		}),
	},

	example: ({ kind, color }) => {
		let stepsArray:any[] = [
			{ label: 'Step 1', status: 'complete' },
			{ label: 'Step 2', status: 'active' },
			{ label: 'Step 3', status: '' },
			{ label: 'Step 4', status: '' },
			{ label: 'Step 5', status: '' }
		]

		return (
			<NeuStepper
				color={ color }
				kind={ kind }
				steps={ JSON.stringify(stepsArray) }

				onNeuChange= { (ev) => {} } 
			/>
		)
	}
})
