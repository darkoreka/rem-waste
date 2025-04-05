import Image from "next/image";
import { cn } from "@/lib/utils";
import SelectSkipButton from "./skip-size-button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/tooltip";
import { AlertTriangle } from "lucide-react";

interface SkipCardProps {
    id: string;
    size: string;
    price: string;
    period: string;
    isSelected: boolean;
    onSelect: () => void;
    tags?: string[];
}

export function SkipCard({ size, price, period, isSelected, onSelect, tags }: SkipCardProps) {
    return (
        <div
            className={cn(
                "rounded-xl overflow-hidden transition-all duration-200 bg-gray-900 cursor-pointer",
                isSelected
                    ? "border-2 border-blue-500 shadow-lg shadow-blue-900/20 transform scale-[1.02]"
                    : "border border-gray-800 hover:border-blue-800 hover:shadow"
            )}
            onClick={(e) => {
                e.stopPropagation();
                onSelect();
            }}
        >
            <div className="relative">
                <Image
                    src="/images/rem_waste.jpg"
                    width={400}
                    height={200}
                    alt={`${size} Skip`}
                    className="w-full h-48 object-cover"
                />
                <Badge
                    variant="secondary"
                    className={cn(
                        "absolute top-3 right-3",
                        isSelected && "bg-blue-600 text-white"
                    )}
                >
                    {size}
                </Badge>
                {tags && tags.length > 0 && (
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
                )}
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold text-white">{size} Skip</h3>
                        <p className="text-sm text-gray-400 mt-1">{period}</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-2xl font-bold text-blue-400">{price}</span>
                        <span className="text-sm text-gray-400">per week</span>
                    </div>
                </div>

                <SelectSkipButton isSelected={isSelected} onSelect={onSelect} />
            </div>
        </div >
    );
}