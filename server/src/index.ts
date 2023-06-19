// Import the express in typescript file
import express from 'express';

// Initialize the express engine
const app: express.Application = express();

const router = express.Router();

// Take a port 3000 for running server.
const port: number = 3000 || process.env.PORT;

import {dashboardRouter} from './dashboard-controller';

app.use(dashboardRouter);


// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});