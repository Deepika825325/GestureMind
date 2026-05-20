import "./globals.css";

export const metadata = {
  title: "GestureMind AI",
  description: "Realtime Sign Language Translator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}