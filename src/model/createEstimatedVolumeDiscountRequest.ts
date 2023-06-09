/**
 * SORACOM API
 * SORACOM API v1
 *
 * The version of the OpenAPI document: 20230427-035008
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class CreateEstimatedVolumeDiscountRequest {
    /**
    * 契約月数
    */
    'contractTermMonth': number = 12;
    /**
    * 数量
    */
    'quantity': number;
    /**
    * 適用開始日
    */
    'startDate'?: string;
    /**
    * お支払い方法
    */
    'volumeDiscountPaymentType': CreateEstimatedVolumeDiscountRequest.VolumeDiscountPaymentTypeEnum;
    /**
    * 料金計算方法
    */
    'volumeDiscountType': CreateEstimatedVolumeDiscountRequest.VolumeDiscountTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contractTermMonth",
            "baseName": "contractTermMonth",
            "type": "number"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "volumeDiscountPaymentType",
            "baseName": "volumeDiscountPaymentType",
            "type": "CreateEstimatedVolumeDiscountRequest.VolumeDiscountPaymentTypeEnum"
        },
        {
            "name": "volumeDiscountType",
            "baseName": "volumeDiscountType",
            "type": "CreateEstimatedVolumeDiscountRequest.VolumeDiscountTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CreateEstimatedVolumeDiscountRequest.attributeTypeMap;
    }
}

export namespace CreateEstimatedVolumeDiscountRequest {
    export enum VolumeDiscountPaymentTypeEnum {
        Monthly = <any> 'MONTHLY',
        Prepayment = <any> 'PREPAYMENT'
    }
    export enum VolumeDiscountTypeEnum {
        BasicChargeV2 = <any> 'SORACOM_AIR_BASIC_CHARGE_V2',
        BasicCharge = <any> 'SORACOM_AIR_BASIC_CHARGE',
        MonthlyFixedBasicCharge = <any> 'SORACOM_AIR_MONTHLY_FIXED_BASIC_CHARGE'
    }
}
