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
import { SoracomHarvestStats } from './soracomHarvestStats';

export class HarvestStatsResponse {
    'harvestStatsMap'?: { [key: string]: SoracomHarvestStats; };
    'unixtime'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "harvestStatsMap",
            "baseName": "harvestStatsMap",
            "type": "{ [key: string]: SoracomHarvestStats; }"
        },
        {
            "name": "unixtime",
            "baseName": "unixtime",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return HarvestStatsResponse.attributeTypeMap;
    }
}

