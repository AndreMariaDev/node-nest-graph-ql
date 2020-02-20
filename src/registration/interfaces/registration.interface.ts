import { Document, Schema, Model, model } from 'mongoose';
 
export interface StepInterface extends Document {
    readonly id:String;
    readonly inc_date:String;
    readonly update_date:String;
}
export interface DocumentInterface extends Document {
    readonly type:String;
    readonly value:String;
}
export interface AddressInterface extends Document {
    readonly zipcode:String;
    readonly street:String;
    readonly number:String;
    readonly complement:String;
}
export interface ParentInterface extends Document {
    readonly userPublicId:String;
    readonly main:Boolean;
    readonly name:String;
    readonly email:String;
    readonly cell_phone:String;
    readonly phone:String;
    readonly birthday:String;
    readonly documents:DocumentInterface;
    readonly address:AddressInterface;
    readonly responsibilities:String[];
}
export interface Document2Interface extends Document {
    readonly type:String;
    readonly value:String;
}
export interface Address2Interface extends Document {
    readonly zipcode:String;
    readonly street:String;
    readonly number:String;
    readonly complement:String;
}
export interface ChildInterface extends Document {
    readonly name:String;
    readonly birthday:String;
    readonly cell_phone:String;
    readonly gender:String;
    readonly year:String;
    readonly school:String;
    readonly nationality:String;
    readonly documents:DocumentInterface;
    readonly address:AddressInterface;
}
export interface RegistrationFormInterface extends Document {
    readonly current_step:String;
    readonly steps:StepInterface;
    readonly parents:ParentInterface;
    readonly children:ChildInterface;
}
export interface OsInterface extends Document {
    readonly architecture:Number;
    readonly family:String;
    readonly version:String;
}
export interface BrowserInterface extends Document {
    readonly description:String;
    readonly layout:String;
    readonly manufacturer:Object;
    readonly name:String;
    readonly prerelease:Object;
    readonly product:Object;
    readonly ua:String;
    readonly version:String;
    readonly os:OsInterface;
}
export interface LanguageInterface extends Document {
    readonly code:String;
    readonly name:String;
    readonly native:String;
}
export interface LocationInterface extends Document {
    readonly geoname_id:Number;
    readonly capital:String;
    readonly languages:LanguageInterface;
    readonly country_flag:String;
    readonly country_flag_emoji:String;
    readonly country_flag_emoji_unicode:String;
    readonly calling_code:String;
    readonly is_eu:Boolean;
}
export interface TimeZoneInterface extends Document {
    readonly id:String;
    readonly current_time:Date;
    readonly gmt_offset:Number;
    readonly code:String;
    readonly is_daylight_saving:Boolean;
}
export interface CurrencyInterface extends Document {
    readonly code:String;
    readonly name:String;
    readonly plural:String;
    readonly symbol:String;
    readonly symbol_native:String;
}
export interface ConnectionInterface extends Document {
    readonly asn:Number;
    readonly isp:String;
}
export interface IpInfoInterface extends Document {
    readonly ip:String;
    readonly type:String;
    readonly continent_code:String;
    readonly continent_name:String;
    readonly country_code:String;
    readonly country_name:String;
    readonly region_code:String;
    readonly region_name:String;
    readonly city:String;
    readonly zip:String;
    readonly latitude:Number;
    readonly longitude:Number;
    readonly location:LocationInterface;
    readonly time_zone:TimeZoneInterface;
    readonly currency:CurrencyInterface;
    readonly connection:ConnectionInterface;
}
export interface FingerprintInterface extends Document {
    readonly uid:String;
    readonly token:String;
    readonly fingerprint:String;
    readonly url:String;
    readonly urlQueryString:String[];
    readonly referrer:String;
    readonly pageTitle:String;
    readonly browser:BrowserInterface;
    readonly cookie:String;
    readonly formMapping:Object;
    readonly ipInfo:IpInfoInterface;
    readonly partnersDenied:Object;
}
export interface RegisterInterface extends Document {
    readonly document:String;
    readonly cell_phone:String;
    readonly activate:Boolean;
    readonly registration_form:RegistrationFormInterface;
    readonly fingerprint:FingerprintInterface;
}
