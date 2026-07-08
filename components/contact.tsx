"use client";

import { ContactCard } from "@/components/contact-card";
import { Button } from "@/components/ui/button";
import {
  Instagram,
  Linkedin,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-kosuru-rolcy/",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kosuruaditya/",
    icon: Instagram,
  },
  {
    label: "Email",
    href: "mailto:kosurusai646@gmail.com",
    icon: MailIcon,
  },
];

export default function DefaultDemo() {
  return (
    <main className="relative flex min-h-screen items-center justify-center p-4">
      <div className="mx-auto max-w-5xl">
        <ContactCard
          title="Aditya Kosuru"
          description="AI, data, and full-stack developer. Reach me directly through email or social profiles."
          contactInfo={[
            {
              icon: MailIcon,
              label: "Email",
              value: "kosurusai646@gmail.com",
            },
            {
              icon: PhoneIcon,
              label: "Phone",
              value: "+91 9515457049",
            },
            {
              icon: MapPinIcon,
              label: "Location",
              value: "India",
              className: "col-span-2",
            },
          ]}
        >
          <div className="w-full space-y-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Button
                  key={link.href}
                  asChild
                  variant="outline"
                  className="w-full justify-start gap-3"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                </Button>
              );
            })}
          </div>
        </ContactCard>
      </div>
    </main>
  );
}
