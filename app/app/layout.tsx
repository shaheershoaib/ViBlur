"use client";

import "./globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import { WebSocketProvider } from "./contexts/WebSocketContext";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} relative min-h-screen`}>
				{
					//<div className="snow"></div>
					//<div className="snow2"></div>
				}
				<WebSocketProvider>
					<Navbar />
					<div>{children}</div>
				</WebSocketProvider>
			</body>
		</html>
	);
}
