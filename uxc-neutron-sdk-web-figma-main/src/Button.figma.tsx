import React from "react"
import { NeuButton } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuButton
 * @kind n/a
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=4284-1356
 */

figma.connect(NeuButton, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=4284-1356", {
	props: {
		kind: figma.enum("Kind", {
			Primary: "primary",
			Secondary: "secondary",
			Tertiary: "tertiary",
			"Tertiary Plain": "tertiary-plain",
		}),

		color: figma.enum("Color", {
			Blue: "blue",
			Orange: "orange",
			Danger: "red",
		}),

		size: figma.enum("Size", { 
			Default: undefined, 
			Small: "small" 
		}),

		label: figma.string("Label"),

		disabled: figma.boolean("Disabled", { 
			true: true, 
			false: undefined 
		}),

		icon: figma.boolean("Icon Start", { 
			true: figma.string("↳ Icon Label"), 
			false: figma.boolean("Icon End", { 
				true: figma.string("↳ Icon Label"), 
				false: undefined 
			}) 
		}),	

		iconPosition: figma.boolean("Icon Start", { 
			true: undefined, 
			false: figma.boolean("Icon End", { 
				true: 'end', 
				false: undefined 
			}) 
		}),	
	},

	example: ({ kind, color, size, icon, iconPosition, disabled, label }) => {
		return(
			<NeuButton 
				kind={ kind } 
				color={ color } 
				size={ size } 
				icon={ icon } 
				iconPosition={ iconPosition } 
				disabled={ disabled }

				onNeuClick={ (ev) => {} }
				onNeuFocus={ (ev) => {} }
				onNeuBlur={ (ev) => {} }
			>
				{ label }
			</NeuButton>
	)},
})
