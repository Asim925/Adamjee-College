import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  Calculator,
  BookOpen,
  Target,
  GraduationCap,
  Sigma,
  Atom,
  TestTube,
} from "lucide-react";

const subjects = [
  {
    name: "Mathematics",
    description:
      "Advanced mathematics including calculus, algebra, trigonometry, and analytical geometry",
    icon: Sigma,
  },
  {
    name: "Physics",
    description:
      "Mechanics, electromagnetism, thermodynamics, and modern physics fundamentals",
    icon: Atom,
  },
  {
    name: "Chemistry",
    description:
      "Organic, inorganic, and physical chemistry essential for engineering applications",
    icon: TestTube,
  },
];

const learningOutcomes = [
  "Mastery of advanced mathematical concepts and problem-solving",
  "Understanding of physics principles in engineering applications",
  "Knowledge of chemistry for industrial and material sciences",
  "Development of analytical and logical reasoning skills",
  "Preparation for engineering entrance examinations (ECAT/NED)",
  "Foundation for technical and applied sciences",
];

const pathways = [
  {
    title: "Engineering (BE/BSc)",
    description: "Civil, Electrical, Mechanical, Chemical, and more",
  },
  {
    title: "Architecture",
    description: "Bachelor of Architecture programs",
  },
  {
    title: "Applied Sciences",
    description: "BS Physics, Mathematics, and Applied Sciences",
  },
  {
    title: "Aviation",
    description: "Aeronautical engineering and aviation sciences",
  },
  {
    title: "Technology Management",
    description: "Engineering management and industrial technology",
  },
  {
    title: "Research Sciences",
    description: "Pure and applied mathematics, physics research",
  },
];

export default function PreEngineeringPage() {
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
                <Calculator className="h-10 w-10 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  FSC Pre-Engineering
                </p>
                <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                  Pre-Engineering Program
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
                  Strong foundation in mathematics and physics for aspiring
                  engineers, architects, and technical professionals.
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
                    The Pre-Engineering program prepares students for careers in
                    engineering, architecture, and applied sciences. The
                    curriculum emphasizes advanced mathematics, physics
                    principles, and chemistry fundamentals essential for
                    technical education.
                  </p>
                  <p>
                    Students develop strong analytical and problem-solving
                    skills through rigorous mathematical training and practical
                    physics experiments. The program builds the foundation
                    necessary for success in engineering entrance examinations
                    and university education.
                  </p>
                  <p>
                    Laboratory work and practical applications ensure students
                    understand real-world engineering principles and their
                    applications in modern technology and infrastructure.
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
                Mathematics-focused curriculum building engineering
                fundamentals.
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
                  Upon completion of the Pre-Engineering program, students will
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
                Career options available to Pre-Engineering graduates.
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
