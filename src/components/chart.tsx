"use client";

import React from "react";
import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { year: 2014, scoring: 100, threePointAttempts: 22 },
  { year: 2015, scoring: 102, threePointAttempts: 24 },
  { year: 2016, scoring: 105, threePointAttempts: 27 },
  { year: 2017, scoring: 106, threePointAttempts: 29 },
  { year: 2018, scoring: 110, threePointAttempts: 32 },
  { year: 2019, scoring: 111, threePointAttempts: 34 },
  { year: 2020, scoring: 111.8, threePointAttempts: 34.1 },
  { year: 2021, scoring: 112.1, threePointAttempts: 34.6 },
  { year: 2022, scoring: 110.6, threePointAttempts: 35.2 },
  { year: 2023, scoring: 114.7, threePointAttempts: 34.2 },
];

const chartConfig = {
  scoring: {
    label: "Scoring Average",
    color: "hsl(var(--chart-1))",
  },
  threePointAttempts: {
    label: "3-Point Attempts",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="text-sm font-semibold">NBA Team Statistics</div>
      <div className="mb-2 text-xs text-muted-foreground">
        Scoring average and 3-point attempts over the last 10 years
      </div>
      <div className="relative flex-grow">
        <ChartContainer config={chartConfig} className="absolute inset-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" tick={{ fontSize: 10 }} />
              <YAxis yAxisId="left" tick={{ fontSize: 10 }} />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fontSize: 10 }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="scoring"
                stroke="var(--color-scoring)"
                fill="var(--color-scoring)"
                fillOpacity={0.3}
              />
              <Area
                yAxisId="right"
                type="monotone"
                dataKey="threePointAttempts"
                stroke="var(--color-threePointAttempts)"
                fill="var(--color-threePointAttempts)"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
      <div className="mt-2 flex items-center gap-1 text-xs">
        <span className="font-medium">Trending up</span>
        <TrendingUp className="h-3 w-3" />
        <span className="text-muted-foreground">2014 - 2023</span>
      </div>
    </div>
  );
}
