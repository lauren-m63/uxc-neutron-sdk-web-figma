import React from "react"
import { NeuButtonSelector } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuButtonSelector
 * @kind multiple
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=15937-28523&t=dfOdDnnleUneqiIG-4
 */

figma.connect(NeuButtonSelector, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=15937-28523&t=dfOdDnnleUneqiIG-4", {
	props: {
		color: figma.enum("Color", {
			Orange: "orange",
			Blue: "blue",
		}),

		size: figma.enum("Size", {
			Default: "default",
			Small: "small",
		}),

		children: figma.children(".Multi Selector Units")
	},

	example: ({ color, size, children } ) => {
		return(
			<NeuButtonSelector
				unit="group"
				kind="multiple"
				color={ color }
				size={ size }
				track="plain"

				onNeuForm={ (ev) => {} }
				onNeuChange={ (ev) => {} }
				onNeuFocus={ (ev) => {} }
				onNeuBlur={ (ev) => {} }
			>
				{ children }
			</NeuButtonSelector>
		)
	},
})	