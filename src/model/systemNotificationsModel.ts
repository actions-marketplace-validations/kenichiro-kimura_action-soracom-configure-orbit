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

export class SystemNotificationsModel {
    'emailIdList'?: Array<string>;
    /**
    * 通知種別
    */
    'type'?: SystemNotificationsModel.TypeEnum;
    'updateDateTime'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "emailIdList",
            "baseName": "emailIdList",
            "type": "Array<string>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SystemNotificationsModel.TypeEnum"
        },
        {
            "name": "updateDateTime",
            "baseName": "updateDateTime",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SystemNotificationsModel.attributeTypeMap;
    }
}

export namespace SystemNotificationsModel {
    export enum TypeEnum {
        Primary = <any> 'primary',
        Recovery = <any> 'recovery',
        Billing = <any> 'billing',
        Support = <any> 'support'
    }
}
