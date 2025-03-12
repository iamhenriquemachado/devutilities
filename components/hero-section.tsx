import { SearchDialog } from "./search-dialog"

export function HeroSection() {
  return (
    <section className="py-12 md:py-16 text-center">
      <div className="container max-w-4xl">
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-jam-purple text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-code-2"
            >
              <path d="m18 16 4-4-4-4" />
              <path d="m6 8-4 4 4 4" />
              <path d="m14.5 4-5 16" />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter mb-4">Dev Utilities</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto mb-8">
          DevUtils exists to make developers' lives easier.
          <br />
          Here are fast, free, open source, ad-free tools.
        </p>
        <SearchDialog />
      </div>
    </section>
  )
}

