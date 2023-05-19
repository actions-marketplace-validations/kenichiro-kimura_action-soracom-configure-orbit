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

export class SoraletVersion {
    'createdTime'?: number;
    'hash'?: string;
    'operatorId'?: string;
    'size'?: number;
    'soraletId'?: string;
    'srn'?: string;
    'version'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "createdTime",
            "baseName": "createdTime",
            "type": "number"
        },
        {
            "name": "hash",
            "baseName": "hash",
            "type": "string"
        },
        {
            "name": "operatorId",
            "baseName": "operatorId",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "soraletId",
            "baseName": "soraletId",
            "type": "string"
        },
        {
            "name": "srn",
            "baseName": "srn",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SoraletVersion.attributeTypeMap;
    }
}
