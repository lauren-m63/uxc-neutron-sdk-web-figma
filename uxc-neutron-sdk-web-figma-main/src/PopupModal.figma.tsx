import React from "react"
import { NeuModal } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuModal
 * @kind n/a
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=8266-49849&t=MTzmkE3M2SPdgkVU-4
 */


figma.connect(
  NeuModal,
  "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=8266-49849&t=MTzmkE3M2SPdgkVU-4",
  {
    props: {
      footer: figma.boolean("Buttons", {
        true: <NeuModal unit= "footer">...</NeuModal>,
        false: undefined,
      }),

      content: figma.enum("Content", {
        Text: "text",
        "Content Slot": "content-slot",
        "Content Slot - Full Width": "content-slot---full-width",
      }),

    },
    example: ({footer, content}) => {
      return (
      <NeuModal label={ "YOUR_LABEL_HERE" } active= { false } onNeuDismiss={ (ev) => {} }>
        <NeuModal unit="content">
          { content }
        </NeuModal>
        { footer }
      </NeuModal>
      )
    }
  },
)
