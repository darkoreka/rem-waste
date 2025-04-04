"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { forwardRef } from "react"

interface StickyFooterProps {
  size: string
  price: string
}

export const StickyFooter = forwardRef<HTMLDivElement, StickyFooterProps>(function StickyFooter(
  { size, price },
  ref
) {
  const isActive = size !== "-" && price !== "-"

  return (
    <div ref={ref} className="fixed bottom-0 left-0 w-full bg-gray-950 border-t border-gray-800 z-50 px-4 py-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
        {isActive ? (
          <div className="text-sm text-white text-center md:text-left flex flex-wrap items-center gap-x-4 gap-y-1 justify-center md:justify-start">
            <span className="font-medium text-blue-400">{size}</span>
            <span>{price}</span>
            <span className="text-zinc-400">14 day hire</span>
          </div>
        ) : (
          <div />
        )}
        <div className="flex justify-center md:justify-end gap-2">
          <Button
            variant="secondary"
            className="px-6 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            Back
          </Button>
          <Button
            className={`px-6 bg-blue-600 hover:bg-blue-700 text-white ${!isActive ? "cursor-not-allowed opacity-50 hover:bg-blue-600" : ""
              }`}
            disabled={!isActive}
          >
            Continue <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
});
