import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const ToltipContainer = ({ toltip, children }: { toltip: string, children: React.ReactNode }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    <p>{toltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}

export default ToltipContainer