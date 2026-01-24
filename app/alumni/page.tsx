import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap,
  Stethoscope,
  Building,
  Monitor,
  FlaskConical,
  Briefcase,
  Globe,
  TrendingUp,
} from "lucide-react";

const higherEducationPathways = [
  {
    field: "Medical Sciences",
    description:
      "Graduates pursuing MBBS, BDS, Pharmacy, and Allied Health Sciences from recognized medical institutions",
    icon: Stethoscope,
    institutions: ["Medical Colleges", "Dental Colleges", "Pharmacy Schools"],
  },
  {
    field: "Engineering",
    description:
      "Students admitted to engineering programs in Civil, Electrical, Mechanical, and other disciplines",
    icon: Building,
    institutions: ["NED University", "MUET", "Engineering Universities"],
  },
  {
    field: "Computer Science & IT",
    description:
      "Alumni pursuing software engineering, data science, and information technology degrees",
    icon: Monitor,
    institutions: ["FAST NUCES", "IBA", "Computer Science Departments"],
  },
  {
    field: "Natural Sciences",
    description:
      "Students continuing in pure sciences including Physics, Chemistry, and Mathematics",
    icon: FlaskConical,
    institutions: ["University of Karachi", "Science Faculties"],
  },
];

const professionalFields = [
  {
    sector: "Healthcare",
    description:
      "Doctors, dentists, pharmacists, and healthcare professionals serving in hospitals and clinics",
    percentage: "35%",
  },
  {
    sector: "Engineering",
    description:
      "Engineers working in construction, manufacturing, energy, and infrastructure sectors",
    percentage: "30%",
  },
  {
    sector: "Technology",
    description:
      "Software developers, IT professionals, and technology specialists in the digital economy",
    percentage: "20%",
  },
  {
    sector: "Education & Research",
    description:
      "Educators, researchers, and academics contributing to knowledge and teaching",
    percentage: "10%",
  },
  {
    sector: "Other Professions",
    description:
      "Professionals in business, government, and various other sectors",
    percentage: "5%",
  },
];

const impactAreas = [
  {
    title: "Healthcare Sector",
    description:
      "Alumni serving as medical professionals in hospitals across Pakistan",
    icon: Stethoscope,
  },
  {
    title: "Infrastructure Development",
    description:
      "Engineers contributing to national infrastructure and development projects",
    icon: Building,
  },
  {
    title: "Technology Industry",
    description:
      "IT professionals driving digital transformation and innovation",
    icon: Monitor,
  },
  {
    title: "Academic Institutions",
    description: "Educators and researchers in universities and colleges",
    icon: GraduationCap,
  },
];

const outcomes = [
  {
    metric: "60+",
    label: "Years",
    description: "Of producing successful graduates",
  },
  {
    metric: "1000+",
    label: "Per year Alumni",
    description: "Contributing to various professions",
  },
  {
    metric: "National",
    label: "Impact",
    description: "Graduates serving across Pakistan",
  },
];

export default function AlumniPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div data-aos="fade-down" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Our Graduates
              </p>
              <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Alumni Outcomes
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
                Factual overview of higher education pathways and professional
                contributions of Adamjee Government Science College graduates.
              </p>
            </div>
          </div>
        </section>

        {/* Outcomes Summary */}
        <section className="border-b border-border py-12">
          <div data-aos="fade-left" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {outcomes.map((item) => (
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

        {/* Higher Education Pathways */}
        <section className="py-16 lg:py-24">
          <div data-aos="fade-right" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Education
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Higher Education Pathways
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Academic destinations of graduates pursuing further education.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {higherEducationPathways.map((pathway) => (
                <Card key={pathway.field} className="overflow-hidden">
                  <div className="flex">
                    <div className="flex w-20 shrink-0 items-center justify-center bg-primary/10">
                      <pathway.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1 p-6">
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {pathway.field}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {pathway.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {pathway.institutions.map((inst) => (
                          <span
                            key={inst}
                            className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                          >
                            {inst}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Fields */}
        <section className="border-y border-border bg-muted/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Careers
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Professional Fields
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Distribution of alumni across various professional sectors.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-3xl space-y-6">
              {professionalFields.map((field, index) => (
                <Card data-aos="fade-left" key={index} className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <h3 className="font-medium text-foreground">
                          {field.sector}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {field.description}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="font-serif text-2xl font-bold text-primary">
                        {field.percentage}
                      </span>
                      <p className="text-xs text-muted-foreground">of alumni</p>
                    </div>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: field.percentage }}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* National Impact */}
        <section className="py-16 lg:py-24">
          <div data-aos="fade-right" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Contribution
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                National Academic Impact
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Areas where alumni contribute to national development and
                progress.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {impactAreas.map((area) => (
                <Card key={area.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <area.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="mt-4 text-lg">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="border-t border-border bg-primary py-16 lg:py-24">
          <div data-aos="fade-left" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <Globe className="h-12 w-12 text-accent" />
                <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                  A Legacy of Contribution
                </h2>
                <p className="mt-4 text-lg text-primary-foreground/70">
                  For over six decades, Adamjee Government Science College has
                  prepared students for meaningful careers in healthcare,
                  engineering, technology, and education. Our alumni continue to
                  serve Pakistan across all sectors, reflecting the
                  institution&apos;s commitment to quality science education.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-accent" />
                    <CardTitle className="mt-4 text-primary-foreground">
                      University Admissions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-primary-foreground/70">
                      Strong track record of graduates gaining admission to top
                      universities
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                  <CardHeader>
                    <GraduationCap className="h-8 w-8 text-accent" />
                    <CardTitle className="mt-4 text-primary-foreground">
                      Professional Success
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-primary-foreground/70">
                      Alumni established in respected positions across various
                      industries
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
