import type { IRentRuquest } from "./rentreq.interface";
import { usersRole } from '../../../generated/prisma/enums';
export declare const rentRequestService: {
    createRntRequestIntDB: (userId: string, payload: IRentRuquest, isTentent: boolean) => Promise<{
        user: {
            id: string;
            email: string;
            name: string;
            role: usersRole;
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
    getRentalRqt: (userId: string, isTentent: boolean) => Promise<({
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
    getRentRqtById: (userId: string, rentId: string, isOwner: boolean) => Promise<{
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
//# sourceMappingURL=rentreq.service.d.ts.map