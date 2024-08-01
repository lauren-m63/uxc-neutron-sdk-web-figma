import React from "react"
import { NeuDatepicker } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuDatepicker
 * @kind single
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=19356-95596&t=wq52FzmgM0gAe5WI-4
 */

figma.connect(NeuDatepicker, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=19356-95596&t=wq52FzmgM0gAe5WI-4", {
	props: {
		required: figma.boolean("Optional", {
			true: undefined,
			false: true,
		}),

		tip: figma.boolean("Helper Text", {
			true: "...",
			false: undefined
		}),  

		calendar: figma.enum("Content", {
			Calendar: undefined,
			"Field only": false,
			NA: undefined,
		}),

		disabled: figma.enum("State", {
			Inactive: undefined,
			Active: undefined,
			"Active Error": undefined,
			Disabled: true,
			Error: undefined,
		}),
	},
	
	example: ({ calendar, tip, disabled, required }) => {
		return (
			<NeuDatepicker
				kind="single"
				label={ 'DATEPICKER_LABEL' }
				calendar= { calendar } 
				required= { required }  
				tip={ tip }
				disabled= { disabled }

				onNeuChange={ (ev) => {} }
				onNeuForm={ (ev) => {} }
			/>
		)
	}
})