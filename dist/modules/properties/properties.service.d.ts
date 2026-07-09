import type { IPropertyFilter } from "./properties.interface";
export declare const propertiesService: {
    getAllProperties: (filters: IPropertyFilter) => Promise<{
        data: any;
        pagination: {
            total: any;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
    getPropertyById: (propertyId: string) => Promise<any>;
    getAllCategories: () => Promise<any>;
};
//# sourceMappingURL=properties.service.d.ts.map