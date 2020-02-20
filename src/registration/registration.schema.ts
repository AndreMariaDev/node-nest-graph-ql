import * as mongoose from 'mongoose';
 
export const StepSchema = new mongoose.Schema({
 
    id:String,
    inc_date:String,
    update_date:String,
}, {
  timestamps: true
})

export const DocumentSchema = new mongoose.Schema({
 
    type:String,
    value:String,
}, {
  timestamps: true
})

export const AddressSchema = new mongoose.Schema({
 
    zipcode:String,
    street:String,
    number:String,
    complement:String,
}, {
  timestamps: true
})

export const ParentSchema = new mongoose.Schema({
 
    userPublicId:String,
    main:Boolean,
    name:String,
    email:String,
    cell_phone:String,
    phone:String,
    birthday:String,
    documents:[DocumentSchema],
    address:AddressSchema,
    responsibilities:[String],
}, {
  timestamps: true
})

export const ChildSchema = new mongoose.Schema({
 
    name:String,
    birthday:String,
    cell_phone:String,
    gender:String,
    year:String,
    school:String,
    nationality:String,
    documents:[DocumentSchema],
    address:AddressSchema,
}, {
  timestamps: true
})

export const RegistrationFormSchema = new mongoose.Schema({
 
    current_step:String,
    steps:[StepSchema],
    parents:[ParentSchema],
    children:[ChildSchema],
}, {
  timestamps: true
})

export const OsSchema = new mongoose.Schema({
 
    architecture:Number,
    family:String,
    version:String,
}, {
  timestamps: true
})

export const BrowserSchema = new mongoose.Schema({
 
    description:String,
    layout:String,
    manufacturer:String,
    name:String,
    prerelease:String,
    product:String,
    ua:String,
    version:String,
    os:OsSchema,
}, {
  timestamps: true
})

export const LanguageSchema = new mongoose.Schema({
 
    code:String,
    name:String,
    native:String,
}, {
  timestamps: true
})

export const LocationSchema = new mongoose.Schema({
 
    geoname_id:Number,
    capital:String,
    languages:[LanguageSchema],
    country_flag:String,
    country_flag_emoji:String,
    country_flag_emoji_unicode:String,
    calling_code:String,
    is_eu:Boolean,
}, {
  timestamps: true
})

export const TimeZoneSchema = new mongoose.Schema({
    id:String,
    current_time:Date,
    gmt_offset:Number,
    code:String,
    is_daylight_saving:Boolean,
}, {
  timestamps: true
})

export const CurrencySchema = new mongoose.Schema({
 
    code:String,
    name:String,
    plural:String,
    symbol:String,
    symbol_native:String,
}, {
  timestamps: true
})

export const ConnectionSchema = new mongoose.Schema({
 
    asn:Number,
    isp:String,
}, {
  timestamps: true
})

export const IpInfoSchema = new mongoose.Schema({
 
    ip:String,
    type:String,
    continent_code:String,
    continent_name:String,
    country_code:String,
    country_name:String,
    region_code:String,
    region_name:String,
    city:String,
    zip:String,
    latitude:Number,
    longitude:Number,
    location:LocationSchema,
    time_zone:TimeZoneSchema,
    currency:CurrencySchema,
    connection:ConnectionSchema,
}, {
  timestamps: true
})

export const FingerprintSchema = new mongoose.Schema({
 
    uid:String,
    token:String,
    fingerprint:String,
    url:String,
    urlQueryString:[String],
    referrer:String,
    pageTitle:String,
    browser:BrowserSchema,
    cookie:String,
    formMapping:String,
    ipInfo:IpInfoSchema,
    partnersDenied:String,
}, {
  timestamps: true
})

export const RegisterSchema = new mongoose.Schema({
 
    document:String,
    cell_phone:String,
    activate:Boolean,
    registration_form:RegistrationFormSchema,
}, {
  timestamps: true
})

