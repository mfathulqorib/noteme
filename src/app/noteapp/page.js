import { NoteHeader } from "@/component/noteeditor/NoteHeader";
import { NotePreview } from "@/component/noteeditor/NotePreview";

// async function getNote() {
//   const res = await fetch(
//     "https://devscale-mockapi.fly.dev/api/collections/notes/records",
//     {
//       method: "GET",
//     }
//   );
//   const data = res.json();
//   return data;
// }

export default async function Page() {
  // const { items } = await getNote();
  // console.log(items);

  return (
    <div>
      <NoteHeader />
      <NotePreview />
    </div>
  );
}
