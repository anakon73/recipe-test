import { useEffect, useState } from 'react'

interface Props {
  onSearch: (value: string) => void
}

export function RInput({ onSearch }: Props) {
  const [value, setValue] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(value)
    }, 300)

    return () => clearTimeout(timeout)
  }, [value, onSearch])

  return (
    <input
      type="text"
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder="Search recipes..."
      className="border p-2 rounded w-full"
    />
  )
}
