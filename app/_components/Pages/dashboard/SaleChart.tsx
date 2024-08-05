"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, PieChart, CartesianGrid, Pie, XAxis, YAxis, Tooltip } from "recharts"


import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,

} from "@/components/ui/chart"
import { useTheme } from "@/app/_context/ThemeContext"
const chartData = [
    { month: "شنبه", desktop: 186000, mobile: 15000 },
    { month: "یک شنبه", desktop: 305000, mobile: 35400 },
    { month: "دو شنبه", desktop: 237000, mobile: 697801 },
    { month: "سه شنبه", desktop: 73000, mobile: 125484 },
    { month: "چهار شنبه", desktop: 209000, mobile: 98754 },
    { month: "پنج شنبه", desktop: 56000, mobile: 336547 },
    { month: "جمعه", desktop: 314000, mobile: 15000 },
]



const chartConfig = {

} satisfies ChartConfig


export default function SaleChart({ saleChartDetails }) {


    const { theme } = useTheme();


    const colors = theme === 'dark'
        ? {
            totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
            extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
            text: "#e5e7eb",
            background: "#18212f",
            stroke: "#2C3D4F"
        }
        : {
            totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
            extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
            text: "#374151",
            background: "#fff",
            stroke: "#E1E8EF"
        };

    return (
        <div className="bg-white dark:bg-primary-900 rounded-2xl pl-4 pr-4 pb-3 border border-transparent shadow-sm dark:border-primary-800/50">
            <div className="py-6 flex items-center gap-x-1.5">
                <span className="flex w-4 h-4 bg-blue-600 rounded-full"></span>
                <p className="font-mo text-primary-100 text-lg">نمودار فروش طی 7 روز گذشته</p>
            </div>
            <ChartContainer dir='ltr' config={chartConfig} className="max-h-64 w-full rounded-2xl">
                <AreaChart data={saleChartDetails}>
                    <XAxis
                        dataKey={"day"}
                        tick={{ fill: colors.text }}
                        tickLine={{ stroke: colors.text }}
                        tickMargin={14}
                    />
                    <YAxis
                        tickMargin={4}
                        orientation="right"
                        unit={"T"}
                        tick={{ fill: colors.text }}
                        tickLine={{ stroke: colors.text }}
                        tickFormatter={(val) => Number(val).toLocaleString()}
                    />
                    <CartesianGrid stroke={colors.stroke} strokeDasharray={"4"} />
                    <ChartTooltip content={<ChartTooltipContent className="dark:text-primary-50 text-primary-700  bg-primary-50 dark:bg-primary-800 font-ir w-52" contentStyle={{ backgroundColor: 'blue', padding: '12px' }} />} />
                    <Area
                        dataKey={"cash"}
                        type={"monotone"}
                        stroke={colors.totalSales.stroke}
                        fill={colors.totalSales.fill}
                        strokeWidth={2}
                        name="cash"
                        unit="Toman"
                    />
                    <Area
                        dataKey={"wallet"}
                        type={"monotone"}
                        stroke={colors.extrasSales.stroke}
                        fill={colors.extrasSales.fill}
                        strokeWidth={2}
                        name="wallet"
                        format={','}
                        unit="Toman"
                    />
                </AreaChart>
                {/* <AreaChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                        left: 12,
                        right: 12,
                    }}
                >
                    <CartesianGrid stroke="#333" vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                    // tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <YAxis
                        orientation="right"
                        dataKey={"desktop"}
                        tickMargin={8}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${Number(value).toLocaleString()} تومان`}

                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                    />
                    <Area
                        dataKey="desktop"
                        type="natural"
                        fill="var(--color-desktop)"
                        fillOpacity={0.4}
                        stroke="var(--color-desktop)"
                    />
                </AreaChart> */}
            </ChartContainer>
        </div>

    )
}
