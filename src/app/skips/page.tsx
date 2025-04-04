"use client";

import { useEffect, useRef, useState } from "react";
import { StickyFooter } from "@/components/ui/footer";
import { ProgressSteps } from "./components/progress-steps";
import { SkipCard } from "./components/skip-card";

interface Skip {
    id: number;
    size: number;
    priceBeforeVat: number;
    vat: number;
    allowedOnRoad: boolean;
    allowsHeavyWaste: boolean;
}

export default function SkipSelectionPage() {
    const [skips, setSkips] = useState<Skip[]>([]);
    const [selectedSkip, setSelectedSkip] = useState<string | null>(null);
    const cardWrapperRef = useRef<HTMLDivElement | null>(null);
    const footerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node

            const clickedOutsideCards =
                cardWrapperRef.current && !cardWrapperRef.current.contains(target)

            const clickedOutsideFooter =
                footerRef.current && !footerRef.current.contains(target)

            if (clickedOutsideCards && clickedOutsideFooter) {
                setSelectedSkip(null)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    useEffect(() => {
        fetch("/api/skips")
            .then((res) => res.json())
            .then((data) => {
                setSkips(data);
                if (data.length > 0) {
                    setSelectedSkip(String(data[0].id));
                }
            });
    }, []);

    const selected = skips.find((s) => String(s.id) === selectedSkip);
    const selectedSize = selected ? `${selected.size} Yard` : "-";
    const selectedPrice = selected
        ? `£${(selected.priceBeforeVat * (1 + selected.vat / 100)).toFixed(2)}`
        : "-";

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100">
            <div className="container max-w-6xl mx-auto px-4 py-8 pb-40">
                <ProgressSteps currentStep={3} />

                <div className="mt-12 text-center">
                    <h1 className="text-3xl font-bold text-white md:text-4xl">Choose Your Skip Size</h1>
                    <p className="mt-3 text-gray-400">Select the skip size that best suits your needs</p>
                </div>

                <div ref={cardWrapperRef} className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {skips.map((skip) => {
                        const id = String(skip.id);
                        const size = `${skip.size} Yard`;
                        const price = `£${(skip.priceBeforeVat * (1 + skip.vat / 100)).toFixed(2)}`;
                        const period = "14 day hire period";

                        return (
                            <SkipCard
                                key={id}
                                id={id}
                                size={size}
                                price={price}
                                period={period}
                                isSelected={selectedSkip === id}
                                onSelect={() => setSelectedSkip(id)}
                            />
                        );
                    })}
                </div>
            </div>

            <StickyFooter ref={footerRef} size={selectedSize}
                price={selectedPrice} />
        </div>
    );
} 
