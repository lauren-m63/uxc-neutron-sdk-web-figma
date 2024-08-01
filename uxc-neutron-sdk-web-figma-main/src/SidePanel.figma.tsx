import React from "react"
import { NeuPanel, NeuButton } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuPanel
 * @kind n/a
 * @unit panel | content | footer
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=12738-30351&t=MTzmkE3M2SPdgkVU-4
 */


figma.connect(
  NeuPanel,
  "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=12738-30351&t=MTzmkE3M2SPdgkVU-4",
  {
    props: {
      title: figma.string("Title"), 

      footer: figma.enum("Footer Content", {
        Buttons: figma.enum("Color", {
          Blue: <><NeuButton color="blue" kind="tertiary">Cancel</NeuButton><NeuButton color="blue" kind="primary">Action</NeuButton></>,
          Orange: <><NeuButton color="orange" kind="tertiary">Cancel</NeuButton><NeuButton color="orange" kind="primary">Action</NeuButton></>,
        }),
        "Content Slot": "content-slot",
      }),

    },
    example: ({title, footer}) => {
      return ( 
        <NeuPanel label={ title } level= { 2 } active= { false } unit="panel" onNeuDismiss={ (ev) => {} }>
          <NeuPanel unit="content"> 
            YOUR_CONTENT_HERE
          </NeuPanel>
            <NeuPanel unit= "footer">{ footer }</NeuPanel>
        </NeuPanel>
      )
    }
  },
)
