import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Trophy,
  Award,
  Medal,
  Star,
  BookOpen,
  Microscope,
  Calculator,
  Monitor,
} from "lucide-react";

const studentAwards = [
  {
    title: "Board Merit Positions",
    description:
      "Students securing positions in BIEK merit lists across science subjects",
    year: "Ongoing",
    category: "Academic",
  },
  {
    title: "Curricular activity Awards",
    description: "Excelling in debates, quizzes, and science fairs",
    year: "Ongoing",
    category: "Academic",
  },
  {
    title: "Competition Awards",
    description: "Rewards in sports, projects and certificates",
    year: "Ongoing",
    category: "Academic",
  },
  {
    title: "Class Representative Awards",
    description: "Students become CR based on academic performance",
    year: "Annual",
    category: "Academic",
  },
];

const academicHonors = [
  {
    title: "Pre-Medical Excellence",
    description: "Outstanding performance in Biology, Chemistry, and Physics",
    icon: Microscope,
  },
  {
    title: "Pre-Engineering Achievement",
    description: "Excellence in Mathematics and technical subjects",
    icon: Calculator,
  },
  {
    title: "Computer Science Innovation",
    description: "Recognition for programming and technical skills",
    icon: Monitor,
  },
  {
    title: "Overall Academic Merit",
    description: "Comprehensive excellence across all subjects",
    icon: BookOpen,
  },
];

const scienceCompetitions = [
  {
    competition: "Science Projects",
    achievement: "Regional and national level participation",
    description:
      "Students competing in physics, chemistry, and biology projects",
  },
  {
    competition: "Quiz Competitions",
    achievement: "Inter-college quiz contests, championships and trophies",
    description: "Best performance in debates and quizzes",
  },
  {
    competition: "Sindh Digital Media Forum",
    achievement: "Partnership with Habib University for Digital Skills",
    description:
      "AGCS teamed up with Habib University for digital media events, 'shaping future crafting careers'.",
  },
  {
    competition: "Science Exhibitions",
    achievement: "Project presentations and demonstrations",
    description: "Innovative science projects and research presentations",
  },
];

const recognitionGallery = [
  {
    title: "Board Toppers Gallery",
    description: "Students who secured positions in BIEK merit lists",
    count: "50+",
    label: "Merit Holders",
  },
  {
    title: "Distinction Achievers",
    description: "Students with A+ grades in board examinations",
    count: "200+",
    label: "A+ Grades Annually",
  },
  {
    title: "Competition Winners",
    description: "Science olympiad and competition participants",
    count: "30+",
    label: "Annual Participants",
  },
  {
    title: "Subject Excellence",
    description: "Highest marks in individual subjects",
    count: "15+",
    label: "Subject Toppers",
  },
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div data-aos="fade-down" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Recognition
              </p>
              <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Our Achievements
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
                Celebrating the academic accomplishments and competitive success
                of our students across board examinations and science
                competitions.
              </p>
            </div>
          </div>
        </section>

        {/* Student Awards */}
        <section className="py-16 lg:py-24">
          <div data-aos="fade-up" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Awards
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Student Awards
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Recognition for outstanding academic performance and
                achievement.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {studentAwards.map((award, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="flex">
                    <div className="flex w-16 shrink-0 items-center justify-center bg-primary/10 rounded-full ml-3">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium text-foreground">
                            {award.title}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {award.description}
                          </p>
                        </div>
                        <span className="shrink-0 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                          {award.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Honors */}
        <section className="border-y border-border bg-muted/50 py-16 lg:py-24">
          <div data-aos="fade-up" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Honors
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Academic Honors
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Department-wise recognition for academic excellence.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {academicHonors.map((honor) => (
                <Card key={honor.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <honor.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="mt-4 text-lg">
                      {honor.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {honor.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Science Competitions */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Competitions
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Science Competitions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Participation and achievements in academic competitions.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {scienceCompetitions.map((item, index) => (
                <Card
                  key={index}
                  data-aos="fade-up"
                  className="overflow-hidden"
                >
                  <div className="grid md:grid-cols-3">
                    <div className="bg-primary/5 p-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Medal className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                        {item.competition}
                      </h3>
                    </div>
                    <div className="border-t border-border p-6 md:border-l md:border-t-0">
                      <p className="text-sm font-medium text-muted-foreground">
                        Achievement
                      </p>
                      <p className="mt-1 text-foreground">{item.achievement}</p>
                    </div>
                    <div className="border-t border-border p-6 md:border-l md:border-t-0">
                      <p className="text-sm font-medium text-muted-foreground">
                        Description
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition Gallery */}
        <section className="border-t border-border bg-muted/30 py-16 lg:py-24">
          <div data-aos="fade-down" className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Gallery
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Recognition Gallery
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Celebrating the achievements of our students and institution.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {recognitionGallery.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="bg-primary p-6 text-center">
                    <Star className="mx-auto h-8 w-8 text-accent" />
                    <p className="mt-4 font-serif text-3xl font-bold text-primary-foreground">
                      {item.count}
                    </p>
                    <p className="mt-1 text-sm text-primary-foreground/70">
                      {item.label}
                    </p>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Excellence */}
        <section className="py-16 lg:py-24">
          <div data-aos="fade-up" className="mx-auto max-w-7xl px-4 lg:px-8">
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="bg-primary p-8 lg:p-12">
                  <Award className="h-12 w-12 text-accent" />
                  <h3 className="mt-6 font-serif text-2xl font-bold text-primary-foreground sm:text-3xl">
                    Tradition of Excellence
                  </h3>
                  <p className="mt-4 text-primary-foreground/70">
                    Our achievements reflect the dedication of our students, the
                    commitment of our faculty, and the supportive learning
                    environment that Adamjee Government Science College
                    provides.
                  </p>
                </div>
                <div className="flex items-center justify-center bg-primary/5 p-8 lg:p-12">
                  <div className="text-center">
                    <p className="font-serif text-5xl font-bold text-primary">
                      60+
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      Years of Academic Excellence
                    </p>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Continuing the legacy of producing outstanding students
                      who contribute to society.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
