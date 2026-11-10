import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedServices() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#1F1F1F] block mb-2 font-medium uppercase tracking-wider">Repairs &amp; installations</span>
          <h2 className="font-display text-33 md:text-41 text-[#1F1F1F]">Help for your home</h2>
        </AnimateOnScroll>
        <div className="flex flex-col space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#1F1F1F] uppercase tracking-wider block mb-2 font-medium">Plumbing</span>
              <h3 className="font-display text-26 md:text-33 text-[#1F1F1F] mb-4">Plumbing repairs for your home</h3>
              <p className="font-body text-15 md:text-17 text-[#1F1F1F]/80 leading-relaxed mb-6">Discuss plumbing repairs, leaks and drainage problems with the team.</p>
              <div className="p-4 bg-[#F5F5F5] border-l-4 border-[#231F20] mb-6 rounded-sm"><span className="font-body text-13 text-[#1F1F1F]/80"><strong className="text-[#1F1F1F] font-semibold">Before work begins:</strong> Call to discuss your property and arrange a suitable time.</span></div>
              <Button href="/plumbing-repairs/" variant="ghost" size="md">Get help with a repair</Button>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/plumbing-repair.jpg" alt="Plumbing project" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" /></div>
            </AnimateOnScroll>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6"><div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/plumbing-hot-water.jpg" alt="Plumbing project" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div></AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#1F1F1F] uppercase tracking-wider block mb-2 font-medium">Plumbing</span>
              <h3 className="font-display text-26 md:text-33 text-[#1F1F1F] mb-4">Toilets, sinks &amp; hot water</h3>
              <p className="font-body text-15 md:text-17 text-[#1F1F1F]/80 leading-relaxed mb-6">Get help with water heaters, toilets, sinks and bathroom fixtures.</p>
              <div className="p-4 bg-[#F5F5F5] border-l-4 border-[#231F20] mb-6 rounded-sm"><span className="font-body text-13 text-[#1F1F1F]/80"><strong className="text-[#1F1F1F] font-semibold">Talk to our team:</strong> We will discuss the work and next steps with you.</span></div>
              <Button href="/water-heater-service/" variant="ghost" size="md">Learn about water heater service</Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
