import { prisma } from "../src/lib/prisma.ts";
import { countries } from "../src/data/data-countries.ts";
import { initialUsers } from "../src/data/data-initial-users.ts";

async function main() {
  console.log("Starting database seed...");

  // 1. Seed all countries first (skip duplicates if re-run)
  const countriesResult = await prisma.country.createMany({
    data: countries,
    skipDuplicates: true,
  });
  console.log(
    `Countries synced: ${countriesResult.count} newly inserted (${countries.length} total in dataset).`
  );

  // 2. Fetch Italy's generated Country ID for the initial Dolomites-based users
  const italy = await prisma.country.findUniqueOrThrow({
    where: { name: "Italy" },
  });
  console.log(`Resolved Italy country record -> id: ${italy.id}`);

  // 3. Upsert the 3 initial role users (ADMIN, STAFF, GUEST)
  for (const user of initialUsers) {
    const upsertedUser = await prisma.user.upsert({
      where: { email: user.email },
      update: {
        clerkId: user.clerkId,
        fullName: user.fullName,
        avatar: user.avatar,
        role: user.role,
        countryId: italy.id,
      },
      create: {
        clerkId: user.clerkId,
        email: user.email,
        fullName: user.fullName,
        avatar: user.avatar,
        role: user.role,
        countryId: italy.id,
      },
    });

    console.log(
      `Upserted ${upsertedUser.role} user: ${upsertedUser.email} (clerkId: ${upsertedUser.clerkId}, countryId: ${upsertedUser.countryId})`
    );
  }

  console.log("Database seed completed successfully.");
}

main()
  .catch((error) => {
    console.error("Database seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
