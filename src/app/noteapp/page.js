import { NoteFooter } from "@/component/noteeditor/NoteFooter";
import { NoteHeader } from "@/component/noteeditor/NoteHeader";
import { NotePreview } from "@/component/noteeditor/NotePreview";

export default async function Page() {
  return (
    <div>
      <NoteHeader />
      <NotePreview />
      <NoteFooter />
    </div>
  );
}
