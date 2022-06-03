import { useState } from 'react'

export function getSomeData() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(0)
  const increment = () => setCount((c) => c + 1)
  return { count, increment }
}
