// types/mdx.d.ts
import { FC } from 'react'

declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element
  export default MDXComponent
}

export interface Bliss {
  docs?: Doc | Docs
  metadata: Metadata
}

export type Doc = FC | string
export interface Docs {
  example: Doc,
  overview?: Doc,
  variants?: Doc,
}


export interface Metadata {
  $schema: string
  id: string
  author: string
  version: string
  mainFile: string
  categories: string[]
  description: string
  icon: string
  properties: Properties
  response?: Response
  config?: Config
}

export interface Config {
  'bliss.ui/fetch'?: UIFetch
  'bliss.envs/envs'?: EnvsEnvs
  'bliss.envs/scheduling'?: EnvsScheduling
}

export interface EnvsEnvs {
  deployment: UIFetch
}

export interface UIFetch {}

export interface EnvsScheduling {
  scheduling: Scheduling
}

export interface Scheduling {
  '* * * * *': Empty
}

export interface Empty {
  properties: Properties
}

export interface Properties {
  [key: string]: {
    default?: string
    required?: boolean
    type: string
  }
}

export interface Response {
  type: string
}
