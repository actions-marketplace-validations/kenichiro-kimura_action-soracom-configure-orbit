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
import { Insight } from './insight';

export class DiagnosticResponse {
    'diagnosticId'?: string;
    /**
    * 診断対象期間の始まり (UNIX 時間 (ミリ秒))
    */
    'from'?: number;
    'insights'?: Array<{ [key: string]: Insight; }>;
    /**
    * resourceType に応じた識別子
    */
    'resourceId'?: string;
    'resourceType'?: DiagnosticResponse.ResourceTypeEnum;
    'service'?: DiagnosticResponse.ServiceEnum;
    'status'?: DiagnosticResponse.StatusEnum;
    /**
    * 診断対象期間の終わり (UNIX 時間 (ミリ秒))
    */
    'to'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "diagnosticId",
            "baseName": "diagnosticId",
            "type": "string"
        },
        {
            "name": "from",
            "baseName": "from",
            "type": "number"
        },
        {
            "name": "insights",
            "baseName": "insights",
            "type": "Array<{ [key: string]: Insight; }>"
        },
        {
            "name": "resourceId",
            "baseName": "resourceId",
            "type": "string"
        },
        {
            "name": "resourceType",
            "baseName": "resourceType",
            "type": "DiagnosticResponse.ResourceTypeEnum"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "DiagnosticResponse.ServiceEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "DiagnosticResponse.StatusEnum"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DiagnosticResponse.attributeTypeMap;
    }
}

export namespace DiagnosticResponse {
    export enum ResourceTypeEnum {
        Sim = <any> 'sim'
    }
    export enum ServiceEnum {
        Air = <any> 'Air'
    }
    export enum StatusEnum {
        Diagnosing = <any> 'diagnosing',
        Done = <any> 'done',
        Failed = <any> 'failed'
    }
}