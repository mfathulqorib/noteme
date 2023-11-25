import { Inter } from "next/font/google";
import "../styles/globals.css";
import { NoteProvider } from "@/component/provider/NoteProvider";
import { NoteLayout } from "@/component/noteeditor/NoteLayout";
import { data } from "autoprefixer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

async function getNote() {
  const res = await fetch(
    "https://devscale-mockapi.fly.dev/api/collections/notes/records",
    {
      method: "GET",
    }
  );
  const data = res.json();
  return data;
}
export default async function RootLayout({ children }) {
  const { items } = await getNote();

  return (
    <html lang="en">
      <body className={`overflow-y-scroll custom-scrollbar ${inter.className}`}>
        <NoteLayout>
          <NoteProvider datapi={items}>{children}</NoteProvider>
        </NoteLayout>
      </body>
    </html>
  );
}
