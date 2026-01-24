import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  Monitor,
  BookOpen,
  Target,
  GraduationCap,
  Code,
  Sigma,
  Atom,
} from "lucide-react";

const subjects = [
  {
    name: "Computer Science",
    description:
      "Programming fundamentals, algorithms, data structures, and computer systems",
    icon: Code,
  },
  {
    name: "Mathematics",
    description:
      "Discrete mathematics, statistics, and computational mathematics",
    icon: Sigma,
  },
  {
    name: "Physics",
    description:
      "Electronics, digital systems, and physics principles in computing",
    icon: Atom,
  },
];

const learningOutcomes = [
  "Proficiency in programming languages and software development",
  "Understanding of algorithms and data structures",
  "Knowledge of computer hardware and systems",
  "Mathematical foundation for computational problem-solving",
  "Preparation for computer science degree programs",
  "Skills for the evolving technology industry",
];

const pathways = [
  {
    title: "Software Engineering",
    description: "BS/BE in Software Engineering and Development",
  },
  {
    title: "Computer Science",
    description: "BS Computer Science from leading universities",
  },
  {
    title: "Data Science",
    description: "Data analytics and artificial intelligence programs",
  },
  {
    title: "Cybersecurity",
    description: "Information security and network protection",
  },
  {
    title: "IT Management",
    description: "Business technology and systems management",
  },
  {
    title: "Computer Engineering",
    description: "Hardware and embedded systems engineering",
  },
];

export default function ComputerSciencePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Academics
            </Link>
            <div className="mt-8 flex items-start gap-6">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-accent/20">
                <Monitor className="h-10 w-10 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  ICS Computer Science
                </p>
                <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                  Computer Science Program
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
                  Modern computing education preparing students for the digital
                  economy and technology sector careers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Focus */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  Academic Focus
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Program Overview
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    The ICS Computer Science program provides comprehensive
                    education in computing fundamentals, programming, and
                    information technology. Students learn essential skills for
                    the rapidly evolving digital technology sector.
                  </p>
                  <p>
                    The curriculum covers programming languages, algorithmic
                    thinking, computer systems, and mathematical foundations.
                    Practical laboratory work ensures hands-on experience with
                    modern computing tools and software development.
                  </p>
                  <p>
                    Students develop both technical skills and problem-solving
                    abilities, preparing them for computer science degree
                    programs and careers in the technology industry.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Duration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      2 Years (Grade XI and XII)
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Target className="h-5 w-5 text-accent" />
                      Examination Board
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Board of Intermediate Education Karachi (BIEK)
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Subjects Taught */}
        <section className="border-y border-border bg-muted/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Curriculum
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Core Subjects
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Technology-focused curriculum building computing fundamentals.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {subjects.map((subject) => (
                <Card key={subject.name} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <subject.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="mt-4 font-serif text-xl">
                      {subject.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {subject.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Additional Subjects: English, Urdu, Pakistan Studies, Islamiat
              </p>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  Outcomes
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Learning Outcomes
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Upon completion of the Computer Science program, students will
                  have developed:
                </p>
              </div>
              <div>
                <ul className="space-y-4">
                  {learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Higher Education Pathways */}
        <section className="border-t border-border bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Future
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Higher Education Pathways
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Career options available to Computer Science graduates.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pathways.map((pathway) => (
                <Card key={pathway.title} className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                    <GraduationCap className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mt-4 font-medium text-foreground">
                    {pathway.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {pathway.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
