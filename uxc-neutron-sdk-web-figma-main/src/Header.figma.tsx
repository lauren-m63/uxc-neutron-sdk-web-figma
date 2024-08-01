import React from "react"
import { NeuTable } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuTable
 * @kind n/a
 * @unit column | header={ true }
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=6655-20364&t=90yvICRNAIth3a7y-4
 */


figma.connect(NeuTable, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=6655-20364&t=90yvICRNAIth3a7y-4", {
	props: {
		content: figma.enum("Content", {
			Checkbox: "checkbox",
			"Content Slot": "content-slot",
			Text: "text",
		}),

		sort: figma.enum("Sort", {
			None: undefined,
			Descending: "descending",
			Ascending: "ascending",
		}),

		direction: figma.enum("Sort", {
			None: undefined,
			Descending: "descending",
			Ascending: "ascending",
		})
	},

	example: ({ sort, direction, content }) => {
		return (
			<NeuTable unit="column" header={ true } sort={ sort } direction={ direction }>
				{ content }
			</NeuTable>
		)
	}
})
