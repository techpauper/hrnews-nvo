import Link from "next/link"
import { Facebook, Twitter } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Logo size="large" className="mb-4" />
            <p className="text-sm text-blue-200 mt-4">
              Your trusted source for homeowners rights, property law, and housing news.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-yellow-300">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <a href="mailto:elyons@homeownersrights.org" className="text-blue-200 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-blue-200 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-blue-300">
            &copy; {new Date().getFullYear()} Homeowners Rights. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              className="text-blue-300 hover:text-white"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://twitter.com" className="text-blue-300 hover:text-white" aria-label="Follow us on Twitter">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://bsky.app" className="text-blue-300 hover:text-white" aria-label="Follow us on Bluesky">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M12 2L2 19.5h20L12 2z" />
              </svg>
              <span className="sr-only">Bluesky</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

