export function SkipCardSkeleton() {
    return (
        <div className="rounded-xl border border-gray-800 bg-gray-900 p-5 animate-pulse space-y-4">
            <div className="w-full h-48 bg-gray-800 rounded-lg" />
            <div className="h-4 bg-gray-800 rounded w-1/2" />
            <div className="h-4 bg-gray-800 rounded w-1/3" />
            <div className="h-8 bg-gray-800 rounded w-full mt-4" />
        </div>
    );
}