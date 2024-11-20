import { RCheckbox } from '@/shared/ui/RCheckbox'
import { categories } from './config'

interface Props {
  selectedCategories: string[]
  onChange: (categories: string[]) => void
}

export function FilterForm({ selectedCategories, onChange }: Props) {
  const handleCategoryChange = (category: string, checked: boolean) => {
    const updatedCategories = checked
      ? [...selectedCategories, category]
      : selectedCategories.filter(c => c !== category)

    onChange(updatedCategories)
  }

  return (
    <div className="space-y-2">
      {categories.map(category => (
        <RCheckbox
          key={category}
          label={category}
          checked={selectedCategories.includes(category)}
          onChange={checked => handleCategoryChange(category, checked)}
        />
      ))}
    </div>
  )
}
