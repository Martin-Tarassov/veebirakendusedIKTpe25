let autod = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 }
];

autod.sort((a, b) => a.aasta - b.aasta);
console.log(autod);