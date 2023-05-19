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

export class Placement {
    'infrastructureProvider'?: Placement.InfrastructureProviderEnum;
    /**
    * `infrastructureProvider` が `aws` の場合は、ランデブーポイントです。  - `ap-northeast-1`: 東京 (日本) - `eu-central-1`: フランクフルト (ドイツ) - `us-west-2`: オレゴン (米国) - `ap-southeast-2`: シドニー (オーストラリア) 
    */
    'region'?: Placement.RegionEnum = Placement.RegionEnum.EuCentral1;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "infrastructureProvider",
            "baseName": "infrastructureProvider",
            "type": "Placement.InfrastructureProviderEnum"
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "Placement.RegionEnum"
        }    ];

    static getAttributeTypeMap() {
        return Placement.attributeTypeMap;
    }
}

export namespace Placement {
    export enum InfrastructureProviderEnum {
        Aws = <any> 'aws'
    }
    export enum RegionEnum {
        ApNortheast1 = <any> 'ap-northeast-1',
        EuCentral1 = <any> 'eu-central-1',
        UsWest2 = <any> 'us-west-2',
        ApSoutheast2 = <any> 'ap-southeast-2'
    }
}