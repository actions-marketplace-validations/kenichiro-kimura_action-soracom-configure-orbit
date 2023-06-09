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

export class FunnelGooglePubSubDestination {
    'provider'?: FunnelGooglePubSubDestination.ProviderEnum;
    'resourceUrl'?: string;
    'service'?: FunnelGooglePubSubDestination.ServiceEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "FunnelGooglePubSubDestination.ProviderEnum"
        },
        {
            "name": "resourceUrl",
            "baseName": "resourceUrl",
            "type": "string"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "FunnelGooglePubSubDestination.ServiceEnum"
        }    ];

    static getAttributeTypeMap() {
        return FunnelGooglePubSubDestination.attributeTypeMap;
    }
}

export namespace FunnelGooglePubSubDestination {
    export enum ProviderEnum {
        Google = <any> 'google'
    }
    export enum ServiceEnum {
        Pubsub = <any> 'pubsub'
    }
}
