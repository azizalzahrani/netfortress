import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-blue-900 py-6 px-4 md:px-6 bg-blue-950">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-sm text-gray-400">© 2024 Net Fortress. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">
            Terms
          </Link>
          <Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">
            Privacy
          </Link>
          <Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}

