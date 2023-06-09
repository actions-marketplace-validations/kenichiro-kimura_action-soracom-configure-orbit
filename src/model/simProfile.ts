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
import { SimplifiedSubscriber } from './simplifiedSubscriber';

export class SimProfile {
    /**
    * WireGuard で接続するためのクライアントの PrivateKey (クライアントピア秘密鍵) です。 - PrivateKey (クライアントピア秘密鍵) は再表示できません。秘密鍵を紛失した場合は新しい鍵を生成し、デバイスの認証情報を更新してください。 - 接続情報は決して外部に公開しないでください。 
    */
    'arcClientPeerPrivateKey'?: string;
    'arcClientPeerPublicKey'?: string;
    'iccid'?: string;
    'otaSupported'?: boolean;
    'primaryImsi'?: string;
    'subscribers'?: { [key: string]: SimplifiedSubscriber; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "arcClientPeerPrivateKey",
            "baseName": "arcClientPeerPrivateKey",
            "type": "string"
        },
        {
            "name": "arcClientPeerPublicKey",
            "baseName": "arcClientPeerPublicKey",
            "type": "string"
        },
        {
            "name": "iccid",
            "baseName": "iccid",
            "type": "string"
        },
        {
            "name": "otaSupported",
            "baseName": "otaSupported",
            "type": "boolean"
        },
        {
            "name": "primaryImsi",
            "baseName": "primaryImsi",
            "type": "string"
        },
        {
            "name": "subscribers",
            "baseName": "subscribers",
            "type": "{ [key: string]: SimplifiedSubscriber; }"
        }    ];

    static getAttributeTypeMap() {
        return SimProfile.attributeTypeMap;
    }
}

