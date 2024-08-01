import React from "react"
import { NeuCard } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuCard
 * @kind n/a
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=8234-49772&t=ExfGRLQ7y5OjoScR-4
 */

figma.connect(NeuCard, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=8234-49772&t=ExfGRLQ7y5OjoScR-4", {
	props: {
		unitHeader: figma.boolean('Header', {
			true: <NeuCard unit="header">Header</NeuCard>,
			false: undefined
		}),
	},

	example: ({ unitHeader }) => {
		return(
			<NeuCard color="blue">
				{ unitHeader }

				<NeuCard unit="content">
					Content
				</NeuCard>

				<NeuCard unit="footer">
					Footer
				</NeuCard>
			</NeuCard>
		)
	}}
)
