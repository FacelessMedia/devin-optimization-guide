import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const items = [
  {
    title: "Blueprints",
    description: "Pre-built environment snapshots with deps installed. Sessions boot warm, no setup ACUs.",
    color: "blue",
    icon: "📦"
  },
  {
    title: "Knowledge",
    description: "Context caching for repeated info. Test commands, architecture facts, common gotchas.",
    color: "green",
    icon: "🧠"
  },
  {
    title: "Adaptive",
    description: "Auto model router. Picks cheap/fast for easy tasks, expensive genius only when needed.",
    color: "purple",
    icon: "🤖"
  },
  {
    title: "Specific Prompts",
    description: "File paths, patterns, test criteria in message #1. The 42→12 ACU lever.",
    color: "amber",
    icon: "🎯"
  },
  {
    title: "Session Limits",
    description: "Hard cap on runaway sessions. Stop the bleeding before it gets expensive.",
    color: "red",
    icon: "🛡️"
  },
  {
    title: "DeepWiki",
    description: "Free codebase Q&A. Don't burn session ACUs on exploration questions.",
    color: "cyan",
    icon: "📚"
  }
];

const colorClasses = {
  blue: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200 dark:border-blue-800",
  green: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-800",
  purple: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 border-purple-200 dark:border-purple-800",
  amber: "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/20 border-amber-200 dark:border-amber-800",
  red: "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 border-red-200 dark:border-red-800",
  cyan: "bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950/20 dark:to-cyan-900/20 border-cyan-200 dark:border-cyan-800"
};

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <Card key={index} className={`border-2 ${colorClasses[item.color as keyof typeof colorClasses]} hover:scale-105 transition-transform duration-200`}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{item.icon}</span>
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
