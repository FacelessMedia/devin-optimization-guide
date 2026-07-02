import { Hero } from "@/components/hero";
import { SavingsCalculator } from "@/components/savings-calculator";
import { BentoGrid } from "@/components/bento-grid";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      <header className="border-b bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Devin.ai Cost Optimization
            </h1>
            <Badge variant="outline" className="text-sm">
              $2,800+/mo → $1,400+/mo
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <Hero />

        <div className="my-12">
          <SavingsCalculator />
        </div>

        <div className="my-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 text-center">
            Key Optimization Strategies
          </h2>
          <BentoGrid />
        </div>

        <div className="my-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 text-center">
            Detailed Guide
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="intro">
              <AccordionTrigger className="text-lg font-semibold">The Super Simple Version</AccordionTrigger>
              <AccordionContent>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">Devin is a robot worker. You pay it in coins (called ACUs). Everything below is about one thing: stop wasting coins.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fixes">
              <AccordionTrigger className="text-lg font-semibold">1. You're paying for 14 robots at $200 each. Two fixes.</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Fix A — Call the robot store and ask for the bulk deal</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">You spend ~$2,800 every month. That's "big company" money. Big companies don't buy 14 robots at the shelf price — they call sales and get a custom price (Enterprise plan). You have the receipts to demand a deal. One bulk account also means ONE trained robot brain shared by everybody, instead of 14 separate brains.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Fix B — Make each robot waste fewer coins, so you need fewer robots</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">Devin's own example: a 12-coin job cost 42 coins because the robot wandered around lost. If your robots waste like that, fixing it (sections below) means the same work fits in maybe half the robots. Half of 14 robots = ~$1,400/month back in your pocket.</p>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">And while you still have 14 robots:</h3>
                  <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
                    <li>Give each robot its OWN houses (repos). Don't send random robots to random houses.</li>
                    <li>Train every robot the same way ONCE: same backpack (Blueprint), same sticky notes (Knowledge). Keep a master copy and paste it into each account. 30 minutes each, saves coins forever.</li>
                    <li>An untrained robot burns your paid coins just figuring out where the bathroom is.</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="leaks">
              <AccordionTrigger className="text-lg font-semibold">2. How coins get wasted (the 3 big leaks)</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p className="text-zinc-600 dark:text-zinc-400">Real example from Devin's own docs: a job that should cost 12 coins cost 42. Why?</p>
                <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li><strong>The robot went hunting.</strong> It searched 23 files looking for a tool that already existed. → Tell it where the tool is.</li>
                  <li><strong>The robot guessed wrong.</strong> It built the wrong kind of thing and had to redo it all. → Tell it exactly what kind you want.</li>
                  <li><strong>The robot's room was broken.</strong> Install kept failing, it kept retrying. → Fix the room once (see #4).</li>
                </ul>
                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
                  <p className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Golden rule: every sentence you write in the first message saves coins later.</p>
                  <div className="space-y-2">
                    <p className="text-sm text-amber-800 dark:text-amber-200"><strong>Bad:</strong> "add pagination to the users endpoint"</p>
                    <p className="text-sm text-amber-800 dark:text-amber-200"><strong>Good:</strong> "add pagination to the users endpoint — use the helper at src/utils/paginate.ts, copy how /api/projects does it, page starts at 1, test with npm test"</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="naps">
              <AccordionTrigger className="text-lg font-semibold">3. Robot naps are free</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>When you stop talking, the robot goes to sleep. Sleeping costs 0 coins. Don't babysit it.</li>
                  <li>Ask for work in a Linux room, not a Windows room. Windows costs ~9% extra. Same work.</li>
                  <li>Give it small jobs (5 coins or less each). One giant job = robot gets lost = coins on fire. You can run lots of small jobs at the same time — that's allowed and cheaper.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="caching">
              <AccordionTrigger className="text-lg font-semibold">4. "Caching" = the robot remembering stuff so you don't pay twice</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p className="text-zinc-600 dark:text-zinc-400">Four kinds. Only the first two have real settings:</p>
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">The packed backpack (Settings &gt; Environment &gt; Blueprints)</h3>
                    <p className="text-sm text-blue-800 dark:text-blue-200">Save a picture of the robot's room with all tools already set up. Every new job starts from that picture. No more paying for unpacking. This is the #1 setting to do.</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Sticky notes on the fridge (Settings &gt; Knowledge)</h3>
                    <p className="text-sm text-green-800 dark:text-green-200">Write down stuff you keep repeating: "tests run with npm test", "the login code lives in folder X". The robot reads the notes free at the start of every job. No more paying it to rediscover.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Don't swap robots mid-conversation (Devin Desktop/Windsurf)</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">If you keep talking to the same model in one chat, it remembers cheaply. Switch models mid-chat = it forgets = you pay to re-explain everything.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">The free librarian (DeepWiki)</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">Questions like "how does my login code work?" — ask DeepWiki. It's free. Don't pay the robot coins to answer questions the librarian answers for $0.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="models">
              <AccordionTrigger className="text-lg font-semibold">5. Which model? Let the robot boss decide</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p className="text-zinc-600 dark:text-zinc-400">In Devin Desktop (Windsurf) there's a switch called Adaptive.</p>
                <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>Adaptive = a boss who looks at each chore and sends the cheap fast worker for easy stuff and the expensive genius only when truly needed.</li>
                  <li>Turn it on: Settings &gt; Models &gt; Adaptive ON. Then stop thinking about models.</li>
                  <li>If you ever pick by hand: SWE-1.6 Fast for normal work. The expensive ones (Claude/GPT) only when the cheap one already failed.</li>
                </ul>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">(Devin's cloud sessions don't let you pick a model at all — there, your coins are saved by #2 and #4 instead.)</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="limits">
              <AccordionTrigger className="text-lg font-semibold">6. Put a lid on the coin jar</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li><strong>Settings &gt; Usage → session spending limit.</strong> A job can never eat more coins than the lid allows. Runaway robot = stopped automatically.</li>
                  <li><strong>Session Insights</strong> (click any finished job): shows how many coins it ate, writes a better prompt for you, and lists what was broken. Copy the better prompt. Fix what it says is broken. Free lesson after every job.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="summary">
              <AccordionTrigger className="text-lg font-semibold">The whole thing in 5 lines</AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
                  <li>One robot that knows your house beats 17 robots who don't.</li>
                  <li>Pack the backpack once (Blueprints) + sticky notes (Knowledge) = jobs start warm, not cold.</li>
                  <li>Say exactly what you want in message #1 — file names, examples, how to test.</li>
                  <li>Adaptive ON = models picked for you, cheap by default.</li>
                  <li>Small jobs, spending lid on, read the report card after.</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>

      <footer className="border-t mt-12 py-8">
        <div className="container mx-auto px-4 text-center text-zinc-600 dark:text-zinc-400">
          <p>Optimize your Devin.ai usage. Save money. Work smarter.</p>
        </div>
      </footer>
    </div>
  );
}
