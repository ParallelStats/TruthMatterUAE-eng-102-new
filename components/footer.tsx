import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium">
              Truth<span className="text-primary">Matters</span>UAE
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              A non-profit organization dedicated to raising awareness and combating misinformation among college
              students in the UAE through education and research-based approaches.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <div className="flex flex-col space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="hover:text-primary">
                About Us
              </Link>
              <Link href="/problem" className="hover:text-primary">
                The Problem
              </Link>
              <Link href="/solutions" className="hover:text-primary">
                Solutions
              </Link>
              <Link href="/resources" className="hover:text-primary">
                Resources
              </Link>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium">Connect With Us</h3>
            <div className="flex flex-col space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <p>Email: 100065878@ku.ac.ae</p>
              <div className="flex space-x-4 pt-2">
                <Link href="#" className="hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} TruthMattersUAE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

