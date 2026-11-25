import { Role } from "@prisma/client";

export interface InitialUserSeed {
  clerkId: string;
  email: string;
  fullName: string;
  avatar: string | null;
  role: Role;
  countryId: number | null;
}

export const initialUsers: InitialUserSeed[] = [
  {
    clerkId: "user_3McBe5IkID66YKy5uZPAesgkJxq",
    email: "admin@wildoasis.com",
    fullName: "Marco Bellini",
    avatar: "/users/default-user.webp",
    role: Role.ADMIN,
    countryId: null,
  },
  {
    clerkId: "user_3McByXDN4rauxKLfTVp91uKWdci",
    email: "staff@wildoasis.com",
    fullName: "Giulia Rossi",
    avatar: "/users/default-user.webp",
    role: Role.STAFF,
    countryId: null,
  },
  {
    clerkId: "user_3McC3jJsaX289OEnPEK2NRpYFGy",
    email: "guest@wildoasis.com",
    fullName: "Luca Conti",
    avatar: "/users/default-user.webp",
    role: Role.GUEST,
    countryId: null,
  },
];
