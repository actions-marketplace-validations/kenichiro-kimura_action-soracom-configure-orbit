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

export class CreateVirtualPrivateGatewayRequest {
    'deviceSubnetCidrRange'?: string = '10.128.0.0/9';
    /**
    * VPG のタイプ  - `14` : Type-E - `15` : Type-F 
    */
    'type': CreateVirtualPrivateGatewayRequest.TypeEnum;
    'useInternetGateway'?: boolean = true;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deviceSubnetCidrRange",
            "baseName": "deviceSubnetCidrRange",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CreateVirtualPrivateGatewayRequest.TypeEnum"
        },
        {
            "name": "useInternetGateway",
            "baseName": "useInternetGateway",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CreateVirtualPrivateGatewayRequest.attributeTypeMap;
    }
}

export namespace CreateVirtualPrivateGatewayRequest {
    export enum TypeEnum {
        NUMBER_14 = <any> 14,
        NUMBER_15 = <any> 15
    }
}