import React from "react"
import { NeuDropdown } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuDropdown
 * @kind stacked | default 
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=12698-4942&m=dev
 */

figma.connect(
  NeuDropdown,
  "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=10645-40771&m=dev",
  {
    props: {
      doubleColumn: figma.boolean("Double Column", {
        true: "stacked",
        false: "default",
      }), 
      
      color: figma.enum("Color", {
        Blue: "blue",
        Orange: "orange",
      }),

      rows: figma.enum("Rows", {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
      }),

    },
    example: ({color, doubleColumn}) => {
      return(
        <NeuDropdown
          label= "YOUR_LABEL"
          labelHidden= { false }
          color= { color }
          kind= { doubleColumn }
        >
          <a href= "#null">Dropdown 1</a>
          <a href= "#null">Dropdown 2</a>
          <a href= "#null">Dropdown 3</a>
          <a href= "#null">Dropdown 4</a>
        </NeuDropdown>
      )
    }
  },
)
