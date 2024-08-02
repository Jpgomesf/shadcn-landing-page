import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    "title": "Free trial",
    "popular": 0,
    "price": 0,
    "description": "Experience our core features at no cost for 3 days. Ideal for individuals or small teams just getting started.",
    "buttonText": "Get Started",
    "benefitList": [
      "5 Team member",
      "2 GB Storage",
      "Up to 2 connections",
      "Community support",
      "AI Trial"
    ]
  },
  {
    "title": "Premium",
    "popular": 1,
    "price": 40,
    "description": "Unlock advanced features and greater capacity. Perfect for growing teams looking to enhance their productivity.",
    "buttonText": "Start Free Trial",
    "benefitList": [
      "25 Team members",
      "4 GB Storage",
      "Up to 6 connections",
      "Priority support",
      "Enhanced AI capabilities"
    ]
  },
  {
    "title": "Enterprise",
    "popular": 0,
    "price": 100,
    "description": "Comprehensive solution for large teams requiring robust storage and premium support.",
    "buttonText": "Contact Us",
    "benefitList": [
      "100 Team members",
      "8 GB Storage",
      "Up to 10 connections",
      "Priority support",
      "Full AI integration"
    ]
  }
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
