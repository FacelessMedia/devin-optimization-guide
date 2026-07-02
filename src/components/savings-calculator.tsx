"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

export function SavingsCalculator() {
  const [accounts, setAccounts] = useState(14);
  const [efficiency, setEfficiency] = useState(50);

  const monthlyCost = accounts * 200;
  const savings = Math.round(monthlyCost * (efficiency / 100));
  const newCost = monthlyCost - savings;

  return (
    <Card className="border-2 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
      <CardHeader>
        <CardTitle className="text-2xl">Savings Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">Number of MAX Accounts</label>
            <Badge variant="outline">{accounts}</Badge>
          </div>
          <Slider
            value={[accounts]}
            onValueChange={(value) => setAccounts(value[0])}
            max={20}
            min={1}
            step={1}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">Efficiency Improvement</label>
            <Badge variant="outline">{efficiency}%</Badge>
          </div>
          <Slider
            value={[efficiency]}
            onValueChange={(value) => setEfficiency(value[0])}
            max={75}
            min={0}
            step={5}
            className="w-full"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
          <div className="text-center">
            <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              ${monthlyCost}
            </div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">Current</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              -${savings}
            </div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">Savings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              ${newCost}
            </div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">New Cost</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
