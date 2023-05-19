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
import { PaymentStatementResponse } from './paymentStatementResponse';

export class ListPaymentStatementResponse {
    /**
    * 課金明細リスト
    */
    'paymentStatementsList'?: Array<PaymentStatementResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentStatementsList",
            "baseName": "paymentStatementsList",
            "type": "Array<PaymentStatementResponse>"
        }    ];

    static getAttributeTypeMap() {
        return ListPaymentStatementResponse.attributeTypeMap;
    }
}

