import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  heading?: string;
}

const FAQSection = ({ items, heading = "Pertanyaan yang Sering Diajukan (FAQ)" }: FAQSectionProps) => (
  <section className="py-16 lg:py-20 bg-secondary">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-10">{heading}</h2>
      <Accordion type="single" collapsible className="space-y-3">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
            <AccordionTrigger className="text-left text-foreground font-semibold text-sm lg:text-base">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm lg:text-base leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
