import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Accordion } from "@/components/retroui/Accordion";
import { Text } from "@/components/retroui/Text";
import { Avatar } from "@/components/retroui/Avatar";
import { Calendar } from "lucide-react";
import { Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/retroui/Badge";


export default function App() {
  const discordInviteLink = "https://discord.gg/D4qNTvGs6p";
  let navigate = useNavigate();
  const workshops = [
    {
      date: "Oct 27 - SW03 1710",
      title: "Beginners Bootcamp",
      description:
        "Learn to design, build, and deploy a project in a matter of hours.",
    },
    {
      date: "Oct 29 - SW03 1710",
      title: "Surprise Workshop",
      description:
        "A special guest speaker will be joining us to share their insights and expertise.",
    },
    {
      date: "Nov 3 - SW03 1750",
      title: "Intro to ReactJS",
      description:
        "Learn the basics of ReactJS, THE frontend framework, using typescript and other tools that all the cool kids use.",
    },

  ];

  const faqs = [
    {
      question: "Who can participate?",
      answer:
        "Anyone from BCIT is welcome to join, whether you're a beginner or an experienced hacker. <b>Vibe coders beware, we might ask you a technical question or five</b>.",
    },
        {
      question: "How many people can be on a team?",
      answer:
        "Max 4 people per team, 5 if one of them is a term 1 CST student (we see you).",
    },
    {
      question: "Do I need a team?",
      answer:
        "Nope! You can join solo and form a team during the event. Registration has to be done individually by each team member.",
    },
    {
      question: "Is it free?",
      answer:
        "Yes",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, charger, coding skills, and maybe a mechanical keyboard and monitor if you have one. We'll provide snacks and swag!",
    },
  ];

  return (
    <div className="bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <main id="hero" className="relative flex flex-col items-center justify-center text-center min-h-screen">
        <h1 className="text-7xl md:text-9xl font-bold mb-4">
          <span className="text-primary [text-shadow:4px_4px_0_#3a3a3a] hover:[text-shadow:8px_8px_0_#3a3a3a]">HTTP Hacks</span>{" "}
          <span className="text-secondary [text-shadow:4px_4px_0_#5F4FE6]">2025</span>
        </h1>
        <Text className="text-muted-foreground mb-8 max-w-2xl">
          Brought to you by{" "}
          <a
            href={discordInviteLink}
            className="underline hover:text-primary transition"
          >
            BCIT Computing Club
          </a>
        </Text>
        <div className="flex gap-4">
          <Button size="sm" className="md:px-8 md:py-3 md:text-lg" onClick={() => navigate("/register")}>Register now</Button>
          <Button size="sm" className="md:px-8 md:py-3 md:text-lg" onClick={() => window.open(discordInviteLink, '_blank')} variant="secondary">Questions?&nbsp;<span className="text-muted-foreground">Ask!</span></Button>
        </div>

        {/* Scroll arrow -> jumps to #workshops, was an actual pain */}
        <a href="#workshops" className="absolute bottom-32 left-1/2 transform -translate-x-1/2" aria-label="Scroll to workshops">
          <span className="sr-only">Scroll to workshops</span>
          <div className="scroll-arrow text-muted-foreground hover:text-primary transition-colors" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 animate-bounce">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </a>
      </main>

      {/* Workshops Section */}
      <section id="workshops" className="py-16 px-6 md:px-12 bg-muted/30">
        <h2 className="text-4xl font-bold text-center mb-10">Workshops</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {workshops.map((ws, i) => (
            <Card key={i} className="w-full hover:shadow-md transition">
              <Card.Header>
                <Card.Title className="text-xl font-semibold">
                  {ws.title === "Surprise Workshop" ? <Gift className="inline mr-1" /> : ""}{ws.title} {/* this gift icon was a pain */}
                </Card.Title>
                <Text className="text-sm text-muted-foreground">
                  <Calendar className="inline mr-1 mb-1" size={14} />
                  {ws.date}
                </Text>
              </Card.Header>
              <Card.Content>
                <Text>{ws.description}</Text>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-10">FAQ</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4 w-full">
            {faqs.map((faq, i) => (
              <Accordion.Item key={i} value={`faq-${i}`}>
                <Accordion.Header >{faq.question}</Accordion.Header>
                <Accordion.Content>
                  <Text className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer / Testimonial Example */}
      <footer className="py-10 border-t flex flex-col items-center gap-4">
        <Card className="w-full max-w-[400px] shadow-none hover:shadow-md">
          <Card.Content>
            <Text className="text-lg text-center">
              &quot;HTTP Hacks is <span className="font-semibold">endorsed by me.</span> I think it is awesome
              and that <span className="font-semibold">everyone should join!</span>&quot;
            </Text>
            <div className="flex justify-start space-x-2 ">
              <Avatar className="h-10 w-10">
                <Avatar.Image
                  alt="avatar"
                  src="https://cdn.discordapp.com/avatars/420989939531120641/b36f8ac1ce60b9c601e79f571b083c50?size=1024"
                />
              </Avatar>
              <div>
                <div className="font-medium justify-start align-center pt-1.5">Polina Omelyantseva</div>
                {/* <div className="text-sm text-gray-500 dark:text-gray-400">
                  Chair, School of Computing and Academic Studies
                </div> */}
              </div>
            </div>
            <br />
            <Badge variant="surface" className="border-2 border-black"> Chair, School of Computing and Academic Studies </Badge>
          </Card.Content>
        </Card>

        <Text className="text-muted-foreground text-center">
          <span className="text-sm">&copy; 2025 BCIT Computing Club</span>
          <br />
          <span className="text-xs">made with ❤️ by <a className="underline" href="https://saroya.dev">saroya.dev</a> </span>
        </Text>
      </footer>
    </div>
  );
}
