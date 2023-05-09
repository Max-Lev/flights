## Description
Flights Dashboard Feature Module:

## COMPONENTS:
`Dashboard-Container-Component`: responsible for API requests of Workers | Flights data.
Child Components communication:
`Workers, Flights, Details components` get required data from Dashboard-Component by Input props 
and Emit Events upstream.

## PROVIDERS:
`Flights & Workers Providers` responsible to retrieve required data.

## API CONFIG:
`proxy.conf.json` add new API endpoints if required.

## Install
Run `npm install` to install all required project dependencies: Angular, PrimeNg

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

