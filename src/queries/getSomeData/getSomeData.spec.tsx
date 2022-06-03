import { renderHook, act } from '@testing-library/react-hooks'
import { getSomeData } from './getSomeData'

it('should increment counter', () => {
  const { result } = renderHook(() => getSomeData())
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})
