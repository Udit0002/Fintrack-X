import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/header";   // if file is components/header.(js|jsx|tsx)

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fintrack X",
  description: "One stop financial tracking solution",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          
          <footer className="relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-blue-800 opacity-95" />

            {/* Overlay Pattern (optional, can remove if you want cleaner look) */}
            {/* <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-cover bg-center" /> */}

            <div className="relative container mx-auto px-6 py-12 text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                
                {/* Column 1: Branding */}
                <div className="col-span-2 md:col-span-1">
                  <a href="/" className="flex items-center space-x-2">
                    <img src="/image.png" alt="Fintrack X Logo" className="h-9 w-auto drop-shadow-md" />
                  </a>
                  <p className="mt-4 text-sm opacity-90">
                    Your finances on autopilot. Gain clarity and control effortlessly.
                  </p>
                  <p className="mt-4 text-sm opacity-90">
                    &copy; 2025 Fintrack X. A project by Udit Chaudhary.
                  </p>
                </div>

                {/* Column 2: Product */}
                <div>
                  <h3 className="font-semibold tracking-wide">Product</h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li><a href="#features" className="hover:opacity-80 transition">Features</a></li>
                    <li><a href="/dashboard" className="hover:opacity-80 transition">Dashboard</a></li>
                  </ul>
                </div>

                {/* Column 3: Resources */}
                <div>
                  <h3 className="font-semibold tracking-wide">Resources</h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li><a href="/blog" className="hover:opacity-80 transition">Blog</a></li>
                    <li><a href="/faq" className="hover:opacity-80 transition">FAQ</a></li>
                  </ul>
                </div>

                {/* Column 4: Legal */}
                <div>
                  <h3 className="font-semibold tracking-wide">Legal</h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li><a href="/privacy" className="hover:opacity-80 transition">Privacy Policy</a></li>
                    <li><a href="/terms" className="hover:opacity-80 transition">Terms of Service</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </body>
    </html>
    </ClerkProvider>
  );
}
