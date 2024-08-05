"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Legend, Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { category: "Android", count: 3, fill: "var(--color-chrome)" },
    { category: "FrontEnd", count: 2, fill: "var(--color-safari)" },
    { category: "BackEnd", count: 1, fill: "var(--color-firefox)" },
    { category: "Al", count: 4, fill: "var(--color-edge)" },
    { category: "Python", count: 6, fill: "var(--color-other)" },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

export default function ProductSale() {
    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.count, 0)
    }, [])

    return (

        <div className='px-4 py-2 flex flex-col rounded-2xl dark:bg-primary-900 border  dark:border-primary-800/50'>
            <div className="pt-2 pb-4 mb-2 flex items-center gap-x-1.5 border-b border-b-primary-800/60">
                <span className="flex w-4 h-4 bg-blue-600 rounded-full"></span>
                <p className="font-mo text-primary-100 text-lg">نمودار محصولات به تفکیک دسته بندی</p>
            </div>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    dir="ltr"
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-64 w-full"
                > 
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="count"
                            nameKey="category"
                            innerRadius={85}
                            outerRadius={110}
                            paddingAngle={3}
                            cx={"40%"}
                            cy={"50%"}
                        >

                            <Label
                                style={{ fill: 'red' }}
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                color="red"
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    color="blue"
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="dark:fill-primary-100 fill-primary-800 text-3xl font-bold "
                                                >
                                                    {totalVisitors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    color="white"
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="dark:fill-primary-100 fill-primary-800"
                                                >
                                                    دسته بندی
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />

                        </Pie>
                        <Legend
                            style={{borderRadius:'8px'}}
                            direction={'ltr'}
                            verticalAlign="middle"
                            align="right"
                            layout="vertical"
                            iconSize={20}
                            width={"25%"}
                            
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </div>

    )
}
