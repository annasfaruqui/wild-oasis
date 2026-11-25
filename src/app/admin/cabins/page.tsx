import { cabins } from "@/data/data-cabins";
import { Button } from "@/components/ui/button";

export default function AdminCabinsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="space-y-1">
          <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
            Inventory
          </span>
          <h1 className="text-3xl font-light text-text-primary">
            Cabins Management
          </h1>
          <p className="text-sm text-text-secondary">
            Configure cabin pricing, guest capacities, and active discounts.
          </p>
        </div>

        <Button size="sm" className="px-5 py-2.5">
          + Add New Cabin
        </Button>
      </div>

      <div className="overflow-hidden bg-bg-surface">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border-subtle bg-bg-elevated text-xs tracking-wider text-text-secondary uppercase">
            <tr>
              <th className="p-4 font-medium">Cabin</th>
              <th className="p-4 font-medium">Capacity</th>
              <th className="p-4 font-medium">Price</th>
              <th className="p-4 font-medium">Discount</th>
              <th className="p-4 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle">
            {cabins.map((cabin) => (
              <tr
                key={cabin.id}
                className="text-text-primary transition-colors hover:bg-bg-hover"
              >
                <td className="p-4 font-medium">Cabin {cabin.name}</td>
                <td className="p-4 text-text-secondary">
                  Fits up to {cabin.maxCapacity} guests
                </td>
                <td className="p-4 font-semibold">${cabin.regularPrice}</td>
                <td className="p-4 text-text-secondary">
                  {cabin.discount > 0 ? (
                    <span className="text-accent-tertiary">
                      ${cabin.discount} off
                    </span>
                  ) : (
                    "&mdash;"
                  )}
                </td>
                <td className="p-4 text-right">
                  <Button variant="secondary" size="xs" className="py-1">
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
