export function flight(): Promise<any> {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        resolve(response);
        // }, 3000);
    })
};

const response = [
    {
        "duration": "120",
        "from": "Japan",
        "from_date": "11/05/2023",
        "from_gate": 1,
        "num": "A234",
        "plane": "Boing 777",
        "to": "Germany",
        "to_date": "13/05/2023",
        "to_gate": 13,
        "workerId": 1
    },
    { 
        "duration": "360",
        "from": "Korea",
        "from_date": "11/06/2023",
        "from_gate": 1,
        "num": "B24",
        "plane": "Boing 737",
        "to": "Italy",
        "to_date": "14/05/2023",
        "to_gate": 15,
        "workerId": 1
    }
]

