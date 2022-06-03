import { useState } from 'react'
import { Bliss } from './bliss'

export function useSomeData() {
  const [count, setCount] = useState(0)
  const increment = () => setCount((c) => c + 1)
  return { count, increment }
}

export const bliss: Bliss = {
  metadata: {
    $schema: 'https://bliss.co/bliss/schemas/metadata@1.0.0.json',

    id: '@bliss/TEAM_SCOPE/USER_SCOPE/PACKAGE_SCOPE/useSomeData',
    author: 'USER',
    version: '1.0.0',
    mainFile: 'index.ts',

    categories: ['Fetch', 'Remote'],
    description: 'Function (hook) as a component',
    icon: 'https://static.bliss.co/bliss/icons/logo-remote.svg',

    properties: {
      URL: {
        description: 'End point to fetch',
        required: true,
        type: 'string',
      },
      credentials: {
        required: true,
        type: 'object',
      },
    },

    responseType: 'object',
    response: {
      data: {
        description: 'List of items found',
        type: 'array',
      },
      error: {
        type: 'object',
      },
      pagination: {
        type: 'object',
      },
    },
  },
  docs: {
    overview: `
#### > This doc and metadata is generated with in the same component's file.

### Hook

A remote function component fot to ...
The action returns a bla bla bla ...

This enables an easy way to add a component to your project ...
`,
    example: `
### Example

\`\`\`tsx live
useSomeData('https://example.com/api/v1/some-data', { credentials: 'include' })
\`\`\`
`,
  }

}
