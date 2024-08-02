import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    "question": "Is this CRM free?",
    "answer": "Yes, our basic CRM template is free to use. However, advanced features may require a subscription.",
    "value": "item-1"
  },
  {
    "question": "How secure is the data stored in your CRM?",
    "answer": "We prioritize data security with end-to-end encryption and regular security audits to ensure your data is protected.",
    "value": "item-2"
  },
  {
    "question": "Can I integrate this CRM with other tools?",
    "answer": "Absolutely! Our CRM supports integrations with popular tools like Slack, Zapier, and Google Workspace.",
    "value": "item-3"
  },
  {
    "question": "Is there customer support available?",
    "answer": "Yes, we offer 24/7 customer support via chat, email, and phone to assist you with any issues or questions.",
    "value": "item-4"
  },
  {
    "question": "Can I customize the CRM to fit my business needs?",
    "answer": "Yes, our CRM is highly customizable to meet the specific requirements of your business.",
    "value": "item-5"
  }
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
