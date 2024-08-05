"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", desktop: 186000 },
  { month: "February", desktop: 305000 },
  { month: "March", desktop: 237000 },
  { month: "April", desktop: 73000 },
  { month: "May", desktop: 209000 },
  { month: "June", desktop: 56000 },
  { month: "June", desktop: 314000 },
  { month: "June", desktop: 91000 },
  { month: "June", desktop: 342000 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function Component() {
  return (
    <div className="bg-primary-900 rounded-2xl py-10 px-8">
      <div>
        <p>نمودار خرید کاربر در یک هفته گذشته</p>
      </div>
      <ChartContainer dir='ltr' config={chartConfig} className="max-h-44 w-full">
        <AreaChart
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
            tickFormatter={(value) => value.slice(0, 3)}
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
        </AreaChart>
      </ChartContainer>
    </div>

  )
}
