import { NoteCard } from "@/component/noteeditor/NoteCard";
import { NoteHeader } from "@/component/noteeditor/NoteHeader";
import { NotePreview } from "@/component/noteeditor/NotePreview";

export default function Page() {
  return (
    <div>
      <NoteHeader />
      <NotePreview />
    </div>
  );
}
