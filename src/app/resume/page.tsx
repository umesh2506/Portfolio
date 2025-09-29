import { PageHeader } from "@/components/app/page-header";
import { ResumeEditor } from "@/components/app/resume-editor";

export default function ResumePage() {
  return (
    <div className="flex flex-col min-h-svh">
      <PageHeader title="Interactive Resume" />
      <main className="flex-1">
        <ResumeEditor />
      </main>
    </div>
  );
}
