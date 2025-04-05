import { useEffect } from "react";

export function useClickOutside(
    refs: React.RefObject<HTMLElement | null>[],
    callback: () => void
) {
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;
            if (refs.every((ref) => ref.current && !ref.current.contains(target))) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [refs, callback]);
}