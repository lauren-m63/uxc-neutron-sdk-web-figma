import React from "react"
import { NeuRadio } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuRadio
 * @kind n/a
 * @unit item
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=6946-22818&t=zNHXgiSlbm8JSxwV-4
 */

figma.connect(NeuRadio, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=6800-11495&t=wq52FzmgM0gAe5WI-4", {
	props: {
		invalid: figma.boolean("Error Message",{
			true: "...",
			false: undefined,
		}),

		checked: figma.enum("State", {
			Resting: undefined,
			Hover: undefined,
			"Hover Alt": undefined,
			Active: true,
		}),

		disabled: figma.boolean("Disabled", {
			true: true,
			false: undefined,
		}),
	},

	example: ({ disabled, invalid, checked }) => {
		return (
			<NeuRadio
				unit= "item"
				label={ 'RADIO_LABEL_TEXT' }
				value={ 'RADIO_VALUE' }
				disabled={ disabled }
				invalid={ invalid }
				checked={ checked }

				onNeuChange={ (ev) => {} }
				onNeuForm={ (ev) => {} }
				onNeuFocus={ (ev) => {} }
				onNeuBlur={ (ev) => {} }
			/>
		)}
  },
)
