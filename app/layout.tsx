import type { Metadata, Viewport } from "next";
import { Toaster } from 'react-hot-toast';
import ThemeProvider from "./_context/ThemeContext";
import "./globals.css";
import Provider from "./Provider";


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export const metadata: Metadata = {
  title: {
    template: 'پنل مدیریت | %s',
    default: 'پنل مدیریت | داشبورد'
  },
  description: "Admin Panel For Next Source Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="en">
      <body className="bg-gray-50 dark:bg-gray-900">
        <Provider>
          <ThemeProvider>
            <Toaster containerStyle={{ fontFamily: 'mo' }} />
            {children}
          </ThemeProvider>
        </Provider>

      </body>
    </html>
  );
}
