import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="w-full px-4 lg:px-6 h-14 flex items-center justify-between border-b border-slate-800 bg-slate-900">
      <Link className="flex items-center justify-center gap-2 text-white" href="/">
        <span className="font-bold">Net Fortress</span>
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link className="text-sm font-medium text-white hover:text-white/80" href="/docs">
          Documentation
        </Link>
        <Link className="text-sm font-medium text-white hover:text-white/80" href="/install">
          Install
        </Link>
      </nav>
    </header>
  )
}

