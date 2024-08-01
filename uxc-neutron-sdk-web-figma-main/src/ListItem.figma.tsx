import React from "react"
import { NeuList } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuList
 * @kind n/a
 * @unit group | item 
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=11655-23739&m=dev
 */

figma.connect(
  NeuList,
  "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=11655-23739&m=dev",
  {
    props: {
      iconEnd: figma.boolean("End Icon", {
        true: figma.string("↳ End Icon Content"),
        false: undefined,
      }),
      
      secondaryText: figma.boolean("Support Label", {
        true: <p>YOUR_SECONDARY_CONTENT_HERE</p>,
        false: undefined,
      }),
      
      selected: figma.enum("State", {
        Resting: undefined,
        Hover: undefined,
        "Hover Alt": undefined,
        Pressed: undefined,
        "Pressed Alt": undefined,
        Active: true,
        Disabled: undefined,
      }),

      content: figma.enum("Content", {
        Text: "text",
        "Content Slot": "content-slot",
      }),

      iconStart: figma.enum("Start Content", {
        None: undefined,
        "Content Slot": "content-slot",
        Icon: figma.string("↳ Start Icon Content"),
      }),

    },
    example: ({iconStart, selected, secondaryText, iconEnd, content}) => {
      return (
        <NeuList
          unit= "item"
          iconStart= { iconStart }
          iconEnd= { iconEnd }
          selected = { selected }
          value= { 'YOUR_VALUE_HERE' }
        >
          { content }
          { secondaryText }
        </NeuList>
      )
    }
  },
)
