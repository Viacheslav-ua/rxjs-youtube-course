import { of, from, Observable } from 'rxjs'
import { scan } from 'rxjs/operators'

// const stream$ = of(1, 2, 3, 4)

// stream$.subscribe(val => {
//     console.log('Value: ', val);
// })

    // const arr$ = from([1, 2, 3, 4]).pipe(
    //     scan((acc, v) => acc.concat(v), [])
    // )

    // arr$.subscribe(v => console.log(v))

const stream$ = new Observable(observer => {
    observer.next('First value')

    setTimeout(() => observer.next('After 1000ms'), 1000)
    setTimeout(() => observer.error('Something went wrong'), 2000)
    setTimeout(() => observer.next('After 3000ms'), 3000)
})

// stream$.subscribe(
//     (v) => console.log('Val. ',v),
//     (err) => console.log(err),
//     () => console.log('complete'),
//     )

stream$.subscribe({
    next(v) {
        console.log('Val: ', v);
    },
    error(err) {
        console.log(err);
    },
    complete() {
        console.log('complete');
    }
})

// 5168745118583688