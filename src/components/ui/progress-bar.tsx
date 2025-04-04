import { MapPin, Package2, Truck, ClipboardCheck, Calendar, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
    { id: 1, name: "Postcode", icon: MapPin },
    { id: 2, name: "Waste Type", icon: Package2 },
    { id: 3, name: "Select Skip", icon: Truck },
    { id: 4, name: "Permit Check", icon: ClipboardCheck },
    { id: 5, name: "Choose Date", icon: Calendar },
    { id: 6, name: "Payment", icon: CreditCard },
];

export function ProgressBar({ currentStep }: { currentStep: number }) {
    return (
        <div className="w-full sticky top-0 z-40 bg-gray-950 border-b border-gray-800 p-4">
            <div className="hidden md:flex items-center justify-between">
                {steps.map((step, index) => {
                    const StepIcon = step.icon;
                    const isActive = step.id <= currentStep;
                    const isCurrent = step.id === currentStep;

                    return (
                        <div key={step.id} className="flex flex-col items-center relative w-full">
                            {index < steps.length - 1 && (
                                <div
                                    className={cn(
                                        "absolute top-4 left-1/2 w-full h-0.5",
                                        step.id < currentStep ? "bg-blue-500" : "bg-gray-700"
                                    )}
                                />
                            )}

                            <div
                                className={cn(
                                    "z-10 flex items-center justify-center w-8 h-8 rounded-full",
                                    isCurrent
                                        ? "bg-blue-600 text-white"
                                        : isActive
                                            ? "bg-blue-900 text-blue-300"
                                            : "bg-gray-800 text-gray-500"
                                )}
                            >
                                <StepIcon className="h-4 w-4" />
                            </div>

                            <span
                                className={cn(
                                    "mt-2 text-sm font-medium",
                                    isCurrent ? "text-blue-400" : isActive ? "text-gray-300" : "text-gray-500"
                                )}
                            >
                                {step.name}
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className="md:hidden">
                <div className="flex items-center justify-center space-x-2 bg-gray-800 py-3 px-4 rounded-lg">
                    <Truck className="h-5 w-5 text-blue-400" />
                    <span className="font-medium text-gray-200">
                        Step {currentStep}: {steps[currentStep - 1].name}
                    </span>
                </div>
            </div>
        </div>
    );
}