"use client";

import { useEffect, useRef, useState } from "react";
import { ProgressBar } from "../../components/ui/progress-bar";
import { SkipCard } from "./components/skip-card";
import { StickyFooter } from "@/components/ui/footer";

interface Skip {
    id: number;
    size: number;
    price_before_vat: number | null;
    vat: number;
    hire_period_days: number;
    allowed_on_road: boolean;
    allows_heavy_waste: boolean;
}

export default function SkipSelectionPage() {
    const [skips, setSkips] = useState<Skip[]>([]);
    const [selectedSkip, setSelectedSkip] = useState<string | null>(null);
    const cardWrapperRef = useRef<HTMLDivElement | null>(null);
    const footerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter((skip: Skip) => skip.price_before_vat !== null);
                setSkips(filtered);
                if (filtered.length > 0) {
                    setSelectedSkip(String(filtered[0].id));
                }
            });
    }, []);


    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;
            const clickedOutsideCards = cardWrapperRef.current && !cardWrapperRef.current.contains(target);
            const clickedOutsideFooter = footerRef.current && !footerRef.current.contains(target);

            if (clickedOutsideCards && clickedOutsideFooter) {
                setSelectedSkip(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selected = skips.find((s) => String(s.id) === selectedSkip);
    const selectedSize = selected ? `${selected.size} Yard` : "-";
    const selectedPrice = selected && selected.price_before_vat !== null
        ? `£${(selected.price_before_vat * (1 + selected.vat / 100)).toFixed(2)}`
        : "-";

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100">
            <div className="container max-w-6xl mx-auto px-4 py-8 pb-40">
                <ProgressBar currentStep={3} />

                <div className="mt-12 text-center">
                    <h1 className="text-3xl font-bold text-white md:text-4xl">Choose Your Skip Size</h1>
                    <p className="mt-3 text-gray-400">Select the skip size that best suits your needs</p>
                </div>

                <div
                    ref={cardWrapperRef}
                    className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {skips.map((skip) => {
                        const id = String(skip.id);
                        const size = `${skip.size} Yard`;
                        const price = skip.price_before_vat !== null
                            ? `£${(skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2)}`
                            : "N/A";
                        const period = `${skip.hire_period_days} day hire`;

                        const tags: string[] = [];
                        if (!skip.allowed_on_road) tags.push("Private Property Only");
                        if (!skip.allows_heavy_waste) tags.push("Not Suitable for Heavy Waste");

                        return (
                            <SkipCard
                                key={id}
                                id={id}
                                size={size}
                                price={price}
                                period={period}
                                isSelected={selectedSkip === id}
                                onSelect={() => setSelectedSkip(id)}
                                tags={tags}
                            />
                        );
                    })}
                </div>
            </div>

            <StickyFooter
                ref={footerRef}
                size={selectedSize}
                price={selectedPrice}
            />
        </div>
    );
}
