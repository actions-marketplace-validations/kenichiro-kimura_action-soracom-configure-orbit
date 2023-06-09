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

export class SoraCamImageExportSpecification {
    /**
    * エクスポートした静止画に適用するフィルタ
    */
    'imageFilters'?: Array<SoraCamImageExportSpecification.ImageFiltersEnum>;
    /**
    * エクスポート対象の時刻 (UNIX 時間 (ミリ秒))。指定した時刻に撮影された録画映像から静止画がエクスポートされます。
    */
    'time': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "imageFilters",
            "baseName": "imageFilters",
            "type": "Array<SoraCamImageExportSpecification.ImageFiltersEnum>"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SoraCamImageExportSpecification.attributeTypeMap;
    }
}

export namespace SoraCamImageExportSpecification {
    export enum ImageFiltersEnum {
        WideAngleCorrection = <any> 'wide_angle_correction'
    }
}
