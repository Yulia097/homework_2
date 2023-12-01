let carFuel = 'gas'; // "disel"

let carSize = 'S'; //M, L, XL

function gasStation(carFuel = 'gas', carSize = 'S') {
  console.log(`Заправка для ${carFuel} авто, тип палива ${carSize}`);
}

gasStation('gas', 'M');
gasStation('disel', 'M');
gasStation('gas', 'S');
gasStation('disel', 'S');
gasStation('gas', 'L');
gasStation('disel', 'L');
gasStation('gas', 'XL');
gasStation('disel', 'XL');
gasStation();
