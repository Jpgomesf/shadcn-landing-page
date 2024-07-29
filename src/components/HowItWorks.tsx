import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accessibility",
    description:
      "We ensure our CRM solutions are accessible to all users, offering intuitive interfaces and seamless integration with your existing systems.",

  },
  {
    icon: <MapIcon />,
    title: "Community",
    description:
      "Join a thriving community of users and experts who share insights, best practices, and support each other in maximizing the potential of our CRM tools.",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalability",
    description:
      "Our CRMs are designed to grow with your business, providing scalable solutions that adapt to your evolving needs and increasing customer base.",
  },
  {
    icon: <GiftIcon />,
    title: "Gamification",
    description:
      "Enhance user engagement with built-in gamification features that motivate and reward your team, driving productivity and satisfaction.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl mb-12 md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
