import React from "react"
import { NeuSnackbar } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuSnackbar
 * @kind n/a
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=6035-12279&t=dfOdDnnleUneqiIG-4
 */

figma.connect(NeuSnackbar, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=6035-12279&t=dfOdDnnleUneqiIG-4", {
	props: {
		label: figma.string("Snackbar Content"),

		kind: figma.enum("Kind", {
			Informational: "info",
			Success: "success",
			Warning: "warning",
			Error: "error",
		}),

		button: figma.boolean("Button", { 
			true: "Button Label", 
			false: undefined 
		}) 
	},

	example: ({ kind, label, button }) => {
		return(
			<NeuSnackbar 
				kind={ kind } 
				label={ label }
				button={ button }

				onNeuClick={ (ev) => {} }
				onNeuDismiss={ (ev) => {} }
			/>
		)
	},
})