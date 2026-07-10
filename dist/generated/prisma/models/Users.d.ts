import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Users
 *
 */
export type UsersModel = runtime.Types.Result.DefaultSelection<Prisma.$UsersPayload>;
export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type UsersMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    role: $Enums.usersRole | null;
    phone: string | null;
    status: $Enums.userStatus | null;
    divison: string | null;
    district: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UsersMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    role: $Enums.usersRole | null;
    phone: string | null;
    status: $Enums.userStatus | null;
    divison: string | null;
    district: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UsersCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    role: number;
    phone: number;
    status: number;
    divison: number;
    district: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type UsersMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    phone?: true;
    status?: true;
    divison?: true;
    district?: true;
    created_at?: true;
    updated_at?: true;
};
export type UsersMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    phone?: true;
    status?: true;
    divison?: true;
    district?: true;
    created_at?: true;
    updated_at?: true;
};
export type UsersCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    phone?: true;
    status?: true;
    divison?: true;
    district?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type UsersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: Prisma.UsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UsersOrderByWithRelationInput | Prisma.UsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType;
};
export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsers[P]> : Prisma.GetScalarType<T[P], AggregateUsers[P]>;
};
export type UsersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithAggregationInput | Prisma.UsersOrderByWithAggregationInput[];
    by: Prisma.UsersScalarFieldEnum[] | Prisma.UsersScalarFieldEnum;
    having?: Prisma.UsersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type UsersGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    password: string;
    role: $Enums.usersRole;
    phone: string;
    status: $Enums.userStatus;
    divison: string;
    district: string;
    created_at: Date;
    updated_at: Date;
    _count: UsersCountAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]>;
}>>;
export type UsersWhereInput = {
    AND?: Prisma.UsersWhereInput | Prisma.UsersWhereInput[];
    OR?: Prisma.UsersWhereInput[];
    NOT?: Prisma.UsersWhereInput | Prisma.UsersWhereInput[];
    id?: Prisma.StringFilter<"Users"> | string;
    name?: Prisma.StringFilter<"Users"> | string;
    email?: Prisma.StringFilter<"Users"> | string;
    password?: Prisma.StringFilter<"Users"> | string;
    role?: Prisma.EnumusersRoleFilter<"Users"> | $Enums.usersRole;
    phone?: Prisma.StringFilter<"Users"> | string;
    status?: Prisma.EnumuserStatusFilter<"Users"> | $Enums.userStatus;
    divison?: Prisma.StringFilter<"Users"> | string;
    district?: Prisma.StringFilter<"Users"> | string;
    created_at?: Prisma.DateTimeFilter<"Users"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Users"> | Date | string;
    properties?: Prisma.PropertiesListRelationFilter;
    rental?: Prisma.RentalrequestListRelationFilter;
    reviews?: Prisma.ReviewListRelationFilter;
    payments?: Prisma.PaymentListRelationFilter;
};
export type UsersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    divison?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    properties?: Prisma.PropertiesOrderByRelationAggregateInput;
    rental?: Prisma.RentalrequestOrderByRelationAggregateInput;
    reviews?: Prisma.ReviewOrderByRelationAggregateInput;
    payments?: Prisma.PaymentOrderByRelationAggregateInput;
};
export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UsersWhereInput | Prisma.UsersWhereInput[];
    OR?: Prisma.UsersWhereInput[];
    NOT?: Prisma.UsersWhereInput | Prisma.UsersWhereInput[];
    name?: Prisma.StringFilter<"Users"> | string;
    password?: Prisma.StringFilter<"Users"> | string;
    role?: Prisma.EnumusersRoleFilter<"Users"> | $Enums.usersRole;
    phone?: Prisma.StringFilter<"Users"> | string;
    status?: Prisma.EnumuserStatusFilter<"Users"> | $Enums.userStatus;
    divison?: Prisma.StringFilter<"Users"> | string;
    district?: Prisma.StringFilter<"Users"> | string;
    created_at?: Prisma.DateTimeFilter<"Users"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Users"> | Date | string;
    properties?: Prisma.PropertiesListRelationFilter;
    rental?: Prisma.RentalrequestListRelationFilter;
    reviews?: Prisma.ReviewListRelationFilter;
    payments?: Prisma.PaymentListRelationFilter;
}, "id" | "email">;
export type UsersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    divison?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.UsersCountOrderByAggregateInput;
    _max?: Prisma.UsersMaxOrderByAggregateInput;
    _min?: Prisma.UsersMinOrderByAggregateInput;
};
export type UsersScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsersScalarWhereWithAggregatesInput | Prisma.UsersScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsersScalarWhereWithAggregatesInput | Prisma.UsersScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    password?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    role?: Prisma.EnumusersRoleWithAggregatesFilter<"Users"> | $Enums.usersRole;
    phone?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    status?: Prisma.EnumuserStatusWithAggregatesFilter<"Users"> | $Enums.userStatus;
    divison?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    district?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Users"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Users"> | Date | string;
};
export type UsersCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.usersRole;
    phone: string;
    status?: $Enums.userStatus;
    divison: string;
    district: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    properties?: Prisma.PropertiesCreateNestedManyWithoutUserInput;
    rental?: Prisma.RentalrequestCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutUserInput;
};
export type UsersUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.usersRole;
    phone: string;
    status?: $Enums.userStatus;
    divison: string;
    district: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    properties?: Prisma.PropertiesUncheckedCreateNestedManyWithoutUserInput;
    rental?: Prisma.RentalrequestUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutUserInput;
};
export type UsersUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumusersRoleFieldUpdateOperationsInput | $Enums.usersRole;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus;
    divison?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertiesUpdateManyWithoutUserNestedInput;
    rental?: Prisma.RentalrequestUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutUserNestedInput;
};
export type UsersUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumusersRoleFieldUpdateOperationsInput | $Enums.usersRole;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus;
    divison?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertiesUncheckedUpdateManyWithoutUserNestedInput;
    rental?: Prisma.RentalrequestUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutUserNestedInput;
};
export type UsersCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.usersRole;
    phone: string;
    status?: $Enums.userStatus;
    divison: string;
    district: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type UsersUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumusersRoleFieldUpdateOperationsInput | $Enums.usersRole;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus;
    divison?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsersUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumusersRoleFieldUpdateOperationsInput | $Enums.usersRole;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus;
    divison?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsersScalarRelationFilter = {
    is?: Prisma.UsersWhereInput;
    isNot?: Prisma.UsersWhereInput;
};
export type UsersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    divison?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UsersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    divison?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UsersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    divison?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UsersCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutPaymentsInput, Prisma.UsersUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.UsersWhereUniqueInput;
};
export type UsersUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutPaymentsInput, Prisma.UsersUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.UsersUpsertWithoutPaymentsInput;
    connect?: Prisma.UsersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsersUpdateToOneWithWhereWithoutPaymentsInput, Prisma.UsersUpdateWithoutPaymentsInput>, Prisma.UsersUncheckedUpdateWithoutPaymentsInput>;
};
export type UsersCreateNestedOneWithoutPropertiesInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutPropertiesInput, Prisma.UsersUncheckedCreateWithoutPropertiesInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutPropertiesInput;
    connect?: Prisma.UsersWhereUniqueInput;
};
export type UsersUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutPropertiesInput, Prisma.UsersUncheckedCreateWithoutPropertiesInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutPropertiesInput;
    upsert?: Prisma.UsersUpsertWithoutPropertiesInput;
    connect?: Prisma.UsersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsersUpdateToOneWithWhereWithoutPropertiesInput, Prisma.UsersUpdateWithoutPropertiesInput>, Prisma.UsersUncheckedUpdateWithoutPropertiesInput>;
};
export type UsersCreateNestedOneWithoutRentalInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutRentalInput, Prisma.UsersUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutRentalInput;
    connect?: Prisma.UsersWhereUniqueInput;
};
export type UsersUpdateOneRequiredWithoutRentalNestedInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutRentalInput, Prisma.UsersUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutRentalInput;
    upsert?: Prisma.UsersUpsertWithoutRentalInput;
    connect?: Prisma.UsersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsersUpdateToOneWithWhereWithoutRentalInput, Prisma.UsersUpdateWithoutRentalInput>, Prisma.UsersUncheckedUpdateWithoutRentalInput>;
};
export type UsersCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutReviewsInput, Prisma.UsersUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.UsersWhereUniqueInput;
};
export type UsersUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutReviewsInput, Prisma.UsersUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.UsersUpsertWithoutReviewsInput;
    connect?: Prisma.UsersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsersUpdateToOneWithWhereWithoutReviewsInput, Prisma.UsersUpdateWithoutReviewsInput>, Prisma.UsersUncheckedUpdateWithoutReviewsInput>;
};
export type EnumusersRoleFieldUpdateOperationsInput = {
    set?: $Enums.usersRole;
};
export type EnumuserStatusFieldUpdateOperationsInput = {
    set?: $Enums.userStatus;
};
export type UsersCreateWithoutPaymentsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.usersRole;
    phone: string;
    status?: $Enums.userStatus;
    divison: string;
    district: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    properties?: Prisma.PropertiesCreateNestedManyWithoutUserInput;
    rental?: Prisma.RentalrequestCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
};
export type UsersUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.usersRole;
    phone: string;
    status?: $Enums.userStatus;
    divison: string;
    district: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    properties?: Prisma.PropertiesUncheckedCreateNestedManyWithoutUserInput;
    rental?: Prisma.RentalrequestUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
};
export type UsersCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.UsersWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsersCreateWithoutPaymentsInput, Prisma.UsersUncheckedCreateWithoutPaymentsInput>;
};
export type UsersUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.UsersUpdateWithoutPaymentsInput, Prisma.UsersUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.UsersCreateWithoutPaymentsInput, Prisma.UsersUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.UsersWhereInput;
};
export type UsersUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.UsersWhereInput;
    data: Prisma.XOR<Prisma.UsersUpdateWithoutPaymentsInput, Prisma.UsersUncheckedUpdateWithoutPaymentsInput>;
};
export type UsersUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumusersRoleFieldUpdateOperationsInput | $Enums.usersRole;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus;
    divison?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertiesUpdateManyWithoutUserNestedInput;
    rental?: Prisma.RentalrequestUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
};
export type UsersUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumusersRoleFieldUpdateOperationsInput | $Enums.usersRole;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus;
    divison?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertiesUncheckedUpdateManyWithoutUserNestedInput;
    rental?: Prisma.RentalrequestUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
};
export type UsersCreateWithoutPropertiesInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.usersRole;
    phone: string;
    status?: $Enums.userStatus;
    divison: string;
    district: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: Prisma.RentalrequestCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutUserInput;
};
export type UsersUncheckedCreateWithoutPropertiesInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.usersRole;
    phone: string;
    status?: $Enums.userStatus;
    divison: string;
    district: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: Prisma.RentalrequestUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutUserInput;
};
export type UsersCreateOrConnectWithoutPropertiesInput = {
    where: Prisma.UsersWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsersCreateWithoutPropertiesInput, Prisma.UsersUncheckedCreateWithoutPropertiesInput>;
};
export type UsersUpsertWithoutPropertiesInput = {
    update: Prisma.XOR<Prisma.UsersUpdateWithoutPropertiesInput, Prisma.UsersUncheckedUpdateWithoutPropertiesInput>;
    create: Prisma.XOR<Prisma.UsersCreateWithoutPropertiesInput, Prisma.UsersUncheckedCreateWithoutPropertiesInput>;
    where?: Prisma.UsersWhereInput;
};
export type UsersUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: Prisma.UsersWhereInput;
    data: Prisma.XOR<Prisma.UsersUpdateWithoutPropertiesInput, Prisma.UsersUncheckedUpdateWithoutPropertiesInput>;
};
export type UsersUpdateWithoutPropertiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumusersRoleFieldUpdateOperationsInput | $Enums.usersRole;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus;
    divison?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: Prisma.RentalrequestUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutUserNestedInput;
};
export type UsersUncheckedUpdateWithoutPropertiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumusersRoleFieldUpdateOperationsInput | $Enums.usersRole;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus;
    divison?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: Prisma.RentalrequestUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutUserNestedInput;
};
export type UsersCreateWithoutRentalInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.usersRole;
    phone: string;
    status?: $Enums.userStatus;
    divison: string;
    district: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    properties?: Prisma.PropertiesCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutUserInput;
};
export type UsersUncheckedCreateWithoutRentalInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.usersRole;
    phone: string;
    status?: $Enums.userStatus;
    divison: string;
    district: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    properties?: Prisma.PropertiesUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutUserInput;
};
export type UsersCreateOrConnectWithoutRentalInput = {
    where: Prisma.UsersWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsersCreateWithoutRentalInput, Prisma.UsersUncheckedCreateWithoutRentalInput>;
};
export type UsersUpsertWithoutRentalInput = {
    update: Prisma.XOR<Prisma.UsersUpdateWithoutRentalInput, Prisma.UsersUncheckedUpdateWithoutRentalInput>;
    create: Prisma.XOR<Prisma.UsersCreateWithoutRentalInput, Prisma.UsersUncheckedCreateWithoutRentalInput>;
    where?: Prisma.UsersWhereInput;
};
export type UsersUpdateToOneWithWhereWithoutRentalInput = {
    where?: Prisma.UsersWhereInput;
    data: Prisma.XOR<Prisma.UsersUpdateWithoutRentalInput, Prisma.UsersUncheckedUpdateWithoutRentalInput>;
};
export type UsersUpdateWithoutRentalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumusersRoleFieldUpdateOperationsInput | $Enums.usersRole;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus;
    divison?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertiesUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutUserNestedInput;
};
export type UsersUncheckedUpdateWithoutRentalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumusersRoleFieldUpdateOperationsInput | $Enums.usersRole;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus;
    divison?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertiesUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutUserNestedInput;
};
export type UsersCreateWithoutReviewsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.usersRole;
    phone: string;
    status?: $Enums.userStatus;
    divison: string;
    district: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    properties?: Prisma.PropertiesCreateNestedManyWithoutUserInput;
    rental?: Prisma.RentalrequestCreateNestedManyWithoutUserInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutUserInput;
};
export type UsersUncheckedCreateWithoutReviewsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.usersRole;
    phone: string;
    status?: $Enums.userStatus;
    divison: string;
    district: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    properties?: Prisma.PropertiesUncheckedCreateNestedManyWithoutUserInput;
    rental?: Prisma.RentalrequestUncheckedCreateNestedManyWithoutUserInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutUserInput;
};
export type UsersCreateOrConnectWithoutReviewsInput = {
    where: Prisma.UsersWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsersCreateWithoutReviewsInput, Prisma.UsersUncheckedCreateWithoutReviewsInput>;
};
export type UsersUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.UsersUpdateWithoutReviewsInput, Prisma.UsersUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.UsersCreateWithoutReviewsInput, Prisma.UsersUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.UsersWhereInput;
};
export type UsersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.UsersWhereInput;
    data: Prisma.XOR<Prisma.UsersUpdateWithoutReviewsInput, Prisma.UsersUncheckedUpdateWithoutReviewsInput>;
};
export type UsersUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumusersRoleFieldUpdateOperationsInput | $Enums.usersRole;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus;
    divison?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertiesUpdateManyWithoutUserNestedInput;
    rental?: Prisma.RentalrequestUpdateManyWithoutUserNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutUserNestedInput;
};
export type UsersUncheckedUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumusersRoleFieldUpdateOperationsInput | $Enums.usersRole;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumuserStatusFieldUpdateOperationsInput | $Enums.userStatus;
    divison?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertiesUncheckedUpdateManyWithoutUserNestedInput;
    rental?: Prisma.RentalrequestUncheckedUpdateManyWithoutUserNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutUserNestedInput;
};
/**
 * Count Type UsersCountOutputType
 */
export type UsersCountOutputType = {
    properties: number;
    rental: number;
    reviews: number;
    payments: number;
};
export type UsersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    properties?: boolean | UsersCountOutputTypeCountPropertiesArgs;
    rental?: boolean | UsersCountOutputTypeCountRentalArgs;
    reviews?: boolean | UsersCountOutputTypeCountReviewsArgs;
    payments?: boolean | UsersCountOutputTypeCountPaymentsArgs;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: Prisma.UsersCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountPropertiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PropertiesWhereInput;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountRentalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RentalrequestWhereInput;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
};
export type UsersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    phone?: boolean;
    status?: boolean;
    divison?: boolean;
    district?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    properties?: boolean | Prisma.Users$propertiesArgs<ExtArgs>;
    rental?: boolean | Prisma.Users$rentalArgs<ExtArgs>;
    reviews?: boolean | Prisma.Users$reviewsArgs<ExtArgs>;
    payments?: boolean | Prisma.Users$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["users"]>;
export type UsersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    phone?: boolean;
    status?: boolean;
    divison?: boolean;
    district?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["users"]>;
export type UsersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    phone?: boolean;
    status?: boolean;
    divison?: boolean;
    district?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["users"]>;
export type UsersSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    phone?: boolean;
    status?: boolean;
    divison?: boolean;
    district?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type UsersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "phone" | "status" | "divison" | "district" | "created_at" | "updated_at", ExtArgs["result"]["users"]>;
export type UsersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    properties?: boolean | Prisma.Users$propertiesArgs<ExtArgs>;
    rental?: boolean | Prisma.Users$rentalArgs<ExtArgs>;
    reviews?: boolean | Prisma.Users$reviewsArgs<ExtArgs>;
    payments?: boolean | Prisma.Users$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UsersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UsersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UsersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Users";
    objects: {
        properties: Prisma.$PropertiesPayload<ExtArgs>[];
        rental: Prisma.$RentalrequestPayload<ExtArgs>[];
        reviews: Prisma.$ReviewPayload<ExtArgs>[];
        payments: Prisma.$PaymentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string;
        password: string;
        role: $Enums.usersRole;
        phone: string;
        status: $Enums.userStatus;
        divison: string;
        district: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["users"]>;
    composites: {};
};
export type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsersPayload, S>;
export type UsersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsersCountAggregateInputType | true;
};
export interface UsersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Users'];
        meta: {
            name: 'Users';
        };
    };
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: Prisma.SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: Prisma.SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UsersFindManyArgs>(args?: Prisma.SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     *
     */
    create<T extends UsersCreateArgs>(args: Prisma.SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UsersCreateManyArgs>(args?: Prisma.SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     *
     */
    delete<T extends UsersDeleteArgs>(args: Prisma.SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UsersUpdateArgs>(args: Prisma.SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UsersUpdateManyArgs>(args: Prisma.SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: Prisma.SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(args?: Prisma.Subset<T, UsersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsersCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Prisma.Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>;
    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UsersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsersGroupByArgs['orderBy'];
    } : {
        orderBy?: UsersGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Users model
     */
    readonly fields: UsersFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Users.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UsersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    properties<T extends Prisma.Users$propertiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Users$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    rental<T extends Prisma.Users$rentalArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Users$rentalArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalrequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviews<T extends Prisma.Users$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Users$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    payments<T extends Prisma.Users$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Users$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Users model
 */
export interface UsersFieldRefs {
    readonly id: Prisma.FieldRef<"Users", 'String'>;
    readonly name: Prisma.FieldRef<"Users", 'String'>;
    readonly email: Prisma.FieldRef<"Users", 'String'>;
    readonly password: Prisma.FieldRef<"Users", 'String'>;
    readonly role: Prisma.FieldRef<"Users", 'usersRole'>;
    readonly phone: Prisma.FieldRef<"Users", 'String'>;
    readonly status: Prisma.FieldRef<"Users", 'userStatus'>;
    readonly divison: Prisma.FieldRef<"Users", 'String'>;
    readonly district: Prisma.FieldRef<"Users", 'String'>;
    readonly created_at: Prisma.FieldRef<"Users", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Users", 'DateTime'>;
}
/**
 * Users findUnique
 */
export type UsersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: Prisma.UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where: Prisma.UsersWhereUniqueInput;
};
/**
 * Users findUniqueOrThrow
 */
export type UsersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: Prisma.UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where: Prisma.UsersWhereUniqueInput;
};
/**
 * Users findFirst
 */
export type UsersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: Prisma.UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UsersOrderByWithRelationInput | Prisma.UsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
/**
 * Users findFirstOrThrow
 */
export type UsersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: Prisma.UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UsersOrderByWithRelationInput | Prisma.UsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
/**
 * Users findMany
 */
export type UsersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: Prisma.UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UsersOrderByWithRelationInput | Prisma.UsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
/**
 * Users create
 */
export type UsersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: Prisma.UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsersInclude<ExtArgs> | null;
    /**
     * The data needed to create a Users.
     */
    data: Prisma.XOR<Prisma.UsersCreateInput, Prisma.UsersUncheckedCreateInput>;
};
/**
 * Users createMany
 */
export type UsersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UsersCreateManyInput | Prisma.UsersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Users createManyAndReturn
 */
export type UsersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: Prisma.UsersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UsersCreateManyInput | Prisma.UsersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Users update
 */
export type UsersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: Prisma.UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsersInclude<ExtArgs> | null;
    /**
     * The data needed to update a Users.
     */
    data: Prisma.XOR<Prisma.UsersUpdateInput, Prisma.UsersUncheckedUpdateInput>;
    /**
     * Choose, which Users to update.
     */
    where: Prisma.UsersWhereUniqueInput;
};
/**
 * Users updateMany
 */
export type UsersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UsersUpdateManyMutationInput, Prisma.UsersUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UsersWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * Users updateManyAndReturn
 */
export type UsersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: Prisma.UsersSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UsersUpdateManyMutationInput, Prisma.UsersUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UsersWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * Users upsert
 */
export type UsersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: Prisma.UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsersInclude<ExtArgs> | null;
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: Prisma.UsersWhereUniqueInput;
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: Prisma.XOR<Prisma.UsersCreateInput, Prisma.UsersUncheckedCreateInput>;
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UsersUpdateInput, Prisma.UsersUncheckedUpdateInput>;
};
/**
 * Users delete
 */
export type UsersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: Prisma.UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsersInclude<ExtArgs> | null;
    /**
     * Filter which Users to delete.
     */
    where: Prisma.UsersWhereUniqueInput;
};
/**
 * Users deleteMany
 */
export type UsersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UsersWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * Users.properties
 */
export type Users$propertiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: Prisma.PropertiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Properties
     */
    omit?: Prisma.PropertiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertiesInclude<ExtArgs> | null;
    where?: Prisma.PropertiesWhereInput;
    orderBy?: Prisma.PropertiesOrderByWithRelationInput | Prisma.PropertiesOrderByWithRelationInput[];
    cursor?: Prisma.PropertiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PropertiesScalarFieldEnum | Prisma.PropertiesScalarFieldEnum[];
};
/**
 * Users.rental
 */
export type Users$rentalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rentalrequest
     */
    select?: Prisma.RentalrequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Rentalrequest
     */
    omit?: Prisma.RentalrequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalrequestInclude<ExtArgs> | null;
    where?: Prisma.RentalrequestWhereInput;
    orderBy?: Prisma.RentalrequestOrderByWithRelationInput | Prisma.RentalrequestOrderByWithRelationInput[];
    cursor?: Prisma.RentalrequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RentalrequestScalarFieldEnum | Prisma.RentalrequestScalarFieldEnum[];
};
/**
 * Users.reviews
 */
export type Users$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
/**
 * Users.payments
 */
export type Users$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
/**
 * Users without action
 */
export type UsersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: Prisma.UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsersInclude<ExtArgs> | null;
};
//# sourceMappingURL=Users.d.ts.map