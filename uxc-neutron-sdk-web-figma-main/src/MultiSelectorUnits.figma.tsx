import React from "react"
import { NeuButtonSelector } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuButtonSelector
 * @kind n/a
 * @unit button
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=15937-28566&t=dfOdDnnleUneqiIG-4
 */

figma.connect(NeuButtonSelector, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=15937-28566&t=dfOdDnnleUneqiIG-4", {
	props: {
		icon: figma.boolean("Icon Start", { 
			true: figma.string("↳ Icon Label"), 
			false: undefined
		}),	

		label: figma.string("Button Label"),
	},

	example: ({ icon, label } ) => {
		return(
			<NeuButtonSelector 
				unit="button" 
				icon={ icon }
			>
				{ label }
			</NeuButtonSelector>
		)
	}
})
