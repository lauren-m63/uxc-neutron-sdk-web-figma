import React from "react"
import { NeuPassword } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuPassword
 * @kind n/a
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=4882-4081&t=wq52FzmgM0gAe5WI-4
 */

figma.connect(NeuPassword, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=4882-4081&t=wq52FzmgM0gAe5WI-4", {
	props: {
		label: figma.string("Password Label"),

		tip: figma.boolean("Helper Text", {
			true: "...",
			false: undefined,
		}),

		toggle: figma.enum("Password", {
			Hidden: false,
			Visible: true,
		}), 

		disabled: figma.enum("State", {
			Inactive: undefined,
			Active: undefined,
			Error: undefined,
			"Active Error": undefined,
			Disabled: true,
		}),
	},

	example: ({ label, tip, toggle, disabled }) => {
		return (
			<NeuPassword
				label={ label }
				tip={ tip }
				toggle={ toggle }
				disabled= { disabled }
				value={ 'FORM_VALUE' }

				onNeuChange={ (ev) => {} }
				onNeuForm={ (ev) => {} }
				onNeuFocus={ (ev) => {} }
				onNeuBlur={ (ev) => {} }
			/>
		)
	}
})
