import React from "react"
import { NeuTable } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuTable
 * @kind n/a
 * @unit column
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=7299-8666
 */

figma.connect(NeuTable, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=7299-8666", {
	props: {
		content: figma.enum("Content", {
			Text: "text",
			Button: "button",
			Checkbox: "checkbox",
			Radio: "radio",
			"Content Slot": "content-slot",
			"Icon Only": "icon-only",
			Tag: "tag",
		})
	},

	example: ({ content }) => {
		return (
			<NeuTable
				unit= "column"
				header={ false }
				fixed={ false }
			>
				{ content }
			</NeuTable>
		)
	}
})
