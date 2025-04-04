import { NextResponse } from "next/server"

export function GET() {
    const skips = [
        {
            id: 1,
            size: 4,
            priceBeforeVat: 277.95,
            vat: 20,
            allowedOnRoad: true,
            allowsHeavyWaste: true,
        },
        {
            id: 2,
            size: 5,
            priceBeforeVat: 295.5,
            vat: 20,
            allowedOnRoad: true,
            allowsHeavyWaste: true,
        },
        {
            id: 3,
            size: 6,
            priceBeforeVat: 305.15,
            vat: 20,
            allowedOnRoad: true,
            allowsHeavyWaste: true,
        },
        {
            id: 4,
            size: 8,
            priceBeforeVat: 374.85,
            vat: 20,
            allowedOnRoad: true,
            allowsHeavyWaste: true,
        },
        {
            id: 5,
            size: 10,
            priceBeforeVat: 399.5,
            vat: 20,
            allowedOnRoad: false,
            allowsHeavyWaste: false,
        },
        {
            id: 6,
            size: 12,
            priceBeforeVat: 438.6,
            vat: 20,
            allowedOnRoad: false,
            allowsHeavyWaste: false,
        },
    ]

    return NextResponse.json(skips)
}
