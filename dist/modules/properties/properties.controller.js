import { catchAsync } from "../../utils/catchAsync";
import { propertiesService } from "./properties.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from 'http-status';
const getAllProperties = catchAsync(async (req, res, next) => {
    const { location, minPrice, maxPrice, propertyType, bedrooms, bathrooms, page = 1, limit = 10 } = req.query;
    const filters = {
        location: location || null,
        minPrice: minPrice ? Number(minPrice) : null,
        maxPrice: maxPrice ? Number(maxPrice) : null,
        propertyType: propertyType || null,
        bedrooms: bedrooms ? Number(bedrooms) : null,
        bathrooms: bathrooms ? Number(bathrooms) : null,
        page: Number(page),
        limit: Number(limit)
    };
    const result = await propertiesService.getAllProperties(filters);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Properties fetched successfully",
        data: result.data,
        meta: result.pagination
    });
});
const getPropertyById = catchAsync(async (req, res, next) => {
    const id = req.params?.id;
    if (!id) {
        throw new Error("Property ID is required");
    }
    const property = await propertiesService.getPropertyById(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Property fetched successfully",
        data: property
    });
});
const getAllCategories = catchAsync(async (req, res, next) => {
    const categories = await propertiesService.getAllCategories();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Categories fetched successfully",
        data: categories
    });
});
export const propertiesController = {
    getAllProperties,
    getPropertyById,
    getAllCategories
};
//# sourceMappingURL=properties.controller.js.map