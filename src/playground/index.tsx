import { useState } from "react";
import { registry } from "./registry";
import ComponentList from "./componentlist";
import ComponentPreview from "./componentpreview";
export default function Playground() {
  const [activeId, setActiveId] = useState(registry[0]?.id);

  const activeItem = registry.find((item) => item.id === activeId);

  return (
    <>
      <div className="flex min-h-screen">
        <ComponentList
          items={registry}
          activeId={activeId}
          onSelect={setActiveId}
        />
        <ComponentPreview item={activeItem} />
      </div>
      <footer className="w-full py-1 px-1 text-center text-xs leading-loose text-muted-foreground sm:text-sm border-t border-neutral-700">
        Bulit by Asghar Ali. The source code is available on
        <span className="underline">
          <a href="https://github.com/asgharali97/ui-experiments" target="_blank">Github</a>  
        </span>.
      </footer>
    </>
  );
}
