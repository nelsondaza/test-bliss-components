// types/mdx.d.ts
declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element
  export default MDXComponent
}

export interface Bliss {
  metadata: Metadata
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
    required?: boolean
    type: string
  }
}

export interface Response {
  type: string
}
