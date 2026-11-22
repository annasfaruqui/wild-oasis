const mockGuests = [
  {
    id: 1,
    name: "Eleanor Vance",
    email: "eleanor.vance@example.com",
    nationality: "United States",
    staysCount: 4,
  },
  {
    id: 2,
    name: "David Miller",
    email: "david.miller@example.com",
    nationality: "United Kingdom",
    staysCount: 1,
  },
  {
    id: 3,
    name: "Sophia Martinez",
    email: "sophia.m@example.com",
    nationality: "Spain",
    staysCount: 3,
  },
  {
    id: 4,
    name: "Marcus Aurelius",
    email: "marcus@example.com",
    nationality: "Italy",
    staysCount: 2,
  },
];

export default function AdminGuestsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
          Clientele
        </span>
        <h1 className="text-3xl font-light text-text-primary">
          Guests Directory
        </h1>
        <p className="text-sm text-text-secondary">
          Browse guest history, contact preferences, and international traveler
          records.
        </p>
      </div>

      <div className="overflow-hidden bg-bg-surface">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border-subtle bg-bg-elevated text-xs tracking-wider text-text-secondary uppercase">
            <tr>
              <th className="p-4 font-medium">Guest</th>
              <th className="p-4 font-medium">Email</th>
              <th className="p-4 font-medium">Nationality</th>
              <th className="p-4 font-medium">Stays Completed</th>
              <th className="p-4 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle">
            {mockGuests.map((guest) => (
              <tr
                key={guest.id}
                className="text-text-primary transition-colors hover:bg-bg-hover"
              >
                <td className="p-4 font-medium">{guest.name}</td>
                <td className="p-4 text-text-secondary">{guest.email}</td>
                <td className="p-4 text-text-secondary">{guest.nationality}</td>
                <td className="p-4 text-text-primary">
                  {guest.staysCount} {guest.staysCount === 1 ? "stay" : "stays"}
                </td>
                <td className="p-4 text-right">
                  <button className="bg-bg-elevated px-3 py-1 text-xs font-medium text-text-primary transition-colors hover:bg-bg-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none">
                    View History
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
