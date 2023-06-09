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
import { SimCostBreakdown } from './simCostBreakdown';

export class BillingSummaryResponseOfSims {
    /**
    * 利用料金のリスト。合計金額順に降順でソートされ、上位 100 件まで出力します。
    */
    'costBreakdownList'?: Array<SimCostBreakdown>;
    /**
    * 通貨
    */
    'currency'?: BillingSummaryResponseOfSims.CurrencyEnum;
    /**
    * サマリーの最終更新日時 (UNIX 時間 (秒))
    */
    'updatedTime'?: number;
    /**
    * 年月
    */
    'yearMonth'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "costBreakdownList",
            "baseName": "costBreakdownList",
            "type": "Array<SimCostBreakdown>"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "BillingSummaryResponseOfSims.CurrencyEnum"
        },
        {
            "name": "updatedTime",
            "baseName": "updatedTime",
            "type": "number"
        },
        {
            "name": "yearMonth",
            "baseName": "yearMonth",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BillingSummaryResponseOfSims.attributeTypeMap;
    }
}

export namespace BillingSummaryResponseOfSims {
    export enum CurrencyEnum {
        Jpy = <any> 'JPY',
        Usd = <any> 'USD',
        Eur = <any> 'EUR'
    }
}
