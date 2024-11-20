/* eslint-disable react/no-array-index-key */
interface Props {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function RPagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const getPaginationRange = () => {
    if (totalPages <= 10) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    if (currentPage <= 7) {
      return [1, 2, 3, 4, 5, 6, 7, '...', totalPages]
    }

    return [1, '...', totalPages]
  }

  const paginationRange = getPaginationRange()

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      <button
        type="button"
        className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {paginationRange.map((item, index) =>
        typeof item === 'number'
          ? (
              <button
                type="button"
                key={index}
                className={`px-3 py-1 border rounded ${
                  item === currentPage
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => onPageChange(item)}
              >
                {item}
              </button>
            )
          : (
              <span key={index} className="px-3 py-1">
                {item}
              </span>
            ),
      )}

      <button
        type="button"
        className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}
