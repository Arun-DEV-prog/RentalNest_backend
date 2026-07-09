import type { IRentRuquest } from "./rentreq.interface";
export declare const rentRequestService: {
    createRntRequestIntDB: (userId: string, payload: IRentRuquest, isTentent: boolean) => Promise<any>;
    getRentalRqt: (userId: string, isTentent: boolean) => Promise<any>;
    getRentRqtById: (userId: string, rentId: string, isOwner: boolean) => Promise<any>;
};
//# sourceMappingURL=rentreq.service.d.ts.map