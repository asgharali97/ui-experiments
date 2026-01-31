type Props = {
  items: any[];
  activeId: string;
  onSelect: (id: string) => void;
};

export default function ComponentList({ items, activeId, onSelect }: Props) {
  return (
    <div className="w-64 border-r p-4 space-y-2">
      {items.map(item => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={`block w-full text-left px-3 py-2 rounded
            ${activeId === item.id ? "bg-gray-200" : "hover:bg-gray-100"}`}
        >
          <div className="text-sm font-medium">{item.meta.name}</div>
          <div className="text-xs text-gray-500">{item.meta.category}</div>
        </button>
      ))}
    </div>
  );
}
