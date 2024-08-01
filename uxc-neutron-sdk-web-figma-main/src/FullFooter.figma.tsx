import React from "react"
import { NeuNavigation, NeuGrid, NeuAssets } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuNavigation
 * @kind elevated | outline | flat
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=14482-42798&m=dev
 */

figma.connect(
  NeuNavigation,
  "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=14482-42798&m=dev",
  {
    props: {
      kind: figma.enum("Kind", {
        Elevated: "elevated",
        Outlined: "outlined",
      }),

      color: figma.enum("Background", {
        Plain: "plain",
        Gray: "gray",
      }),

      companyName: figma.enum("Company Name", {
        "HCA Logo": "hca-logo",
      }),

    },
    example: ({color, kind}) => {
      return (
        <>
				<NeuNavigation label={ 'FOOTER_NAVIGATION' } color={ color } collapse= { false } >
					<div>
						<NeuAssets asset="HcaHealthcareStacked" primary="blue" />
					</div>

        <NeuGrid unit= "container" fluid= { true }>
          <NeuGrid unit= "row">
            <NeuGrid unit= "column" col= { 12 } colLg= { 3 }><NeuAssets asset="HcaHealthcareStacked" primary="blue" /></NeuGrid>
            <NeuGrid unit= "column" col= { 12 } colLg= { 6 }>YOUR_FOOTER_LINKS</NeuGrid>
            <NeuGrid unit= "column" col= { 12 } colLg= { 3 }>YOUR_SOCIAL_LINKS</NeuGrid>
          </NeuGrid>
        </NeuGrid>

				</NeuNavigation> 

				<NeuNavigation label={ 'SECONDARY_NAVIGATION' } color="blue" collapse= { false }>
					<div className="neu-display-6">{ 'APPLICATION_TITLE' }</div>
				</NeuNavigation>
			</>
      )
    }
  },
)
