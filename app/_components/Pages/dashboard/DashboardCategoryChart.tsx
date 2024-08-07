"use client"

import * as React from "react"
import { Label, Legend, Pie, PieChart } from "recharts"

import { categoryMenuChart } from "@/app/_constants"
import {
    CardContent
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent
} from "@/components/ui/chart"
import MoreButton from "../../Modules/MoreButton"



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

const colors = ['var(--item1)', 'var(--item2)', 'var(--item3)', 'var(--item4)', 'var(--item5)', 'var(--item6)', 'var(--item7)', 'var(--item8)']



interface CategoryChartProps {
    categoryDetails: {
        title: string,
        productCount: number
    }[]
}

export default function CategoryChart({ categoryDetails }: CategoryChartProps) {

    const totalVisitors = React.useMemo(() => {
        return categoryDetails.reduce((acc, curr) => acc + curr.productCount, 0)
    }, [])


    const data = categoryDetails.map((item, i) => ({ ...item, fill: colors[i] }))

    return (

        <div className='px-4 py-2 flex flex-col rounded-xl dark:bg-primary-900 bg-white border border-primary-100/50  dark:border-primary-800/50 h-[340px]'>
            <div className="pt-2 pb-4 mb-2 flex items-center justify-between gap-x-1.5 border-b border-b-primary-50 dark:border-b-primary-800/60">
                <div className='flex items-center gap-x-1.5'>
                    <span className="flex w-4 h-4 dark:bg-blue-600 bg-blue-400 rounded-full"></span>
                    <p className="font-mo dark:text-primary-100 text-primary-800 text-lg">سفارش های اخیر</p>
                </div>
                <MoreButton items={categoryMenuChart} />
            </div>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    dir="ltr"
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-44 lg:max-h-64 w-full"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent className="dark:bg-primary-800 dark:border-primary-800" hideLabel />}
                        />
                        <Pie
                            data={data}
                            dataKey="productCount"
                            nameKey="title"
                            innerRadius={85}
                            outerRadius={110}
                            paddingAngle={3}
                            // cx={"40%"}
                            // cy={"50%"}
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
                                                    سورس
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />

                        </Pie>
                    
                        <Legend
                            style={{ borderRadius: '8px' }}
                            direction={'ltr'}
                            verticalAlign="middle"
                            align="right"
                            layout="vertical"
                            iconSize={20}
                            // @ts-ignore comment
                            width={"25%"}
                            />
                    </PieChart>
                </ChartContainer>
            </CardContent> 
        </div>

    )
}
