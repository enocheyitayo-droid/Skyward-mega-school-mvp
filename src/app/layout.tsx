import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "SMS | School portal", template: "%s | SMS" },
  description: "The staff collaboration and academic portal for SKYWARD MEGA SCHOOL.",
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-NG"><body><a className="skip-link" href="#main-content">Skip to content</a>{children}</body></html>;
}
