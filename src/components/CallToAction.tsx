import React, { useRef } from 'react';
import Globe from "@/components/ui/globe";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import HeroVideoDialog from '@/components/ui/hero-video-dialog';
import { AnimatedList } from '@/components/ui/animated-list';
import { TweetCard } from '@/components/ui/tweet-card';
import { AnimatedBeam } from '@/components/ui/animated-beam';

const CallToAction: React.FC = () => {
  const containerRef = useRef(null);
  const fromRef = useRef(null);
  const toRef = useRef(null);

  const features = [
    {
      title: "3000.00% (100.00 ms)",
      subtitle: "Inline renders",
      description: "View components, hooks, and more inside your IDE.",
      className: "col-span-2 row-span-2",
      background: <HeroVideoDialog videoSrc="/videos/hero.mp4" thumbnailSrc="/videos/hero.png" />,
      icon: <Globe className="w-16 h-16 absolute bottom-4 right-4 opacity-50" />,
    },
    {
      title: "Features",
      list: ["UserList", "ProductPanel", "Chat", "SearchPanel", "Typography", "Styling", "Routing"],
      className: "row-span-3",
      background: (
        <AnimatedList className="absolute inset-0">
          {["UserList", "ProductPanel", "Chat", "SearchPanel", "Typography", "Styling", "Routing"].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </AnimatedList>
      ),
    },
    {
      title: "Optimizing Compiler",
      description: "Use the Million.js compiler to optimize DOM-heavy operations by up to 70%.",
      background: <TweetCard className="absolute inset-0" />,
    },
    {
      title: "Lightweight",
      description: "Best in class performance: <4kB gzipped and <1% of JS execution time.",
      background: <AnimatedBeam className="absolute inset-0" containerRef={containerRef} fromRef={fromRef} toRef={toRef} />,
    },
    {
      title: "Find slow code, fast",
      description: "Quickly find the slowest components in your app.",
      background: <HeroVideoDialog videoSrc="/videos/hero.mp4" thumbnailSrc="/videos/hero.png" />,
    },
    {
      title: "Production observability",
      description: "Collect production application data (errors, performance) and see it in your IDE.",
      className: "col-span-2",
      background: (
        <AnimatedList className="absolute inset-0">
          {["Errors", "Performance", "IDE Integration"].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </AnimatedList>
      ),
      icon: <Globe className="w-16 h-16 absolute bottom-2 right-2 opacity-50" />,
    },
    // {
    //   title: "Replay",
    //   description: "Investigate and reproduce performance issues.",
    //   background: <TweetCard className="absolute inset-0" />,
    // },
    // {
    //   title: "24/7 support",
    //   description: "Can't solve a problem? We're here to help.",
    //   background: <AnimatedBeam className="absolute inset-0" containerRef={containerRef} fromRef={fromRef} toRef={toRef} />,
    // },
  ];

  return (
    <section className="py-20 bg-black text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-extrabold mb-12 text-center">
          What's in Harapay?
        </h2>
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} className={feature.className || ''}>
              <div className="relative">
                {feature.background}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  {feature.subtitle && <p className="text-lg mb-2">{feature.subtitle}</p>}
                  {feature.description && <p className="text-sm text-gray-400">{feature.description}</p>}
                  {feature.list && (
                    <ul className="space-y-1 text-sm">
                      {feature.list.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {feature.icon}
                </div>
              </div>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  );
};

export default CallToAction;
