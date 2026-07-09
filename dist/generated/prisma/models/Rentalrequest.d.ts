import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Rentalrequest
 *
 */
export type RentalrequestModel = runtime.Types.Result.DefaultSelection<Prisma.$RentalrequestPayload>;
export type AggregateRentalrequest = {
    _count: RentalrequestCountAggregateOutputType | null;
    _min: RentalrequestMinAggregateOutputType | null;
    _max: RentalrequestMaxAggregateOutputType | null;
};
export type RentalrequestMinAggregateOutputType = {
    id: string | null;
    properties_id: string | null;
    userId: string | null;
    move_in_date: string | null;
    lease_duration: string | null;
    status: $Enums.rentalStatus | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type RentalrequestMaxAggregateOutputType = {
    id: string | null;
    properties_id: string | null;
    userId: string | null;
    move_in_date: string | null;
    lease_duration: string | null;
    status: $Enums.rentalStatus | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type RentalrequestCountAggregateOutputType = {
    id: number;
    properties_id: number;
    userId: number;
    move_in_date: number;
    lease_duration: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type RentalrequestMinAggregateInputType = {
    id?: true;
    properties_id?: true;
    userId?: true;
    move_in_date?: true;
    lease_duration?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type RentalrequestMaxAggregateInputType = {
    id?: true;
    properties_id?: true;
    userId?: true;
    move_in_date?: true;
    lease_duration?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type RentalrequestCountAggregateInputType = {
    id?: true;
    properties_id?: true;
    userId?: true;
    move_in_date?: true;
    lease_duration?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type RentalrequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Rentalrequest to aggregate.
     */
    where?: Prisma.RentalrequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Rentalrequests to fetch.
     */
    orderBy?: Prisma.RentalrequestOrderByWithRelationInput | Prisma.RentalrequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RentalrequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Rentalrequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Rentalrequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Rentalrequests
    **/
    _count?: true | RentalrequestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RentalrequestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RentalrequestMaxAggregateInputType;
};
export type GetRentalrequestAggregateType<T extends RentalrequestAggregateArgs> = {
    [P in keyof T & keyof AggregateRentalrequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRentalrequest[P]> : Prisma.GetScalarType<T[P], AggregateRentalrequest[P]>;
};
export type RentalrequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RentalrequestWhereInput;
    orderBy?: Prisma.RentalrequestOrderByWithAggregationInput | Prisma.RentalrequestOrderByWithAggregationInput[];
    by: Prisma.RentalrequestScalarFieldEnum[] | Prisma.RentalrequestScalarFieldEnum;
    having?: Prisma.RentalrequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RentalrequestCountAggregateInputType | true;
    _min?: RentalrequestMinAggregateInputType;
    _max?: RentalrequestMaxAggregateInputType;
};
export type RentalrequestGroupByOutputType = {
    id: string;
    properties_id: string;
    userId: string;
    move_in_date: string;
    lease_duration: string;
    status: $Enums.rentalStatus;
    created_at: Date;
    updated_at: Date;
    _count: RentalrequestCountAggregateOutputType | null;
    _min: RentalrequestMinAggregateOutputType | null;
    _max: RentalrequestMaxAggregateOutputType | null;
};
export type GetRentalrequestGroupByPayload<T extends RentalrequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RentalrequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RentalrequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RentalrequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RentalrequestGroupByOutputType[P]>;
}>>;
export type RentalrequestWhereInput = {
    AND?: Prisma.RentalrequestWhereInput | Prisma.RentalrequestWhereInput[];
    OR?: Prisma.RentalrequestWhereInput[];
    NOT?: Prisma.RentalrequestWhereInput | Prisma.RentalrequestWhereInput[];
    id?: Prisma.StringFilter<"Rentalrequest"> | string;
    properties_id?: Prisma.StringFilter<"Rentalrequest"> | string;
    userId?: Prisma.StringFilter<"Rentalrequest"> | string;
    move_in_date?: Prisma.StringFilter<"Rentalrequest"> | string;
    lease_duration?: Prisma.StringFilter<"Rentalrequest"> | string;
    status?: Prisma.EnumrentalStatusFilter<"Rentalrequest"> | $Enums.rentalStatus;
    created_at?: Prisma.DateTimeFilter<"Rentalrequest"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Rentalrequest"> | Date | string;
    properties?: Prisma.XOR<Prisma.PropertiesScalarRelationFilter, Prisma.PropertiesWhereInput>;
    user?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.UsersWhereInput>;
    payment?: Prisma.XOR<Prisma.PaymentNullableScalarRelationFilter, Prisma.PaymentWhereInput> | null;
};
export type RentalrequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    properties_id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    move_in_date?: Prisma.SortOrder;
    lease_duration?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    properties?: Prisma.PropertiesOrderByWithRelationInput;
    user?: Prisma.UsersOrderByWithRelationInput;
    payment?: Prisma.PaymentOrderByWithRelationInput;
};
export type RentalrequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RentalrequestWhereInput | Prisma.RentalrequestWhereInput[];
    OR?: Prisma.RentalrequestWhereInput[];
    NOT?: Prisma.RentalrequestWhereInput | Prisma.RentalrequestWhereInput[];
    properties_id?: Prisma.StringFilter<"Rentalrequest"> | string;
    userId?: Prisma.StringFilter<"Rentalrequest"> | string;
    move_in_date?: Prisma.StringFilter<"Rentalrequest"> | string;
    lease_duration?: Prisma.StringFilter<"Rentalrequest"> | string;
    status?: Prisma.EnumrentalStatusFilter<"Rentalrequest"> | $Enums.rentalStatus;
    created_at?: Prisma.DateTimeFilter<"Rentalrequest"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Rentalrequest"> | Date | string;
    properties?: Prisma.XOR<Prisma.PropertiesScalarRelationFilter, Prisma.PropertiesWhereInput>;
    user?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.UsersWhereInput>;
    payment?: Prisma.XOR<Prisma.PaymentNullableScalarRelationFilter, Prisma.PaymentWhereInput> | null;
}, "id">;
export type RentalrequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    properties_id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    move_in_date?: Prisma.SortOrder;
    lease_duration?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.RentalrequestCountOrderByAggregateInput;
    _max?: Prisma.RentalrequestMaxOrderByAggregateInput;
    _min?: Prisma.RentalrequestMinOrderByAggregateInput;
};
export type RentalrequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.RentalrequestScalarWhereWithAggregatesInput | Prisma.RentalrequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.RentalrequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RentalrequestScalarWhereWithAggregatesInput | Prisma.RentalrequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Rentalrequest"> | string;
    properties_id?: Prisma.StringWithAggregatesFilter<"Rentalrequest"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Rentalrequest"> | string;
    move_in_date?: Prisma.StringWithAggregatesFilter<"Rentalrequest"> | string;
    lease_duration?: Prisma.StringWithAggregatesFilter<"Rentalrequest"> | string;
    status?: Prisma.EnumrentalStatusWithAggregatesFilter<"Rentalrequest"> | $Enums.rentalStatus;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Rentalrequest"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Rentalrequest"> | Date | string;
};
export type RentalrequestCreateInput = {
    id?: string;
    move_in_date: string;
    lease_duration: string;
    status?: $Enums.rentalStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    properties: Prisma.PropertiesCreateNestedOneWithoutRentalrequestsInput;
    user: Prisma.UsersCreateNestedOneWithoutRentalInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutRentalInput;
};
export type RentalrequestUncheckedCreateInput = {
    id?: string;
    properties_id: string;
    userId: string;
    move_in_date: string;
    lease_duration: string;
    status?: $Enums.rentalStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: Prisma.PaymentUncheckedCreateNestedOneWithoutRentalInput;
};
export type RentalrequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    move_in_date?: Prisma.StringFieldUpdateOperationsInput | string;
    lease_duration?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumrentalStatusFieldUpdateOperationsInput | $Enums.rentalStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertiesUpdateOneRequiredWithoutRentalrequestsNestedInput;
    user?: Prisma.UsersUpdateOneRequiredWithoutRentalNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutRentalNestedInput;
};
export type RentalrequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    properties_id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    move_in_date?: Prisma.StringFieldUpdateOperationsInput | string;
    lease_duration?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumrentalStatusFieldUpdateOperationsInput | $Enums.rentalStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.PaymentUncheckedUpdateOneWithoutRentalNestedInput;
};
export type RentalrequestCreateManyInput = {
    id?: string;
    properties_id: string;
    userId: string;
    move_in_date: string;
    lease_duration: string;
    status?: $Enums.rentalStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RentalrequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    move_in_date?: Prisma.StringFieldUpdateOperationsInput | string;
    lease_duration?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumrentalStatusFieldUpdateOperationsInput | $Enums.rentalStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalrequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    properties_id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    move_in_date?: Prisma.StringFieldUpdateOperationsInput | string;
    lease_duration?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumrentalStatusFieldUpdateOperationsInput | $Enums.rentalStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalrequestScalarRelationFilter = {
    is?: Prisma.RentalrequestWhereInput;
    isNot?: Prisma.RentalrequestWhereInput;
};
export type RentalrequestListRelationFilter = {
    every?: Prisma.RentalrequestWhereInput;
    some?: Prisma.RentalrequestWhereInput;
    none?: Prisma.RentalrequestWhereInput;
};
export type RentalrequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RentalrequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    properties_id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    move_in_date?: Prisma.SortOrder;
    lease_duration?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type RentalrequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    properties_id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    move_in_date?: Prisma.SortOrder;
    lease_duration?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type RentalrequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    properties_id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    move_in_date?: Prisma.SortOrder;
    lease_duration?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type RentalrequestCreateNestedOneWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.RentalrequestCreateWithoutPaymentInput, Prisma.RentalrequestUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.RentalrequestCreateOrConnectWithoutPaymentInput;
    connect?: Prisma.RentalrequestWhereUniqueInput;
};
export type RentalrequestUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.RentalrequestCreateWithoutPaymentInput, Prisma.RentalrequestUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.RentalrequestCreateOrConnectWithoutPaymentInput;
    upsert?: Prisma.RentalrequestUpsertWithoutPaymentInput;
    connect?: Prisma.RentalrequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RentalrequestUpdateToOneWithWhereWithoutPaymentInput, Prisma.RentalrequestUpdateWithoutPaymentInput>, Prisma.RentalrequestUncheckedUpdateWithoutPaymentInput>;
};
export type RentalrequestCreateNestedManyWithoutPropertiesInput = {
    create?: Prisma.XOR<Prisma.RentalrequestCreateWithoutPropertiesInput, Prisma.RentalrequestUncheckedCreateWithoutPropertiesInput> | Prisma.RentalrequestCreateWithoutPropertiesInput[] | Prisma.RentalrequestUncheckedCreateWithoutPropertiesInput[];
    connectOrCreate?: Prisma.RentalrequestCreateOrConnectWithoutPropertiesInput | Prisma.RentalrequestCreateOrConnectWithoutPropertiesInput[];
    createMany?: Prisma.RentalrequestCreateManyPropertiesInputEnvelope;
    connect?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
};
export type RentalrequestUncheckedCreateNestedManyWithoutPropertiesInput = {
    create?: Prisma.XOR<Prisma.RentalrequestCreateWithoutPropertiesInput, Prisma.RentalrequestUncheckedCreateWithoutPropertiesInput> | Prisma.RentalrequestCreateWithoutPropertiesInput[] | Prisma.RentalrequestUncheckedCreateWithoutPropertiesInput[];
    connectOrCreate?: Prisma.RentalrequestCreateOrConnectWithoutPropertiesInput | Prisma.RentalrequestCreateOrConnectWithoutPropertiesInput[];
    createMany?: Prisma.RentalrequestCreateManyPropertiesInputEnvelope;
    connect?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
};
export type RentalrequestUpdateManyWithoutPropertiesNestedInput = {
    create?: Prisma.XOR<Prisma.RentalrequestCreateWithoutPropertiesInput, Prisma.RentalrequestUncheckedCreateWithoutPropertiesInput> | Prisma.RentalrequestCreateWithoutPropertiesInput[] | Prisma.RentalrequestUncheckedCreateWithoutPropertiesInput[];
    connectOrCreate?: Prisma.RentalrequestCreateOrConnectWithoutPropertiesInput | Prisma.RentalrequestCreateOrConnectWithoutPropertiesInput[];
    upsert?: Prisma.RentalrequestUpsertWithWhereUniqueWithoutPropertiesInput | Prisma.RentalrequestUpsertWithWhereUniqueWithoutPropertiesInput[];
    createMany?: Prisma.RentalrequestCreateManyPropertiesInputEnvelope;
    set?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
    disconnect?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
    delete?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
    connect?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
    update?: Prisma.RentalrequestUpdateWithWhereUniqueWithoutPropertiesInput | Prisma.RentalrequestUpdateWithWhereUniqueWithoutPropertiesInput[];
    updateMany?: Prisma.RentalrequestUpdateManyWithWhereWithoutPropertiesInput | Prisma.RentalrequestUpdateManyWithWhereWithoutPropertiesInput[];
    deleteMany?: Prisma.RentalrequestScalarWhereInput | Prisma.RentalrequestScalarWhereInput[];
};
export type RentalrequestUncheckedUpdateManyWithoutPropertiesNestedInput = {
    create?: Prisma.XOR<Prisma.RentalrequestCreateWithoutPropertiesInput, Prisma.RentalrequestUncheckedCreateWithoutPropertiesInput> | Prisma.RentalrequestCreateWithoutPropertiesInput[] | Prisma.RentalrequestUncheckedCreateWithoutPropertiesInput[];
    connectOrCreate?: Prisma.RentalrequestCreateOrConnectWithoutPropertiesInput | Prisma.RentalrequestCreateOrConnectWithoutPropertiesInput[];
    upsert?: Prisma.RentalrequestUpsertWithWhereUniqueWithoutPropertiesInput | Prisma.RentalrequestUpsertWithWhereUniqueWithoutPropertiesInput[];
    createMany?: Prisma.RentalrequestCreateManyPropertiesInputEnvelope;
    set?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
    disconnect?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
    delete?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
    connect?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
    update?: Prisma.RentalrequestUpdateWithWhereUniqueWithoutPropertiesInput | Prisma.RentalrequestUpdateWithWhereUniqueWithoutPropertiesInput[];
    updateMany?: Prisma.RentalrequestUpdateManyWithWhereWithoutPropertiesInput | Prisma.RentalrequestUpdateManyWithWhereWithoutPropertiesInput[];
    deleteMany?: Prisma.RentalrequestScalarWhereInput | Prisma.RentalrequestScalarWhereInput[];
};
export type EnumrentalStatusFieldUpdateOperationsInput = {
    set?: $Enums.rentalStatus;
};
export type RentalrequestCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RentalrequestCreateWithoutUserInput, Prisma.RentalrequestUncheckedCreateWithoutUserInput> | Prisma.RentalrequestCreateWithoutUserInput[] | Prisma.RentalrequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RentalrequestCreateOrConnectWithoutUserInput | Prisma.RentalrequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RentalrequestCreateManyUserInputEnvelope;
    connect?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
};
export type RentalrequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RentalrequestCreateWithoutUserInput, Prisma.RentalrequestUncheckedCreateWithoutUserInput> | Prisma.RentalrequestCreateWithoutUserInput[] | Prisma.RentalrequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RentalrequestCreateOrConnectWithoutUserInput | Prisma.RentalrequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RentalrequestCreateManyUserInputEnvelope;
    connect?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
};
export type RentalrequestUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RentalrequestCreateWithoutUserInput, Prisma.RentalrequestUncheckedCreateWithoutUserInput> | Prisma.RentalrequestCreateWithoutUserInput[] | Prisma.RentalrequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RentalrequestCreateOrConnectWithoutUserInput | Prisma.RentalrequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RentalrequestUpsertWithWhereUniqueWithoutUserInput | Prisma.RentalrequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RentalrequestCreateManyUserInputEnvelope;
    set?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
    disconnect?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
    delete?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
    connect?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
    update?: Prisma.RentalrequestUpdateWithWhereUniqueWithoutUserInput | Prisma.RentalrequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RentalrequestUpdateManyWithWhereWithoutUserInput | Prisma.RentalrequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RentalrequestScalarWhereInput | Prisma.RentalrequestScalarWhereInput[];
};
export type RentalrequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RentalrequestCreateWithoutUserInput, Prisma.RentalrequestUncheckedCreateWithoutUserInput> | Prisma.RentalrequestCreateWithoutUserInput[] | Prisma.RentalrequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RentalrequestCreateOrConnectWithoutUserInput | Prisma.RentalrequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RentalrequestUpsertWithWhereUniqueWithoutUserInput | Prisma.RentalrequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RentalrequestCreateManyUserInputEnvelope;
    set?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
    disconnect?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
    delete?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
    connect?: Prisma.RentalrequestWhereUniqueInput | Prisma.RentalrequestWhereUniqueInput[];
    update?: Prisma.RentalrequestUpdateWithWhereUniqueWithoutUserInput | Prisma.RentalrequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RentalrequestUpdateManyWithWhereWithoutUserInput | Prisma.RentalrequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RentalrequestScalarWhereInput | Prisma.RentalrequestScalarWhereInput[];
};
export type RentalrequestCreateWithoutPaymentInput = {
    id?: string;
    move_in_date: string;
    lease_duration: string;
    status?: $Enums.rentalStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    properties: Prisma.PropertiesCreateNestedOneWithoutRentalrequestsInput;
    user: Prisma.UsersCreateNestedOneWithoutRentalInput;
};
export type RentalrequestUncheckedCreateWithoutPaymentInput = {
    id?: string;
    properties_id: string;
    userId: string;
    move_in_date: string;
    lease_duration: string;
    status?: $Enums.rentalStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RentalrequestCreateOrConnectWithoutPaymentInput = {
    where: Prisma.RentalrequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.RentalrequestCreateWithoutPaymentInput, Prisma.RentalrequestUncheckedCreateWithoutPaymentInput>;
};
export type RentalrequestUpsertWithoutPaymentInput = {
    update: Prisma.XOR<Prisma.RentalrequestUpdateWithoutPaymentInput, Prisma.RentalrequestUncheckedUpdateWithoutPaymentInput>;
    create: Prisma.XOR<Prisma.RentalrequestCreateWithoutPaymentInput, Prisma.RentalrequestUncheckedCreateWithoutPaymentInput>;
    where?: Prisma.RentalrequestWhereInput;
};
export type RentalrequestUpdateToOneWithWhereWithoutPaymentInput = {
    where?: Prisma.RentalrequestWhereInput;
    data: Prisma.XOR<Prisma.RentalrequestUpdateWithoutPaymentInput, Prisma.RentalrequestUncheckedUpdateWithoutPaymentInput>;
};
export type RentalrequestUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    move_in_date?: Prisma.StringFieldUpdateOperationsInput | string;
    lease_duration?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumrentalStatusFieldUpdateOperationsInput | $Enums.rentalStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertiesUpdateOneRequiredWithoutRentalrequestsNestedInput;
    user?: Prisma.UsersUpdateOneRequiredWithoutRentalNestedInput;
};
export type RentalrequestUncheckedUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    properties_id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    move_in_date?: Prisma.StringFieldUpdateOperationsInput | string;
    lease_duration?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumrentalStatusFieldUpdateOperationsInput | $Enums.rentalStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalrequestCreateWithoutPropertiesInput = {
    id?: string;
    move_in_date: string;
    lease_duration: string;
    status?: $Enums.rentalStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UsersCreateNestedOneWithoutRentalInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutRentalInput;
};
export type RentalrequestUncheckedCreateWithoutPropertiesInput = {
    id?: string;
    userId: string;
    move_in_date: string;
    lease_duration: string;
    status?: $Enums.rentalStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: Prisma.PaymentUncheckedCreateNestedOneWithoutRentalInput;
};
export type RentalrequestCreateOrConnectWithoutPropertiesInput = {
    where: Prisma.RentalrequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.RentalrequestCreateWithoutPropertiesInput, Prisma.RentalrequestUncheckedCreateWithoutPropertiesInput>;
};
export type RentalrequestCreateManyPropertiesInputEnvelope = {
    data: Prisma.RentalrequestCreateManyPropertiesInput | Prisma.RentalrequestCreateManyPropertiesInput[];
    skipDuplicates?: boolean;
};
export type RentalrequestUpsertWithWhereUniqueWithoutPropertiesInput = {
    where: Prisma.RentalrequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.RentalrequestUpdateWithoutPropertiesInput, Prisma.RentalrequestUncheckedUpdateWithoutPropertiesInput>;
    create: Prisma.XOR<Prisma.RentalrequestCreateWithoutPropertiesInput, Prisma.RentalrequestUncheckedCreateWithoutPropertiesInput>;
};
export type RentalrequestUpdateWithWhereUniqueWithoutPropertiesInput = {
    where: Prisma.RentalrequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.RentalrequestUpdateWithoutPropertiesInput, Prisma.RentalrequestUncheckedUpdateWithoutPropertiesInput>;
};
export type RentalrequestUpdateManyWithWhereWithoutPropertiesInput = {
    where: Prisma.RentalrequestScalarWhereInput;
    data: Prisma.XOR<Prisma.RentalrequestUpdateManyMutationInput, Prisma.RentalrequestUncheckedUpdateManyWithoutPropertiesInput>;
};
export type RentalrequestScalarWhereInput = {
    AND?: Prisma.RentalrequestScalarWhereInput | Prisma.RentalrequestScalarWhereInput[];
    OR?: Prisma.RentalrequestScalarWhereInput[];
    NOT?: Prisma.RentalrequestScalarWhereInput | Prisma.RentalrequestScalarWhereInput[];
    id?: Prisma.StringFilter<"Rentalrequest"> | string;
    properties_id?: Prisma.StringFilter<"Rentalrequest"> | string;
    userId?: Prisma.StringFilter<"Rentalrequest"> | string;
    move_in_date?: Prisma.StringFilter<"Rentalrequest"> | string;
    lease_duration?: Prisma.StringFilter<"Rentalrequest"> | string;
    status?: Prisma.EnumrentalStatusFilter<"Rentalrequest"> | $Enums.rentalStatus;
    created_at?: Prisma.DateTimeFilter<"Rentalrequest"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Rentalrequest"> | Date | string;
};
export type RentalrequestCreateWithoutUserInput = {
    id?: string;
    move_in_date: string;
    lease_duration: string;
    status?: $Enums.rentalStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    properties: Prisma.PropertiesCreateNestedOneWithoutRentalrequestsInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutRentalInput;
};
export type RentalrequestUncheckedCreateWithoutUserInput = {
    id?: string;
    properties_id: string;
    move_in_date: string;
    lease_duration: string;
    status?: $Enums.rentalStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: Prisma.PaymentUncheckedCreateNestedOneWithoutRentalInput;
};
export type RentalrequestCreateOrConnectWithoutUserInput = {
    where: Prisma.RentalrequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.RentalrequestCreateWithoutUserInput, Prisma.RentalrequestUncheckedCreateWithoutUserInput>;
};
export type RentalrequestCreateManyUserInputEnvelope = {
    data: Prisma.RentalrequestCreateManyUserInput | Prisma.RentalrequestCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type RentalrequestUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.RentalrequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.RentalrequestUpdateWithoutUserInput, Prisma.RentalrequestUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.RentalrequestCreateWithoutUserInput, Prisma.RentalrequestUncheckedCreateWithoutUserInput>;
};
export type RentalrequestUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.RentalrequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.RentalrequestUpdateWithoutUserInput, Prisma.RentalrequestUncheckedUpdateWithoutUserInput>;
};
export type RentalrequestUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.RentalrequestScalarWhereInput;
    data: Prisma.XOR<Prisma.RentalrequestUpdateManyMutationInput, Prisma.RentalrequestUncheckedUpdateManyWithoutUserInput>;
};
export type RentalrequestCreateManyPropertiesInput = {
    id?: string;
    userId: string;
    move_in_date: string;
    lease_duration: string;
    status?: $Enums.rentalStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RentalrequestUpdateWithoutPropertiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    move_in_date?: Prisma.StringFieldUpdateOperationsInput | string;
    lease_duration?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumrentalStatusFieldUpdateOperationsInput | $Enums.rentalStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UsersUpdateOneRequiredWithoutRentalNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutRentalNestedInput;
};
export type RentalrequestUncheckedUpdateWithoutPropertiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    move_in_date?: Prisma.StringFieldUpdateOperationsInput | string;
    lease_duration?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumrentalStatusFieldUpdateOperationsInput | $Enums.rentalStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.PaymentUncheckedUpdateOneWithoutRentalNestedInput;
};
export type RentalrequestUncheckedUpdateManyWithoutPropertiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    move_in_date?: Prisma.StringFieldUpdateOperationsInput | string;
    lease_duration?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumrentalStatusFieldUpdateOperationsInput | $Enums.rentalStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalrequestCreateManyUserInput = {
    id?: string;
    properties_id: string;
    move_in_date: string;
    lease_duration: string;
    status?: $Enums.rentalStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RentalrequestUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    move_in_date?: Prisma.StringFieldUpdateOperationsInput | string;
    lease_duration?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumrentalStatusFieldUpdateOperationsInput | $Enums.rentalStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    properties?: Prisma.PropertiesUpdateOneRequiredWithoutRentalrequestsNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutRentalNestedInput;
};
export type RentalrequestUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    properties_id?: Prisma.StringFieldUpdateOperationsInput | string;
    move_in_date?: Prisma.StringFieldUpdateOperationsInput | string;
    lease_duration?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumrentalStatusFieldUpdateOperationsInput | $Enums.rentalStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.PaymentUncheckedUpdateOneWithoutRentalNestedInput;
};
export type RentalrequestUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    properties_id?: Prisma.StringFieldUpdateOperationsInput | string;
    move_in_date?: Prisma.StringFieldUpdateOperationsInput | string;
    lease_duration?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumrentalStatusFieldUpdateOperationsInput | $Enums.rentalStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalrequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    properties_id?: boolean;
    userId?: boolean;
    move_in_date?: boolean;
    lease_duration?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    properties?: boolean | Prisma.PropertiesDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
    payment?: boolean | Prisma.Rentalrequest$paymentArgs<ExtArgs>;
}, ExtArgs["result"]["rentalrequest"]>;
export type RentalrequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    properties_id?: boolean;
    userId?: boolean;
    move_in_date?: boolean;
    lease_duration?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    properties?: boolean | Prisma.PropertiesDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rentalrequest"]>;
export type RentalrequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    properties_id?: boolean;
    userId?: boolean;
    move_in_date?: boolean;
    lease_duration?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    properties?: boolean | Prisma.PropertiesDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rentalrequest"]>;
export type RentalrequestSelectScalar = {
    id?: boolean;
    properties_id?: boolean;
    userId?: boolean;
    move_in_date?: boolean;
    lease_duration?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type RentalrequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "properties_id" | "userId" | "move_in_date" | "lease_duration" | "status" | "created_at" | "updated_at", ExtArgs["result"]["rentalrequest"]>;
export type RentalrequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    properties?: boolean | Prisma.PropertiesDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
    payment?: boolean | Prisma.Rentalrequest$paymentArgs<ExtArgs>;
};
export type RentalrequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    properties?: boolean | Prisma.PropertiesDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
};
export type RentalrequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    properties?: boolean | Prisma.PropertiesDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
};
export type $RentalrequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Rentalrequest";
    objects: {
        properties: Prisma.$PropertiesPayload<ExtArgs>;
        user: Prisma.$UsersPayload<ExtArgs>;
        payment: Prisma.$PaymentPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        properties_id: string;
        userId: string;
        move_in_date: string;
        lease_duration: string;
        status: $Enums.rentalStatus;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["rentalrequest"]>;
    composites: {};
};
export type RentalrequestGetPayload<S extends boolean | null | undefined | RentalrequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RentalrequestPayload, S>;
export type RentalrequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RentalrequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RentalrequestCountAggregateInputType | true;
};
export interface RentalrequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Rentalrequest'];
        meta: {
            name: 'Rentalrequest';
        };
    };
    /**
     * Find zero or one Rentalrequest that matches the filter.
     * @param {RentalrequestFindUniqueArgs} args - Arguments to find a Rentalrequest
     * @example
     * // Get one Rentalrequest
     * const rentalrequest = await prisma.rentalrequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalrequestFindUniqueArgs>(args: Prisma.SelectSubset<T, RentalrequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RentalrequestClient<runtime.Types.Result.GetResult<Prisma.$RentalrequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Rentalrequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalrequestFindUniqueOrThrowArgs} args - Arguments to find a Rentalrequest
     * @example
     * // Get one Rentalrequest
     * const rentalrequest = await prisma.rentalrequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalrequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RentalrequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RentalrequestClient<runtime.Types.Result.GetResult<Prisma.$RentalrequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Rentalrequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalrequestFindFirstArgs} args - Arguments to find a Rentalrequest
     * @example
     * // Get one Rentalrequest
     * const rentalrequest = await prisma.rentalrequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalrequestFindFirstArgs>(args?: Prisma.SelectSubset<T, RentalrequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__RentalrequestClient<runtime.Types.Result.GetResult<Prisma.$RentalrequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Rentalrequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalrequestFindFirstOrThrowArgs} args - Arguments to find a Rentalrequest
     * @example
     * // Get one Rentalrequest
     * const rentalrequest = await prisma.rentalrequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalrequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RentalrequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RentalrequestClient<runtime.Types.Result.GetResult<Prisma.$RentalrequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Rentalrequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalrequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rentalrequests
     * const rentalrequests = await prisma.rentalrequest.findMany()
     *
     * // Get first 10 Rentalrequests
     * const rentalrequests = await prisma.rentalrequest.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const rentalrequestWithIdOnly = await prisma.rentalrequest.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RentalrequestFindManyArgs>(args?: Prisma.SelectSubset<T, RentalrequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalrequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Rentalrequest.
     * @param {RentalrequestCreateArgs} args - Arguments to create a Rentalrequest.
     * @example
     * // Create one Rentalrequest
     * const Rentalrequest = await prisma.rentalrequest.create({
     *   data: {
     *     // ... data to create a Rentalrequest
     *   }
     * })
     *
     */
    create<T extends RentalrequestCreateArgs>(args: Prisma.SelectSubset<T, RentalrequestCreateArgs<ExtArgs>>): Prisma.Prisma__RentalrequestClient<runtime.Types.Result.GetResult<Prisma.$RentalrequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Rentalrequests.
     * @param {RentalrequestCreateManyArgs} args - Arguments to create many Rentalrequests.
     * @example
     * // Create many Rentalrequests
     * const rentalrequest = await prisma.rentalrequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RentalrequestCreateManyArgs>(args?: Prisma.SelectSubset<T, RentalrequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Rentalrequests and returns the data saved in the database.
     * @param {RentalrequestCreateManyAndReturnArgs} args - Arguments to create many Rentalrequests.
     * @example
     * // Create many Rentalrequests
     * const rentalrequest = await prisma.rentalrequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Rentalrequests and only return the `id`
     * const rentalrequestWithIdOnly = await prisma.rentalrequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RentalrequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RentalrequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalrequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Rentalrequest.
     * @param {RentalrequestDeleteArgs} args - Arguments to delete one Rentalrequest.
     * @example
     * // Delete one Rentalrequest
     * const Rentalrequest = await prisma.rentalrequest.delete({
     *   where: {
     *     // ... filter to delete one Rentalrequest
     *   }
     * })
     *
     */
    delete<T extends RentalrequestDeleteArgs>(args: Prisma.SelectSubset<T, RentalrequestDeleteArgs<ExtArgs>>): Prisma.Prisma__RentalrequestClient<runtime.Types.Result.GetResult<Prisma.$RentalrequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Rentalrequest.
     * @param {RentalrequestUpdateArgs} args - Arguments to update one Rentalrequest.
     * @example
     * // Update one Rentalrequest
     * const rentalrequest = await prisma.rentalrequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RentalrequestUpdateArgs>(args: Prisma.SelectSubset<T, RentalrequestUpdateArgs<ExtArgs>>): Prisma.Prisma__RentalrequestClient<runtime.Types.Result.GetResult<Prisma.$RentalrequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Rentalrequests.
     * @param {RentalrequestDeleteManyArgs} args - Arguments to filter Rentalrequests to delete.
     * @example
     * // Delete a few Rentalrequests
     * const { count } = await prisma.rentalrequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RentalrequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, RentalrequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Rentalrequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalrequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rentalrequests
     * const rentalrequest = await prisma.rentalrequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RentalrequestUpdateManyArgs>(args: Prisma.SelectSubset<T, RentalrequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Rentalrequests and returns the data updated in the database.
     * @param {RentalrequestUpdateManyAndReturnArgs} args - Arguments to update many Rentalrequests.
     * @example
     * // Update many Rentalrequests
     * const rentalrequest = await prisma.rentalrequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Rentalrequests and only return the `id`
     * const rentalrequestWithIdOnly = await prisma.rentalrequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends RentalrequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RentalrequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalrequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Rentalrequest.
     * @param {RentalrequestUpsertArgs} args - Arguments to update or create a Rentalrequest.
     * @example
     * // Update or create a Rentalrequest
     * const rentalrequest = await prisma.rentalrequest.upsert({
     *   create: {
     *     // ... data to create a Rentalrequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rentalrequest we want to update
     *   }
     * })
     */
    upsert<T extends RentalrequestUpsertArgs>(args: Prisma.SelectSubset<T, RentalrequestUpsertArgs<ExtArgs>>): Prisma.Prisma__RentalrequestClient<runtime.Types.Result.GetResult<Prisma.$RentalrequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Rentalrequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalrequestCountArgs} args - Arguments to filter Rentalrequests to count.
     * @example
     * // Count the number of Rentalrequests
     * const count = await prisma.rentalrequest.count({
     *   where: {
     *     // ... the filter for the Rentalrequests we want to count
     *   }
     * })
    **/
    count<T extends RentalrequestCountArgs>(args?: Prisma.Subset<T, RentalrequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RentalrequestCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Rentalrequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalrequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RentalrequestAggregateArgs>(args: Prisma.Subset<T, RentalrequestAggregateArgs>): Prisma.PrismaPromise<GetRentalrequestAggregateType<T>>;
    /**
     * Group by Rentalrequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalrequestGroupByArgs} args - Group by arguments.
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
    groupBy<T extends RentalrequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RentalrequestGroupByArgs['orderBy'];
    } : {
        orderBy?: RentalrequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RentalrequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalrequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Rentalrequest model
     */
    readonly fields: RentalrequestFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Rentalrequest.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RentalrequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    properties<T extends Prisma.PropertiesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PropertiesDefaultArgs<ExtArgs>>): Prisma.Prisma__PropertiesClient<runtime.Types.Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UsersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsersDefaultArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    payment<T extends Prisma.Rentalrequest$paymentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Rentalrequest$paymentArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Rentalrequest model
 */
export interface RentalrequestFieldRefs {
    readonly id: Prisma.FieldRef<"Rentalrequest", 'String'>;
    readonly properties_id: Prisma.FieldRef<"Rentalrequest", 'String'>;
    readonly userId: Prisma.FieldRef<"Rentalrequest", 'String'>;
    readonly move_in_date: Prisma.FieldRef<"Rentalrequest", 'String'>;
    readonly lease_duration: Prisma.FieldRef<"Rentalrequest", 'String'>;
    readonly status: Prisma.FieldRef<"Rentalrequest", 'rentalStatus'>;
    readonly created_at: Prisma.FieldRef<"Rentalrequest", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Rentalrequest", 'DateTime'>;
}
/**
 * Rentalrequest findUnique
 */
export type RentalrequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Rentalrequest to fetch.
     */
    where: Prisma.RentalrequestWhereUniqueInput;
};
/**
 * Rentalrequest findUniqueOrThrow
 */
export type RentalrequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Rentalrequest to fetch.
     */
    where: Prisma.RentalrequestWhereUniqueInput;
};
/**
 * Rentalrequest findFirst
 */
export type RentalrequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Rentalrequest to fetch.
     */
    where?: Prisma.RentalrequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Rentalrequests to fetch.
     */
    orderBy?: Prisma.RentalrequestOrderByWithRelationInput | Prisma.RentalrequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Rentalrequests.
     */
    cursor?: Prisma.RentalrequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Rentalrequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Rentalrequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Rentalrequests.
     */
    distinct?: Prisma.RentalrequestScalarFieldEnum | Prisma.RentalrequestScalarFieldEnum[];
};
/**
 * Rentalrequest findFirstOrThrow
 */
export type RentalrequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Rentalrequest to fetch.
     */
    where?: Prisma.RentalrequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Rentalrequests to fetch.
     */
    orderBy?: Prisma.RentalrequestOrderByWithRelationInput | Prisma.RentalrequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Rentalrequests.
     */
    cursor?: Prisma.RentalrequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Rentalrequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Rentalrequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Rentalrequests.
     */
    distinct?: Prisma.RentalrequestScalarFieldEnum | Prisma.RentalrequestScalarFieldEnum[];
};
/**
 * Rentalrequest findMany
 */
export type RentalrequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Rentalrequests to fetch.
     */
    where?: Prisma.RentalrequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Rentalrequests to fetch.
     */
    orderBy?: Prisma.RentalrequestOrderByWithRelationInput | Prisma.RentalrequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Rentalrequests.
     */
    cursor?: Prisma.RentalrequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Rentalrequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Rentalrequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Rentalrequests.
     */
    distinct?: Prisma.RentalrequestScalarFieldEnum | Prisma.RentalrequestScalarFieldEnum[];
};
/**
 * Rentalrequest create
 */
export type RentalrequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Rentalrequest.
     */
    data: Prisma.XOR<Prisma.RentalrequestCreateInput, Prisma.RentalrequestUncheckedCreateInput>;
};
/**
 * Rentalrequest createMany
 */
export type RentalrequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rentalrequests.
     */
    data: Prisma.RentalrequestCreateManyInput | Prisma.RentalrequestCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Rentalrequest createManyAndReturn
 */
export type RentalrequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rentalrequest
     */
    select?: Prisma.RentalrequestSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Rentalrequest
     */
    omit?: Prisma.RentalrequestOmit<ExtArgs> | null;
    /**
     * The data used to create many Rentalrequests.
     */
    data: Prisma.RentalrequestCreateManyInput | Prisma.RentalrequestCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalrequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Rentalrequest update
 */
export type RentalrequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Rentalrequest.
     */
    data: Prisma.XOR<Prisma.RentalrequestUpdateInput, Prisma.RentalrequestUncheckedUpdateInput>;
    /**
     * Choose, which Rentalrequest to update.
     */
    where: Prisma.RentalrequestWhereUniqueInput;
};
/**
 * Rentalrequest updateMany
 */
export type RentalrequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Rentalrequests.
     */
    data: Prisma.XOR<Prisma.RentalrequestUpdateManyMutationInput, Prisma.RentalrequestUncheckedUpdateManyInput>;
    /**
     * Filter which Rentalrequests to update
     */
    where?: Prisma.RentalrequestWhereInput;
    /**
     * Limit how many Rentalrequests to update.
     */
    limit?: number;
};
/**
 * Rentalrequest updateManyAndReturn
 */
export type RentalrequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rentalrequest
     */
    select?: Prisma.RentalrequestSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Rentalrequest
     */
    omit?: Prisma.RentalrequestOmit<ExtArgs> | null;
    /**
     * The data used to update Rentalrequests.
     */
    data: Prisma.XOR<Prisma.RentalrequestUpdateManyMutationInput, Prisma.RentalrequestUncheckedUpdateManyInput>;
    /**
     * Filter which Rentalrequests to update
     */
    where?: Prisma.RentalrequestWhereInput;
    /**
     * Limit how many Rentalrequests to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalrequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Rentalrequest upsert
 */
export type RentalrequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Rentalrequest to update in case it exists.
     */
    where: Prisma.RentalrequestWhereUniqueInput;
    /**
     * In case the Rentalrequest found by the `where` argument doesn't exist, create a new Rentalrequest with this data.
     */
    create: Prisma.XOR<Prisma.RentalrequestCreateInput, Prisma.RentalrequestUncheckedCreateInput>;
    /**
     * In case the Rentalrequest was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RentalrequestUpdateInput, Prisma.RentalrequestUncheckedUpdateInput>;
};
/**
 * Rentalrequest delete
 */
export type RentalrequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Rentalrequest to delete.
     */
    where: Prisma.RentalrequestWhereUniqueInput;
};
/**
 * Rentalrequest deleteMany
 */
export type RentalrequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Rentalrequests to delete
     */
    where?: Prisma.RentalrequestWhereInput;
    /**
     * Limit how many Rentalrequests to delete.
     */
    limit?: number;
};
/**
 * Rentalrequest.payment
 */
export type Rentalrequest$paymentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Rentalrequest without action
 */
export type RentalrequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Rentalrequest.d.ts.map