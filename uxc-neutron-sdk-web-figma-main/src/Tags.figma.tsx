import React from "react"
import { NeuTag } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuTag
 * @kind default | emphazised 
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=20525-8895&t=FNBwxYh4DlVGN7UR-4
 */

figma.connect(
  NeuTag,
  "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=20525-8895&t=FNBwxYh4DlVGN7UR-4",
  {
    props: {
      kind: figma.enum("Kind", {
        Default: "default",
        Emphasized: "emphasized",
      }),
      color: figma.enum("Color", {
        Yellow: "yellow",
        Blue: "blue",
        Orange: "orange",
        Red: "red",
        Green: "green",
        Purple: "purple",
        Teal: "teal",
        //Gray: "gray",
      }),
      icon: figma.boolean("Icon Start", {
        true: "YOUR_ICON",
        false: undefined,
      }),
    },
    example: ({color, kind, icon}) => {
      return(
        <NeuTag
        color= { color }
        kind= { kind }
        icon= { icon }
        >YOUR_LABEL_HERE</NeuTag>
      )}
  },
)
