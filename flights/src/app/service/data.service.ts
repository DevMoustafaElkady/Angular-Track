import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // All countries
// length 252
 countries :any []= [
  {"name":"Afghanistan","code":"AF","phone":93,"currency":"AFN"},
  {"name":"Aland Islands","code":"AX","phone":358,"currency":"EUR"},
  {"name":"Albania","code":"AL","phone":355,"currency":"ALL"},
  {"name":"Algeria","code":"DZ","phone":213,"currency":"DZD"},
  {"name":"American Samoa","code":"AS","phone":1684,"currency":"USD"},
  {"name":"Andorra","code":"AD","phone":376,"currency":"EUR"},
  {"name":"Angola","code":"AO","phone":244,"currency":"AOA"},
  {"name":"Anguilla","code":"AI","phone":1264,"currency":"XCD"},
  {"name":"Antarctica","code":"AQ","phone":672,"currency":"AAD"},
  {"name":"Antigua and Barbuda","code":"AG","phone":1268,"currency":"XCD"},
  {"name":"Argentina","code":"AR","phone":54,"currency":"ARS"},
  {"name":"Armenia","code":"AM","phone":374,"currency":"AMD"},
  {"name":"Aruba","code":"AW","phone":297,"currency":"AWG"},
  {"name":"Australia","code":"AU","phone":61,"currency":"AUD"},
  {"name":"Austria","code":"AT","phone":43,"currency":"EUR"},
  {"name":"Azerbaijan","code":"AZ","phone":994,"currency":"AZN"},
  {"name":"Bahamas","code":"BS","phone":1242,"currency":"BSD"},
  {"name":"Bahrain","code":"BH","phone":973,"currency":"BHD"},
  {"name":"Bangladesh","code":"BD","phone":880,"currency":"BDT"},
  {"name":"Barbados","code":"BB","phone":1246,"currency":"BBD"},
  {"name":"Belarus","code":"BY","phone":375,"currency":"BYN"},
  {"name":"Belgium","code":"BE","phone":32,"currency":"EUR"},
  {"name":"Belize","code":"BZ","phone":501,"currency":"BZD"},
  {"name":"Benin","code":"BJ","phone":229,"currency":"XOF"},
  {"name":"Bermuda","code":"BM","phone":1441,"currency":"BMD"},
  {"name":"Bhutan","code":"BT","phone":975,"currency":"BTN"},
  {"name":"Bolivia","code":"BO","phone":591,"currency":"BOB"},
  {"name":"Bonaire, Sint Eustatius and Saba","code":"BQ","phone":599,"currency":"USD"},
  {"name":"Bosnia and Herzegovina","code":"BA","phone":387,"currency":"BAM"},
  {"name":"Botswana","code":"BW","phone":267,"currency":"BWP"},
  {"name":"Bouvet Island","code":"BV","phone":55,"currency":"NOK"},
  {"name":"Brazil","code":"BR","phone":55,"currency":"BRL"},
  {"name":"British Indian Ocean Territory","code":"IO","phone":246,"currency":"USD"},
  {"name":"Brunei Darussalam","code":"BN","phone":673,"currency":"BND"},
  {"name":"Bulgaria","code":"BG","phone":359,"currency":"BGN"},
  {"name":"Burkina Faso","code":"BF","phone":226,"currency":"XOF"},
  {"name":"Burundi","code":"BI","phone":257,"currency":"BIF"},
  {"name":"Cambodia","code":"KH","phone":855,"currency":"KHR"},
  {"name":"Cameroon","code":"CM","phone":237,"currency":"XAF"},
  {"name":"Canada","code":"CA","phone":1,"currency":"CAD"},
  {"name":"Cape Verde","code":"CV","phone":238,"currency":"CVE"},
  {"name":"Cayman Islands","code":"KY","phone":1345,"currency":"KYD"},
  {"name":"Central African Republic","code":"CF","phone":236,"currency":"XAF"},
  {"name":"Chad","code":"TD","phone":235,"currency":"XAF"},
  {"name":"Chile","code":"CL","phone":56,"currency":"CLP"},
  {"name":"China","code":"CN","phone":86,"currency":"CNY"},
  {"name":"Christmas Island","code":"CX","phone":61,"currency":"AUD"},
  {"name":"Cocos (Keeling) Islands","code":"CC","phone":672,"currency":"AUD"},
  {"name":"Colombia","code":"CO","phone":57,"currency":"COP"},
  {"name":"Comoros","code":"KM","phone":269,"currency":"KMF"},
  {"name":"Congo","code":"CG","phone":242,"currency":"XAF"},
  {"name":"Congo, Democratic Republic of the Congo","code":"CD","phone":242,"currency":"CDF"},
  {"name":"Cook Islands","code":"CK","phone":682,"currency":"NZD"},
  {"name":"Costa Rica","code":"CR","phone":506,"currency":"CRC"},
  {"name":"Cote D'Ivoire","code":"CI","phone":225,"currency":"XOF"},
  {"name":"Croatia","code":"HR","phone":385,"currency":"HRK"},
  {"name":"Cuba","code":"CU","phone":53,"currency":"CUP"},
  {"name":"Curacao","code":"CW","phone":599,"currency":"ANG"},
  {"name":"Cyprus","code":"CY","phone":357,"currency":"EUR"},
  {"name":"Czech Republic","code":"CZ","phone":420,"currency":"CZK"},
  {"name":"Denmark","code":"DK","phone":45,"currency":"DKK"},
  {"name":"Djibouti","code":"DJ","phone":253,"currency":"DJF"},
  {"name":"Dominica","code":"DM","phone":1767,"currency":"XCD"},
  {"name":"Dominican Republic","code":"DO","phone":1809,"currency":"DOP"},
  {"name":"Ecuador","code":"EC","phone":593,"currency":"USD"},
  {"name":"Egypt","code":"EG","phone":20,"currency":"EGP"},
  {"name":"El Salvador","code":"SV","phone":503,"currency":"USD"},
  {"name":"Equatorial Guinea","code":"GQ","phone":240,"currency":"XAF"},
  {"name":"Eritrea","code":"ER","phone":291,"currency":"ERN"},
  {"name":"Estonia","code":"EE","phone":372,"currency":"EUR"},
  {"name":"Ethiopia","code":"ET","phone":251,"currency":"ETB"},
  {"name":"Falkland Islands (Malvinas)","code":"FK","phone":500,"currency":"FKP"},
  {"name":"Faroe Islands","code":"FO","phone":298,"currency":"DKK"},
  {"name":"Fiji","code":"FJ","phone":679,"currency":"FJD"},
  {"name":"Finland","code":"FI","phone":358,"currency":"EUR"},
  {"name":"France","code":"FR","phone":33,"currency":"EUR"},
  {"name":"French Guiana","code":"GF","phone":594,"currency":"EUR"},
  {"name":"French Polynesia","code":"PF","phone":689,"currency":"XPF"},
  {"name":"French Southern Territories","code":"TF","phone":262,"currency":"EUR"},
  {"name":"Gabon","code":"GA","phone":241,"currency":"XAF"},
  {"name":"Gambia","code":"GM","phone":220,"currency":"GMD"},
  {"name":"Georgia","code":"GE","phone":995,"currency":"GEL"},
  {"name":"Germany","code":"DE","phone":49,"currency":"EUR"},
  {"name":"Ghana","code":"GH","phone":233,"currency":"GHS"},
  {"name":"Gibraltar","code":"GI","phone":350,"currency":"GIP"},
  {"name":"Greece","code":"GR","phone":30,"currency":"EUR"},
  {"name":"Greenland","code":"GL","phone":299,"currency":"DKK"},
  {"name":"Grenada","code":"GD","phone":1473,"currency":"XCD"},
  {"name":"Guadeloupe","code":"GP","phone":590,"currency":"EUR"},
  {"name":"Guam","code":"GU","phone":1671,"currency":"USD"},
  {"name":"Guatemala","code":"GT","phone":502,"currency":"GTQ"},
  {"name":"Guernsey","code":"GG","phone":44,"currency":"GBP"},
  {"name":"Guinea","code":"GN","phone":224,"currency":"GNF"},
  {"name":"Guinea-Bissau","code":"GW","phone":245,"currency":"XOF"},
  {"name":"Guyana","code":"GY","phone":592,"currency":"GYD"},
  {"name":"Haiti","code":"HT","phone":509,"currency":"HTG"},
  {"name":"Heard Island and Mcdonald Islands","code":"HM","phone":0,"currency":"AUD"},
  {"name":"Holy See (Vatican City State)","code":"VA","phone":39,"currency":"EUR"},
  {"name":"Honduras","code":"HN","phone":504,"currency":"HNL"},
  {"name":"Hong Kong","code":"HK","phone":852,"currency":"HKD"},
  {"name":"Hungary","code":"HU","phone":36,"currency":"HUF"},
  {"name":"Iceland","code":"IS","phone":354,"currency":"ISK"},
  {"name":"India","code":"IN","phone":91,"currency":"INR"},
  {"name":"Indonesia","code":"ID","phone":62,"currency":"IDR"},
  {"name":"Iran, Islamic Republic of","code":"IR","phone":98,"currency":"IRR"},
  {"name":"Iraq","code":"IQ","phone":964,"currency":"IQD"},
  {"name":"Ireland","code":"IE","phone":353,"currency":"EUR"},
  {"name":"Isle of Man","code":"IM","phone":44,"currency":"GBP"},
  {"name":"Israel","code":"IL","phone":972,"currency":"ILS"},
  {"name":"Italy","code":"IT","phone":39,"currency":"EUR"},
  {"name":"Jamaica","code":"JM","phone":1876,"currency":"JMD"},
  {"name":"Japan","code":"JP","phone":81,"currency":"JPY"},
  {"name":"Jersey","code":"JE","phone":44,"currency":"GBP"},
  {"name":"Jordan","code":"JO","phone":962,"currency":"JOD"},
  {"name":"Kazakhstan","code":"KZ","phone":7,"currency":"KZT"},
  {"name":"Kenya","code":"KE","phone":254,"currency":"KES"},
  {"name":"Kiribati","code":"KI","phone":686,"currency":"AUD"},
  {"name":"Korea, Democratic People's Republic of","code":"KP","phone":850,"currency":"KPW"},
  {"name":"Korea, Republic of","code":"KR","phone":82,"currency":"KRW"},
  {"name":"Kosovo","code":"XK","phone":381,"currency":"EUR"},
  {"name":"Kuwait","code":"KW","phone":965,"currency":"KWD"},
  {"name":"Kyrgyzstan","code":"KG","phone":996,"currency":"KGS"},
  {"name":"Lao People's Democratic Republic","code":"LA","phone":856,"currency":"LAK"},
  {"name":"Latvia","code":"LV","phone":371,"currency":"EUR"},
  {"name":"Lebanon","code":"LB","phone":961,"currency":"LBP"},
  {"name":"Lesotho","code":"LS","phone":266,"currency":"LSL"},
  {"name":"Liberia","code":"LR","phone":231,"currency":"LRD"},
  {"name":"Libyan Arab Jamahiriya","code":"LY","phone":218,"currency":"LYD"},
  {"name":"Liechtenstein","code":"LI","phone":423,"currency":"CHF"},
  {"name":"Lithuania","code":"LT","phone":370,"currency":"EUR"},
  {"name":"Luxembourg","code":"LU","phone":352,"currency":"EUR"},
  {"name":"Macao","code":"MO","phone":853,"currency":"MOP"},
  {"name":"Macedonia, the Former Yugoslav Republic of","code":"MK","phone":389,"currency":"MKD"},
  {"name":"Madagascar","code":"MG","phone":261,"currency":"MGA"},
  {"name":"Malawi","code":"MW","phone":265,"currency":"MWK"},
  {"name":"Malaysia","code":"MY","phone":60,"currency":"MYR"},
  {"name":"Maldives","code":"MV","phone":960,"currency":"MVR"},
  {"name":"Mali","code":"ML","phone":223,"currency":"XOF"},
  {"name":"Malta","code":"MT","phone":356,"currency":"EUR"},
  {"name":"Marshall Islands","code":"MH","phone":692,"currency":"USD"},
  {"name":"Martinique","code":"MQ","phone":596,"currency":"EUR"},
  {"name":"Mauritania","code":"MR","phone":222,"currency":"MRO"},
  {"name":"Mauritius","code":"MU","phone":230,"currency":"MUR"},
  {"name":"Mayotte","code":"YT","phone":269,"currency":"EUR"},
  {"name":"Mexico","code":"MX","phone":52,"currency":"MXN"},
  {"name":"Micronesia, Federated States of","code":"FM","phone":691,"currency":"USD"},
  {"name":"Moldova, Republic of","code":"MD","phone":373,"currency":"MDL"},
  {"name":"Monaco","code":"MC","phone":377,"currency":"EUR"},
  {"name":"Mongolia","code":"MN","phone":976,"currency":"MNT"},
  {"name":"Montenegro","code":"ME","phone":382,"currency":"EUR"},
  {"name":"Montserrat","code":"MS","phone":1664,"currency":"XCD"},
  {"name":"Morocco","code":"MA","phone":212,"currency":"MAD"},
  {"name":"Mozambique","code":"MZ","phone":258,"currency":"MZN"},
  {"name":"Myanmar","code":"MM","phone":95,"currency":"MMK"},
  {"name":"Namibia","code":"NA","phone":264,"currency":"NAD"},
  {"name":"Nauru","code":"NR","phone":674,"currency":"AUD"},
  {"name":"Nepal","code":"NP","phone":977,"currency":"NPR"},
  {"name":"Netherlands","code":"NL","phone":31,"currency":"EUR"},
  {"name":"Netherlands Antilles","code":"AN","phone":599,"currency":"ANG"},
  {"name":"New Caledonia","code":"NC","phone":687,"currency":"XPF"},
  {"name":"New Zealand","code":"NZ","phone":64,"currency":"NZD"},
  {"name":"Nicaragua","code":"NI","phone":505,"currency":"NIO"},
  {"name":"Niger","code":"NE","phone":227,"currency":"XOF"},
  {"name":"Nigeria","code":"NG","phone":234,"currency":"NGN"},
  {"name":"Niue","code":"NU","phone":683,"currency":"NZD"},
  {"name":"Norfolk Island","code":"NF","phone":672,"currency":"AUD"},
  {"name":"Northern Mariana Islands","code":"MP","phone":1670,"currency":"USD"},
  {"name":"Norway","code":"NO","phone":47,"currency":"NOK"},
  {"name":"Oman","code":"OM","phone":968,"currency":"OMR"},
  {"name":"Pakistan","code":"PK","phone":92,"currency":"PKR"},
  {"name":"Palau","code":"PW","phone":680,"currency":"USD"},
  {"name":"Palestinian Territory, Occupied","code":"PS","phone":970,"currency":"ILS"},
  {"name":"Panama","code":"PA","phone":507,"currency":"PAB"},
  {"name":"Papua New Guinea","code":"PG","phone":675,"currency":"PGK"},
  {"name":"Paraguay","code":"PY","phone":595,"currency":"PYG"},
  {"name":"Peru","code":"PE","phone":51,"currency":"PEN"},
  {"name":"Philippines","code":"PH","phone":63,"currency":"PHP"},
  {"name":"Pitcairn","code":"PN","phone":64,"currency":"NZD"},
  {"name":"Poland","code":"PL","phone":48,"currency":"PLN"},
  {"name":"Portugal","code":"PT","phone":351,"currency":"EUR"},
  {"name":"Puerto Rico","code":"PR","phone":1787,"currency":"USD"},
  {"name":"Qatar","code":"QA","phone":974,"currency":"QAR"},
  {"name":"Reunion","code":"RE","phone":262,"currency":"EUR"},
  {"name":"Romania","code":"RO","phone":40,"currency":"RON"},
  {"name":"Russian Federation","code":"RU","phone":70,"currency":"RUB"},
  {"name":"Rwanda","code":"RW","phone":250,"currency":"RWF"},
  {"name":"Saint Barthelemy","code":"BL","phone":590,"currency":"EUR"},
  {"name":"Saint Helena","code":"SH","phone":290,"currency":"SHP"},
  {"name":"Saint Kitts and Nevis","code":"KN","phone":1869,"currency":"XCD"},
  {"name":"Saint Lucia","code":"LC","phone":1758,"currency":"XCD"},
  {"name":"Saint Martin","code":"MF","phone":590,"currency":"EUR"},
  {"name":"Saint Pierre and Miquelon","code":"PM","phone":508,"currency":"EUR"},
  {"name":"Saint Vincent and the Grenadines","code":"VC","phone":1784,"currency":"XCD"},
  {"name":"Samoa","code":"WS","phone":684,"currency":"WST"},
  {"name":"San Marino","code":"SM","phone":378,"currency":"EUR"},
  {"name":"Sao Tome and Principe","code":"ST","phone":239,"currency":"STD"},
  {"name":"Saudi Arabia","code":"SA","phone":966,"currency":"SAR"},
  {"name":"Senegal","code":"SN","phone":221,"currency":"XOF"},
  {"name":"Serbia","code":"RS","phone":381,"currency":"RSD"},
  {"name":"Serbia and Montenegro","code":"CS","phone":381,"currency":"RSD"},
  {"name":"Seychelles","code":"SC","phone":248,"currency":"SCR"},
  {"name":"Sierra Leone","code":"SL","phone":232,"currency":"SLL"},
  {"name":"Singapore","code":"SG","phone":65,"currency":"SGD"},
  {"name":"Sint Maarten","code":"SX","phone":1,"currency":"ANG"},
  {"name":"Slovakia","code":"SK","phone":421,"currency":"EUR"},
  {"name":"Slovenia","code":"SI","phone":386,"currency":"EUR"},
  {"name":"Solomon Islands","code":"SB","phone":677,"currency":"SBD"},
  {"name":"Somalia","code":"SO","phone":252,"currency":"SOS"},
  {"name":"South Africa","code":"ZA","phone":27,"currency":"ZAR"},
  {"name":"South Georgia and the South Sandwich Islands","code":"GS","phone":500,"currency":"GBP"},
  {"name":"South Sudan","code":"SS","phone":211,"currency":"SSP"},
  {"name":"Spain","code":"ES","phone":34,"currency":"EUR"},
  {"name":"Sri Lanka","code":"LK","phone":94,"currency":"LKR"},
  {"name":"Sudan","code":"SD","phone":249,"currency":"SDG"},
  {"name":"Suriname","code":"SR","phone":597,"currency":"SRD"},
  {"name":"Svalbard and Jan Mayen","code":"SJ","phone":47,"currency":"NOK"},
  {"name":"Swaziland","code":"SZ","phone":268,"currency":"SZL"},
  {"name":"Sweden","code":"SE","phone":46,"currency":"SEK"},
  {"name":"Switzerland","code":"CH","phone":41,"currency":"CHF"},
  {"name":"Syrian Arab Republic","code":"SY","phone":963,"currency":"SYP"},
  {"name":"Taiwan, Province of China","code":"TW","phone":886,"currency":"TWD"},
  {"name":"Tajikistan","code":"TJ","phone":992,"currency":"TJS"},
  {"name":"Tanzania, United Republic of","code":"TZ","phone":255,"currency":"TZS"},
  {"name":"Thailand","code":"TH","phone":66,"currency":"THB"},
  {"name":"Timor-Leste","code":"TL","phone":670,"currency":"USD"},
  {"name":"Togo","code":"TG","phone":228,"currency":"XOF"},
  {"name":"Tokelau","code":"TK","phone":690,"currency":"NZD"},
  {"name":"Tonga","code":"TO","phone":676,"currency":"TOP"},
  {"name":"Trinidad and Tobago","code":"TT","phone":1868,"currency":"TTD"},
  {"name":"Tunisia","code":"TN","phone":216,"currency":"TND"},
  {"name":"Turkey","code":"TR","phone":90,"currency":"TRY"},
  {"name":"Turkmenistan","code":"TM","phone":7370,"currency":"TMT"},
  {"name":"Turks and Caicos Islands","code":"TC","phone":1649,"currency":"USD"},
  {"name":"Tuvalu","code":"TV","phone":688,"currency":"AUD"},
  {"name":"Uganda","code":"UG","phone":256,"currency":"UGX"},
  {"name":"Ukraine","code":"UA","phone":380,"currency":"UAH"},
  {"name":"United Arab Emirates","code":"AE","phone":971,"currency":"AED"},
  {"name":"United Kingdom","code":"GB","phone":44,"currency":"GBP"},
  {"name":"United States","code":"US","phone":1,"currency":"USD"},
  {"name":"United States Minor Outlying Islands","code":"UM","phone":1,"currency":"USD"},
  {"name":"Uruguay","code":"UY","phone":598,"currency":"UYU"},
  {"name":"Uzbekistan","code":"UZ","phone":998,"currency":"UZS"},
  {"name":"Vanuatu","code":"VU","phone":678,"currency":"VUV"},
  {"name":"Venezuela","code":"VE","phone":58,"currency":"VEF"},
  {"name":"Viet Nam","code":"VN","phone":84,"currency":"VND"},
  {"name":"Virgin Islands, British","code":"VG","phone":1284,"currency":"USD"},
  {"name":"Virgin Islands, U.s.","code":"VI","phone":1340,"currency":"USD"},
  {"name":"Wallis and Futuna","code":"WF","phone":681,"currency":"XPF"},
  {"name":"Western Sahara","code":"EH","phone":212,"currency":"MAD"},
  {"name":"Yemen","code":"YE","phone":967,"currency":"YER"},
  {"name":"Zambia","code":"ZM","phone":260,"currency":"ZMW"},
  {"name":"Zimbabwe","code":"ZW","phone":263,"currency":"ZWL"}
];

  constructor() { }
}
