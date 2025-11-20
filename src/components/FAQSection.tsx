import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Buzz know who's a 'strong mutual match'?",
    answer: "Buzz uses your stated intentions (casual, serious, marriage, etc.) and your non-negotiables. It only buzzes when someone nearby meets all your requirements and you meet all of theirs. It's mutual from the start."
  },
  {
    question: "Can people see me even if I don't turn Roam ON?",
    answer: "No. Your profile is completely invisible unless you actively turn Roam ON. There's no browsable database of profiles."
  },
  {
    question: "What if I want to be more selective than 'strong match'?",
    answer: "You control exactly what makes someone compatible through your non-negotiables. If it's non-negotiable for you, Buzz won't match you with anyone who doesn't meet it—period."
  },
  {
    question: "Is Buzz only for serious relationships?",
    answer: "Not at all. Buzz supports all intentions: casual, serious, long-term, or figuring it out. The key is that you're matched with people who want the same thing."
  },
  {
    question: "How close do we need to be for Buzz to work?",
    answer: "Typically within the same venue or nearby—think same coffee shop, bar, or event. Close enough that meeting right then actually makes sense."
  },
  {
    question: "What happens if I tap yes but they don't?",
    answer: "Nothing. Neither of you will know the other existed. Complete deniability if it's not mutual."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Questions? We got you.
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about how Buzz works.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-2xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
