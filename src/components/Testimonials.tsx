import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Harapay has been a game-changer for our platform. The integration was smooth, and our users love the seamless experience.",
    author: "Jane Doe",
    position: "CEO, TechCorp",
    avatar: "/images/avatar1.jpg"
  },
  {
    quote: "The support team at Harapay is outstanding. They've been there every step of the way, ensuring that customers are happy and satisfied.",
    author: "John Smith",
    position: "CTO, CryptoStart",
    avatar: "/images/avatar2.jpg"
  },
  {
    quote: "We've seen a significant increase in user engagement since implementing Harapay. It's been a fantastic addition to our service.",
    author: "Alice Johnson",
    position: "Product Manager, BlockChain Inc.",
    avatar: "/images/avatar3.jpg"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 lg:px-[5%] bg-gray-50 dark:bg-gray-800 rounded-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-9">
          Hear from our partners
        </h2>
        <div className="grid md:grid-cols-3 gap-4 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white dark:bg-gray-700 shadow-lg">
              <CardHeader>
                <Avatar className="w-12 h-12">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 italic">&quot;{testimonial.quote}&quot;</p>
              </CardContent>
              <CardFooter>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
