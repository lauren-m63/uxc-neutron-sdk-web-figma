import React from "react"
import { NeuImage } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuImage
 * @kind n/a
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=14235-57387&t=0B31NOizvS4WoecP-4
 */

figma.connect(NeuImage, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=14235-57387&t=0B31NOizvS4WoecP-4", {
	props: {
		caption: figma.boolean("Caption Text", {
			true: figma.string("↳ Caption Content"),
			false: undefined,
		}),
	},

	example: ({ caption }) => {
		return (
			<NeuImage
				caption={ caption }
				src={ 'PATH_TO_IMAGE' }
			/> 
		)}
})
