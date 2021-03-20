const { NextBus } = require('hk-nextbus');
const fetch = require('node-fetch');
global.fetch = fetch;

const random = (array = []) => {
    return array[Math.round(Math.random() * array.length)];
};

(async () => {
    const company_id = random(['CTB', 'NWFB']);
    const direction = random(['inbound', 'outbound']);

    const { data: companyData } = await NextBus.getCompany({ company_id });

    const { data: routesData } = await NextBus.getAllRoutes({ company_id });

    const route = random(routesData).route;

    const { data: routeData } = await NextBus.getRoute({
        company_id,
        route,
    });

    const { data: routeStopData } = await NextBus.getRouteStop({
        company_id,
        route,
        direction,
    });

    const stop_id = random(routeStopData).stop;

    const { data: etaData } = await NextBus.getETA({
        company_id,
        stop_id,
        route,
    });

    console.log({
        company: companyData,
        routes: routesData,
        route: routeData,
        routeStop: routeStopData,
        eta: etaData,
    });
})();
