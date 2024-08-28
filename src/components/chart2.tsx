"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";

const chartData = [
  { year: 2004, scoring: 93.4, threePointAttempts: 14.9 },
  { year: 2005, scoring: 97.2, threePointAttempts: 16.0 },
  { year: 2006, scoring: 98.7, threePointAttempts: 16.9 },
  { year: 2007, scoring: 98.7, threePointAttempts: 18.1 },
  { year: 2008, scoring: 100.0, threePointAttempts: 18.1 },
  { year: 2009, scoring: 100.2, threePointAttempts: 18.1 },
  { year: 2010, scoring: 99.4, threePointAttempts: 18.0 },
  { year: 2011, scoring: 96.3, threePointAttempts: 18.4 },
  { year: 2012, scoring: 98.1, threePointAttempts: 19.9 },
  { year: 2013, scoring: 98.1, threePointAttempts: 20.0 },
  { year: 2014, scoring: 100.0, threePointAttempts: 22.4 },
  { year: 2015, scoring: 102.7, threePointAttempts: 24.1 },
  { year: 2016, scoring: 105.6, threePointAttempts: 27.0 },
  { year: 2017, scoring: 106.3, threePointAttempts: 29.0 },
  { year: 2018, scoring: 110.4, threePointAttempts: 32.0 },
  { year: 2019, scoring: 111.2, threePointAttempts: 34.1 },
  { year: 2020, scoring: 111.8, threePointAttempts: 34.1 },
  { year: 2021, scoring: 112.1, threePointAttempts: 34.6 },
  { year: 2022, scoring: 110.6, threePointAttempts: 35.2 },
  { year: 2023, scoring: 114.7, threePointAttempts: 34.2 },
];

const chartConfig = {
  scoring: {
    label: "Team Scoring Average",
    color: "hsl(var(--chart-2))",
  },
  threePointAttempts: {
    label: "3-Point Attempts",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Chart() {
  const scoringIncrease = (
    ((chartData[chartData.length - 1].scoring - chartData[0].scoring) /
      chartData[0].scoring) *
    100
  ).toFixed(1);
  const threePointIncrease = (
    ((chartData[chartData.length - 1].threePointAttempts -
      chartData[0].threePointAttempts) /
      chartData[0].threePointAttempts) *
    100
  ).toFixed(1);
  return (
    <div className="flex flex-col gap-0 rounded-lg bg-muted py-2">
      <div className="mb-4 flex flex-col items-center gap-1 text-sm sm:text-base">
        <div className="flex items-center gap-2 leading-none">
          NBA scoring increased by {scoringIncrease}% over the last 20 years
        </div>
        <div className="flex items-center gap-2 leading-none">
          While{" "}
          <span className="font-medium">
            3-Point attempts skyrocketed by {threePointIncrease}%!{" "}
          </span>
          <TrendingUp className="h-4 w-4" />
        </div>
      </div>
      <ChartContainer config={chartConfig} className="h-[180px]">
        <AreaChart data={chartData} margin={{ left: -10, right: -10 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.toString().slice(2)}
            padding={{ left: 0, right: 0 }}
            interval={2}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
            domain={["dataMin - 5", "dataMax + 5"]}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
            domain={[0, "dataMax + 5"]}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <defs>
            <linearGradient id="fillScoring" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={chartConfig.scoring.color}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={chartConfig.scoring.color}
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillThreePoint" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={chartConfig.threePointAttempts.color}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={chartConfig.threePointAttempts.color}
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            yAxisId="right"
            dataKey="threePointAttempts"
            type="monotone"
            fill="url(#fillThreePoint)"
            fillOpacity={0.4}
            stroke={chartConfig.threePointAttempts.color}
            stackId="a"
          />
          <Area
            yAxisId="left"
            dataKey="scoring"
            type="monotone"
            fill="url(#fillScoring)"
            fillOpacity={0.4}
            stroke={chartConfig.scoring.color}
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
