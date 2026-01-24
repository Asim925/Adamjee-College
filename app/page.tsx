import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Users,
  Building2,
  MapPin,
  GraduationCap,
  Trophy,
  FlaskConical,
  Calculator,
  Monitor,
} from "lucide-react";
import Contacts from "@/components/Contacts";

const stats = [
  { label: "Students per year", value: "2,400+", icon: Users },
  { label: "Departments", value: "3", icon: Building2 },
  { label: "Location", value: "Karachi", icon: MapPin },
  { label: "Since", value: "1961", icon: GraduationCap },
];

const departments = [
  {
    title: "Pre-Medical",
    description:
      "Comprehensive preparation for medical and healthcare careers with focus on Biology, Chemistry, and Physics.",
    icon: FlaskConical,
    href: "/academics/pre-medical",
  },
  {
    title: "Pre-Engineering",
    description:
      "Strong foundation in Mathematics and Physics for aspiring engineers and technical professionals.",
    icon: Calculator,
    href: "/academics/pre-engineering",
  },
  {
    title: "Computer Science",
    description:
      "Modern computing education preparing students for the digital economy and technology sector.",
    icon: Monitor,
    href: "/academics/computer-science",
  },
];

const achievements = [
  {
    title: "Board Toppers",
    description: "Consistent merit positions in BIEK examinations",
  },
  {
    title: "Intercollegiate competitions",
    description: "National and regional college competition winners",
  },
  {
    title: "Academic Excellence",
    description: "High percentage of A+ grades in board results",
  },
  {
    title: "University Admissions",
    description: "Strong placement in top universities",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Contacts />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Established 1961
              </p>

              <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
                Adamjee Government Science College
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Karachi&apos;s #1 Top-Ranked College for Excellence, Innovation,
                and Merit. Shaping Brightest Minds in Science, Medicine, and
                Engineering Since 1961.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-accent font-bold">
                Character Builiding Society (CBS)
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/academics"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Explore Programs
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/institution"
                  className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  About Institution
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Dashboard */}
        <section className="border-b border-border bg-card py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div
              data-aos="fade-left"
              className="grid grid-cols-2 gap-6 md:grid-cols-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="mt-4 font-serif text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Excellence Snapshot */}
        <section className="py-16 lg:py-24">
          <div data-aos="fade-up" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Academic Excellence
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Excellence in Board Results
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Adamjee College is recognized for academic excellence,
                consistently securing top merit positions in the Board of
                Intermediate Education Karachi examinations.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card className="border-l-4 border-l-primary hover:scale-102 transition-transform">
                <CardHeader>
                  <CardTitle className="font-serif text-4xl text-primary">
                    92%+
                  </CardTitle>
                  <CardDescription>Pass Rate</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Consistently high pass rates across all science programs
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-accent  hover:scale-102 transition-transform">
                <CardHeader>
                  <CardTitle className="font-serif text-4xl text-accent">
                    Top 10
                  </CardTitle>
                  <CardDescription>Merit Positions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Regular presence in board merit lists and distinctions
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary hover:scale-102 transition-transform">
                <CardHeader>
                  <CardTitle className="font-serif text-4xl text-primary">
                    60+
                  </CardTitle>
                  <CardDescription>Years of Excellence</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Decades of academic tradition and quality education
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Department Overview */}
        <section className="border-y border-border bg-muted/50 py-16 lg:py-24">
          <div data-aos="fade-right" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Programs
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Academic Departments
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Three specialized departments offering comprehensive science
                education aligned with the Board of Intermediate Education
                Karachi curriculum.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {departments.map((dept) => (
                <Link key={dept.title} href={dept.href}>
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <dept.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="mt-4 font-serif">
                        {dept.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {dept.description}
                      </CardDescription>
                      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                        Learn more
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Achievements */}
        <section className="py-16 lg:py-24">
          <div data-aos="fade-left" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  Recognition
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Our Achievements
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Adamjee College has a strong record of achievements across
                  academics and extracurricular activities. The college has
                  consistently produced high-merit students and remains at the
                  top of college merit lists. Its students regularly win
                  intercollegiate competitions, including quizzes, sports, and
                  speech contests. Adamjee College is widely recognized as one
                  of Sindh&apos;s leading institutions for science education.
                  These achievements reflect a balanced focus on academic
                  excellence, talent development, and student success.
                </p>
                <div className="mt-8">
                  <Link
                    href="/achievements"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    View all achievements
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="bg-card">
                    <CardHeader className="pb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                        <Trophy className="h-5 w-5 text-accent" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h3 className="font-medium text-foreground">
                        {achievement.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Image Grid Placeholder */}
        <section className="border-t border-border bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-2xl font-bold tracking-tight text-primary-foreground">
                Achievement Gallery
              </h2>
              <p className="mt-2 text-primary-foreground/70">
                Proud moments and events showcasing our students&apos; successes
                and college activities.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                "/result.jpg",
                "/assembly.jpg",
                "/proud5.jpg",
                "/proud2.jpg",
                "/proud1.jpg",
                "/proud4.jpg",

                "/proud6.jpg",
                "/proud7.jpg",
              ].map((image, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="flex aspect-4/3 items-center justify-center rounded-lg bg-primary-foreground/10"
                >
                  <div className="text-center p-4 overflow-hidden">
                    <Image src={image} alt="classes" height={280} width={280} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campus Image Strip Placeholder */}
        <section className="border-t border-border bg-muted/30 py-16">
          <div data-aos="zoom-in" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Our Campus
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground">
                Learning Environment
              </h2>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                "Well-equipped science laboratories designed to support hands-on practical learning",
                "Modern classrooms with adequate facilities for a comfortable and effective learning environment",
                "A fully resourced library offering a wide range of academic and reference materials",
                "A spacious auditorium used for academic events, seminars, and guest lectures",
              ].map((caption, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg bg-primary/5"
                >
                  <div className="aspect-4/3 flex items-center justify-center p-4">
                    <div className="text-center">
                      <Building2 className="mx-auto h-8 w-8 text-primary/70" />
                      <p className="mt-2 text-xs text-muted-foreground">
                        {caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/campus"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Explore campus
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
