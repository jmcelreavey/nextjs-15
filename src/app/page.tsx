import { Button } from "@/components/ui/button";
import { BiLogoTailwindCss } from "react-icons/bi";
import {
  SiTypescript,
  SiReact,
  SiShadcnui,
  SiNextdotjs,
  SiGithub,
} from "react-icons/si";

const logos = [
  {
    name: "TypeScript 5",
    Logo: SiTypescript,
  },
  {
    name: "Nextjs 15",
    Logo: SiNextdotjs,
  },
  {
    name: "React 19 RC",
    Logo: SiReact,
  },
  {
    name: "Tailwindcss 3",
    Logo: BiLogoTailwindCss,
  },
  {
    name: "Shadcn",
    Logo: SiShadcnui,
  },
];
export default function HomePage() {
  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-center">
      <div className="container flex grow flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-4 px-2">
          <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Next 15 Starter
          </h1>
          <p className="text-pretty text-center text-lg">
            Playground starter for trying out latest features
          </p>
        </div>
        <Button asChild variant={"outline"} className="mx-auto">
          <a
            href="https://github.com/Ali-Hussein-dev/nextjs-15.git"
            target="_blank"
          >
            <SiGithub /> Fork it
          </a>
        </Button>

        <div className="mx-auto mt-12 flex flex-wrap justify-center gap-3">
          {logos.map(({ name, Logo }) => (
            <div
              key={name}
              className="flex size-36 flex-col items-center justify-center gap-2.5 rounded-full border border-dashed font-semibold"
            >
              <Logo size={32} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
      <footer className="w-full border-t border-dashed py-4 text-center">
        Built by{" "}
        <Button asChild variant={"link"} size="sm">
          <a href="https://twitter.com/AliHussein_20">Ali H</a>
        </Button>
      </footer>
    </main>
  );
}
