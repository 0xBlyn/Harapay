import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Why build on Hedera?",
    answer: "Hedera offers low-cost, fast, and secure transactions with a highly decentralized governance structure. Its unique Hashgraph consensus algorithm ensures high throughput, making it perfect for scalable solutions like HaraPay."
  },
  {
    question: "How does HaraPay work without the internet",
    answer: "HaraPay leverages USSD technology to allow users to conduct transactions via SMS, enabling financial access even in areas with limited internet connectivity."
  },
  {
    question: "What makes HaraPay’s wallet unique?",
    answer: "HaraPay uses a user's phone number as their wallet ID, simplifying wallet creation and enhancing ease of use without compromising security."
  },
  {
    question: "Can I buy NFTs through HaraPay?",
    answer: "Yes, HaraPay allows users to buy, sell, and trade NFTs directly through the platform using USSD, ensuring accessibility even for users without internet"
  },
  {
    question: "What are the key features of HaraPay?",
    answer: "HaraPay's MVP includes wallet creation, token transfer, checking balances, and basic NFT marketplace functionality—all through a USSD interface."
  }
];

const FAQ: React.FC = () => {
  return (
    <section className="py-14 px-5 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem  key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

