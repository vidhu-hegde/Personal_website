import type { Metadata } from "next";

const siteName = "Vidhatri Hegde";
const siteDescription =
  "Vidhatri Hegde is an aspiring product manager building across technical projects, research, leadership, and structured execution.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: siteName,
  shortName: "VH",
  description: siteDescription,
  url: siteUrl,
  tagline: "CS at Penn State. Incoming Cornell MEM. Building toward product work with technical range.",
  // TODO: Replace with Vidhatri's real email address.
  emailHref: "mailto:TODO@example.com",
  // TODO: Replace with Vidhatri's real LinkedIn profile URL.
  linkedInHref: "https://www.linkedin.com/in/TODO",
  resumeHref: "/resume.pdf",
};

type MetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
};

export function buildMetadata({
  title,
  description = siteDescription,
  path = "",
}: MetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteName}` : siteName;
  const url = new URL(path, siteUrl).toString();

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      type: "website",
      url,
      siteName,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${siteName} portfolio preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["/opengraph-image"],
    },
  };
}
