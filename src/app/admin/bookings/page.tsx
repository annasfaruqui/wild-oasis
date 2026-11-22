"use client";

import { DataTable } from "@/components/table/data-table";
import { ColumnDef } from "@tanstack/react-table";

interface BookingRecord {
  id: string;
  cabin: string;
  guest: string;
  dates: string;
  status: "unconfirmed" | "checked-in" | "checked-out";
  amount: string;
}

const mockBookings: BookingRecord[] = [
  {
    id: "BK-101",
    cabin: "001 — Timber Ridge",
    guest: "Eleanor Vance",
    dates: "Aug 14 — Aug 20, 2026",
    status: "checked-in",
    amount: "$1,590",
  },
  {
    id: "BK-102",
    cabin: "002 — Pine Hollow",
    guest: "David Miller",
    dates: "Aug 18 — Aug 22, 2026",
    status: "unconfirmed",
    amount: "$1,300",
  },
  {
    id: "BK-103",
    cabin: "003 — Alpine Loft",
    guest: "Sophia Martinez",
    dates: "Aug 10 — Aug 15, 2026",
    status: "checked-out",
    amount: "$2,250",
  },
  {
    id: "BK-104",
    cabin: "004 — Eagle Crest",
    guest: "Marcus Aurelius",
    dates: "Aug 12 — Aug 16, 2026",
    status: "checked-in",
    amount: "$2,200",
  },
];

const columns: ColumnDef<BookingRecord>[] = [
  {
    accessorKey: "id",
    header: "Booking ID",
    cell: ({ row }) => (
      <span className="font-mono text-xs text-text-secondary">
        {row.getValue("id")}
      </span>
    ),
  },
  {
    accessorKey: "cabin",
    header: "Cabin",
    cell: ({ row }) => (
      <span className="font-medium text-text-primary">
        {row.getValue("cabin")}
      </span>
    ),
  },
  {
    accessorKey: "guest",
    header: "Guest",
    cell: ({ row }) => (
      <span className="text-text-primary">{row.getValue("guest")}</span>
    ),
  },
  {
    accessorKey: "dates",
    header: "Stay Dates",
    cell: ({ row }) => (
      <span className="text-text-secondary">{row.getValue("dates")}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      if (status === "checked-in") {
        return (
          <span className="rounded-full bg-status-success/15 px-3 py-0.5 text-xs font-medium text-status-success">
            Checked In
          </span>
        );
      }
      if (status === "checked-out") {
        return (
          <span className="rounded-full bg-bg-elevated px-3 py-0.5 text-xs font-medium text-text-secondary">
            Checked Out
          </span>
        );
      }
      return (
        <span className="rounded-full bg-status-warning/15 px-3 py-0.5 text-xs font-medium text-status-warning">
          Unconfirmed
        </span>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Total",
    cell: ({ row }) => (
      <span className="font-semibold text-text-primary">
        {row.getValue("amount")}
      </span>
    ),
  },
];

export default function AdminBookingsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
          Reservations
        </span>
        <h1 className="text-3xl font-light text-text-primary">
          Bookings Management
        </h1>
        <p className="text-sm text-text-secondary">
          Monitor incoming arrivals, filter by stay status, and review charges.
        </p>
      </div>

      <div className="rounded-2xl bg-bg-surface p-6 sm:p-8">
        <DataTable
          columns={columns}
          data={mockBookings}
          searchKey="guest"
          searchPlaceholder="Search by guest name..."
        />
      </div>
    </div>
  );
}
