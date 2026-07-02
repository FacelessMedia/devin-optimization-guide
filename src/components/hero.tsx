"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const [savings, setSavings] = useState(0);
  const [accounts, setAccounts] = useState(0);

  useEffect(() => {
    const savingsInterval = setInterval(() => {
      setSavings((prev) => {
        if (prev >= 1400) return 1400;
        return prev + 28;
      });
    }, 20);

    const accountsInterval = setInterval(() => {
      setAccounts((prev) => {
        if (prev >= 14) return 14;
        return prev + 1;
      });
    }, 150);

    return () => {
      clearInterval(savingsInterval);
      clearInterval(accountsInterval);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />
      
      <div className="relative container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 text-sm px-4 py-1" variant="secondary">
            Save up to 50% on Devin.ai costs
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Stop Wasting ACUs
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
            Running 14+ MAX accounts at $200/mo each? Learn how to cut your costs by 50% or more through smarter configuration and better prompts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-2 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {accounts}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                MAX Accounts
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                ${savings.toLocaleString()}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Monthly Savings
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                3.5×
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Less ACU Waste
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
