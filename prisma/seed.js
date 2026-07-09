import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
const connectionString = process.env["DATABASE_URL"];
if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
}
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
async function main() {
    await prisma.category.createMany({
        data: [
            {
                name: "Apartment",
                description: "Residential apartment",
            },
            {
                name: "House",
                description: "Independent house",
            },
            {
                name: "Studio",
                description: "Studio apartment",
            },
            {
                name: "Villa",
                description: "Luxury villa",
            },
            {
                name: "Hostel",
                description: "Hostel accommodation",
            },
            {
                name: "Office",
                description: "Office space",
            },
            {
                name: "Commercial Space",
                description: "Commercial rental property",
            },
        ],
        skipDuplicates: true,
    });
    console.log("✅ Categories seeded successfully!");
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map