"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award, Clock, Shield, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmallSizeLargeTitles"
        background="blurBottom"
        cardStyle="gradient-radial"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Services",          id: "features"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Colin's Emergency Roofers"
      button={{
        text: "Call Now",        href: "tel:5551234567"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars"}}
      title="We are welcoming you"
      description="Don't let a roof leak turn into a catastrophe. Colin's Emergency Roofers provides rapid, reliable, and professional roofing solutions when you need them most."
      buttons={[
        {
          text: "Get Emergency Support",          href: "#contact"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-walking-roof_1321-1040.jpg",          imageAlt: "Professional roofing service San Diego"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-working-roof-front-view_23-2148748780.jpg",          imageAlt: "Roof inspection worker safety"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-looking-into-solid-fuel-boiler-working-with-biofuels-economical-heating-top-view_169016-14806.jpg",          imageAlt: "Roof leak repair emergency service"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="About Colin's Roofers"
      title="San Diego's Trusted Roofing Partner"
      description="With over 15 years of serving the San Diego area, we have built a reputation for speed, precision, and honesty. We understand that roofing issues are stressful, and we prioritize your property's safety above all else."
      subdescription="Our team is fully licensed, insured, and ready to handle any roofing emergency."
      icon={Shield}
      imageSrc="http://img.b2bpic.net/free-photo/man-working-roof-with-drill-low-view_23-2148748772.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Leak Detection",          description: "Rapid identification and patching of roof leaks to prevent water damage.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-roof_23-2149343653.jpg",          imageAlt: "Professional roofing service San Diego"},
        {
          title: "Storm Damage Repair",          description: "Professional repair of roof damage caused by severe weather conditions.",          imageSrc: "http://img.b2bpic.net/free-photo/man-holding-hammer-drill-looking-away_23-2148748783.jpg",          imageAlt: "Roof inspection worker safety"},
        {
          title: "Emergency Tarping",          description: "Immediate tarping services to protect your home until permanent repairs can be made.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-house-snowy-landscape_181624-28756.jpg",          imageAlt: "Roof leak repair emergency service"},
      ]}
      title="Emergency Roofing Services"
      description="We offer a comprehensive suite of emergency roofing services designed to mitigate damage quickly."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          icon: Award,
          title: "Projects Completed",          value: "5,000+"},
        {
          id: "m2",          icon: Clock,
          title: "Emergency Response",          value: "24/7"},
        {
          id: "m3",          icon: Star,
          title: "Customer Rating",          value: "4.9/5"},
      ]}
      title="Roofing By The Numbers"
      description="Our success is built on thousands of satisfied customers across Southern California."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          title: "Lifesavers!",          quote: "Colin's team saved my home during the heavy storm. They were there within 30 minutes.",          name: "Jane Doe",          role: "Homeowner",          imageSrc: "http://img.b2bpic.net/free-photo/cute-girl-standing-near-wall-with-repair-tools_1157-29766.jpg"},
        {
          id: "t2",          title: "Quick and Efficient",          quote: "Professional, clean, and fast. The best roofers in San Diego.",          name: "John Smith",          role: "Business Owner",          imageSrc: "http://img.b2bpic.net/free-photo/young-man-holding-house-model-t-shirt-jacket-cap-looking-dreamy-front-view_176474-57862.jpg"},
        {
          id: "t3",          title: "Very Trustworthy",          quote: "I appreciate the transparency about the pricing. Highly recommend.",          name: "Sarah Lee",          role: "Resident",          imageSrc: "http://img.b2bpic.net/free-photo/man-smiling-holding-house_1187-3154.jpg"},
        {
          id: "t4",          title: "Quality Work",          quote: "They fixed our leak that had been bothering us for months in one afternoon.",          name: "Michael Brown",          role: "Local Resident",          imageSrc: "http://img.b2bpic.net/free-photo/young-girl-white-shirt-black-pants-looking-camera-happy-positive-showing-thumbs-up-sitting-chair-light-living-room_141793-94160.jpg"},
        {
          id: "t5",          title: "Top Notch Team",          quote: "Great communication and excellent work. Colin is the best in the business.",          name: "Emily White",          role: "Homeowner",          imageSrc: "http://img.b2bpic.net/free-photo/asian-attractive-glasses-interior-designer-working-house-site-renovation-construction-progress-with-smile-confident-desk-with-blue-print-drawing-tool_609648-514.jpg"},
      ]}
      title="Satisfied Customers"
      description="Hear what the San Diego community says about our emergency roof repair services."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split-description"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",          title: "How fast can you reach me?",          content: "We aim to be on-site within 60 minutes for emergency calls within San Diego."},
        {
          id: "q2",          title: "Do you offer free estimates?",          content: "Yes, we provide free initial assessments for all roofing projects."},
        {
          id: "q3",          title: "Are you licensed?",          content: "We are fully licensed and bonded in the state of California."},
      ]}
      title="Common Roofing Questions"
      description="Everything you need to know about our emergency roof services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Request Assistance Now"
      description="Submit your information, and our emergency team will contact you immediately."
      inputs={[
        {
          name: "fullName",          type: "text",          placeholder: "Full Name",          required: true,
        },
        {
          name: "phone",          type: "tel",          placeholder: "Phone Number",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Email Address",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Briefly describe your roofing issue",        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/young-engineer-talking-mobile-phone-uniform-looking-pensive-front-view_176474-21326.jpg"
      buttonText="Send Emergency Request"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Colin's Emergency Roofers"
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Careers",              href: "#"},
          ],
        },
        {
          title: "Services",          items: [
            {
              label: "Emergency Repair",              href: "#features"},
            {
              label: "Leak Patching",              href: "#features"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}