import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CLINIC_INFO, SERVICES } from '@/lib/avs-data';

export default function Footer() {
  return (
    <footer className="w-full bg-forest text-paper border-t border-mist/20 pt-16 md:pt-24 pb-12">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-mist/20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-40 h-14 sm:w-48 sm:h-[70px] bg-white rounded-xl p-2 flex items-center justify-center flex-shrink-0 shadow-md">
                <Image src="/images/steele-plumbing-logo.png" alt="Steele Plumbing LLC logo" width={220} height={80} className="object-contain w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-24 md:text-30 font-medium leading-tight">Steele Plumbing LLC</span>
                <span className="font-body text-13 text-paper/70 font-medium">Plumbing services</span>
              </div>
            </div>
            <p className="font-body text-16 text-paper/80 leading-relaxed max-w-xl">Residential plumbing repairs and installations, including new-construction plumbing. Call to discuss your project.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-13 text-paper/60">
              <a href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-paper">{CLINIC_INFO.contact.phone}</a>
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-12 flex flex-col justify-between">
            <div className="p-6 bg-paper/5 border border-mist/20 rounded-none shadow-sm">
              <span className="font-body text-13 text-lime block mb-2 font-semibold uppercase tracking-wider">Plumbing repairs and installation</span>
              <p className="font-body text-15 text-paper/90 mb-4">Need help with a plumbing issue? Call Steele Plumbing LLC to discuss service in Tupelo and nearby Mississippi communities.</p>
              <div className="flex flex-wrap items-center gap-4">
                <a href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} className="font-body text-15 font-semibold text-lime hover:underline">Call: {CLINIC_INFO.contact.phone}</a>
                <Link href="/quote/" className="font-body text-13 text-paper/80 underline underline-offset-4 hover:text-paper">Request a quote</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16 border-b border-mist/20">
          <div className="col-span-1">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">Services</span>
            <ul className="space-y-2.5 font-body text-15">{SERVICES.map((service) => <li key={service.slug}><Link href={`/${service.slug}/`} className="text-paper/80 hover:text-lime transition-colors">{service.navLabel}</Link></li>)}</ul>
          </div>
          <div className="col-span-1">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">Steele Plumbing LLC</span>
            <ul className="space-y-2.5 font-body text-15">
              <li><Link href="/about/" className="text-paper/80 hover:text-lime transition-colors">About us</Link></li>
              <li><Link href="/team/" className="text-paper/80 hover:text-lime transition-colors">Our team</Link></li>
              <li><Link href="/reviews/" className="text-paper/80 hover:text-lime transition-colors">Customer reviews</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">Company</span>
            <ul className="space-y-2.5 font-body text-15">
              <li><Link href="/services/" className="text-paper/80 hover:text-lime transition-colors">All plumbing services</Link></li>
              <li><Link href="/plumbing-advice/" className="text-paper/80 hover:text-lime transition-colors">Plumbing advice</Link></li>
              <li><Link href="/quote/" className="text-paper/80 hover:text-lime transition-colors">Request a quote</Link></li>
              <li><Link href="/contact/" className="text-paper/80 hover:text-lime transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">Contact</span>
            <div className="space-y-3 font-body text-15 text-paper/80">
              <div><span className="text-paper/50 block text-13">Phone:</span><a href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-lime transition-colors font-medium">{CLINIC_INFO.contact.phone}</a></div>
              <div><span className="text-paper/50 block text-13">Address:</span><address className="not-italic leading-relaxed text-13 text-paper/70">{CLINIC_INFO.primaryLocation.directions}</address></div>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body text-13 text-paper/60">
          <div>© {new Date().getFullYear()} {CLINIC_INFO.legalName}. All rights reserved.</div>
          <Link href="/" className="hover:text-paper">Steele Plumbing LLC</Link>
        </div>
      </div>
    </footer>
  );
}