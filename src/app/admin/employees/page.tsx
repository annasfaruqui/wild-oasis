import { Button } from "@/components/ui/button";

const mockEmployees = [
  {
    id: 1,
    name: "Jonas Schmedtmann",
    email: "jonas@thewildoasis.com",
    role: "ADMIN",
    status: "Active",
  },
  {
    id: 2,
    name: "Elena Rostova",
    email: "elena@thewildoasis.com",
    role: "STAFF",
    status: "Active",
  },
  {
    id: 3,
    name: "Marco Rossi",
    email: "marco@thewildoasis.com",
    role: "STAFF",
    status: "Invited",
  },
];

export default function AdminEmployeesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="space-y-1">
          <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
            Team & Privileges
          </span>
          <h1 className="text-3xl font-light text-text-primary">
            Staff & Employees
          </h1>
          <p className="text-sm text-text-secondary">
            Manage employee access, assign roles, and invite new team members.
          </p>
        </div>

        <Button size="sm" className="px-5 py-2.5">
          + Invite Employee
        </Button>
      </div>

      <div className="overflow-hidden bg-bg-surface">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border-subtle bg-bg-elevated text-xs tracking-wider text-text-secondary uppercase">
            <tr>
              <th className="p-4 font-medium">Employee</th>
              <th className="p-4 font-medium">Email</th>
              <th className="p-4 font-medium">Role</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle">
            {mockEmployees.map((emp) => (
              <tr
                key={emp.id}
                className="text-text-primary transition-colors hover:bg-bg-hover"
              >
                <td className="p-4 font-medium">{emp.name}</td>
                <td className="p-4 text-text-secondary">{emp.email}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-0.5 text-xs font-medium ${
                      emp.role === "ADMIN"
                        ? "bg-accent-primary/15 text-accent-primary"
                        : "bg-accent-secondary/15 text-accent-secondary"
                    }`}
                  >
                    {emp.role}
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className={`px-3 py-0.5 text-xs font-medium ${
                      emp.status === "Active"
                        ? "bg-status-success/15 text-status-success"
                        : "bg-status-warning/15 text-status-warning"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <Button variant="secondary" size="xs" className="py-1">
                    Permissions
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
