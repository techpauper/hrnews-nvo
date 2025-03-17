"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  currentPage: number
  totalPages: number
  category?: string
}

export function Pagination({ currentPage, totalPages, category }: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", pageNumber.toString())

    if (category) {
      params.set("category", category)
    }

    return `/blog?${params.toString()}`
  }

  return (
    <div className="flex justify-center mt-12">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          disabled={currentPage <= 1}
          onClick={() => router.push(createPageURL(currentPage - 1))}
          className="flex items-center gap-1"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              className={currentPage === page ? "bg-[#3D2E2E]" : ""}
              onClick={() => router.push(createPageURL(page))}
            >
              {page}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          disabled={currentPage >= totalPages}
          onClick={() => router.push(createPageURL(currentPage + 1))}
          className="flex items-center gap-1"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

