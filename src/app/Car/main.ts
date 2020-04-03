import { Car } from './car';
import { Engine } from './engine';
import { Wheels } from './wheels';

export class Main {
}
function main() {
  const engine = new Engine();
  const wheels = new Wheels();
  const car = new Car(engine, wheels);

  car.startEngine();

  car.startEngine();
}

main();
