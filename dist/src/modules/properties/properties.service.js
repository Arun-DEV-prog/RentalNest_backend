import { prisma } from "../../lib/prisma";
const getAllProperties = async (filters) => {
    const { location, minPrice, maxPrice, propertyType, bedrooms, bathrooms, page = 1, limit = 10 } = filters;
    const skip = (Number(page) - 1) * Number(limit);
    const take = Number(limit);
    // Build where clause
    const where = {
        availability: true // Only show available properties
    };
    if (location) {
        where.OR = [
            { address: { contains: location, mode: "insensitive" } },
            { division: { contains: location, mode: "insensitive" } }
        ];
    }
    if (minPrice || maxPrice) {
        where.rent = {};
        if (minPrice)
            where.rent.gte = Number(minPrice);
        if (maxPrice)
            where.rent.lte = Number(maxPrice);
    }
    if (bedrooms) {
        where.bedrooms = Number(bedrooms);
    }
    if (bathrooms) {
        where.bathrooms = Number(bathrooms);
    }
    if (propertyType) {
        where.categories = {
            name: {
                contains: propertyType,
                mode: "insensitive"
            }
        };
    }
    // Fetch total count for pagination
    const total = await prisma.properties.count({ where });
    // Fetch properties with filters and pagination
    const properties = await prisma.properties.findMany({
        where,
        include: {
            categories: {
                select: {
                    id: true,
                    name: true
                }
            }
        },
        skip,
        take,
        orderBy: [
            { title: "desc" }
        ]
    });
    return {
        data: properties,
        pagination: {
            total,
            page: Number(page),
            limit: Number(limit),
            pages: Math.ceil(total / Number(limit))
        }
    };
};
const getPropertyById = async (propertyId) => {
    const property = await prisma.properties.findUniqueOrThrow({
        where: {
            id: propertyId
        },
        include: {
            categories: {
                select: {
                    id: true,
                    name: true,
                    description: true
                }
            },
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone: true,
                    divison: true,
                    district: true
                }
            },
            rentalrequests: {
                select: {
                    id: true,
                    status: true
                }
            }
        }
    });
    return property;
};
const getAllCategories = async () => {
    const categories = await prisma.category.findMany({
        include: {
            properties: {
                select: {
                    id: true
                }
            }
        },
        orderBy: [
            { id: "asc" }
        ]
    });
    return categories.map(cat => ({
        id: cat.id,
        name: cat.name,
        description: cat.description,
        propertiesCount: cat.properties.length
    }));
};
export const propertiesService = {
    getAllProperties,
    getPropertyById,
    getAllCategories
};
//# sourceMappingURL=properties.service.js.map