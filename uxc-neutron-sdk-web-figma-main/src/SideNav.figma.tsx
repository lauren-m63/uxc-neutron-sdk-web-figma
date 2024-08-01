import React from "react"
import { NeuSideNavigation } from "@neutron/react"
import figma from "@figma/code-connect"

/**
 * @name NeuSideNavigation
 * @kind shadow | outline 
 * @unit wrapper | group | item
 * @link https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=12698-4942&m=dev
 */

figma.connect(
  NeuSideNavigation,
  "https://www.figma.com/design/gftI7XRpQvRyTAtu901Jqx/Neutron-Web-3.1----Base-Kit?node-id=12698-4942&m=dev",
  {
    props: {
      label: figma.string("↳ Label"),

      kind: figma.enum("Kind", {
        Elevated: "shadow",
        Outline: "outline",
        Container: "shadow", 
      }),
      
      displayTitle: figma.boolean("Header Title", {  
        true: true, 
        false: false,
      }),

      titleBackground: figma.enum("↳ Color", {
        Plain: "plain",
        Gray: "gray",
        NA: "plain",
      }),

    },
    example: ({titleBackground, kind, displayTitle, label}) => 
    {
      return (
        <NeuSideNavigation label={ label } displayTitle= { displayTitle } titleBackground={ titleBackground } kind= { kind }>
          <NeuSideNavigation unit="item">Menu Item 1</NeuSideNavigation>
          <NeuSideNavigation unit="item">Menu Item 2</NeuSideNavigation>

          <NeuSideNavigation unit="group" label="Menu Item 3">
            <NeuSideNavigation unit="item">Secondary Item 1</NeuSideNavigation>
            <NeuSideNavigation unit="item">Secondary Item 2</NeuSideNavigation>
            <NeuSideNavigation unit="item">Secondary Item 3</NeuSideNavigation>
            <NeuSideNavigation unit="item">Secondary Item 4</NeuSideNavigation>
            <NeuSideNavigation unit="item">Secondary Item 5</NeuSideNavigation>
          </NeuSideNavigation>

          <NeuSideNavigation unit="item">Menu Item 3</NeuSideNavigation>
          <NeuSideNavigation unit="item">Menu Item 4</NeuSideNavigation>
        </NeuSideNavigation>
      )
    }
  },
)





