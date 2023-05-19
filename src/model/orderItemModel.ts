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

export class OrderItemModel {
    /**
    * 商品コード
    */
    'productCode'?: string;
    /**
    * 購入数
    */
    'quantity'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "productCode",
            "baseName": "productCode",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return OrderItemModel.attributeTypeMap;
    }
}

