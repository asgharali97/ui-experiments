export default function ComponentPreview({ item }: { item: any }) {
  if (!item) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400">
        Select a component
      </div>
    );
  }

  const PreviewComponent = item.Component;

  return (
    <div className="flex-1 p-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">{item.meta.name}</h2>
        <p className="text-sm text-gray-500">{item.meta.notes}</p>
      </div>

      <div className="border rounded-lg p-6 bg-white">
        <PreviewComponent />
      </div>
    </div>
  );
}
