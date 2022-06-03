import { render } from '@testing-library/react'
import { Button } from './Button'

it('should render with the correct text', () => {
  const { getByText } = render(<Button />)
  const rendered = getByText('hello world!')
  expect(rendered).toBeTruthy()
})
