import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Stop Wasting ACUs
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Running 14+ MAX accounts at $200/mo each? Learn how to cut your costs by 50% or more through smarter configuration and better prompts.
          </p>
        </div>

        <Tabs defaultValue="simple" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="simple">Simple Guide</TabsTrigger>
            <TabsTrigger value="detailed">Detailed Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="simple">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">The Super Simple Version</CardTitle>
                  <CardDescription>Devin is a robot worker. You pay it in coins (called ACUs). Everything below is about one thing: stop wasting coins.</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>1. You're paying for 14 robots at $200 each. Two fixes.</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. How coins get wasted (the 3 big leaks)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Robot naps are free</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>When you stop talking, the robot goes to sleep. Sleeping costs 0 coins. Don't babysit it.</li>
                    <li>Ask for work in a Linux room, not a Windows room. Windows costs ~9% extra. Same work.</li>
                    <li>Give it small jobs (5 coins or less each). One giant job = robot gets lost = coins on fire. You can run lots of small jobs at the same time — that's allowed and cheaper.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. "Caching" = the robot remembering stuff so you don't pay twice</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Which model? Let the robot boss decide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-zinc-600 dark:text-zinc-400">In Devin Desktop (Windsurf) there's a switch called Adaptive.</p>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>Adaptive = a boss who looks at each chore and sends the cheap fast worker for easy stuff and the expensive genius only when truly needed.</li>
                    <li>Turn it on: Settings &gt; Models &gt; Adaptive ON. Then stop thinking about models.</li>
                    <li>If you ever pick by hand: SWE-1.6 Fast for normal work. The expensive ones (Claude/GPT) only when the cheap one already failed.</li>
                  </ul>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">(Devin's cloud sessions don't let you pick a model at all — there, your coins are saved by #2 and #4 instead.)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Put a lid on the coin jar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li><strong>Settings &gt; Usage → session spending limit.</strong> A job can never eat more coins than the lid allows. Runaway robot = stopped automatically.</li>
                    <li><strong>Session Insights</strong> (click any finished job): shows how many coins it ate, writes a better prompt for you, and lists what was broken. Copy the better prompt. Fix what it says is broken. Free lesson after every job.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900">
                <CardHeader>
                  <CardTitle className="text-2xl">The whole thing in 5 lines</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li>One robot that knows your house beats 17 robots who don't.</li>
                    <li>Pack the backpack once (Blueprints) + sticky notes (Knowledge) = jobs start warm, not cold.</li>
                    <li>Say exactly what you want in message #1 — file names, examples, how to test.</li>
                    <li>Adaptive ON = models picked for you, cheap by default.</li>
                    <li>Small jobs, spending lid on, read the report card after.</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="detailed">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Devin.ai Cost Optimization Guide</CardTitle>
                  <CardDescription>Situation: 14+ paid MAX accounts (~$200/mo each ≈ $2,800+/mo), each with a weekly quota that burns out fast. Goal: get the same work done with fewer accounts by wasting less quota per session — and get a volume deal.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Usage</Badge>
                    <Badge variant="secondary">Self-serve plans</Badge>
                    <Badge variant="secondary">Environment</Badge>
                    <Badge variant="secondary">Session Insights</Badge>
                    <Badge variant="secondary">ACU efficiency</Badge>
                    <Badge variant="secondary">Models</Badge>
                    <Badge variant="secondary">Adaptive</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>1. The economics of 14× MAX (and the two real fixes)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-zinc-600 dark:text-zinc-400">Your logic is sound as far as it goes: MAX quota is subsidized, on-demand credits are not — so another $200 subscription buys more work than $200 of credits. Buying quota in $200 chunks is the rational self-serve move. Two things beat it:</p>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Fix A: Get an Enterprise quote — you are already an enterprise-sized customer</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-2">At $2,800+/mo of committed spend, you're squarely in Enterprise territory. Enterprise is billed in ACUs at a negotiated rate in your order form — and you have real leverage as a proven $33k+/yr spender. What one Enterprise org gets you over 14 logins:</p>
                    <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
                      <li>Negotiated per-ACU pricing (even 15% ≈ $400+/mo back)</li>
                      <li>One environment snapshot, Knowledge base, and Playbook library — configured once, used by every session</li>
                      <li>Org-level ACU limits + Consumption Analytics (see exactly where quota goes, per user/org)</li>
                      <li>No weekly-quota rotation dance, no 14 logins</li>
                    </ul>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">Also price Teams (shared on-demand credit pool, $80/mo min + full seats) as the middle option — but at your volume, Enterprise is the conversation to have.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Fix B: Cut the ACU burn rate — this shrinks the account count directly</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">Cognition's own case study (section 3) shows a task that should cost 12 ACUs costing 42 — 3.5× waste from fixable causes. If your sessions carry similar waste, the sections below can roughly halve your burn rate — that's 5–7 fewer MAX accounts (~$1,000–1,400/mo), bigger than any discount.</p>
                  </div>

                  <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">If you keep multiple accounts meanwhile: stop running them cold</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-2">The per-account assets (snapshot, Knowledge, Playbooks) don't sync across accounts. An unconfigured account pays setup + re-exploration ACUs out of quota you paid $200 for. So:</p>
                    <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
                      <li>Dedicate each account to specific repos/projects. Its snapshot + Knowledge stay small, relevant, and configured once.</li>
                      <li>Keep a master config (blueprint YAML + Knowledge entries + playbooks as text files in a repo) and paste it into every account. 30 minutes per account, pays back permanently.</li>
                      <li>Don't rotate one repo's work across random accounts — you land on cold accounts and pay the cold-start tax mid-project.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Where ACUs actually go</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">Usage accrues from: number/complexity of actions, VM time, session runtime, conversation length, and back-and-forth messaging.</p>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li><strong>Sleeping = 0 usage.</strong> Devin auto-sleeps after ~0.1 ACU of inactivity. Don't babysit sessions.</li>
                    <li><strong>Windows sessions cost ~9% more</strong> than Linux. Use Linux unless you truly need Windows.</li>
                    <li><strong>Session size targets:</strong> XS &le; 2 ACUs, S &le; 5 ACUs. Sessions flagged L (&gt;10) or XL (&gt;20 ACUs) are "unhealthy" — task was too big or Devin struggled. Aim for XS/S.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. The 3 big ACU leaks (from Cognition's own case study)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-zinc-600 dark:text-zinc-400">A real session burned 42 ACUs on a ~12 ACU task. The three causes and fixes:</p>
                  <ol className="list-decimal list-inside space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                      <strong>Unnecessary exploration</strong> — Devin explored 23 files hunting for a pagination helper, built its own, then found the existing one and refactored.
                      <br />→ Fix: name the exact files/utilities in your prompt.
                    </li>
                    <li>
                      <strong>Wrong approach</strong> — Devin guessed cursor-based pagination; the API was offset-based; full rewrite.
                      <br />→ Fix: specify the approach explicitly.
                    </li>
                    <li>
                      <strong>Environment failures</strong> — npm install failed twice on a missing .npmrc; retries burned ACUs.
                      <br />→ Fix: bake config into the environment snapshot.
                    </li>
                  </ol>
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Prompt template that fixes all three:</p>
                    <pre className="text-sm bg-zinc-200 dark:bg-zinc-900 p-3 rounded overflow-x-auto">
{`[Task in one sentence, with a well-defined end goal]
- Use existing utility at <path/to/util.ts>
- Follow the same pattern as <existing feature/endpoint>
- Exact spec: <params, response shape, edge cases>
- Test with: <exact command> ; verify <specific criteria>`}
                    </pre>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. "Caching" in Devin — 4 layers, and the settings for each</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-zinc-600 dark:text-zinc-400">Devin doesn't have a "cache toggle." Caching happens in 4 places:</p>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">a) Environment snapshots (biggest one — this is machine-level caching)</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-2"><strong>Setting:</strong> Settings &gt; Environment &gt; Blueprints (declarative YAML — recommended over the classic wizard).</p>
                    <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
                      <li>Every session boots from a pre-built snapshot with repos cloned + deps installed. No snapshot = you pay setup ACUs every single session.</li>
                      <li>initialize = one-time installs (runtimes, apt packages, global CLIs). maintenance = dep installs (npm install, pip install) — runs during builds, surfaced to the agent at session start.</li>
                      <li>Builds auto-refresh ~every 24h, so deps stay warm. Keep maintenance fast and incremental (npm install, not npm ci).</li>
                      <li>Fix anything Session Insights flags as a repeated env error (like the .npmrc case) here — it saves ACUs on every future session.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">b) Knowledge (context caching)</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-2"><strong>Setting:</strong> Settings &gt; Knowledge. Pin entries to specific repos or globally.</p>
                    <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
                      <li>Anything you repeat in prompts belongs here: test commands, architecture facts, "our API is offset-paginated, util at src/utils/paginate.ts", common bugs + fixes, deploy steps.</li>
                      <li>Auto-loaded at session start → Devin skips paid re-exploration. Accept Devin's own Knowledge suggestions when they're good.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">c) Prompt caching (model-level, Devin Desktop/Windsurf)</h3>
                    <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
                      <li>Stay on the same model across turns in a conversation. Switching models mid-conversation breaks the provider's prompt cache and re-bills full input tokens. Adaptive factors this into routing.</li>
                      <li>Keep conversations short; start a new session per task instead of one giant chat (long conversations = huge re-sent context every turn).</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">d) DeepWiki (free codebase Q&A)</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">Codebase questions ("how does auth work here?") → ask DeepWiki, free on all plans. Don't burn session ACUs on exploration. Pick lower wiki effort levels — each shows its expected ACU range.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Which model to use (and the automatic option you asked for)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-zinc-600 dark:text-zinc-400 mb-2"><strong>Devin cloud sessions have no model picker</strong> — efficiency there comes from prompts + Knowledge + environment (sections 3–4).</p>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 mb-2"><strong>Devin Desktop (Windsurf/Cascade) does</strong>, and the "automatically tell me which model to use" feature already exists:</p>
                  
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Adaptive — Cognition's model router. Automatically picks the best model per request, avoids overusing premium models, and routes with prompt-caching in mind. Available on Pro/Max/Teams. Set it as your default.</p>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 mb-2">Manual override cheat sheet (credit costs table: docs.devin.ai/desktop/models):</p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Task</th>
                          <th className="text-left py-2">Model</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2">Default / everything</td>
                          <td className="py-2"><strong>Adaptive</strong> (let it decide)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Routine edits, refactors, tests, CRUD</td>
                          <td className="py-2"><strong>SWE-1.6 Fast</strong> (same intelligence, cheapest/fastest) or SWE-1.6</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Standard agentic coding</td>
                          <td className="py-2"><strong>SWE-1.6</strong> (fewer loops, parallel tool calls, efficient trajectories)</td>
                        </tr>
                        <tr>
                          <td className="py-2">Genuinely hard architecture/debugging where SWE models failed</td>
                          <td className="py-2">Claude/GPT frontier model — only then</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm text-zinc-500 dark:text-zinc-500">Rule: never pay frontier-model rates for work a SWE model handles. Only switch off Adaptive with a specific reason — and don't switch models mid-conversation (kills the cache).</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Settings checklist (apply to EVERY account you keep)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-zinc-600 dark:text-zinc-400">Master config repo — blueprint YAML + Knowledge entries + playbooks as files; replicate into each account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-zinc-600 dark:text-zinc-400">Settings &gt; Usage — set default session spending limits (hard cap on runaway sessions) + auto-reload threshold</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-zinc-600 dark:text-zinc-400">Settings &gt; Environment &gt; Blueprints — configure your main repos (initialize / maintenance / knowledge); verify the build passes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-zinc-600 dark:text-zinc-400">Settings &gt; Knowledge — add: test/lint/build commands, key utilities + paths, architecture facts, common gotchas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-zinc-600 dark:text-zinc-400">Playbooks — create one for each repetitive task type (CI fixes, new endpoints, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-zinc-600 dark:text-zinc-400">Devin Desktop: Settings &gt; Models — toggle Adaptive model router ON</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-zinc-600 dark:text-zinc-400">Use Linux sessions (Windows = +9%)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Weekly habits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li><strong>Check Session Insights</strong> on every expensive session: it shows ACU usage, an Improved Prompt (use it as a template), and Action Items (env/config fixes). Recurring Action Item = fix the blueprint. Recurring prompt gap = add Knowledge.</li>
                    <li><strong>One scoped task per session.</strong> Big project → split into sub-tasks across parallel sessions (no concurrency limit). Parallel XS/S sessions beat one XL session on both cost and quality.</li>
                    <li><strong>Front-load everything into the first message</strong> — every follow-up correction costs more than context given upfront.</li>
                    <li><strong>Free tools first:</strong> DeepWiki for codebase questions; Devin Review is free for any public GitHub PR at devinreview.com (swap github.com → devinreview.com).</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900">
                <CardHeader>
                  <CardTitle className="text-2xl">TL;DR</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li>You're a $33k/yr customer acting like 14 hobbyists — get an Enterprise ACU quote; meanwhile dedicate accounts to repos and replicate one master config so no account runs cold.</li>
                    <li>Caching = snapshot + Knowledge + same-model conversations. Configure blueprints once; sessions boot warm.</li>
                    <li>Adaptive = automatic model selection. Turn it on, use SWE-1.6 Fast for routine work, frontier models only when justified.</li>
                    <li>Specific prompts with file paths + patterns + test criteria — the 42→12 ACU lever.</li>
                    <li>Session spending limits + Session Insights — cap the downside, learn from every session.</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t mt-12 py-8">
        <div className="container mx-auto px-4 text-center text-zinc-600 dark:text-zinc-400">
          <p>Optimize your Devin.ai usage. Save money. Work smarter.</p>
        </div>
      </footer>
    </div>
  );
}
