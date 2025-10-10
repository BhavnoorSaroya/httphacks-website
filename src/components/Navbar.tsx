import { useState } from "react"
// import { Button } from "@/components/retroui/Button"
import logo from "../assets/logo.png"
import discordIcon from "@/assets/discord.svg"
import { useNavigate } from "react-router-dom"
import { Button } from "./retroui/Button"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  let navigate = useNavigate();
  const discordInviteLink = "https://discord.gg/vvf3s2zZYK";

  const navItems = [
    // { title: "", href: "#projects" },
    { title: "Workshops", href: "#workshops" },
    { title: "FAQ", href: "#faq" },
    { title: "Contact Us", href: discordInviteLink },
  ]

  return (
    <nav className="w-full md:border-b-4 md:border-black bg-white ">
      {/* Main navbar row */}
      <div className="container mx-auto flex items-stretch justify-between px-4 xl:px-0 border-black md:border-b-0 border-b-4">
        {/* Left section - CC Logo */}
        <div onClick={() => navigate("/")} className="text-lg md:text-xl xl:text-2xl font-bold p-3 md:p-4 border-x-4 border-black flex items-center">
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
        <div className="items-center flex aspect-square">
          {/* (desktop only) */}
          <Button
            onClick={() => window.open(discordInviteLink, '_blank')}
            size="icon"
            className="hidden sm:flex"
            // className="hidden md:flex p-3 md:p-4 border-l-4 border-black items-center font-semibold hover:bg-muted transition duration-150 text-sm md:text-base aspect-square justify-center"
          >
            {/* discord icon */}

            <img src={discordIcon} alt="discord icon" className="h-6" />
            {/* I am told using the height and width attributes is not preffered and tailwind is more consistent or something??????????? */}

          </Button>



          {/* Mobile hamburger thing */}
          <button
            className="md:hidden pl-3  flex items-center justify-center hover:bg-muted transition duration-150"
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

      {/* Mobile dropdown puke*/}
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


        </div>
      </div>
    </nav>
  )
}
