import type {Metadata, Viewport} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prague Walker | Premium Private Tours",
  description: "",
  icons: {
    icon: "/vite.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="en"
      >
      <body
          className="antialiased scroll-smooth selection:bg-[#E8501C] selection:text-white">{children}</body>
      </html>
  );
}
