"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { saleMenuChart } from "@/app/_constants"
import { useTheme } from "@/app/_context/ThemeContext"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import MoreButton from "../../Modules/MoreButton"
import { useSearchParams } from "next/navigation"
import { IDashboardSaleChart } from "@/app/_types"

const chartConfig = {
} satisfies ChartConfig


export default function SaleChart({ saleChartDetails }: IDashboardSaleChart) {

    const searchParams = useSearchParams();
    const day = searchParams.get('day') && !isNaN(Number(searchParams.get('day'))) ? searchParams.get('day') : 7

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
        <div className="bg-white dark:bg-primary-900 rounded-xl pl-4  md:px-4  pb-3 border border-primary-100/50 dark:border-primary-800/50">
            <div className="py-6 pr-4 md:pr-0 flex items-center justify-between">
                <div className="flex items-center gap-x-1.5">
                    <span className="flex w-4 h-4 bg-blue-400 dark:bg-blue-600 rounded-full"></span>
                    <p className="font-mo dark:text-primary-100 text-lg text-primary-800">نمودار فروش طی {day} روز گذشته</p>
                </div>
                <MoreButton items={saleMenuChart} />
            </div>
            <ChartContainer dir='ltr' config={chartConfig} className="h-64 w-full rounded-xl">
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
                        tickFormatter={(val) => Number(val).toLocaleString().slice(0, -3)}
                    />
                    <CartesianGrid stroke={colors.stroke} strokeDasharray={"4"} />
                    <ChartTooltip content={<ChartTooltipContent className="dark:text-primary-50 text-primary-700   dark:bg-primary-800 font-ir w-52 dark:border-primary-800" contentStyle={{ backgroundColor: 'blue', padding: '12px' }} />} />
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
            </ChartContainer>
        </div>

    )
}
