# Next Bus (Hong Kong)

Non-official Node.JS wrapper for [Next Bus](https://data.gov.hk/en-data/dataset/ctb-eta-transport-realtime-eta)

Resources
- [API Specification](https://www.bravobus.com.hk/datagovhk/bus_eta_api_specifications.pdf)
- [Data Dictionary](https://www.bravobus.com.hk/datagovhk/bus_eta_data_dictionary.pdf)

# Getting Started

## Install

```bash
npm install hk-nextbus
```

## Usage

```js

import { NextBus } from 'hk-nextbus';
// or
const { NextBus } = require('hk-nextbus');

const company_id = 'CTB';
const route = '1';
const direction = 'outbound';
const stop_id = '002737';
const { data: companyData } = await NextBus.getCompany({ company_id });
const { data: routesData } = await NextBus.getAllRoutes({ company_id });
const { data: routeData } = await NextBus.getRoute({ company_id, route });
const { data: routeStopData } = await NextBus.getRouteStop({ company_id, route, direction });
const { data: etaData } = await NextBus.getETA({ company_id, stop_id, route });

```
