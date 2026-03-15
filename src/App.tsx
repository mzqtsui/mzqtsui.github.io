import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function App() {
  return (
    <div className="flex min-h-svh p-6 place-content-center">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose  place-content-center">
        <div>
          <HoverCard openDelay={100}>
            <h1 className="font-bold text-3xl">MATT <HoverCardTrigger className="font-medium hover:underline text-muted-foreground">TSUI</HoverCardTrigger></h1>
            <p className="text-base text-muted-foreground">Fixing user pain points since <span className="italic">forever ago</span></p>

            <HoverCardContent className="shadow-sm w-min">
              <h2 className="text-2xl">徐</h2>
              <div className="font-mono text-base text-muted-foreground">ceoi4</div>
              <div className="text-xs text-muted-foreground">(bless&nbsp;you)</div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  )
}

export default App
