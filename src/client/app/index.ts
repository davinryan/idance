import { Greeter } from './greeter/greeter';

const greeter: Greeter = new Greeter('Hello Analytics Reporting API V4 from harry');

document.getElementById('greeting').innerHTML = greeter.greet();
