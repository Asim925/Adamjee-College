import Link from "next/link";
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
  FlaskConical,
  Calculator,
  Monitor,
  BookOpen,
  Clock,
  GraduationCap,
} from "lucide-react";

const departments = [
  {
    title: "Pre-Medical (FSC)",
    slug: "pre-medical",
    description:
      "Comprehensive preparation for medical and healthcare careers with a strong foundation in biological sciences.",
    icon: FlaskConical,
    subjects: [
      "Biology",
      "Chemistry",
      "Physics",
      "English",
      "Urdu",
      "Pakistan Studies",
      "Islamiat",
    ],
    careers: [
      "Medicine (MBBS)",
      "Dentistry (BDS)",
      "Pharmacy",
      "Nursing",
      "Allied Health Sciences",
    ],
  },
  {
    title: "Pre-Engineering (FSC)",
    slug: "pre-engineering",
    description:
      "Strong foundation in mathematics and physics for aspiring engineers and technical professionals.",
    icon: Calculator,
    subjects: [
      "Mathematics",
      "Chemistry",
      "Physics",
      "English",
      "Urdu",
      "Pakistan Studies",
      "Islamiat",
    ],
    careers: [
      "Engineering (All Branches)",
      "Architecture",
      "Applied Sciences",
      "Technology Management",
    ],
  },
  {
    title: "Computer Science (ICS)",
    slug: "computer-science",
    description:
      "Modern computing education preparing students for the digital economy and technology sector.",
    icon: Monitor,
    subjects: [
      "Computer Science",
      "Mathematics",
      "Physics",
      "English",
      "Urdu",
      "Pakistan Studies",
      "Islamiat",
    ],
    careers: [
      "Software Engineering",
      "Data Science",
      "Cybersecurity",
      "IT Management",
      "Computer Engineering",
    ],
  },
];

const academicFeatures = [
  {
    title: "BIEK Curriculum",
    description:
      "Programs aligned with Board of Intermediate Education Karachi standards",
    icon: BookOpen,
  },
  {
    title: "2-Year Program",
    description: "Intermediate education spanning XI and XII grades",
    icon: Clock,
  },
  {
    title: "University Pathway",
    description: "Direct pathway to higher education in top universities",
    icon: GraduationCap,
  },
];

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div data-aos="fade-down" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Programs
              </p>
              <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Academic Programs
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
                Comprehensive science education programs designed to prepare
                students for higher education and professional careers in
                medicine, engineering, and technology.
              </p>
            </div>
          </div>
        </section>

        {/* Academic Structure Overview */}
        <section className="border-b border-border py-12">
          <div data-aos="fade-left" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {academicFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Structure */}
        <section className="py-16 lg:py-24">
          <div data-aos="fade-right" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Structure
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Academic Structure
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The college offers a two-year intermediate program (Grade XI and
                XII) in three specialized science streams.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <Card className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  First Year (XI)
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Foundation year focusing on core concepts and fundamentals
                  across all subjects. Students build essential knowledge and
                  practical skills required for advanced study.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Core subject foundations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Laboratory practical training
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Continuous assessment
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Second Year (XII)
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Advanced year with comprehensive coverage of syllabus and
                  intensive preparation for board examinations and university
                  entrance tests.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Advanced concepts mastery
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Board exam preparation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    University entrance guidance
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Department Listing */}
        <section className="border-t border-border bg-muted/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Departments
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Departments
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Three specialized departments offering comprehensive science
                education with dedicated faculty and resources.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              {departments.map((dept) => (
                <Card
                  data-aos="fade-right"
                  key={dept.slug}
                  className="overflow-hidden"
                >
                  <div className="grid lg:grid-cols-3">
                    <div className="bg-secondary/40 p-8 lg:p-10 rounded-2xl mx-6 max-lg:mb-5">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                        <dept.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">
                        {dept.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {dept.description}
                      </p>
                      <Link
                        href={`/academics/${dept.slug}`}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        View department details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <div className="border-t border-border p-8 lg:border-l lg:border-t-0 lg:p-10">
                      <h4 className="font-medium text-foreground">Subjects</h4>
                      <ul className="mt-4 space-y-2">
                        {dept.subjects.map((subject) => (
                          <li
                            key={subject}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="h-1 w-1 rounded-full bg-primary" />
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t border-border p-8 lg:border-l lg:border-t-0 lg:p-10">
                      <h4 className="font-medium text-foreground">
                        Career Pathways
                      </h4>
                      <ul className="mt-4 space-y-2">
                        {dept.careers.map((career) => (
                          <li
                            key={career}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="h-1 w-1 rounded-full bg-accent" />
                            {career}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
