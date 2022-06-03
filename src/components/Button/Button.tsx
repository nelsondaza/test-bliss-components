import { ReactNode } from 'react'

export type ButtonProps = {
  /**
   * A node or content to be rendered in the special component.
   */
  children?: ReactNode
}

export function Button({ children }: ButtonProps) {
  return <button>{children}</button>
}
