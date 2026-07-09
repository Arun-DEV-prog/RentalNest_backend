export interface ILandlord {
    title: string;
    dexcription?: string;
    rent: number;
    categoriesId: number;
    bedrooms?: number;
    bathrooms?: number;
    size_sqft: number;
    floor: number;
    availability: boolean;
    available_from: string;
    address: string;
    division?: string;
    images?: string;
}
export interface IUpdatedLandlord {
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
}
//# sourceMappingURL=landlord.interface.d.ts.map