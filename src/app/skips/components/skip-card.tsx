import Image from "next/image";
import { cn } from "@/lib/utils";
import SelectSkipButton from "./skip-size-button";
import { Badge } from "@/components/ui/badge";

interface SkipCardProps {
    id: string;
    size: string;
    price: string;
    period: string;
    isSelected: boolean;
    onSelect: () => void;
}

export function SkipCard({ id, size, price, period, isSelected, onSelect }: SkipCardProps) {
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
                <Badge className="absolute top-3 right-3 text-white bg-blue-600">
                    {size}
                </Badge>
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
        </div>
    );
}