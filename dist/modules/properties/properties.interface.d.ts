export interface IPropertyFilter {
    location?: string | null;
    minPrice?: number | null;
    maxPrice?: number | null;
    propertyType?: string | null;
    bedrooms?: number | null;
    bathrooms?: number | null;
    page?: number;
    limit?: number;
}
export interface IPropertyResponse {
    id: string;
    title: string;
    dexcription?: string;
    rent: number;
    bedrooms?: number;
    bathrooms?: number;
    size_sqft: number;
    floor: number;
    availability: boolean;
    available_from: string;
    address: string;
    division?: string;
    images?: string;
    categories: {
        id: number;
        name: string;
    };
}
export interface ICategoryResponse {
    id: number;
    name: string;
    description?: string;
}
//# sourceMappingURL=properties.interface.d.ts.map