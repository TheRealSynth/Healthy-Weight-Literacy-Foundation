import type { Metadata } from "next"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { generatePageMetadata } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Events",
  description: "Join us at upcoming workshops, health fairs, and community events.",
  path: "/events",
})

const upcomingEvents = [
  {
    title: "Family Wellness Workshop",
    date: "2024-02-15",
    time: "10:00 AM - 12:00 PM",
    location: "Chicago Community Center",
    type: "Workshop",
    description: "Learn practical strategies for making healthy eating fun and affordable for your whole family.",
    spots: 15,
  },
  {
    title: "Virtual Nutrition Q&A",
    date: "2024-02-22",
    time: "7:00 PM - 8:00 PM",
    location: "Online (Zoom)",
    type: "Webinar",
    description:
      "Live Q&A with our registered dietitians. Bring your questions about nutrition, meal planning, and more.",
    spots: 100,
  },
  {
    title: "Community Health Fair",
    date: "2024-03-10",
    time: "9:00 AM - 3:00 PM",
    location: "Lincoln Park, Chicago",
    type: "Health Fair",
    description: "Free health screenings, nutrition education, cooking demos, and family activities.",
    spots: null,
  },
  {
    title: "Healthy Cooking Class",
    date: "2024-03-18",
    time: "6:00 PM - 8:00 PM",
    location: "HWLF Teaching Kitchen",
    type: "Class",
    description: "Hands-on cooking class featuring budget-friendly, nutritious recipes you can make at home.",
    spots: 12,
  },
]

const pastEvents = [
  {
    title: "Annual Gala 2023",
    date: "2023-11-15",
    location: "The Drake Hotel, Chicago",
    type: "Fundraiser",
    attendees: 350,
  },
  {
    title: "Back-to-School Health Fair",
    date: "2023-08-20",
    location: "Multiple School Locations",
    type: "Health Fair",
    attendees: 2500,
  },
  {
    title: "Partner Summit 2023",
    date: "2023-06-10",
    location: "Virtual",
    type: "Conference",
    attendees: 150,
  },
]

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Events"
        description="Connect with us in person or online at our educational workshops, health fairs, and community gatherings."
        breadcrumbs={[{ label: "Events" }]}
      />

      <Section>
        <Container>
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <div className="grid gap-6 lg:grid-cols-2">
                {upcomingEvents.map((event) => (
                  <Card key={event.title} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <Badge variant="secondary">{event.type}</Badge>
                        {event.spots && (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {event.spots} spots left
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="mt-2">{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {new Date(event.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </div>
                      </div>
                      <Button className="w-full">
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past">
              <div className="space-y-4">
                {pastEvents.map((event) => (
                  <Card key={event.title}>
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline">{event.type}</Badge>
                          </div>
                          <h3 className="font-semibold text-lg text-secondary">{event.title}</h3>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(event.date).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {event.location}
                            </span>
                          </div>
                        </div>
                        <div className="text-center sm:text-right">
                          <div className="text-2xl font-bold text-primary">{event.attendees.toLocaleString()}</div>
                          <div className="text-sm text-muted-foreground">Attendees</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Container>
      </Section>

      {/* Host an Event */}
      <Section background="muted">
        <Container size="sm" className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Host an Event With Us</h2>
          <p className="text-muted-foreground mb-6">
            Interested in bringing a HWLF workshop or health fair to your organization or community? We&apos;d love to
            partner with you.
          </p>
          <Button>Request an Event</Button>
        </Container>
      </Section>
    </>
  )
}
