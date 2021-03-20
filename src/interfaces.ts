type companyIds = 'CTB' | 'NWFB';

type directions = 'inbound' | 'outbound';

interface IGetCompanyParameters {
    company_id: companyIds;
}

interface IGetCompanyResult {
    type: string;
    version: string;
    generated_timestamp: string;
    data: {
        co: string;
        name_en: string;
        name_tc: string;
        name_sc: string;
        url: string;
        data_timestamp: string;
    };
}

interface IRouteData {
    co: string;
    route: string;
    orig_tc: string;
    orig_en: string;
    dest_tc: string;
    dest_en: string;
    orig_sc: string;
    dest_sc: string;
    data_timestamp: string;
}

interface IGetRouteParameters {
    company_id: companyIds;
    route: string;
}

interface IGetRouteResult {
    type: 'Route';
    version: string;
    generated_timestamp: string;
    data: IRouteData;
}

interface IGetAllRoutesParameters {
    company_id: companyIds;
}

interface IGetAllRoutesResult {
    type: 'RouteList';
    version: string;
    generated_timestamp: string;
    data: IRouteData[];
}

interface IGetStopParameters {
    stop_id: string;
}

interface IStopData {
    stop: string;
    name_tc: string;
    name_en: string;
    lat: string;
    long: string;
    name_sc: string;
    data_timestamp: string;
}

interface IGetStopResult {
    type: 'Stop';
    version: string;
    generated_timestamp: string;
    data: IStopData;
}

interface IRouteStopData {
    co: string;
    route: string;
    dir: string;
    seq: string;
    stop: string;
    data_timestamp: string;
}

interface IGetRouteStopParameters {
    direction: directions;
    company_id: companyIds;
    route: string;
}

interface IGetRouteStopResult {
    type: 'RouteStop';
    version: string;
    generated_timestamp: string;
    data: IRouteStopData[];
}

interface IETAData {
    co: string;
    route: string;
    dir: string;
    seq: number;
    stop: string;
    dest_tc: string;
    dest_en: string;
    eta: string;
    rmk_tc: string;
    eta_seq: number;
    dest_sc: string;
    rmk_en: string;
    rmk_sc: string;
    data_timestamp: string;
}

interface IGetETAParameters {
    company_id: companyIds;
    stop_id: string;
    route: string;
}

interface IGetETAResults {
    type: 'ETA';
    version: string;
    generated_timestamp: string;
    data: IETAData[];
}

export {
    companyIds,
    directions,
    IGetCompanyParameters,
    IGetCompanyResult,
    IRouteData,
    IGetRouteParameters,
    IGetRouteResult,
    IGetAllRoutesParameters,
    IGetAllRoutesResult,
    IGetStopParameters,
    IStopData,
    IGetStopResult,
    IRouteStopData,
    IGetRouteStopParameters,
    IGetRouteStopResult,
    IETAData,
    IGetETAParameters,
    IGetETAResults,
};
