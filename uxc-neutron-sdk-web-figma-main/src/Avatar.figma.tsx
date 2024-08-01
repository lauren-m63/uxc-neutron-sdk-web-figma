import React from "react"
import { NeuAvatar } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name Avatar
 * @kind n/a
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=6089-11450&t=9nU9kde0t1BH6wuN-4
 */

figma.connect(NeuAvatar, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=6089-11450&t=9nU9kde0t1BH6wuN-4", {
	props: {
		icon: figma.enum("Kind", {
			Avatar: "...",
			Initials: undefined,
			Image: undefined,
		}),
		
		initials: figma.enum("Kind", {
			Avatar: undefined,
			Initials: figma.string("Initials"),
			Image: undefined,
		}),

		image: figma.enum("Kind", {
			Avatar: undefined,
			Initials: undefined,
			Image: "PATH_TO_IMAGE",
		}),

		size: figma.enum("Size", {
			Default: undefined,
			Large: "large",
			"X-Large": "xl",
			Small: "small",
		})
	},
  
	example: ({ initials, image, icon, size }) => { 
		return(
			<NeuAvatar 
				icon={ icon }
				initials={ initials }
				image={ image }
				size={ size } 
			/>
		)
	}
})
