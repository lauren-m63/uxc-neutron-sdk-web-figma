import React from "react"
import { NeuSelect } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuSelect
 * @kind n/a
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=4952-6033&t=ExfGRLQ7y5OjoScR-4
 */

figma.connect(NeuSelect, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=4952-6033&t=ExfGRLQ7y5OjoScR-4", {
	props: {
		required: figma.boolean("Optional", {
			true: undefined,
			false: true
		}),

		disabled: figma.enum("State", {
			Inactive: undefined,
			Active: undefined,
			Error: undefined,
			"Active Error": undefined,
			Disabled: true,
		}),

		tip: figma.boolean("Helper Text", {
			true: "...",
			false: undefined
		}),
	},

	example: ({ required, disabled, tip }) => {
		return(
			<NeuSelect 
				multiple={ true }
				label={ 'FORM_LABEL' }
				value={ 'FORM_VALUE' }
				disabled={ disabled } 
				required={ required } 
				tip={ tip } 

				onNeuChange={ (ev) => { } }
				onNeuForm={ (ev) => { } }
			>
				<NeuSelect unit="option" value={ 'OPTION_VALUE' }>OPTION_LABEL</NeuSelect>
				<NeuSelect unit="option" value={ 'OPTION_VALUE' }>OPTION_LABEL</NeuSelect>
				<NeuSelect unit="option" value={ 'OPTION_VALUE' }>OPTION_LABEL</NeuSelect>
				<NeuSelect unit="option" value={ 'OPTION_VALUE' }>OPTION_LABEL</NeuSelect>
			</NeuSelect>
		)
	}
})