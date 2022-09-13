import { fromEvent, interval } from 'rxjs'
import { filter, map, reduce, scan, take, takeWhile, tap } from 'rxjs/operators'

fromEvent(document, 'click')

const stream$ = interval(1000)
.pipe(
  // tap((v) => console.log('tap ', v)),
  // map((v) => v * 3),
  // filter((v) => v % 2 === 0),
  take(5),
  // takeWhile(v => v < 7),
  // scan((acc, v) => acc + v, 0),
  reduce((acc, v) => acc + v, 0),
)
stream$.subscribe({
  next: (v) => console.log('next ', v),
  complete: () => console.log('complite')
})