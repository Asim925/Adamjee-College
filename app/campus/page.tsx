import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building2,
  FlaskConical,
  BookOpen,
  Users,
  Monitor,
  Microscope,
  Atom,
  Calculator,
} from "lucide-react";
import Image from "next/image";

const facilities = [
  {
    title: "Physics Laboratory",
    description:
      "Equipped with apparatus for mechanics, optics, electricity, and modern physics experiments",
    icon: Atom,
  },
  {
    title: "Chemistry Laboratory",
    description:
      "Comprehensive setup for organic, inorganic, and physical chemistry practical work",
    icon: FlaskConical,
  },
  {
    title: "Biology Laboratory",
    description:
      "Microscopes, specimens, and equipment for biological sciences study",
    icon: Microscope,
  },
  {
    title: "Computer Laboratory",
    description:
      "Modern computers with programming environments and educational software",
    icon: Monitor,
  },
];

const classroomFeatures = [
  {
    title: "Spacious Classrooms",
    description: "Well-ventilated classrooms designed for effective learning",
  },
  {
    title: "Teaching Aids",
    description: "Blackboards, charts, and visual aids supporting instruction",
  },
  {
    title: "Adequate Seating",
    description: "Comfortable seating arrangements for all students",
  },
  {
    title: "Natural Lighting",
    description: "Classrooms designed with proper lighting conditions",
  },
];

const learningEnvironment = [
  {
    title: "Library",
    description:
      "Collection of textbooks, reference materials, and academic resources for student research and study",
    icon: BookOpen,
  },
  {
    title: "Ground",
    description:
      "For sports and assembly activities promoting Discipline and unity",
    icon: Users,
  },
  {
    title: "Faculty Offices",
    description:
      "Accessible faculty rooms for student consultations and academic guidance",
    icon: Building2,
  },
  {
    title: "Auditorium",
    description:
      "Speeches, seminars, and academic events to enhance learning experiences",
    icon: Calculator,
  },
];

const campusCulture = [
  {
    aspect: "Discipline",
    description: "Strong emphasis on academic discipline and punctuality",
  },
  {
    aspect: "Respect",
    description: "Culture of mutual respect between students and faculty",
  },
  {
    aspect: "Learning Focus",
    description: "Environment centered on academic achievement",
  },
  {
    aspect: "Collaboration",
    description: "Peer learning and collaborative study encouraged",
  },
];

export default function CampusPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div data-aos="fade-down" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Facilities
              </p>
              <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Our Campus
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
                A learning environment designed to support academic excellence
                with well-equipped laboratories, classrooms, and study
                facilities.
              </p>
            </div>
          </div>
        </section>

        {/* Campus Overview */}
        <section className="py-16 lg:py-24">
          <div data-aos="fade-right" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  Overview
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Campus Overview
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    Adamjee Government Science College is located in Karachi,
                    Sindh, providing a dedicated environment for science
                    education. The campus houses all necessary facilities for
                    intermediate-level science programs.
                  </p>
                  <p>
                    The institution features purpose-built laboratories for
                    Physics, Chemistry, Biology, and Computer Science, ensuring
                    students receive practical training alongside theoretical
                    instruction.
                  </p>
                  <p>
                    The campus environment emphasizes discipline, academic
                    focus, and a supportive learning atmosphere conducive to
                    student success.
                  </p>
                </div>
              </div>
              <Card className="p-8">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Campus Quick Facts
                </h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium text-foreground">
                      Gurumandir, Karachi, Sindh
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="text-muted-foreground">Established</span>
                    <span className="font-medium text-foreground">1961</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="text-muted-foreground">Science Labs</span>
                    <span className="font-medium text-foreground">4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Departments</span>
                    <span className="font-medium text-foreground">3</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Laboratories */}
        <section className="border-y border-border bg-muted/50 py-16 lg:py-24">
          <div data-aos="fade-left" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Practical Learning
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Science Laboratories
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Well-equipped laboratories for practical science education and
                experiments.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {facilities.map((facility) => (
                <Card key={facility.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <facility.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="mt-4 text-lg">
                      {facility.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {facility.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Classrooms */}
        <section className="py-16 lg:py-24">
          <div data-aos="fade-right" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  Instruction
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Classrooms
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Classrooms designed to facilitate effective teaching and
                  learning for intermediate science education.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {classroomFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-border bg-card p-4"
                    >
                      <h3 className="font-medium text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "/class1.jpg",
                  "/class2.jpg",
                  "/class3.jpg",
                  "/class4.jpg",
                ].map((i) => (
                  <div
                    key={i}
                    className="flex aspect-square items-center justify-center rounded-lg"
                  >
                    <Image src={i} alt="classes" height={280} width={280} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Learning Environment */}
        <section className="border-t border-border bg-muted/30 py-16 lg:py-24">
          <div data-aos="fade-left" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Resources
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Learning Environment
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Additional facilities supporting student learning and academic
                development.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {learningEnvironment.map((item) => (
                <Card key={item.title} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Campus Culture */}
        <section className="py-16 lg:py-24">
          <div data-aos="fade-right" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Character building society
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Campus Culture
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The values and environment that define student life at Adamjee
                Government Science College.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-4xl">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                  {campusCulture.map((item, index) => (
                    <div
                      key={index}
                      className={`p-6 ${
                        index % 2 === 0 ? "bg-card" : "bg-primary/5"
                      } ${index < 2 ? "border-b border-border md:border-b-0" : ""} ${
                        index % 2 === 0 ? "md:border-r md:border-border" : ""
                      }`}
                    >
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {item.aspect}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Image Grid Placeholder */}
        <section className="border-t border-border bg-primary py-16">
          <div data-aos="zoom-in" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-2xl font-bold tracking-tight text-primary-foreground">
                Campus Gallery
              </h2>
              <p className="mt-2 text-primary-foreground/70">
                Visual tour of our learning facilities
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                "/assembly.jpg",
                "/event.jpg",
                "/lab.jpg",
                "/result.jpg",
                "/class1.jpg",
                "/class2.jpg",
                "/class3.jpg",
                "/class4.jpg",
              ].map((image, index) => (
                <div
                  key={index}
                  className="flex aspect-4/3 items-center justify-center rounded-lg bg-primary-foreground/10"
                >
                  <div className="text-center p-4 overflow-hidden max-h-70">
                    <Image src={image} alt="classes" height={280} width={280} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
