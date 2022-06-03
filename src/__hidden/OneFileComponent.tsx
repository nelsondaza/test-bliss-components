import * as runtime from 'react/jsx-runtime'
import { Bliss } from '../bliss'
import { Breadcrumb, Divider, Image, Label, Tab, Table } from 'semantic-ui-react'
import { EvaluateOptions, evaluateSync } from '@mdx-js/mdx'

export default ({ exports: { bliss, ...components } }: { exports: { bliss: Bliss } }) => {
  const breadcrumb = bliss.metadata.id.split('/').map((part, i, t) => ({
    key: part,
    content: part,
    link: i < t.length - 1,
  }))

  const sections = []
  const ExampleDoc =
    typeof bliss.docs === 'string' ? bliss.docs : typeof bliss.docs === 'function' ? bliss.docs : bliss.docs?.example
  const OverviewDoc =
    typeof bliss.docs === 'object' && bliss.docs.overview ? bliss.docs.overview : null

  if (typeof OverviewDoc === 'string') {
    const { default: Overview } = evaluateSync(OverviewDoc, runtime as EvaluateOptions)
    sections.push({
      menuItem: 'Overview',
      render: () => (
        <div className="border border-solid border-gray-300 border-t-0 p-2">
          <Overview />
        </div>
      ),
    })
  }

  if (typeof ExampleDoc === 'string') {
    const { default: Example } = evaluateSync(ExampleDoc, runtime as EvaluateOptions)
    sections.push({
      menuItem: 'Example',
      render: () => (
        <div className="border border-solid border-gray-300 border-t-0 p-2">
          <Example />
        </div>
      ),
    })
  }

  if (bliss.metadata.properties || bliss.metadata.response) {
    sections.push({
      menuItem: `Properties ${bliss.metadata.response ? '& Response' : ''}`,
      render: () => (
        <div className="border border-solid border-gray-300 border-t-0 p-2">
          <Table celled definition selectable striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell> </Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>Required</Table.HeaderCell>
                <Table.HeaderCell>Default</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {Object.entries(bliss.metadata.properties).map(([name, prop]) => (
                <Table.Row key={name}>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{prop.type}</Table.Cell>
                  <Table.Cell>{prop.required ? 'Yes' : 'No'}</Table.Cell>
                  <Table.Cell>{prop.default}</Table.Cell>
                  <Table.Cell>{prop.description}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          {bliss.metadata.response && (
            <>
              <h3>Response <small className="text-gray-500">{`<`}{bliss.metadata.responseType}{`>`}</small></h3>
              <Table celled definition selectable striped>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell> </Table.HeaderCell>
                    <Table.HeaderCell>Type</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {Object.entries(bliss.metadata.response).map(([name, prop]) => (
                    <Table.Row key={name}>
                      <Table.Cell>{name}</Table.Cell>
                      <Table.Cell>{prop.type}</Table.Cell>
                      <Table.Cell>{prop.description}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </>
          )}
        </div>
      ),
    })
  }

  return (
    <div>
      <div>
        <Image avatar size="huge" src={`https://robohash.org/${encodeURIComponent(bliss.metadata.icon)}`} />
        <Breadcrumb icon="right angle" sections={breadcrumb} />
      </div>
      <div className="pt-3">
        <h1 className="m-0">
          {Object.keys(components).join(' ')}
          <small className="text-sm text-gray-500"> V{bliss.metadata.version}</small>
        </h1>
        <div className="px-4 pt-2">
          {bliss.metadata.categories.map((cat) => (
            <Label basic key={cat}>
              {cat}
            </Label>
          ))}
        </div>
      </div>
      <Divider />
      <div>{bliss.metadata.description}</div>
      <div className="pt-6">
        <Tab panes={sections} />
      </div>
      <div className="p-6 text-right text-gray-500">
        <small>Schema: {bliss.metadata.$schema}</small>
      </div>
    </div>
  )
}
