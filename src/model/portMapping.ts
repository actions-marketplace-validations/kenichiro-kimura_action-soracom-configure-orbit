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
import { PortMappingDestination } from './portMappingDestination';
import { PortMappingSource } from './portMappingSource';

export class PortMapping {
    'destination'?: PortMappingDestination;
    /**
    * リモートアクセスが有効になっている期間 (秒)
    */
    'duration'?: number;
    /**
    * オンデマンドリモートアクセス (IP アドレスとポート番号)
    */
    'endpoint'?: string;
    /**
    * オンデマンドリモートアクセスのホスト名
    */
    'hostname'?: string;
    /**
    * オンデマンドリモートアクセスの IP アドレス
    */
    'ipAddress'?: string;
    /**
    * オンデマンドリモートアクセスの ポート番号
    */
    'port'?: number;
    'source'?: PortMappingSource;
    /**
    * TLS の有効/無効
    */
    'tlsRequired'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "destination",
            "baseName": "destination",
            "type": "PortMappingDestination"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number"
        },
        {
            "name": "endpoint",
            "baseName": "endpoint",
            "type": "string"
        },
        {
            "name": "hostname",
            "baseName": "hostname",
            "type": "string"
        },
        {
            "name": "ipAddress",
            "baseName": "ipAddress",
            "type": "string"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "PortMappingSource"
        },
        {
            "name": "tlsRequired",
            "baseName": "tlsRequired",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PortMapping.attributeTypeMap;
    }
}

