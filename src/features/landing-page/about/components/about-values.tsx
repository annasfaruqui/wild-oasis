interface ValueItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

const aboutValues: ValueItem[] = [
  {
    id: "natural-materials",
    number: "01",
    title: "Natural Materials",
    description:
      "Handcrafted walnut, aged pine, and untreated wool blankets that age gracefully with every passing season.",
  },
  {
    id: "intimate-seclusion",
    number: "02",
    title: "Intimate Seclusion",
    description:
      "Bespoke private cabins generously spaced across wooded alpine acreage, ensuring serenity, personal space, and quiet rest.",
  },
  {
    id: "sustainable-stewardship",
    number: "03",
    title: "Sustainable Stewardship",
    description:
      "Powered by alpine solar arrays and heated with closed-loop geothermal systems that protect our fragile wilderness.",
  },
];

export function AboutValues() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {aboutValues.map((item) => (
        <div key={item.id} className="bg-bg-surface p-8 transition-colors">
          <span className="text-sm font-semibold text-accent-primary">
            {item.number}
          </span>
          <h3 className="mt-4 text-xl font-medium text-text-primary">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
