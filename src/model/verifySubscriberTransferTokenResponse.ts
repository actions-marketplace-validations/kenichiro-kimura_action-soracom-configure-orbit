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

export class VerifySubscriberTransferTokenResponse {
    /**
    * 移管された IMSI リスト
    */
    'transferredImsi': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transferredImsi",
            "baseName": "transferredImsi",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return VerifySubscriberTransferTokenResponse.attributeTypeMap;
    }
}

