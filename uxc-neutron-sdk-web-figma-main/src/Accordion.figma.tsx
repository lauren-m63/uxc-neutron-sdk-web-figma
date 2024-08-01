import React from "react"
import { NeuAccordion } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuAccordion
 * @kind n/a
 * @unit item | header | content
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=12100-12973&t=795WqNsNjKoo7TBS-4
 */

figma.connect(NeuAccordion, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=24689-45819", {
	props: {
		active: figma.enum("State", {
			Inactive: undefined,
			Hover: undefined,
			"Hover alt": undefined,
			Pressed: undefined,
			"Pressed alt": undefined,
			Active: true,
		}),

		header: figma.enum("Header Content", {
			Text: "text",
			"Content Slot": "content-slot",
		}),

		panel: figma.enum("Panel Content", {
			Text: "text",
			"Content Slot": "content-slot",
		}),
	},

	example: ({ active, header, panel }) => {
		return (
			<NeuAccordion unit="item" active={ active }>
				<NeuAccordion unit="header">{ header }</NeuAccordion>
				<NeuAccordion unit="content">{ panel }</NeuAccordion>
			</NeuAccordion>
		)
	}
})
