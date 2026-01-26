import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Target,
  Users,
  Award,
  Building,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";

const timeline = [
  {
    year: "1961",
    title: "Foundation",
    description:
      "Adamjee Government Science College was established in Karachi to provide quality science education.",
  },
  {
    year: "1965",
    title: "First Graduates",
    description:
      "The college celebrated its first batch of FSC graduates, marking the beginning of a proud tradition.",
  },
  {
    year: "1970s",
    title: "Expansion",
    description:
      "Addition of new laboratories and facilities to accommodate growing student enrollment.",
  },
  {
    year: "1980s",
    title: "Academic Recognition",
    description:
      "Established reputation for producing merit positions in board examinations consistently.",
  },
  {
    year: "1990s",
    title: "Infrastructure Development",
    description:
      "Major upgrades to science laboratories and introduction of computer science program.",
  },
  {
    year: "2000s",
    title: "Modern Era",
    description:
      "Integration of modern teaching methodologies while maintaining academic excellence.",
  },
  {
    year: "2010s",
    title: "Digital Integration",
    description:
      "Expansion of computer science facilities and digital learning resources.",
  },
  {
    year: "Present",
    title: "Continuing Excellence",
    description:
      "Serving over 1,500 students with commitment to quality science education.",
  },
];

const values = [
  {
    title: "Academic Rigor",
    description:
      "Maintaining high standards of academic excellence in science education",
    icon: BookOpen,
  },
  {
    title: "Scientific Inquiry",
    description:
      "Fostering curiosity and critical thinking through practical learning",
    icon: Target,
  },
  {
    title: "Character Development",
    description: "Building disciplined, ethical, and responsible citizens",
    icon: Users,
  },
  {
    title: "Merit-Based Excellence",
    description: "Recognizing and nurturing talent through fair assessment",
    icon: Award,
  },
];

export default function InstitutionPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div data-aos="fade-down" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                About Us
              </p>
              <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Our Institution
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
                A legacy of science education spanning over six decades,
                dedicated to nurturing the next generation of scientists,
                doctors, and engineers.
              </p>
            </div>
          </div>
        </section>

        {/* Institutional Overview */}
        <section className="py-16 lg:py-24">
          <div data-aos="fade-up" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Institutional Overview
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    Adamjee Government Science College stands as one of
                    Karachi&apos;s premier institutions for intermediate science
                    education. Established in 1961, the college has maintained a
                    steadfast commitment to academic excellence and the holistic
                    development of its students.
                  </p>
                  <p>
                    The institution offers comprehensive programs in
                    Pre-Medical, Pre-Engineering, and Computer Science streams,
                    preparing students for higher education and professional
                    careers in science and technology fields.
                  </p>
                  <p>
                    With a focus on practical learning, well-equipped
                    laboratories, and experienced faculty, the college provides
                    an environment conducive to academic achievement and
                    personal growth.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Building className="h-5 w-5 text-primary" />
                      Government Institution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Operated under the Government of Sindh, ensuring
                      accessible quality education for all students.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <GraduationCap className="h-5 w-5 text-accent" />
                      FSC Programs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Offering FSC Pre-Medical, Pre-Engineering, and Computer
                      Science programs aligned with BIEK curriculum.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Vision and Values */}
        <section className="border-y border-border bg-muted/50 py-16 lg:py-24">
          <div data-aos="fade-up" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Our Mission
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Vision & Academic Values
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Committed to providing quality science education that prepares
                students for higher education and professional success.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="mt-4 text-lg">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Historical Timeline */}
        <section id="history" className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Our Journey
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Historical Timeline
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Over six decades of dedication to science education in Karachi.
              </p>
            </div>

            <div className="relative mt-12">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />

              <div className="space-y-8">
                {timeline.map((event, index) => (
                  <div
                    key={event.year}
                    className={`relative flex items-start gap-6 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary md:left-1/2">
                      <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                    </div>

                    {/* Content */}
                    <div
                      data-aos={index % 2 === 0 ? "fade-up" : "fade-up"}
                      className={`ml-12 md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <Card>
                        <CardHeader className="pb-2">
                          <p className="font-serif text-2xl font-bold text-primary">
                            {event.year}
                          </p>
                          <CardTitle className="text-lg">
                            {event.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            {event.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Affiliations */}
        <section className="border-t border-border bg-muted/30 py-16 lg:py-24">
          <div data-aos="slide-up" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Affiliations
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Academic Affiliations
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">
                      Board of Intermediate Education Karachi (BIEK)
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Primary examining body for intermediate education. The
                      college follows BIEK curriculum and examination
                      guidelines.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">
                      University of Karachi
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Academic partnership and pathway for graduates pursuing
                      higher education in science and related fields.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="py-16 lg:py-24">
          <div data-aos="zoom-in" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Leadership
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                College Administration
              </h2>
            </div>

            <div className="mx-auto mt-12 max-w-md">
              <Card className="overflow-hidden">
                <div className="bg-accent/10 p-8 text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                    <Image
                      className="rounded-full"
                      src="/principal.jpeg"
                      alt="Principal"
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Principal
                  </h3>
                  <p className="mt-1 text-sm text-foreground">
                    Prof. Nasir Iqbal
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Leading the institution with dedication to academic
                    excellence and student development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
