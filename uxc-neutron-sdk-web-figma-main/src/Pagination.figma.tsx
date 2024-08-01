import React from "react"
import { NeuPagination } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuPagination
 * @kind paginator
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=9326-4557&t=rpzQnxCUUS50vJ74-4
 */

figma.connect(NeuPagination, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=9326-4557&t=rpzQnxCUUS50vJ74-4", {
	props: {
		color: figma.enum("Color", {
			Blue: "blue",
			Orange: "orange",
		}),
	},

	example: ({ color }) => {
		return (
			<NeuPagination
				kind= "paginator"
				color= { color }
				results={ 0 }
				current={ 1 }
				limit={ 15 }
			/>
		)
	}
})
