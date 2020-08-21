import serverless from 'serverless-http';

import app from './app';

export const index = serverless(app);
