import React from "react"
import { NeuCard } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuCard
 * @kind n/a
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=8082-39651&t=RzHZkbtGIPFXzP9G-4
 */

const myLink = "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=8082-39651&t=RzHZkbtGIPFXzP9G-4";

figma.connect( NeuCard, myLink, {
	props: {
		kind: figma.enum("Kind", {
			Elevated: "elevated",
			Outline: "outline",
			Flat: "flat",
		}),

		unitHeader: figma.boolean("Header",{
			true: <NeuCard unit="header">Card Header</NeuCard>,
			false: undefined
		}),

		unitContent: figma.enum("Content", {
			Text: "text",
			"Content Slot": "content-slot",
		}),

		unitFooter: figma.boolean("Buttons", {
			true: <NeuCard unit="footer">Card Footer</NeuCard>,
			false: undefined
		}),
	},

	example: ({ kind, unitHeader, unitContent, unitFooter }) => {
		return(
			<NeuCard kind={ kind } color="plain">
				{ unitHeader }

				<NeuCard unit="content">
					{ unitContent }
				</NeuCard>

				{ unitFooter }
			</NeuCard>
		)
	}
})
