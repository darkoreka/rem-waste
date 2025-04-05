import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/tooltip";
import { AlertTriangle } from "lucide-react";

interface TagsProps {
    tags: string[];
}

export function Tags({ tags }: TagsProps) {
    if (tags.length === 0) return null;

    return (
        <>
            <div className="hidden md:block">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="absolute bottom-3 left-3 text-yellow-400 hover:text-yellow-300 cursor-help">
                                <AlertTriangle className="h-6 w-6" />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent
                            side="top"
                            className="flex flex-col gap-2 bg-black text-yellow-400 font-semibold px-3 py-2 rounded-md shadow-md border border-zinc-800"
                        >
                            {tags.map((tag, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <AlertTriangle className="h-4 w-4 shrink-0" />
                                    <span>{tag}</span>
                                </div>
                            ))}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>

            <div className="block md:hidden absolute bottom-3 left-3 text-yellow-400 text-sm font-medium space-y-1">
                {tags.map((tag, index) => (
                    <div key={index} className="flex items-center gap-2 bg-neutral-950 p-1 rounded-md">
                        <AlertTriangle className="h-4 w-4 shrink-0" />
                        <span>{tag}</span>
                    </div>
                ))}
            </div>
        </>
    );
}