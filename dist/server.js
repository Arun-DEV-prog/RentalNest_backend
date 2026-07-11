// src/app.ts
import express from "express";
import cors from "cors";

// src/config/index.ts
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });
var config_default = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  app_url: process.env.APP_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  Bcrypt_salt_round: process.env.Bcrypt_salt_round,
  stripe_secret_key: process.env.STRIPE_SECRET_KEY,
  stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  stripe_product_id: process.env.STRIPE_PRODUCT_ID,
  stripe_webhook_secret: process.env.STRIPE_WEBHOOK_SECRET || process.env.STRIPE_WEB
};

// src/modules/users/user.route.ts
import { Router } from "express";

// src/utils/catchAsync.ts
import httpStatus from "http-status";
var catchAsync = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.log(error);
      const message = error.message;
      const isNotFound = /not found/i.test(message);
      res.status(isNotFound ? httpStatus.NOT_FOUND : httpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        statusCode: isNotFound ? httpStatus.NOT_FOUND : httpStatus.INTERNAL_SERVER_ERROR,
        message,
        error: message
      });
    }
  };
};

// src/modules/users/user.service.ts
import bcrypt from "bcryptjs";

// src/lib/prisma.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
var connectionString = `${process.env.DATABASE_URL}`;
var adapter = new PrismaPg({ connectionString });
var prisma = new PrismaClient({ adapter });

// src/modules/users/user.service.ts
import { usersRole } from "@prisma/client";
var registerUserIntoDB = async (payload) => {
  const { name, email, password, phone, divison, district, role } = payload;
  const isUserExits = await prisma.users.findUnique({
    where: { email }
  });
  if (isUserExits) {
    throw new Error("user already exits");
  }
  const hashPassword = await bcrypt.hash(password, Number(config_default.bcrypt_salt_rounds));
  const createUser2 = await prisma.users.create({
    data: {
      name,
      email,
      password: hashPassword,
      role: role ?? usersRole.tenant,
      phone,
      divison,
      district
    }
  });
  const user = await prisma.users.findUnique({
    where: {
      id: createUser2.id,
      email: createUser2.email || email
    },
    omit: {
      id: true,
      password: true
    }
  });
  return user;
};
var getMeFromDB = async (userdId) => {
  const user = await prisma.users.findUniqueOrThrow({
    where: { id: userdId },
    omit: { password: true }
  });
  return user;
};
var userService = {
  registerUserIntoDB,
  getMeFromDB
};

// src/utils/sendResponse.ts
var sendResponse = (res, data) => {
  res.status(data.statusCode).json({
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
    meta: data.meta
  });
};

// src/modules/users/user.controller.ts
import httpStatus2 from "http-status";
import "console";
var createUser = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const user = await userService.registerUserIntoDB(payload);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus2.CREATED,
    message: " User registered successfully",
    data: user
  });
});
var getMe = catchAsync(async (req, res, next) => {
  if (!req.users) {
    throw new Error("Your are not logged it , Please login");
  }
  const myInfo = await userService.getMeFromDB(req.users.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus2.OK,
    message: "User profile fetched successfully",
    data: myInfo
  });
});
var userController = {
  createUser,
  getMe
};

// src/modules/users/user.route.ts
import { usersRole as usersRole2 } from "@prisma/client";

// src/utils/jwt.ts
import jwt from "jsonwebtoken";
var createToken = (payload, secret, options) => {
  const token = jwt.sign(payload, secret, options);
  return token;
};
var verifyToken = (token, secret) => {
  try {
    const verifiedToken = jwt.verify(token, secret);
    return {
      success: true,
      data: verifiedToken
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid Token";
    return {
      success: false,
      error: message
    };
  }
};
var jwtUtils = {
  createToken,
  verifyToken
};

// src/middleware/auth.ts
var auth = (...requireRoles) => {
  return catchAsync(async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const tokenFromHeader = authHeader?.startsWith("Bearer ") ? authHeader.slice(7).trim() : authHeader;
    const token = req.cookies?.accessToken || tokenFromHeader;
    if (!token) {
      throw new Error("You ar not loggin in, Please login to access");
    }
    const verifyToken2 = jwtUtils.verifyToken(token, config_default.jwt_access_secret);
    if (!verifyToken2.success || !verifyToken2.data) {
      throw new Error("Invalid or expired Token");
    }
    const { email, name, id } = verifyToken2.data;
    if (!id || !email || !name) {
      throw new Error("Invalid token payload");
    }
    const user = await prisma.users.findUnique({
      where: {
        id: String(id)
      }
    });
    if (!user) {
      throw new Error("Not found");
    }
    const normalizedRole = String(user.role ?? "").toLowerCase();
    const normalizedRequiredRoles = requireRoles.map((item) => String(item).toLowerCase());
    if (!normalizedRequiredRoles.includes(normalizedRole)) {
      throw new Error("Forbidden");
    }
    req.users = {
      email: user.email,
      name: user.name,
      id: user.id,
      role: normalizedRole
    };
    next();
  });
};

// src/modules/users/user.route.ts
var router = Router();
router.post("/register", userController.createUser);
router.get("/me", auth(usersRole2.tenant, usersRole2.landlord), userController.getMe);
var userRoute = router;

// src/app.ts
import cookieParser from "cookie-parser";

// src/modules/auth/auth.route.ts
import { Router as Router2 } from "express";

// src/modules/auth/auth.service.ts
import bcrypt2 from "bcryptjs";
var normalizeExpiresIn = (value) => {
  if (!value) return "1h";
  const trimmed = value.trim();
  return /^\d+$/.test(trimmed) ? Number(trimmed) : trimmed;
};
var userlogin = async (payload) => {
  const { email, password } = payload;
  const user = await prisma.users.findUniqueOrThrow({
    where: { email }
  });
  if (!user) {
    throw new Error("user not found!");
  }
  const isPasswordMatch = await bcrypt2.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Sorry,Password not Matched!");
  }
  const jwtPayload = {
    id: user.id,
    email: user.email,
    role: user.role,
    name: user.name
  };
  const accessToken = jwtUtils.createToken(
    jwtPayload,
    config_default.jwt_access_secret,
    { expiresIn: normalizeExpiresIn(config_default.jwt_access_expires_in) }
  );
  const refresToken = jwtUtils.createToken(
    jwtPayload,
    config_default.jwt_refresh_secret,
    { expiresIn: normalizeExpiresIn(config_default.jwt_refresh_expires_in) }
  );
  return {
    user,
    accessToken,
    refresToken
  };
};
var AuthService = {
  userlogin
};

// src/modules/auth/auth.controller.ts
import "dotenv";
import httpStatus3 from "http-status";
var userLogin = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const { accessToken, refresToken } = await AuthService.userlogin(payload);
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 1e3 * 60 * 60 * 24
  });
  res.cookie("refreshToken", refresToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 1e3 * 60 * 60 * 24 * 7
  });
  sendResponse(res, {
    success: true,
    statusCode: httpStatus3.OK,
    message: "user successfully Login",
    data: { accessToken, refresToken }
  });
});
var authController = {
  userLogin
};

// src/modules/auth/auth.route.ts
var router2 = Router2();
router2.post("/login", authController.userLogin);
var authRoute = router2;

// src/modules/landlord/landlord.route.ts
import { Router as Router3 } from "express";

// src/modules/landlord/landlord.service.ts
import "console";
var createLandlordIntoDB = async (payload, userId) => {
  const categoryId = await prisma.category.findUnique({
    where: {
      id: payload.categoriesId
    }
  });
  if (!categoryId) {
    throw new Error("Category not found");
  }
  const result = await prisma.properties.create({
    data: {
      ...payload,
      userId,
      categoriesId: payload.categoriesId
    }
  });
  return result;
};
var updateProperties = async (landLordId, payload, propertiesId, isOwner) => {
  const properties = await prisma.properties.findUnique({
    where: {
      id: propertiesId
    }
  });
  if (!isOwner && properties?.userId !== landLordId) {
    throw new Error("You are not owner tis post");
  }
  const updateProperties2 = await prisma.properties.update({
    where: {
      id: propertiesId
    },
    data: payload
  });
  return updateProperties2;
};
var deletePropertiesByID = async (landLordId, propertiesId, isOwner) => {
  if (!propertiesId) {
    throw new Error("Properties id is not provided");
  }
  const properties = await prisma.properties.findUnique({
    where: {
      id: propertiesId
    }
  });
  if (!properties) {
    throw new Error("Properties not Found");
  }
  if (!isOwner && properties.userId !== landLordId) {
    throw new Error("You are not the Owner");
  }
  const deletedProperties2 = await prisma.properties.delete({
    where: {
      id: propertiesId
    }
  });
  return deletedProperties2;
};
var getRentalRequestsForLandlord = async (landLordId) => {
  const landlord = await prisma.users.findUnique({
    where: {
      id: landLordId
    }
  });
  if (!landlord) {
    throw new Error("Landlord not found");
  }
  const requests = await prisma.rentalrequest.findMany({
    where: {
      properties: {
        userId: landLordId
      }
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          phone: true,
          status: true,
          divison: true,
          district: true
        }
      },
      properties: true
    },
    orderBy: {
      created_at: "desc"
    }
  });
  return requests;
};
var updateRentalRequestStatus = async (landLordId, requestId, status) => {
  const rentalRequest = await prisma.rentalrequest.findUniqueOrThrow({
    where: {
      id: requestId
    },
    include: {
      properties: true
    }
  });
  if (rentalRequest.properties.userId !== landLordId) {
    throw new Error("You are not authorized to update this rental request");
  }
  const updatedRequest = await prisma.rentalrequest.update({
    where: {
      id: requestId
    },
    data: {
      status
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          phone: true,
          status: true,
          divison: true,
          district: true
        }
      },
      properties: true
    }
  });
  return updatedRequest;
};
var landlordService = {
  createLandlordIntoDB,
  updateProperties,
  deletePropertiesByID,
  getRentalRequestsForLandlord,
  updateRentalRequestStatus
};

// src/modules/landlord/landlord.controller.ts
import httpStatus4 from "http-status";
var createLandlord = catchAsync(async (req, res, next) => {
  const userId = req.users?.id;
  console.log(req.users?.id);
  const payload = req.body;
  const properties = await landlordService.createLandlordIntoDB(payload, userId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus4.CREATED,
    message: "Properties created successfully",
    data: properties
  });
});
var updatedProperties = catchAsync(async (req, res, next) => {
  const landLordId = req.users?.id;
  const propertiesId = req.params?.id;
  console.log(propertiesId);
  const payload = req.body;
  const isOwner = req.users?.role == "landlord";
  const data = await landlordService.updateProperties(landLordId, payload, propertiesId, isOwner);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus4.CREATED,
    message: "Properties updated successfully",
    data
  });
});
var deletedProperties = catchAsync(async (req, res, next) => {
  const landLordId = req.users?.id;
  const propertiesId = req.params?.id;
  const isOwner = req.users?.role == "landlord";
  const data = await landlordService.deletePropertiesByID(landLordId, propertiesId, isOwner);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus4.CREATED,
    message: "Properties deleted successfully",
    data: null
  });
});
var getRentalRequests = catchAsync(async (req, res, next) => {
  const landLordId = req.users?.id;
  const requests = await landlordService.getRentalRequestsForLandlord(landLordId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus4.OK,
    message: "Rental requests fetched successfully",
    data: requests
  });
});
var approveOrRejectRequest = catchAsync(async (req, res, next) => {
  const landLordId = req.users?.id;
  const requestId = req.params?.id;
  const { status } = req.body;
  if (!status || !["approved", "rejected"].includes(status)) {
    throw new Error("Status must be either 'approved' or 'rejected'");
  }
  const updatedRequest = await landlordService.updateRentalRequestStatus(
    landLordId,
    requestId,
    status
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus4.OK,
    message: `Rental request ${status} successfully`,
    data: updatedRequest
  });
});
var landlordController = {
  createLandlord,
  updatedProperties,
  deletedProperties,
  getRentalRequests,
  approveOrRejectRequest
};

// src/modules/landlord/landlord.route.ts
import { usersRole as usersRole3 } from "@prisma/client";
var router3 = Router3();
router3.post("/properties", auth(usersRole3.landlord), landlordController.createLandlord);
router3.put("/properties/:id", auth(usersRole3.landlord), landlordController.updatedProperties);
router3.delete("/properties/:id", auth(usersRole3.landlord), landlordController.deletedProperties);
router3.get("/requests", auth(usersRole3.landlord), landlordController.getRentalRequests);
router3.patch("/requests/:id", auth(usersRole3.landlord), landlordController.approveOrRejectRequest);
var landlordRoute = router3;

// src/modules/rentrequest/rentreq.route.ts
import { Router as Router4 } from "express";

// src/modules/rentrequest/rentreq.service.ts
import "@prisma/client";
var createRntRequestIntDB = async (userId, payload, isTentent) => {
  const userfind = await prisma.users.findUniqueOrThrow({
    where: {
      id: userId
    }
  });
  if (userfind.role !== "tenant") {
    throw new Error("You are not permitted to rent!");
  }
  if (!payload.propertisId) {
    throw new Error("Property id is required");
  }
  const property = await prisma.properties.findUnique({
    where: {
      id: payload.propertisId
    }
  });
  if (!property) {
    throw new Error("Property not found");
  }
  if (property.availability == false) {
    throw new Error("Not avaiable now!");
  }
  const rentRqt = await prisma.rentalrequest.create({
    data: {
      move_in_date: payload.move_in_date,
      lease_duration: payload.lease_duration,
      userId,
      properties_id: payload.propertisId
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          phone: true,
          status: true,
          divison: true,
          district: true
        }
      }
    }
  });
  return rentRqt;
};
var getRentalRqt = async (userId, isTentent) => {
  const user = await prisma.users.findUnique({
    where: {
      id: userId
    }
  });
  if (!user) {
    throw new Error("User not found");
  }
  if (!isTentent && user.role !== "tenant") {
    throw new Error("You have no permission!");
  }
  const request = await prisma.rentalrequest.findMany({
    where: {
      userId
    },
    include: {
      properties: true
    }
  });
  return request;
};
var getRentRqtById = async (userId, rentId, isOwner) => {
  const userfind = await prisma.users.findUniqueOrThrow({
    where: {
      id: userId
    }
  });
  if (userfind.role !== "tenant") {
    throw new Error("You are not permitted to rent!");
  }
  if (!rentId) {
    throw new Error("This rentId not found!");
  }
  const rental = await prisma.rentalrequest.findUniqueOrThrow({
    where: {
      id: rentId
    }
  });
  return rental;
};
var rentRequestService = {
  createRntRequestIntDB,
  getRentalRqt,
  getRentRqtById
};

// src/modules/rentrequest/rentreq.controllert.ts
import httpStatus5 from "http-status";
var createRentRuquest = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const userId = req.users?.id;
  const userTentent = req.users?.role == "tenant";
  const result = await rentRequestService.createRntRequestIntDB(userId, payload, userTentent);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus5.CREATED,
    message: "Request submit for Rent",
    data: result
  });
});
var getUserRental = catchAsync(async (req, res, next) => {
  const userId = req.users?.id;
  const isTentent = req.users?.role === "tenant";
  const data = await rentRequestService.getRentalRqt(userId, isTentent);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus5.CREATED,
    message: "Successfully get rental",
    data
  });
});
var getRentRuquestID = catchAsync(async (req, res, next) => {
  const userId = req.users?.id;
  const rentId = req.params?.id;
  const isTentent = req.users?.role === "tenant";
  const data = await rentRequestService.getRentRqtById(userId, rentId, isTentent);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus5.CREATED,
    message: "Successfully get Single rental",
    data
  });
});
var rentrequestController = {
  createRentRuquest,
  getUserRental,
  getRentRuquestID
};

// src/modules/rentrequest/rentreq.route.ts
import { usersRole as usersRole5 } from "@prisma/client";
var router4 = Router4();
router4.post("/", auth(usersRole5.tenant), rentrequestController.createRentRuquest);
router4.get("/", auth(usersRole5.tenant), rentrequestController.getUserRental);
router4.get("/:id", auth(usersRole5.tenant), rentrequestController.getRentRuquestID);
var rentrequestRoute = router4;

// src/modules/properties/properties.route.ts
import { Router as Router5 } from "express";

// src/modules/properties/properties.service.ts
var getAllProperties = async (filters) => {
  const {
    location,
    minPrice,
    maxPrice,
    propertyType,
    bedrooms,
    bathrooms,
    page = 1,
    limit = 10
  } = filters;
  const skip = (Number(page) - 1) * Number(limit);
  const take = Number(limit);
  const where = {
    availability: true
    // Only show available properties
  };
  if (location) {
    where.OR = [
      { address: { contains: location, mode: "insensitive" } },
      { division: { contains: location, mode: "insensitive" } }
    ];
  }
  if (minPrice || maxPrice) {
    where.rent = {};
    if (minPrice) where.rent.gte = Number(minPrice);
    if (maxPrice) where.rent.lte = Number(maxPrice);
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
  const total = await prisma.properties.count({ where });
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
var getPropertyById = async (propertyId) => {
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
var getAllCategories = async () => {
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
  return categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    description: cat.description,
    propertiesCount: cat.properties.length
  }));
};
var propertiesService = {
  getAllProperties,
  getPropertyById,
  getAllCategories
};

// src/modules/properties/properties.controller.ts
import httpStatus6 from "http-status";
var getAllProperties2 = catchAsync(async (req, res, next) => {
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
    statusCode: httpStatus6.OK,
    message: "Properties fetched successfully",
    data: result.data,
    meta: result.pagination
  });
});
var getPropertyById2 = catchAsync(async (req, res, next) => {
  const id = req.params?.id;
  if (!id) {
    throw new Error("Property ID is required");
  }
  const property = await propertiesService.getPropertyById(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus6.OK,
    message: "Property fetched successfully",
    data: property
  });
});
var getAllCategories2 = catchAsync(async (req, res, next) => {
  const categories = await propertiesService.getAllCategories();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus6.OK,
    message: "Categories fetched successfully",
    data: categories
  });
});
var propertiesController = {
  getAllProperties: getAllProperties2,
  getPropertyById: getPropertyById2,
  getAllCategories: getAllCategories2
};

// src/modules/properties/properties.route.ts
var router5 = Router5();
router5.get("/", propertiesController.getAllProperties);
router5.get("/categories", propertiesController.getAllCategories);
router5.get("/:id", propertiesController.getPropertyById);
var propertiesRoute = router5;

// src/modules/admin/admin.route.ts
import { Router as Router6 } from "express";

// src/modules/admin/admin.service.ts
var getAllUsers = async (filters) => {
  const { page = 1, limit = 10, role, status } = filters;
  const skip = (Number(page) - 1) * Number(limit);
  const take = Number(limit);
  const where = {};
  if (role) {
    where.role = role;
  }
  if (status) {
    where.status = status;
  }
  const total = await prisma.users.count({ where });
  const users = await prisma.users.findMany({
    where,
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      role: true,
      status: true,
      divison: true,
      district: true,
      created_at: true,
      updated_at: true
    },
    skip,
    take,
    orderBy: [{ created_at: "desc" }]
  });
  return {
    data: users,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      pages: Math.ceil(total / Number(limit))
    }
  };
};
var updateUserStatus = async (userId, status) => {
  const user = await prisma.users.findUniqueOrThrow({
    where: { id: userId }
  });
  const updatedUser = await prisma.users.update({
    where: { id: userId },
    data: { status },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      phone: true,
      divison: true,
      district: true
    }
  });
  return updatedUser;
};
var getAllProperties3 = async (filters) => {
  const { page = 1, limit = 10, userId } = filters;
  const skip = (Number(page) - 1) * Number(limit);
  const take = Number(limit);
  const where = {};
  if (userId) {
    where.userId = userId;
  }
  const total = await prisma.properties.count({ where });
  const properties = await prisma.properties.findMany({
    where,
    include: {
      categories: {
        select: {
          id: true,
          name: true
        }
      },
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true
        }
      },
      rentalrequests: {
        select: {
          id: true,
          status: true
        }
      }
    },
    skip,
    take,
    orderBy: [{ title: "desc" }]
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
var getAllRentals = async (filters) => {
  const { page = 1, limit = 10, status } = filters;
  const skip = (Number(page) - 1) * Number(limit);
  const take = Number(limit);
  const where = {};
  if (status) {
    where.status = status;
  }
  const total = await prisma.rentalrequest.count({ where });
  const rentals = await prisma.rentalrequest.findMany({
    where,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          role: true
        }
      },
      properties: {
        select: {
          id: true,
          title: true,
          rent: true,
          address: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true
            }
          }
        }
      }
    },
    skip,
    take,
    orderBy: [{ created_at: "desc" }]
  });
  return {
    data: rentals,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      pages: Math.ceil(total / Number(limit))
    }
  };
};
var adminService = {
  getAllUsers,
  updateUserStatus,
  getAllProperties: getAllProperties3,
  getAllRentals
};

// src/modules/admin/admin.controller.ts
import httpStatus7 from "http-status";
var getAllUsers2 = catchAsync(async (req, res, next) => {
  const { page = 1, limit = 10, role, status } = req.query;
  const filters = {
    page: Number(page),
    limit: Number(limit),
    role: role || null,
    status: status || null
  };
  const result = await adminService.getAllUsers(filters);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus7.OK,
    message: "Users fetched successfully",
    data: result.data,
    meta: result.pagination
  });
});
var updateUserStatus2 = catchAsync(async (req, res, next) => {
  const userId = req.params?.id;
  const { status } = req.body;
  if (!userId) {
    throw new Error("User ID is required");
  }
  if (!status || !["active", "banned"].includes(status)) {
    throw new Error("Status must be either 'active' or 'banned'");
  }
  const updatedUser = await adminService.updateUserStatus(
    userId,
    status
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus7.OK,
    message: `User ${status} successfully`,
    data: updatedUser
  });
});
var getAllProperties4 = catchAsync(async (req, res, next) => {
  const { page = 1, limit = 10, userId } = req.query;
  const filters = {
    page: Number(page),
    limit: Number(limit),
    userId: userId || null
  };
  const result = await adminService.getAllProperties(filters);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus7.OK,
    message: "Properties fetched successfully",
    data: result.data,
    meta: result.pagination
  });
});
var getAllRentals2 = catchAsync(async (req, res, next) => {
  const { page = 1, limit = 10, status } = req.query;
  const filters = {
    page: Number(page),
    limit: Number(limit),
    status: status || null
  };
  const result = await adminService.getAllRentals(filters);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus7.OK,
    message: "Rental requests fetched successfully",
    data: result.data,
    meta: result.pagination
  });
});
var adminController = {
  getAllUsers: getAllUsers2,
  updateUserStatus: updateUserStatus2,
  getAllProperties: getAllProperties4,
  getAllRentals: getAllRentals2
};

// src/modules/admin/admin.route.ts
import { usersRole as usersRole6 } from "@prisma/client";
var router6 = Router6();
router6.get("/users", auth(usersRole6.admin), adminController.getAllUsers);
router6.patch("/users/:id", auth(usersRole6.admin), adminController.updateUserStatus);
router6.get("/properties", auth(usersRole6.admin), adminController.getAllProperties);
router6.get("/rentals", auth(usersRole6.admin), adminController.getAllRentals);
var adminRoute = router6;

// src/modules/payments/payments.route.ts
import { Router as Router7 } from "express";
import { usersRole as usersRole7 } from "@prisma/client";

// src/modules/payments/payments.controller.ts
import httpStatus8 from "http-status";

// src/lib/stripe.ts
import Stripe from "stripe";
var stripe = new Stripe(config_default.stripe_secret_key, {
  apiVersion: "2026-06-24.dahlia"
});

// src/modules/payments/payments.service.ts
var getAppBaseUrl = () => {
  const appUrl = config_default.app_url?.trim();
  if (!appUrl) {
    return "http://localhost:5000";
  }
  return appUrl.startsWith("http://") || appUrl.startsWith("https://") ? appUrl : `https://${appUrl}`;
};
var createPaymentCheckout = async (userId, rentalId) => {
  const user = await prisma.users.findUniqueOrThrow({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true
    }
  });
  const rental = await prisma.rentalrequest.findUniqueOrThrow({
    where: { id: rentalId },
    include: {
      properties: true,
      user: true
    }
  });
  if (rental.userId !== userId) {
    throw new Error("Unauthorized: This rental request does not belong to you");
  }
  if (rental.status !== "approved") {
    throw new Error(`Rental request must be approved before payment. Current status: ${rental.status}`);
  }
  const existingPayment = await prisma.payment.findUnique({
    where: { rentalId }
  });
  if (existingPayment && existingPayment.status === "completed") {
    throw new Error("Payment already completed for this rental");
  }
  let stripeCustomerId;
  try {
    const customer = await stripe.customers.create({
      email: user.email,
      name: user.name,
      ...user.phone ? { phone: user.phone } : {},
      metadata: { userId: user.id }
    });
    stripeCustomerId = customer.id;
  } catch (error) {
    console.warn("Stripe customer creation failed, continuing without a customer reference:", error);
  }
  const paymentAmount = Math.round(Number(rental.properties.rent) * 100);
  let payment = existingPayment;
  if (!payment) {
    payment = await prisma.payment.create({
      data: {
        rentalId,
        userId,
        amount: Number(rental.properties.rent),
        currency: "usd",
        status: "pending"
      }
    });
  }
  const baseUrl = getAppBaseUrl();
  const session = await stripe.checkout.sessions.create({
    ...stripeCustomerId ? { customer: stripeCustomerId } : {},
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: rental.properties.title || "Rental Payment",
            description: `Rental payment for ${rental.properties.address}`,
            images: rental.properties.images ? [rental.properties.images] : []
          },
          unit_amount: paymentAmount
        },
        quantity: 1
      }
    ],
    mode: "payment",
    payment_method_types: ["card"],
    success_url: `${baseUrl}/payment/success?session_id={CHECKOUT_SESSION_ID}&rental_id=${rentalId}`,
    cancel_url: `${baseUrl}/payment/cancel?rental_id=${rentalId}`,
    metadata: {
      userId,
      rentalId,
      paymentId: payment.id
    }
  });
  await prisma.payment.update({
    where: { id: payment.id },
    data: {
      stripePaymentIntentId: session.id,
      status: "processing"
    }
  });
  return {
    checkoutUrl: session.url,
    sessionId: session.id,
    paymentId: payment.id,
    rentalId,
    amount: rental.properties.rent
  };
};
var verifyPayment = async (sessionId) => {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["payment_intent"]
  });
  if (!session.metadata?.paymentId || !session.metadata?.rentalId) {
    throw new Error("Invalid session metadata");
  }
  const paymentId = session.metadata.paymentId;
  const rentalId = session.metadata.rentalId;
  await prisma.$transaction(async (tx) => {
    if (session.payment_status === "paid") {
      const paymentIntentId = typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id;
      await tx.payment.update({
        where: { id: paymentId },
        data: {
          status: "completed",
          transactionId: paymentIntentId || session.id,
          paymentMethod: "card"
        }
      });
      await tx.rentalrequest.update({
        where: { id: rentalId },
        data: {
          status: "active_completed"
        }
      });
    } else {
      await tx.payment.update({
        where: { id: paymentId },
        data: {
          status: "failed"
        }
      });
    }
  });
  return session;
};
var getUserPayments = async (userId, filters = {}) => {
  const { page = "1", limit = "10", status } = filters;
  const skip = (Number(page) - 1) * Number(limit);
  const take = Number(limit);
  const where = { userId };
  if (status) {
    where.status = status;
  }
  const [total, payments] = await Promise.all([
    prisma.payment.count({ where }),
    prisma.payment.findMany({
      where,
      include: {
        rental: {
          include: {
            properties: true,
            user: {
              select: {
                id: true,
                name: true,
                email: true
              }
            }
          }
        }
      },
      skip,
      take,
      orderBy: [{ created_at: "desc" }]
    })
  ]);
  return {
    data: payments,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      pages: Math.ceil(total / Number(limit))
    }
  };
};
var getPaymentById = async (userId, paymentId) => {
  const payment = await prisma.payment.findUniqueOrThrow({
    where: { id: paymentId },
    include: {
      rental: {
        include: {
          properties: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              phone: true
            }
          }
        }
      }
    }
  });
  if (payment.userId !== userId) {
    throw new Error("Unauthorized: Cannot access this payment");
  }
  return payment;
};
var paymentService = {
  createPaymentCheckout,
  verifyPayment,
  getUserPayments,
  getPaymentById
};

// src/modules/payments/payments.controller.ts
var createPayment = catchAsync(async (req, res, next) => {
  const userId = req.users?.id;
  const { rentalId } = req.body;
  if (!userId) {
    throw new Error("User is required");
  }
  if (!rentalId) {
    throw new Error("Rental ID is required");
  }
  const result = await paymentService.createPaymentCheckout(userId, rentalId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus8.OK,
    message: "Payment checkout created successfully",
    data: result
  });
});
var confirmPayment = catchAsync(async (req, res, next) => {
  const bodySessionId = req.body?.sessionId;
  const bodySessionIdAlt = req.body?.session_id;
  const querySessionId = typeof req.query?.sessionId === "string" ? req.query.sessionId : void 0;
  const querySessionIdAlt = typeof req.query?.session_id === "string" ? req.query.session_id : void 0;
  const sessionId = bodySessionId || bodySessionIdAlt || querySessionId || querySessionIdAlt;
  if (!sessionId) {
    throw new Error("Session ID is required");
  }
  const session = await paymentService.verifyPayment(sessionId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus8.OK,
    message: "Payment verified successfully",
    data: {
      sessionId,
      status: session.payment_status,
      paid: session.payment_status === "paid"
    }
  });
});
var getUserPayments2 = catchAsync(async (req, res, next) => {
  const userId = req.users?.id;
  if (!userId) {
    throw new Error("User is required");
  }
  const result = await paymentService.getUserPayments(userId, req.query);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus8.OK,
    message: "Payments fetched successfully",
    data: result.data,
    meta: result.pagination
  });
});
var getPaymentById2 = catchAsync(async (req, res, next) => {
  const userId = req.users?.id;
  const paymentId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  if (!userId) {
    throw new Error("User is required");
  }
  if (!paymentId) {
    throw new Error("Payment ID is required");
  }
  const payment = await paymentService.getPaymentById(userId, paymentId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus8.OK,
    message: "Payment fetched successfully",
    data: payment
  });
});
var paymentController = {
  createPayment,
  confirmPayment,
  getUserPayments: getUserPayments2,
  getPaymentById: getPaymentById2
};

// src/modules/payments/payments.route.ts
var router7 = Router7();
router7.post("/create", auth(usersRole7.tenant), paymentController.createPayment);
router7.post("/confirm", auth(usersRole7.tenant), paymentController.confirmPayment);
router7.get("/", auth(usersRole7.tenant), paymentController.getUserPayments);
router7.get("/:id", auth(usersRole7.tenant), paymentController.getPaymentById);
var paymentRoute = router7;

// src/modules/payments/webhook.route.ts
import { Router as Router8 } from "express";
import "stripe";
var router8 = Router8();
var handleCheckoutSessionCompleted = async (session, status = "completed") => {
  const paymentId = session.metadata?.paymentId;
  const rentalId = session.metadata?.rentalId;
  if (!paymentId || !rentalId) {
    console.log(`Checkout session ${session.id} is missing payment metadata`);
    return;
  }
  const payment = await prisma.payment.findUnique({ where: { id: paymentId } });
  if (!payment) {
    console.log(`Payment not found for checkout session ${session.id}`);
    return;
  }
  await prisma.$transaction(async (tx) => {
    await tx.payment.update({
      where: { id: payment.id },
      data: {
        status: status === "completed" ? "completed" : "failed",
        transactionId: typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id || session.id,
        paymentMethod: "card"
      }
    });
    if (status === "completed") {
      await tx.rentalrequest.update({
        where: { id: rentalId },
        data: {
          status: "active_completed"
        }
      });
    }
  });
};
router8.post("/webhook", async (req, res) => {
  const signature = req.headers["stripe-signature"];
  if (!signature) {
    return res.status(400).send("Missing stripe signature");
  }
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, signature, config_default.stripe_webhook_secret);
  } catch (error) {
    console.error("Stripe webhook verification failed", error);
    return res.status(400).send("Webhook verification failed");
  }
  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        await handleCheckoutSessionCompleted(session, "completed");
        break;
      }
      case "checkout.session.expired":
      case "checkout.session.async_payment_failed": {
        const session = event.data.object;
        await handleCheckoutSessionCompleted(session, "failed");
        break;
      }
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object;
        const payment = await prisma.payment.findFirst({
          where: { stripePaymentIntentId: paymentIntent.id }
        });
        if (payment) {
          await prisma.payment.update({
            where: { id: payment.id },
            data: {
              status: "completed",
              transactionId: paymentIntent.id,
              paymentMethod: typeof paymentIntent.payment_method === "string" ? paymentIntent.payment_method : "card"
            }
          });
        }
        break;
      }
      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object;
        const payment = await prisma.payment.findFirst({
          where: { stripePaymentIntentId: paymentIntent.id }
        });
        if (payment) {
          await prisma.payment.update({
            where: { id: payment.id },
            data: {
              status: "failed"
            }
          });
        }
        break;
      }
      default:
        break;
    }
    res.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook handler failed", error);
    res.status(500).json({ received: false, error: "Webhook handler failed" });
  }
});
var webhookRoute = router8;

// src/modules/reviews/reviews.route.ts
import { Router as Router9 } from "express";
import { usersRole as usersRole8 } from "@prisma/client";

// src/modules/reviews/reviews.controller.ts
import httpStatus9 from "http-status";

// src/modules/reviews/reviews.service.ts
var createReview = async (userId, payload) => {
  const rental = await prisma.rentalrequest.findUniqueOrThrow({
    where: { id: payload.rentalId },
    include: {
      properties: true
    }
  });
  if (rental.userId !== userId) {
    throw new Error("Unauthorized: This rental does not belong to you");
  }
  if (rental.status !== "active_completed") {
    throw new Error("You can only review a completed rental");
  }
  const existingReview = await prisma.review.findFirst({
    where: {
      rentalId: payload.rentalId,
      userId
    }
  });
  if (existingReview) {
    throw new Error("You already reviewed this rental");
  }
  if (payload.rating < 1 || payload.rating > 5) {
    throw new Error("Rating must be between 1 and 5");
  }
  const review = await prisma.review.create({
    data: {
      rentalId: payload.rentalId,
      userId,
      propertyId: rental.properties_id,
      rating: payload.rating,
      comment: payload.comment?.trim() || null
    },
    include: {
      rental: {
        include: {
          properties: true
        }
      }
    }
  });
  return review;
};
var reviewService = {
  createReview
};

// src/modules/reviews/reviews.controller.ts
var createReview2 = catchAsync(async (req, res, next) => {
  const userId = req.users?.id;
  const payload = req.body;
  if (!userId) {
    throw new Error("User is required");
  }
  if (!payload.rentalId) {
    throw new Error("Rental ID is required");
  }
  if (typeof payload.rating !== "number") {
    throw new Error("Rating is required");
  }
  const review = await reviewService.createReview(userId, {
    rentalId: payload.rentalId,
    rating: payload.rating,
    ...payload.comment ? { comment: payload.comment } : {}
  });
  sendResponse(res, {
    success: true,
    statusCode: httpStatus9.CREATED,
    message: "Review created successfully",
    data: review
  });
});
var reviewController = {
  createReview: createReview2
};

// src/modules/reviews/reviews.route.ts
var router9 = Router9();
router9.post("/", auth(usersRole8.tenant), reviewController.createReview);
var reviewRoute = router9;

// src/middleware/globalErrorhandler.ts
import httpStatus10 from "http-status";
var globalErrorHandler = (err, req, res, next) => {
  res.status(err.statusCode || httpStatus10.INTERNAL_SERVER_ERROR).json({
    success: false,
    statusCode: err.statusCode || httpStatus10.INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong",
    error: err.stack || err
  });
};

// src/app.ts
var app = express();
app.use(cors({
  origin: config_default.app_url,
  credentials: true
}));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("server is running");
});
app.use("/api/payments/webhook", express.raw({ type: "application/json" }));
app.use("/api/payments", webhookRoute);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/payment/success", async (req, res) => {
  const sessionId = typeof req.query.session_id === "string" ? req.query.session_id : typeof req.query.sessionId === "string" ? req.query.sessionId : void 0;
  if (sessionId) {
    try {
      const session = await paymentService.verifyPayment(sessionId);
      return res.status(200).json({
        success: true,
        message: "Payment completed successfully",
        data: {
          sessionId,
          status: session.payment_status,
          paid: session.payment_status === "paid"
        }
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error instanceof Error ? error.message : "Payment verification failed"
      });
    }
  }
  return res.status(200).json({ success: true, message: "Payment completed successfully" });
});
app.get("/payment/cancel", (req, res) => {
  res.status(200).json({ success: false, message: "Payment was cancelled" });
});
app.use("/api/auth", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/properties", propertiesRoute);
app.use("/api/admin", adminRoute);
app.use("/api/landlord", landlordRoute);
app.use("/api/rentals", rentrequestRoute);
app.use("/api/payments", paymentRoute);
app.use("/api/reviews", reviewRoute);
app.use((req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found`);
  error.statusCode = 404;
  next(error);
});
app.use(globalErrorHandler);
var app_default = app;

// src/server.ts
var port = Number(process.env.PORT ?? config_default.port ?? 5e3);
var main = async () => {
  try {
    await prisma.$connect();
    console.log("database connected");
    app_default.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting the server", error);
    await prisma.$disconnect();
    process.exit(1);
  }
};
if (process.env.VERCEL !== "1") {
  main();
}
var server_default = app_default;
export {
  server_default as default
};
//# sourceMappingURL=server.js.map