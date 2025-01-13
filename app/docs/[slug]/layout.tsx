import { DocsSidebarNav } from "@/components/layout/DocsSidebarNav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { docsConfig } from "@/config/docs";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="border-b max-w-screen-2xl mx-auto">
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full pr-6 py-6 lg:py-8 border-grid border-r">
            <DocsSidebarNav config={docsConfig} />
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  );
}
