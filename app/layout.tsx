"use client";
import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <MantineProvider>
          <div className="dark:bg-boxdark-2 dark:text-bodydark">
            {loading ? (
              <Loader />
            ) : (
              <div className="min-h-screen overflow-hidden">
                <main>
                  <div className="min-h-screen mx-auto max-w-screen-2xl flex justify-center items-center">
                    {children}
                    <ToastContainer />
                  </div>
                </main>
              </div>
            )}
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
