import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/retroui/Button";
import { Card, CardContent } from "@/components/retroui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/retroui/Avatar";
import { Github, Linkedin } from "lucide-react";
import { Navbar } from './components/Navbar';




export default function App() {
  const { setTheme } = useTheme();

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-between p-8">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center max-w-3xl my-16">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-pink-500">Shadcn</span> landing page for{" "}
          <span className="text-sky-400">React</span> developers
        </h1>
        <p className="text-muted-foreground mb-8">
          Build your React landing page effortlessly with the required sections to your project.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            <Github className="w-4 h-4 mr-2" /> Github Repository
          </Button>
        </div>
      </section>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl my-16">
        <Card className="p-4">
          <CardContent>
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <p className="text-muted-foreground mb-4">$0 / month</p>
            <Button className="w-full mb-4">Start Free Trial</Button>
            <ul className="text-sm space-y-1">
              <li>✅ 4 Team members</li>
              <li>✅ 4 GB Storage</li>
              <li>✅ Up to 6 pages</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardContent className="flex flex-col items-center text-center">
            <Avatar className="w-16 h-16 mb-4">
              <AvatarImage src="/avatar.jpg" alt="Leo Miranda" />
              <AvatarFallback>LM</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold text-lg">Leo Miranda</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Frontend Developer
            </p>
            <p className="text-sm mb-3">
              I really enjoy transforming ideas into functional software that exceeds expectations.
            </p>
            <div className="flex gap-3">
              <Github className="w-5 h-5" />
              <Linkedin className="w-5 h-5" />
            </div>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardContent className="flex flex-col items-center text-center">
            <div className="mb-4 text-green-400">
              💡
            </div>
            <h3 className="font-semibold text-lg mb-2">Light & Dark mode</h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="text-sm text-muted-foreground my-8">
        <p>Investors and founders</p>
        <div className="flex gap-4 mt-2">
          <span>Sponsor 1</span>
          <span>Sponsor 2</span>
          <span>Sponsor 3</span>
          <span>Sponsor 4</span>
          <span>Sponsor 5</span>
          <span>Sponsor 6</span>
        </div>
      </footer>
    </main>
  );
}