import { ObjectType, Field, Int,ID } from 'type-graphql';
 
@ObjectType()
export class StepType {
    @Field()
    readonly id:String;
    @Field()
    readonly inc_date:String;
    @Field()
    readonly update_date:String;
}

@ObjectType()
export class DocumentType {
    @Field()
    readonly type:String;
    @Field()
    readonly value:String;
}

@ObjectType()
export class AddressType {
    @Field()
    readonly zipcode:String;
    @Field()
    readonly street:String;
    @Field()
    readonly number:String;
    @Field()
    readonly complement:String;
}

@ObjectType()
export class ParentType {
    @Field()
    readonly userPublicId:String;
    @Field()
    readonly main:Boolean;
    @Field()
    readonly name:String;
    @Field()
    readonly email:String;
    @Field()
    readonly cell_phone:String;
    @Field()
    readonly phone:String;
    @Field()
    readonly birthday:String;
    @Field(type=>[DocumentType])
    readonly documents:[DocumentType];
    @Field(type=> AddressType)
    readonly address:AddressType;
    @Field(type=>String)
    readonly responsibilities:[String];
}

@ObjectType()
export class ChildType {
    @Field()
    readonly name:String;
    @Field()
    readonly birthday:String;
    @Field()
    readonly cell_phone:String;
    @Field()
    readonly gender:String;
    @Field()
    readonly year:String;
    @Field()
    readonly school:String;
    @Field()
    readonly nationality:String;
    @Field(type=>[DocumentType])
    readonly documents:[DocumentType];
    @Field(type=>AddressType)
    readonly address:AddressType;
}

@ObjectType()
export class RegistrationFormType {
    @Field()
    readonly current_step:String;
    @Field(type=>[StepType])
    readonly steps:[StepType];
    @Field(type=>[ParentType])
    readonly parents:[ParentType];
    @Field(type=>[ChildType])
    readonly children:[ChildType];
}

@ObjectType()
export class OsType {
    @Field()
    readonly architecture:Number;
    @Field()
    readonly family:String;
    @Field()
    readonly version:String;
}

@ObjectType()
export class BrowserType {
    @Field()
    readonly description:String;
    @Field()
    readonly layout:String;
    @Field()
    readonly manufacturer:String;
    @Field()
    readonly name:String;
    @Field()
    readonly prerelease:String;
    @Field()
    readonly product:String;
    @Field()
    readonly ua:String;
    @Field()
    readonly version:String;
    @Field(type=>OsType)
    readonly os:OsType;
}

@ObjectType()
export class LanguageType {
    @Field()
    readonly code:String;
    @Field()
    readonly name:String;
    @Field()
    readonly native:String;
}

@ObjectType()
export class LocationType {
    @Field()
    readonly geoname_id:Number;
    @Field()
    readonly capital:String;
    @Field(type=>[LanguageType])
    readonly languages:[LanguageType];
    @Field()
    readonly country_flag:String;
    @Field()
    readonly country_flag_emoji:String;
    @Field()
    readonly country_flag_emoji_unicode:String;
    @Field()
    readonly calling_code:String;
    @Field()
    readonly is_eu:Boolean;
}

@ObjectType()
export class TimeZoneType {
    @Field()
    readonly id:String;
    @Field()
    readonly current_time:Date;
    @Field()
    readonly gmt_offset:Number;
    @Field()
    readonly code:String;
    @Field()
    readonly is_daylight_saving:Boolean;
}

@ObjectType()
export class CurrencyType {
    @Field()
    readonly code:String;
    @Field()
    readonly name:String;
    @Field()
    readonly plural:String;
    @Field()
    readonly symbol:String;
    @Field()
    readonly symbol_native:String;
}

@ObjectType()
export class ConnectionType {
    @Field()
    readonly asn:Number;
    @Field()
    readonly isp:String;
}

@ObjectType()
export class IpInfoType {
    @Field()
    readonly ip:String;
    @Field()
    readonly type:String;
    @Field()
    readonly continent_code:String;
    @Field()
    readonly continent_name:String;
    @Field()
    readonly country_code:String;
    @Field()
    readonly country_name:String;
    @Field()
    readonly region_code:String;
    @Field()
    readonly region_name:String;
    @Field()
    readonly city:String;
    @Field()
    readonly zip:String;
    @Field()
    readonly latitude:Number;
    @Field()
    readonly longitude:Number;
    @Field(type=>LocationType)
    readonly location:LocationType;
    @Field(type=>TimeZoneType)
    readonly time_zone:TimeZoneType;
    @Field(type=>CurrencyType)
    readonly currency:CurrencyType;
    @Field(type=>ConnectionType)
    readonly connection:ConnectionType;
}

@ObjectType()
export class FingerprintType {
    @Field()
    readonly uid:String;
    @Field()
    readonly token:String;
    @Field()
    readonly fingerprint:String;
    @Field()
    readonly url:String;
    @Field(type=>String)
    readonly urlQueryString:String;
    @Field()
    readonly referrer:String;
    @Field()
    readonly pageTitle:String;
    @Field(type=>BrowserType)
    readonly browser:BrowserType;
    @Field()
    readonly cookie:String;
    @Field()
    readonly formMapping:String;
    @Field(type=>IpInfoType)
    readonly ipInfo:IpInfoType;
    @Field()
    readonly partnersDenied:String;
}

@ObjectType()
export class RegisterType {
    @Field(() => ID)
    id: string;
    @Field()
    readonly document:String;
    @Field()
    readonly cell_phone:String;
    @Field()
    readonly activate:Boolean;
    @Field(type=>RegistrationFormType)
    readonly registration_form:RegistrationFormType;
}

