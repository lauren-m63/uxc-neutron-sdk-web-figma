import React from "react"
import { NeuDatepicker } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuDatepicker
 * @kind range
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=19356-93406&t=wq52FzmgM0gAe5WI-4
 */

figma.connect(NeuDatepicker, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=19356-93406&t=wq52FzmgM0gAe5WI-4", {
	props: {
		required: figma.boolean("Optional Start", {
			true: figma.boolean("Optional End", {
				true: undefined,
				false: true,
			}),

			false: true,
		}),

		tip: figma.boolean("Helper Text", {
			true: "...",
			false: undefined
		}),  

		calendar: figma.enum("Kind", {
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
				kind="range"
				label={ 'DATEPICKER_LABEL' }
				calendar= { calendar } 
				required= { required }  
				tip= { tip }
				disabled= { disabled }

				onNeuChange={ (ev) => {} }
				onNeuForm={ (ev) => {} }
			/>
		)
	}
})
