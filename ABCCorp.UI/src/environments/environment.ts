import { EnvironmentConfiguration } from "src/app/shared/models/environment-configuration";

export const environment: EnvironmentConfiguration = {
    env_name: 'dev',
    production: true,
    apiUrl: 'http://localhost:5201/api',
    apiEndpoints: {
      userProfile:'user-profiles'
    },
    adConfig: {
      clientId: '612578b2-35ab-4342-90ff-d1e5125b81ae',
      tenantId: 'd9053b23-991c-441b-8b48-e8848acb5730',
      readScopeUrl: 'api://c171b643-2db7-4e65-9bf1-3fee45c0b1fa/tasks.read',
      writeScopeUrl: 'api://c171b643-2db7-4e65-9bf1-3fee45c0b1fa/tasks.write',
      scopeUrls:[
        'api://c171b643-2db7-4e65-9bf1-3fee45c0b1fa/tasks.read',
        'api://c171b643-2db7-4e65-9bf1-3fee45c0b1fa/tasks.write'
      ],
      apiEndpointUrl: 'http://localhost:5201/api'
    },
    cacheTimeInMinutes: 30,
  };