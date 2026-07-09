import { catchAsync } from "../../utils/catchAsync";
import { landlordService } from "./landlord.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from 'http-status';
const createLandlord = catchAsync(async (req, res, next) => {
    const userId = req.users?.id;
    console.log(req.users?.id);
    const payload = req.body;
    const properties = await landlordService.createLandlordIntoDB(payload, userId);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Properties created successfully",
        data: properties
    });
});
const updatedProperties = catchAsync(async (req, res, next) => {
    const landLordId = req.users?.id;
    const propertiesId = req.params?.id;
    console.log(propertiesId);
    const payload = req.body;
    const isOwner = req.users?.role == "landlord";
    const data = await landlordService.updateProperties(landLordId, payload, propertiesId, isOwner);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Properties updated successfully",
        data: data
    });
});
const deletedProperties = catchAsync(async (req, res, next) => {
    const landLordId = req.users?.id;
    const propertiesId = req.params?.id;
    const isOwner = req.users?.role == "landlord";
    const data = await landlordService.deletePropertiesByID(landLordId, propertiesId, isOwner);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Properties deleted successfully",
        data: null
    });
});
const getRentalRequests = catchAsync(async (req, res, next) => {
    const landLordId = req.users?.id;
    const requests = await landlordService.getRentalRequestsForLandlord(landLordId);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Rental requests fetched successfully",
        data: requests
    });
});
const approveOrRejectRequest = catchAsync(async (req, res, next) => {
    const landLordId = req.users?.id;
    const requestId = req.params?.id;
    const { status } = req.body;
    // Validate status
    if (!status || !["approved", "rejected"].includes(status)) {
        throw new Error("Status must be either 'approved' or 'rejected'");
    }
    const updatedRequest = await landlordService.updateRentalRequestStatus(landLordId, requestId, status);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: `Rental request ${status} successfully`,
        data: updatedRequest
    });
});
export const landlordController = {
    createLandlord,
    updatedProperties,
    deletedProperties,
    getRentalRequests,
    approveOrRejectRequest
};
//# sourceMappingURL=landlord.controller.js.map