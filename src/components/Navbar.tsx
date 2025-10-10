import { useState } from "react"
// import { Button } from "@/components/retroui/Button"
import logo from "../assets/logo.png"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { title: "", href: "#projects" },
    { title: "Workshops", href: "#workshops" },
    { title: "FAQ", href: "#faq" },
    { title: "Contact Us", href: "https://discord.gg/vvf3s2zZYK" },
  ]

  return (
    <nav className="w-full md:border-b-4 md:border-black bg-white ">
      {/* Main navbar row */}
      <div className="container mx-auto flex items-stretch justify-between px-4 xl:px-0 border-black md:border-b-0 border-b-4">
        {/* Left section - Logo */}
        <div className="text-lg md:text-xl xl:text-2xl font-bold p-3 md:p-4 border-x-4 border-black flex items-center">
          <img src={logo} alt="RetroUI Logo" className="h-10 md:h-10 xl:h-12 w-auto" />
        </div>

        {/* Center nav links (desktop only) */}
        <div className="flex-grow hidden md:flex items-center justify-center space-x-4 md:space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-base md:text-lg hover:underline underline-offset-2"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Right section */}
        <div className="flex items-stretch">
          {/* Hire Me Button (desktop only) */}
          <a
            href="https://discord.gg/vvf3s2zZYK"
            className="hidden md:flex p-3 md:p-4 border-l-4 border-black items-center font-semibold hover:bg-muted transition duration-150 text-sm md:text-base"
          >
            {/* discord icon */}

<svg height="40" width="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8943 4.34399C17.5183 3.71467 16.057 3.256 14.5317 3C14.3396 3.33067 14.1263 3.77866 13.977 4.13067C12.3546 3.89599 10.7439 3.89599 9.14391 4.13067C8.99457 3.77866 8.77056 3.33067 8.58922 3C7.05325 3.256 5.59191 3.71467 4.22552 4.34399C1.46286 8.41865 0.716188 12.3973 1.08952 16.3226C2.92418 17.6559 4.69486 18.4666 6.4346 19C6.86126 18.424 7.24527 17.8053 7.57594 17.1546C6.9466 16.92 6.34927 16.632 5.77327 16.2906C5.9226 16.184 6.07194 16.0667 6.21061 15.9493C9.68793 17.5387 13.4543 17.5387 16.889 15.9493C17.0383 16.0667 17.177 16.184 17.3263 16.2906C16.7503 16.632 16.153 16.92 15.5236 17.1546C15.8543 17.8053 16.2383 18.424 16.665 19C18.4036 18.4666 20.185 17.6559 22.01 16.3226C22.4687 11.7787 21.2836 7.83202 18.8943 4.34399ZM8.05593 13.9013C7.01058 13.9013 6.15725 12.952 6.15725 11.7893C6.15725 10.6267 6.98925 9.67731 8.05593 9.67731C9.11191 9.67731 9.97588 10.6267 9.95454 11.7893C9.95454 12.952 9.11191 13.9013 8.05593 13.9013ZM15.065 13.9013C14.0196 13.9013 13.1652 12.952 13.1652 11.7893C13.1652 10.6267 13.9983 9.67731 15.065 9.67731C16.121 9.67731 16.985 10.6267 16.9636 11.7893C16.9636 12.952 16.1317 13.9013 15.065 13.9013Z" stroke="#000000" strokeLinejoin="round"/>
</svg>
          </a>



          {/* Mobile hamburger */}
          <button
            className="md:hidden px-3 border-l-4 border-black flex items-center justify-center hover:bg-muted transition duration-150"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="flex flex-col space-y-1">
              <span
                className={`block w-5 h-0.5 bg-black transition-transform duration-300 ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-black transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-black transition-transform duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden bg-background border-t-4 border-black transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="p-4 border-b border-black hover:bg-muted transition duration-150 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}

          {/* Mobile Hire Me link */}
          <a
            href="#"
            className="p-4 hover:bg-muted transition duration-150 text-lg font-semibold"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
