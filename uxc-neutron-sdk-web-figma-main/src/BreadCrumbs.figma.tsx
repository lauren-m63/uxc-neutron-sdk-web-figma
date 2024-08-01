import React from "react"
import { NeuBreadcrumb } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuBreadcrumb
 * @kind n/a
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=8866-12063
 */

figma.connect(NeuBreadcrumb, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=8866-12063", {
	props: {
		crumbCount: figma.enum("Crumb Count", {
			"5": [{ label: '', path: '#' }, { label: '', path: '#' }, { label: '', path: '#' }, { label: '', path: '#' }, { label: '', path: '#' }],
			"4": [{ label: '', path: '#' }, { label: '', path: '#' }, { label: '', path: '#' }, { label: '', path: '#' }],
			"3": [{ label: '', path: '#' }, { label: '', path: '#' }, { label: '', path: '#' }],
			"2": [{ label: '', path: '#' }, { label: '', path: '#' }],
		}),
	},

	example: ({ crumbCount }) => {
		return(
			<NeuBreadcrumb
				label={ 'YOUR_BREADCRUMB_LABEL' }
				links={ crumbCount }

				onNeuClick={ (ev) => { } }
				onNeuFocus={ (ev) => { } }
				onNeuBlur={ (ev) => { } }
			/>
		)
	}
})
