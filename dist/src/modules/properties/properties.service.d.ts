import type { IPropertyFilter } from "./properties.interface";
export declare const propertiesService: {
    getAllProperties: (filters: IPropertyFilter) => Promise<{
        data: ({
            categories: {
                id: number;
                name: string;
            };
        } & {
            id: string;
            title: string;
            dexcription: string | null;
            rent: import("@prisma/client-runtime-utils").Decimal;
            bedrooms: import("@prisma/client-runtime-utils").Decimal | null;
            bathrooms: import("@prisma/client-runtime-utils").Decimal | null;
            size_sqft: import("@prisma/client-runtime-utils").Decimal;
            floor: import("@prisma/client-runtime-utils").Decimal;
            availability: boolean;
            available_from: string;
            address: string;
            division: string | null;
            images: string | null;
            propertiesId: string | null;
            userId: string;
            categoriesId: number;
        })[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
    getPropertyById: (propertyId: string) => Promise<{
        user: {
            id: string;
            email: string;
            name: string;
            phone: string;
            divison: string;
            district: string;
        };
        categories: {
            id: number;
            name: string;
            description: string | null;
        };
        rentalrequests: {
            id: string;
            status: import("../../../generated/prisma/enums").rentalStatus;
        }[];
    } & {
        id: string;
        title: string;
        dexcription: string | null;
        rent: import("@prisma/client-runtime-utils").Decimal;
        bedrooms: import("@prisma/client-runtime-utils").Decimal | null;
        bathrooms: import("@prisma/client-runtime-utils").Decimal | null;
        size_sqft: import("@prisma/client-runtime-utils").Decimal;
        floor: import("@prisma/client-runtime-utils").Decimal;
        availability: boolean;
        available_from: string;
        address: string;
        division: string | null;
        images: string | null;
        propertiesId: string | null;
        userId: string;
        categoriesId: number;
    }>;
    getAllCategories: () => Promise<{
        id: number;
        name: string;
        description: string | null;
        propertiesCount: number;
    }[]>;
};
//# sourceMappingURL=properties.service.d.ts.map