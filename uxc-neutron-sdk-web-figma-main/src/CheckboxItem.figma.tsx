import React from "react"
import { NeuCheckbox } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuCheckbox
 * @kind n/a
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=5343-2753&t=wq52FzmgM0gAe5WI-4
 */

figma.connect(NeuCheckbox, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=5343-2753&t=wq52FzmgM0gAe5WI-4", {
	props: {
		color: figma.enum("Color", {
			Blue: "blue",
			Orange: "orange",
		}),

		indeterminate: figma.enum("State", {
			Resting: undefined,
			Hover: undefined,
			"Hover Alt": undefined,
			Active: undefined,
			Indeterminate: true
		}),

		disabled: figma.boolean("Disabled", {
			true: true,
			false: undefined
		}),
	},

	example: ({ color, disabled, indeterminate }) => {
		return (
			<NeuCheckbox 
				color= { color }
				label={ 'CHECKBOX_LABEL' }
				value={ 'CHECKBOX_VALUE' }
				disabled={ disabled }
				indeterminate={ indeterminate }
        
				onNeuChange={ (ev) => {} }
				onNeuForm={ (ev) => {} }
			/>
		)}
  },
)
