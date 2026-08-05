type Props = {
  items: any[];
  activeId: string;
  onSelect: (id: string) => void;
};

export default function ComponentList({ items, activeId, onSelect }: Props) {
  return (
    <div className="w-sm border-r-[0.5px] border-neutral-700 p-4 space-y-2">
      {items.map(item => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={`block w-full text-left px-3 py-2 rounded
            ${activeId === item.id ? "bg-neutral-500" : "hover:bg-neutral-600"}`}
        >
          <div className="text-sm font-medium text-neutral-200">{item.meta.name}</div>
          <div className="text-xs text-gray-300">{item.meta.category}</div>
        </button>
      ))}
    </div>
  );
}
