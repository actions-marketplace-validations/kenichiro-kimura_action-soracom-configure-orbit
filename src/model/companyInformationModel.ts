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

export class CompanyInformationModel {
    'addressLine1'?: string;
    'addressLine2'?: string;
    'building'?: string;
    'city'?: string;
    'companyName': string;
    'contactPersonName': string;
    'countryCode': string;
    'department': string;
    'phoneNumber': string;
    'state'?: string;
    'vatIdentificationNumber'?: string;
    'zipCode': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addressLine1",
            "baseName": "addressLine1",
            "type": "string"
        },
        {
            "name": "addressLine2",
            "baseName": "addressLine2",
            "type": "string"
        },
        {
            "name": "building",
            "baseName": "building",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "companyName",
            "baseName": "companyName",
            "type": "string"
        },
        {
            "name": "contactPersonName",
            "baseName": "contactPersonName",
            "type": "string"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "department",
            "baseName": "department",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "vatIdentificationNumber",
            "baseName": "vatIdentificationNumber",
            "type": "string"
        },
        {
            "name": "zipCode",
            "baseName": "zipCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CompanyInformationModel.attributeTypeMap;
    }
}

