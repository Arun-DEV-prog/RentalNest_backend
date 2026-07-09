import type { ILandlord, IUpdatedLandlord } from "./landlord.interface";
export declare const landlordService: {
    createLandlordIntoDB: (payload: ILandlord, userId: string) => Promise<{
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
    updateProperties: (landLordId: string, payload: IUpdatedLandlord, propertiesId: string, isOwner: boolean) => Promise<{
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
    deletePropertiesByID: (landLordId: string, propertiesId: string, isOwner: boolean) => Promise<{
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
    getRentalRequestsForLandlord: (landLordId: string) => Promise<({
        properties: {
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
        };
        user: {
            id: string;
            email: string;
            name: string;
            role: import("../../../generated/prisma/enums").usersRole;
            phone: string;
            status: import("../../../generated/prisma/enums").userStatus;
            divison: string;
            district: string;
        };
    } & {
        id: string;
        status: import("../../../generated/prisma/enums").rentalStatus;
        created_at: Date;
        updated_at: Date;
        userId: string;
        properties_id: string;
        move_in_date: string;
        lease_duration: string;
    })[]>;
    updateRentalRequestStatus: (landLordId: string, requestId: string, status: "approved" | "rejected") => Promise<{
        properties: {
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
        };
        user: {
            id: string;
            email: string;
            name: string;
            role: import("../../../generated/prisma/enums").usersRole;
            phone: string;
            status: import("../../../generated/prisma/enums").userStatus;
            divison: string;
            district: string;
        };
    } & {
        id: string;
        status: import("../../../generated/prisma/enums").rentalStatus;
        created_at: Date;
        updated_at: Date;
        userId: string;
        properties_id: string;
        move_in_date: string;
        lease_duration: string;
    }>;
};
//# sourceMappingURL=landlord.service.d.ts.map