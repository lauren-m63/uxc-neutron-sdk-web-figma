import React from "react"
import { NeuPagination } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuPagination
 * @kind select
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=7661-35432&t=rpzQnxCUUS50vJ74-4
 */

figma.connect(NeuPagination, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=7661-35432&t=rpzQnxCUUS50vJ74-4", {
	example: () => {
		return (
			<NeuPagination
				kind="select"
        color="blue"
        results={ 0 }
        current={ 1 }
        limit={ 15 }

				onNeuChange={ (ev) => { } }
      />
		)
	}
})
