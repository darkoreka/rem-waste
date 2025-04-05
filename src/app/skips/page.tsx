"use client";

import { useEffect, useRef, useState } from "react";
import { ProgressBar } from "../../components/ui/progress-bar";
import { SkipCard } from "./components/skip-card";
import { StickyFooter } from "@/components/ui/footer";
import { useClickOutside } from "@/lib/hooks/useClickOutside";
import { Skip } from "@/types/skip";
import { generateTags } from "@/lib/utils";

const CURRENT_STEP = 3;
const SKELETON_COUNT = 6;

export default function SkipSelectionPage() {
    const [skips, setSkips] = useState<Skip[]>([]);
    const [selectedSkip, setSelectedSkip] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const cardWrapperRef = useRef<HTMLDivElement | null>(null);
    const footerRef = useRef<HTMLDivElement | null>(null);

    useClickOutside([cardWrapperRef, footerRef], () => setSelectedSkip(null));

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/skips/by-location?postcode=NR32&area=Lowestoft`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch skips");
                return res.json();
            })
            .then((data) => {
                const filtered = data.filter((skip: Skip) => skip.price_before_vat !== null);
                setSkips(filtered);
                setSelectedSkip(filtered.length > 0 ? String(filtered[0].id) : null);
            })
            .catch((error) => {
                console.error("Error fetching skips:", error);
                setError("Failed to load skips. Please try again later.");
            })
            .finally(() => setIsLoading(false));
    }, []);

    const selected = skips.find((s) => String(s.id) === selectedSkip);
    const selectedSize = selected?.size ? `${selected.size} Yard` : "-";
    const selectedPrice = selected?.price_before_vat
        ? `£${(selected.price_before_vat * (1 + selected.vat / 100)).toFixed(2)}`
        : "-";

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100">
            <div className="container max-w-6xl mx-auto px-4 py-8 pb-40">
                <ProgressBar currentStep={CURRENT_STEP} />

                <div className="mt-12 text-center">
                    <h1 className="text-3xl font-bold text-white md:text-4xl">Choose Your Skip Size</h1>
                    <p className="mt-3 text-gray-400">Select the skip size that best suits your needs</p>
                </div>

                {error && (
                    <div className="mt-6 text-center text-red-500">
                        {error}
                    </div>
                )}

                <div
                    ref={cardWrapperRef}
                    className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {isLoading
                        ? Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                            <SkipCard key={index} isLoading />
                        ))
                        : skips.map((skip) => (
                            <SkipCard
                                key={skip.id}
                                id={String(skip.id)}
                                size={`${skip.size} Yard`}
                                price={
                                    skip.price_before_vat
                                        ? `£${(skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2)}`
                                        : "N/A"
                                }
                                period={`${skip.hire_period_days} day hire`}
                                isSelected={selectedSkip === String(skip.id)}
                                onSelect={() => setSelectedSkip(String(skip.id))}
                                tags={generateTags(skip)}
                            />
                        ))}
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