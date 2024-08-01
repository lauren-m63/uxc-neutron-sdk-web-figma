import React from "react"
import { NeuSearch } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuSearch
 * @kind n/a
 * @unit item
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=11610-35049&t=FOJRWDI0kqPU25Th-4
 */

figma.connect(NeuSearch, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=11610-35049&t=FOJRWDI0kqPU25Th-4", {
	props: {
		labelHidden: figma.boolean("Search Label", {
			true: undefined,
			false: true
		}),

		label: figma.boolean("Search Label", {
			true: "...", 
			false: undefined
		}),

		color: figma.enum("Color", {
			Blue: "blue",
			Orange: "orange",
		}),

		disabled: figma.boolean("Disabled", {
			true: true, 
			false: undefined
		}),
	},

	example: ({ label, labelHidden, color, disabled }) => {
		return(
			<NeuSearch
				label={ label }
				labelHidden={ labelHidden } 
				color={ color }
				disabled={ disabled } 
				value={ 'SEARCH_VALUE' }

				onNeuChange={ (ev) => {} }
				onNeuForm={ (ev) => {} }
				onNeuFocus={ (ev) => {} }
				onNeuBlur={ (ev) => {} }
			/>
		)
	}
})
