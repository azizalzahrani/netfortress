import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="w-full px-4 lg:px-6 h-14 flex items-center border-b border-slate-800 bg-slate-900">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="flex items-center justify-center gap-2 text-white" href="/">
          <Image
            src="/images/netfortress-logo-new.png"
            alt="Net Fortress Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
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
      </div>
    </header>
  )
}

