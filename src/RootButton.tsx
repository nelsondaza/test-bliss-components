import { ReactNode } from 'react'
import { Bliss } from './bliss'

export type ButtonProps = {
  /**
   * A node or content to be rendered in the special component.
   */
  children?: ReactNode
}

export function RootButton({ children }: ButtonProps) {
  return <button>{children}</button>
}

export const bliss: Bliss = {
  metadata: {
    $schema: 'https://bliss.co/bliss/schemas/metadata@1.0.0.json',

    id: '@bliss/TEAM_SCOPE/USER_SCOPE/PACKAGE_SCOPE/RootButton',
    author: 'USER',
    version: '1.0.0',
    mainFile: 'index.ts',

    categories: ['UI', 'Form Element'],
    description: 'A nice Button and metadata in one file',
    icon: 'https://static.bliss.co/bliss/icons/logo.svg',

    properties: {
      children: {
        required: true,
        type: 'ReactNode',
      },
      ariaLabel: {
        required: false,
        type: 'string',
      },
      className: {
        required: false,
        type: 'string',
      },
      itemsDirection: {
        default: 'ltr',
        required: false,
        type: "['ltr', 'rtl', 'ttb', 'btt']",
      },
      primary: {
        default: 'false',
        required: false,
        type: 'boolean',
      },
      value: {
        required: false,
        type: 'string',
      },
    },
  },
  docs: `

### About

A component that does something special and renders text in a div.
The component renders a bla bla bla ...

This enables an easy way to add a component to your project ...

### Example

\`\`\`tsx live
<Button>Hello world!</Button>
\`\`\`
`,

}
