interface Props {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export function RCheckbox({ label, checked, onChange }: Props) {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        className="w-4 h-4"
      />
      <span>{label}</span>
    </label>
  )
}
