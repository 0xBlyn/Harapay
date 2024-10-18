import React from 'react';
import Image from 'next/image';
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
    quote: "The support team at Harapay is outstanding. They've been there every step of the way, ensuring our success.",
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
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          Hear from our partners
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white dark:bg-gray-700 shadow-lg">
              <CardHeader>
                <Avatar className="w-12 h-12 mb-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
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
