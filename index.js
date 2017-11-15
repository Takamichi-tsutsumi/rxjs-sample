const Rx = require('rxjs/Rx')

const numbers = Rx.Observable.from([1,2,3])
numbers.map(num => 2 * num)
  .subscribe(num => console.log(num))

