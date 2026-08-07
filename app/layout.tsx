import type { Metadata } from "next";
import { headers } from "next/headers";
import "@fontsource-variable/big-shoulders-display";
import "@fontsource-variable/manrope";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3001";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;
  const title = "Aditya Kosuru — AI, Data & Full-Stack Developer";
  const description =
    "Portfolio of Aditya Kosuru, building AI agents, data platforms, and full-stack products from India.";

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    alternates: { canonical: baseUrl },
    themeColor: "#0e0e0e",
    icons: {
      icon: "/images/portrait.png",
      shortcut: "/images/portrait.png",
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: baseUrl,
      images: [
        {
          url: `${baseUrl}/og.png`,
          width: 1792,
          height: 1024,
          alt: "Aditya Kosuru — AI, Data & Full-Stack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
