interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  return (
    <div className="flex justify-center gap-2 my-12">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg transition ${
            currentPage === page
              ? 'bg-accent text-dark font-semibold'
              : 'bg-card text-muted hover:bg-opacity-80'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  )
}
