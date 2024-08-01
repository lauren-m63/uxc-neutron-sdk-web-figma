import React from "react"
import { NeuTextarea } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuTextarea
 * @kind default | emphazised 
 * @unit n/a
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=4882-4392&t=wq52FzmgM0gAe5WI-4
 */
figma.connect(
  NeuTextarea,
  "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=4882-4392&t=wq52FzmgM0gAe5WI-4",
  {
    props: {
      isOptional: figma.boolean("Optional", {
        true: undefined,
        false: true,
      }),
      helperText: figma.boolean("Helper Text", {
        true: "...",
        false: undefined,
      }),
      content: figma.enum("Content", {
        Text: "text",
        "Content Slot": "content-slot",
      }),
      state: figma.enum("State", {
        Inactive: undefined,
        Active: undefined,
        Error: undefined,
        "Active Error": undefined,
        Disabled: true, 
      }),
    },
    example: ({content, state, isOptional, helperText}) => {
      return(
        <NeuTextarea
          label= "FORM_LABEL"
          rows= { 4 }
          disabled= { state } 
          required= { isOptional } 
          invalid= { helperText }
         
            onNeuForm={ (ev) => {} }
            onNeuFocus={ (ev) => {} }
            onNeuBlur={ (ev) => {} }
        >{ content }</NeuTextarea>
      )}
  },
)
