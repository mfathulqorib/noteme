import { Inter } from "next/font/google";
import "../styles/globals.css";
import { NoteProvider } from "@/component/provider/NoteProvider";
import { NoteLayout } from "@/component/noteeditor/NoteLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Noteme",
  description: "Simple note app",
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NoteLayout>
          <NoteProvider>{children}</NoteProvider>
        </NoteLayout>
      </body>
    </html>
  );
}
