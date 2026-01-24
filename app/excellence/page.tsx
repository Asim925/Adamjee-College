import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  Award,
  Users,
  BookOpen,
  Target,
  CheckCircle,
} from "lucide-react";

const resultHighlights = [
  {
    metric: "92%+",
    label: "Pass Rate",
    description: "Consistently high pass rates across all science programs",
  },
  {
    metric: "A+ Grades",
    label: "Top Performers",
    description: "Significant percentage of students achieving distinction",
  },
  {
    metric: "Merit List",
    label: "Board Positions",
    description: "Regular representation in BIEK merit lists",
  },
];

const programResults = [
  {
    program: "Pre-Medical",
    passRate: "92%",
    distinctionRate: "35%",
    highlights: "Strong performance in Biology and Chemistry",
  },
  {
    program: "Pre-Engineering",
    passRate: "90%",
    distinctionRate: "38%",
    highlights: "Excellent results in Mathematics and Physics",
  },
  {
    program: "Computer Science",
    passRate: "91%",
    distinctionRate: "40%",
    highlights: "Outstanding programming and technical skills",
  },
];

const academicPractices = [
  {
    title: "Regular Assessment",
    description:
      "Continuous evaluation through tests, assignments, and practical examinations",
    icon: CheckCircle,
  },
  {
    title: "Board Preparation",
    description:
      "Intensive preparation sessions and mock examinations before board exams",
    icon: Target,
  },
  {
    title: "Faculty Excellence",
    description:
      "Experienced teachers dedicated to student success and academic support",
    icon: Users,
  },
  {
    title: "Study Resources",
    description:
      "Comprehensive study materials and reference resources for all subjects",
    icon: BookOpen,
  },
];

const yearlyConsistency = [
  {
    year: new Date().getFullYear() - 1,
    achievement: "Multiple merit positions in BIEK results",
  },
  {
    year: new Date().getFullYear() - 2,
    achievement: "Highest pass rate in college history",
  },
  {
    year: new Date().getFullYear() - 3,
    achievement: "Board toppers in Pre-Engineering stream",
  },
  {
    year: new Date().getFullYear() - 4,
    achievement: "Exceptional results despite pandemic challenges",
  },
  {
    year: new Date().getFullYear() - 5,
    achievement: "Record A+ grades across all departments",
  },
];

export default function ExcellencePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div data-aos="fade-down" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Academic Performance
              </p>
              <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Academic Excellence
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
                A tradition of outstanding board results and academic
                achievement maintained through disciplined education and
                dedicated faculty.
              </p>
            </div>
          </div>
        </section>

        {/* Result Highlights */}
        <section className="border-b border-border py-12">
          <div data-aos="fade-right" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {resultHighlights.map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-serif text-4xl font-bold text-primary">
                    {item.metric}
                  </p>
                  <p className="mt-2 font-medium text-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Board Result Highlights */}
        <section className="py-16 lg:py-24">
          <div data-aos="fade-left" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                BIEK Results
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                FSC Board Result Highlights
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Performance in Board of Intermediate Education Karachi
                examinations.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {programResults.map((program) => (
                <Card key={program.program} className="overflow-hidden">
                  <CardHeader className="bg-accent/10 py-3 flex items-center justify-center rounded-2xl m-2">
                    <CardTitle className="font-serif text-xl">
                      {program.program}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="">
                    <div className="flex justify-between border-b border-border pb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Pass Rate
                        </p>
                        <p className="font-serif text-2xl font-bold text-primary">
                          {program.passRate}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">
                          Distinction
                        </p>
                        <p className="font-serif text-2xl font-bold text-accent">
                          {program.distinctionRate}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      {program.highlights}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Merit Positions */}
        <section className="border-y border-border bg-muted/50 py-16 lg:py-24">
          <div data-aos="fade-right" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  Recognition
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Merit Positions
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Students of Adamjee Government Science College have
                  consistently secured positions in the Board of Intermediate
                  Education Karachi merit lists across all three departments.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">
                        Board Merit Lists
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Regular presence in top 25 positions across science
                        subjects
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <TrendingUp className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">
                        Subject Toppers
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Students achieving highest marks in individual subjects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="p-8">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Academic Consistency
                </h3>
                <div className="mt-6 space-y-4">
                  {yearlyConsistency.map((item) => (
                    <div key={item.year} className="flex items-center gap-4">
                      <span className="shrink-0 font-serif text-lg font-bold text-primary">
                        {item.year}
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {item.achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Academic Practices */}
        <section className="py-16 lg:py-24">
          <div data-aos="fade-left" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Approach
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Performance & Discipline
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The foundation of academic excellence through structured
                learning and disciplined approach.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {academicPractices.map((practice) => (
                <Card key={practice.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <practice.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="mt-4 text-lg">
                      {practice.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {practice.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Emphasis */}
        <section className="border-t border-border bg-primary py-16 lg:py-24">
          <div data-aos="fade-up" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                A Legacy of Excellence
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
                For over six decades, Adamjee Government Science College has
                maintained its commitment to academic excellence, producing
                generations of successful doctors, engineers, and technology
                professionals who contribute to Pakistan&apos;s development.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent/20 px-6 py-3">
                <Award className="h-5 w-5 text-accent" />
                <span className="font-medium text-primary-foreground">
                  60+ Years of Academic Excellence
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
