import {
    IGetCompanyParameters,
    IGetCompanyResult,
    IGetRouteParameters,
    IGetRouteResult,
    IGetAllRoutesParameters,
    IGetAllRoutesResult,
    IGetStopParameters,
    IGetStopResult,
    IGetRouteStopParameters,
    IGetRouteStopResult,
    IGetETAParameters,
    IGetETAResults,
} from './interfaces';

const BASE_URL = 'https://rt.data.gov.hk/v1/transport/citybus-nwfb';

const fetchWrapper = async <T>(url: string) => {
    try {
        const response = await fetch(url);
        switch (response.status) {
            case 200: {
                const json = await response.json();
                return json as T;
            }

            case 422: {
                const json = await response.json();
                throw new Error(json.message);
            }

            case 429: {
                throw new Error('too many requests');
            }

            case 500: {
                throw new Error('internal server error');
            }

            default: {
                return null;
            }
        }
    } catch (error) {
        throw new Error(error);
    }
};

class NextBus {
    static async getCompany({ company_id }: IGetCompanyParameters) {
        const url = `${BASE_URL}/company/${company_id}`;
        return await fetchWrapper<IGetCompanyResult>(url);
    }

    static async getRoute({ company_id, route }: IGetRouteParameters) {
        const url = `${BASE_URL}/route/${company_id}/${route}`;
        return await fetchWrapper<IGetRouteResult>(url);
    }

    static async getAllRoutes({ company_id }: IGetAllRoutesParameters) {
        const url = `${BASE_URL}/route/${company_id}`;
        return await fetchWrapper<IGetAllRoutesResult>(url);
    }

    static async getStop({ stop_id }: IGetStopParameters) {
        const url = `${BASE_URL}/stop/${stop_id}`;
        return await fetchWrapper<IGetStopResult>(url);
    }

    static async getRouteStop({ company_id, route, direction }: IGetRouteStopParameters) {
        const url = `${BASE_URL}/route-stop/${company_id}/${route}/${direction}`;
        return await fetchWrapper<IGetRouteStopResult>(url);
    }

    static async getETA({ company_id, stop_id, route }: IGetETAParameters) {
        const url = `${BASE_URL}/eta/${company_id}/${stop_id}/${route}`;
        return await fetchWrapper<IGetETAResults>(url);
    }
}

export { NextBus };
