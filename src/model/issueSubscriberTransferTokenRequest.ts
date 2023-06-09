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

export class IssueSubscriberTransferTokenRequest {
    /**
    * 移管先オペレーターEmail
    */
    'transferDestinationOperatorEmail': string;
    /**
    * 移管先オペレーター ID
    */
    'transferDestinationOperatorId': string;
    /**
    * 移管する IMSI リスト
    */
    'transferImsi': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transferDestinationOperatorEmail",
            "baseName": "transferDestinationOperatorEmail",
            "type": "string"
        },
        {
            "name": "transferDestinationOperatorId",
            "baseName": "transferDestinationOperatorId",
            "type": "string"
        },
        {
            "name": "transferImsi",
            "baseName": "transferImsi",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return IssueSubscriberTransferTokenRequest.attributeTypeMap;
    }
}

