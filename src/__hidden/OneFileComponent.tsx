import { Bliss } from '../bliss'
import { Breadcrumb, Image } from 'semantic-ui-react'

export default ({ exports: { bliss, ...components } }: { exports: { bliss: Bliss } }) => {
  console.log('bliss', bliss)
  console.log('components', components)

  const sections = bliss.metadata.id.split('/').map((part, i, t) => ({
    key: part,
    content: part,
    link: i < t.length - 1,
  }))

  return (
    <div>
      <div>
        <Image avatar size="huge" src={`https://robohash.org/${encodeURIComponent(bliss.metadata.icon)}`} />
        <Breadcrumb icon="right angle" sections={sections} />
      </div>
      <div>
        <h1>{Object.keys(components).join(' ')}</h1>
      </div>
      ...
    </div>
  )
}
