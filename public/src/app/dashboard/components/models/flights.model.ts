export interface IIFlight extends IFlight {
    [key: string]: any;
}
export interface IFlight {
    duration: number;
    from: string;
    from_date: Date;
    from_gate: number;
    num: string;
    plane: string;
    to: string;
    to_date: Date;
    to_gate: number;
    workerId: number;
}

export interface IFlightCol {
    field: string;
    header: string;
};

export const FLIGHT_COLUMNS: IFlightCol[] = [
    {
        header: 'Flight Num', field: 'num'
    },
    {
        header: 'Origin', field: 'from'
    },
    {
        header: 'Origin Date', field: 'from_date'
    },
    {
        header: 'Destination', field: 'to'
    },
    {
        header: 'Destination Date', field: 'to_date'
    },
];

export const DETAILS_COLUMNS: IFlightCol[] = [
    {
        header: 'Plane Number', field: 'plane'
    },
    {
        header: 'Duration of the flight', field: 'duration'
    },
    {
        header: 'Origin gate', field: 'from_gate'
    },
    {
        header: 'Destination gate', field: 'to_gate'
    },
]