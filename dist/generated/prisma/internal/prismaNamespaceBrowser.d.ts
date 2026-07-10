import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Category: "Category";
    readonly Payment: "Payment";
    readonly Properties: "Properties";
    readonly Rentalrequest: "Rentalrequest";
    readonly Review: "Review";
    readonly Users: "Users";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const PaymentScalarFieldEnum: {
    readonly id: "id";
    readonly rentalId: "rentalId";
    readonly userId: "userId";
    readonly amount: "amount";
    readonly currency: "currency";
    readonly stripePaymentIntentId: "stripePaymentIntentId";
    readonly status: "status";
    readonly paymentMethod: "paymentMethod";
    readonly transactionId: "transactionId";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];
export declare const PropertiesScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly dexcription: "dexcription";
    readonly rent: "rent";
    readonly bedrooms: "bedrooms";
    readonly bathrooms: "bathrooms";
    readonly size_sqft: "size_sqft";
    readonly floor: "floor";
    readonly availability: "availability";
    readonly available_from: "available_from";
    readonly address: "address";
    readonly division: "division";
    readonly images: "images";
    readonly userId: "userId";
    readonly categoriesId: "categoriesId";
    readonly propertiesId: "propertiesId";
};
export type PropertiesScalarFieldEnum = (typeof PropertiesScalarFieldEnum)[keyof typeof PropertiesScalarFieldEnum];
export declare const RentalrequestScalarFieldEnum: {
    readonly id: "id";
    readonly properties_id: "properties_id";
    readonly userId: "userId";
    readonly move_in_date: "move_in_date";
    readonly lease_duration: "lease_duration";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type RentalrequestScalarFieldEnum = (typeof RentalrequestScalarFieldEnum)[keyof typeof RentalrequestScalarFieldEnum];
export declare const ReviewScalarFieldEnum: {
    readonly id: "id";
    readonly rentalId: "rentalId";
    readonly userId: "userId";
    readonly propertyId: "propertyId";
    readonly rating: "rating";
    readonly comment: "comment";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly role: "role";
    readonly phone: "phone";
    readonly status: "status";
    readonly divison: "divison";
    readonly district: "district";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map