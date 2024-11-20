import { useEffect, useState } from 'react'

interface Props {
  onSearch: (value: string) => void
}

export function RInput({ onSearch }: Props) {
  const [inputValue, setInputValue] = useState('')
  const [debouncedValue, setDebouncedValue] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [inputValue])

  useEffect(() => {
    if (debouncedValue) {
      onSearch(debouncedValue)
    }
  }, [debouncedValue, onSearch])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Search recipes..."
      className="border p-2 rounded w-full"
    />
  )
}
