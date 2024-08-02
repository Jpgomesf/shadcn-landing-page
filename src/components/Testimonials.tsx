import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "",
    name: "John Cross",
    userName: "@john_cross",
    comment: "Using this CRM has revolutionized the way we handle customer interactions. The AI-driven insights are invaluable!",
  },
  {
    image: "",
    name: "Jane Smith",
    userName: "@janesmith",
    comment:
      "I love how intuitive and user-friendly this CRM is. Our team became more efficient almost overnight!",
  },

  {
    image: "",
    name: "Michael Johnson",
    userName: "@mjohnson",
    comment:
      "The integration with our existing systems was seamless, and the level of customization available is fantastic.",
  },
  {
    image: "",
    name: "Emily Brown",
    userName: "@emily_brown",
    comment:
      "The AI-powered analytics provide deep insights that help us tailor our marketing strategies more effectively.",
  },
  {
    image: "",
    name: "Chris Wilson",
    userName: "@chrisw1984",
    comment:
      "We saw a 30% increase in customer satisfaction scores within the first three months of using this CRM. Highly recommend!",
  },
  {
    image: "",
    name: "Sophia Lee",
    userName: "@sophia_lee",
    comment:
      "Our sales team loves the automated workflows. It's like having an extra set of hands to help manage leads and follow-ups.",
  },
];

export const Testimonials = () => {
  const getInitials = (name: string) => name.split(' ').map(part => part[0].toUpperCase()).join('')

  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        Us
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        See how our AI-powered CRM transforms businesses with increased efficiency,
        seamless integration, and deep insights.
        Trusted by satisfied users to handle their customer interactions and marketing strategies.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>{getInitials(name)}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
