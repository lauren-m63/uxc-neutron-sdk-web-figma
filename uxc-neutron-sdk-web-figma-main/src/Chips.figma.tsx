import React from "react"
import { NeuChip } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuChip
 * @kind selectable | removable
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=9904-17567
 */

figma.connect(NeuChip, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=9904-17567", {
	props: {
		kind: figma.enum("Kind", {
			Selectable: "selectable",
			Removable: "removable",
		}),

		color: figma.enum("Color", {
			Blue: "blue",
			Orange: "orange",
			Green: "green",
			Yellow: "yellow",
			Red: "red",
			Purple: "purple",
			Teal: "teal",
		}),

		size: figma.enum("Size", {
			Default: undefined,
			Small: "small",
		}),

		icon: figma.boolean("Icon Start", {
			true: figma.string("↳ Icon Start Label"),
			false: undefined
		})
	},

	example: ({ kind, color, size, icon } ) => {
		return(
			<NeuChip
				kind={ kind }
				color={ color }
				size={ size }
				icon={ icon }

				onNeuChange={ (ev) => {} }
			>
				{ 'CHIP_LABEL' }
			</NeuChip>
		)
	},
})
