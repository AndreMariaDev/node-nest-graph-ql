import { InputType, Field, Int } from 'type-graphql';
 
@InputType()
export class StepInput {
    @Field()
    readonly id:String;
    @Field()
    readonly inc_date:String;
    @Field()
    readonly update_date:String;
}

@InputType()
export class DocumentInput {
    @Field()
    readonly type:String;
    @Field()
    readonly value:String;
}

@InputType()
export class AddressInput {
    @Field()
    readonly zipcode:String;
    @Field()
    readonly street:String;
    @Field()
    readonly number:String;
    @Field()
    readonly complement:String;
}

@InputType()
export class ParentInput {
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
    @Field(type=>[DocumentInput])
    readonly documents:[DocumentInput];
    @Field(type=> AddressInput)
    readonly address:AddressInput;
    @Field(type=>String)
    readonly responsibilities:[String];
}

@InputType()
export class ChildInput {
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
    @Field(type=>[DocumentInput])
    readonly documents:[DocumentInput];
    @Field(type=>AddressInput)
    readonly address:AddressInput;
}

@InputType()
export class RegistrationFormInput {
    @Field()
    readonly current_step:String;
    @Field(type=>[StepInput])
    readonly steps:[StepInput];
    @Field(type=>[ParentInput])
    readonly parents:[ParentInput];
    @Field(type=>[ChildInput])
    readonly children:[ChildInput];
}

@InputType()
export class OsInput {
    @Field()
    readonly architecture:Number;
    @Field()
    readonly family:String;
    @Field()
    readonly version:String;
}

@InputType()
export class BrowserInput {
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
    @Field(type=>OsInput)
    readonly os:OsInput;
}

@InputType()
export class LanguageInput {
    @Field()
    readonly code:String;
    @Field()
    readonly name:String;
    @Field()
    readonly native:String;
}

@InputType()
export class LocationInput {
    @Field()
    readonly geoname_id:Number;
    @Field()
    readonly capital:String;
    @Field(type=>[LanguageInput])
    readonly languages:[LanguageInput];
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

@InputType()
export class TimeZoneInput {
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

@InputType()
export class CurrencyInput {
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

@InputType()
export class ConnectionInput {
    @Field()
    readonly asn:Number;
    @Field()
    readonly isp:String;
}

@InputType()
export class IpInfoInput {
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
    @Field(type=>LocationInput)
    readonly location:LocationInput;
    @Field(type=>TimeZoneInput)
    readonly time_zone:TimeZoneInput;
    @Field(type=>CurrencyInput)
    readonly currency:CurrencyInput;
    @Field(type=>ConnectionInput)
    readonly connection:ConnectionInput;
}

@InputType()
export class FingerprintInput {
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
    @Field(type=>BrowserInput)
    readonly browser:BrowserInput;
    @Field()
    readonly cookie:String;
    @Field()
    readonly formMapping:String;
    @Field(type=>IpInfoInput)
    readonly ipInfo:IpInfoInput;
    @Field()
    readonly partnersDenied:String;
}

@InputType()
export class RegisterInput {
    @Field()
    readonly document:String;
    @Field()
    readonly cell_phone:String;
    @Field()
    readonly activate:Boolean;
    @Field(type=>RegistrationFormInput)
    readonly registration_form:RegistrationFormInput;
}

