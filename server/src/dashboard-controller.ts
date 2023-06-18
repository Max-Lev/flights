import express from 'express';
import { flight } from './get-flight';
export const dashboardRouter = express.Router();

dashboardRouter.get('/workers', (_req, _res) => {
    const workersDB = require('../mock/workers.json');
    _res.json(workersDB);
});

dashboardRouter.use('/flights/:id', (req, res, next) => {
    flight().then(flightsResponse => {
        res.locals.flight = flightsResponse;
        next();
        console.log('flightsResponse ', flightsResponse)
    });
});

dashboardRouter.get('/flights/:id', async (_req, _res) => {
    const { id } = _req.params;
    const flightsDB = require('../mock/flights.json');
    let db = Array.from(flightsDB).concat(_res.locals.flight);
    const flights = db.filter((flight: any) => flight.workerId === +id);
    _res.json(flights);
});
