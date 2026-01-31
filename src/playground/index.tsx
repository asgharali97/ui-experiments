import { useState } from "react";
import { registry } from "./registry";
import ComponentList from "./componentlist";
import ComponentPreview from "./componentpreview";

export default function Playground() {
  const [activeId, setActiveId] = useState(registry[0]?.id);

  const activeItem = registry.find(item => item.id === activeId);

  return (
    <div className="flex h-screen">
      <ComponentList
        items={registry}
        activeId={activeId}
        onSelect={setActiveId}
      />
      <ComponentPreview item={activeItem} />
    </div>
  );
}
