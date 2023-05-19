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

export class ExpiryTime {
    /**
    * 期限切れ時のアクション。以下のいずれかを指定します。各設定について詳しくは、[IoT SIM の有効期限とアクションを設定する](/ja-jp/docs/air/set-expiry/) を参照してください。なお、`terminate` を指定する場合は、あらかじめ解約プロテクションを解除してください。  省略した場合は、null 値が設定されます。 - `doNothing` : 保留 - `deleteSession` : セッション切断 - `deactivate` : 休止 - `suspend` : 利用中断 - `terminate` : 解約 - null 値 : (なし) (`doNothing` と同じ動作です) 
    */
    'expiryAction'?: ExpiryTime.ExpiryActionEnum;
    /**
    * 有効期限として設定された日付のタイムスタンプ (UNIX 時間 (ミリ秒))
    */
    'expiryTime': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expiryAction",
            "baseName": "expiryAction",
            "type": "ExpiryTime.ExpiryActionEnum"
        },
        {
            "name": "expiryTime",
            "baseName": "expiryTime",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ExpiryTime.attributeTypeMap;
    }
}

export namespace ExpiryTime {
    export enum ExpiryActionEnum {
        DoNothing = <any> 'doNothing',
        DeleteSession = <any> 'deleteSession',
        Deactivate = <any> 'deactivate',
        Suspend = <any> 'suspend',
        Terminate = <any> 'terminate',
        NullValue = <any> '(null value)'
    }
}