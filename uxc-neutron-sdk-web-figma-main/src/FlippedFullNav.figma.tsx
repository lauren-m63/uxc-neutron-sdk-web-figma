import React from "react"
import { NeuNavigation, NeuUser, NeuDropdown, NeuAssets } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuNavigation
 * @kind n/a
 * @unit default | menu
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=8693-38885
 */

figma.connect(NeuNavigation, "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=8693-38885", {
	props: {
		menu: figma.enum("Color", {
			Orange: "orange",
			Blue: "blue",
		}),

		color: figma.enum("Background", {
			Plain: "plain",
			Gray: "gray",
		}),
	},

	example: ({ color, menu }) => {
		return (
			<>
				<NeuNavigation label={ 'PRIMARY_NAVIGATION' } color={ color } menu={ menu } notice={ 1 }>
					<div>
						<NeuAssets asset="HcaHealthcareStacked" primary="blue" />
					</div>
						
					<NeuNavigation unit= "menu" label= "Navigation">
						<a href="#null">Tab 1</a>
						<a href="#null">Tab 2</a>
						<a href="#null">Tab 3</a>
						<a href="#null">Tab 4</a>

						<NeuDropdown label="Tab 5">
							<a href= "#null">Dropdown 1</a>
							<a href= "#null">Dropdown 2</a>
							<a href= "#null">Dropdown 3</a>
							<a href= "#null">Dropdown 4</a>
						</NeuDropdown>
					</NeuNavigation>

					<NeuUser />
				</NeuNavigation> 

				<NeuNavigation label={ 'SECONDARY_NAVIGATION' } color="blue" collapse= { false }>
					<div className="neu-display-6">{ 'APPLICATION_TITLE' }</div>
				</NeuNavigation>
			</>
		)
	}
})
