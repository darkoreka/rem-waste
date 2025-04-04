"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SelectSkipButtonProps {
    isSelected: boolean
    onSelect: () => void
}

export default function SelectSkipButton({ isSelected, onSelect }: SelectSkipButtonProps) {
    return (
        <div className="mt-6">
            <Button
                variant={isSelected ? "default" : "secondary"}
                className={cn(
                    "w-full justify-center",
                    isSelected
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "text-neutral-500 border-blue-900 hover:border-blue-700 hover:bg-gray-800 hover:text-neutral-100"
                )}
                onClick={onSelect}
            >
                {isSelected ? (
                    <>
                        <Check className="mr-2 h-4 w-4" /> Selected
                    </>
                ) : (
                    "Select This Skip"
                )}
            </Button>
        </div>
    )
}
