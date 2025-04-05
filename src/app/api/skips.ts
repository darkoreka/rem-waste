import { Skip } from "@/types/skip";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchSkipsByLocation(postcode: string, area: string): Promise<Skip[]> {
    const response = await fetch(`${API_BASE_URL}/skips/by-location?postcode=${postcode}&area=${area}`);
    if (!response.ok) {
        throw new Error("Failed to fetch skips");
    }
    const data = await response.json();
    return data.filter((skip: Skip) => skip.price_before_vat !== null);
}