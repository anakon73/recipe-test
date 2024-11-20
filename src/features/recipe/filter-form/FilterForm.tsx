import { useCategories } from '@/shared/api/category'
import { RCheckbox } from '@/shared/ui/RCheckbox'

interface Props {
  selectedCategories: string[]
  onChange: (categories: string[]) => void
}

export function FilterForm({ selectedCategories, onChange }: Props) {
  const { data: categories } = useCategories()

  const handleCategoryChange = (category: string, checked: boolean) => {
    const updatedCategories = checked
      ? [...selectedCategories, category]
      : selectedCategories.filter(c => c !== category)

    onChange(updatedCategories)
  }

  if (!categories) {
    return (
      <h1>Categories not found</h1>
    )
  }

  return (
    <div className="space-y-2">
      {categories.categories.map(category => (
        <RCheckbox
          key={category.idCategory}
          label={category.strCategory}
          checked={selectedCategories.includes(category.strCategory)}
          onChange={
            checked => handleCategoryChange(category.strCategory, checked)
          }
        />
      ))}
    </div>
  )
}
