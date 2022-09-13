import { of, from, Observable, fromEvent, range, timer, interval } from 'rxjs'
import { scan, map } from 'rxjs/operators'

// const stream$ = of(1, 2, 3, 4)

// stream$.subscribe(val => {
//     console.log('Value: ', val);
// })

    // const arr$ = from([1, 2, 3, 4]).pipe(
    //     scan((acc, v) => acc.concat(v), [])
    // )

    // arr$.subscribe(v => console.log(v))

// const stream$ = new Observable(observer => {
//     observer.next('First value')

//     setTimeout(() => observer.next('After 1000ms'), 1000)
//     setTimeout(() => observer.error('Something went wrong'), 2000)
//     setTimeout(() => observer.next('After 3000ms'), 3000)
// })

// stream$.subscribe(
//     (v) => console.log('Val. ',v),
//     (err) => console.log(err),
//     () => console.log('complete'),
//     )

// stream$.subscribe({
//     next(v) {
//         console.log('Val: ', v);
//     },
//     error(err) {
//         console.log(err);
//     },
//     complete() {
//         console.log('complete');
//     }
// })

// 5168745118583688

// fromEvent(document.querySelector('canvas'), 'mousemove')
// .pipe(
//     map(event => ({
//         x: event.offsetX,
//         y: event.offsetY,
//         ctx: event.target.getContext('2d')
//     }))
// )
// .subscribe(pos => {
//     pos.ctx.fillRect(pos.x, pos.y, 2, 2)
// })

// const clear$ = fromEvent(document.querySelector('#clear'), 'click')

// clear$.subscribe(() => {
//     const canvas = document.querySelector('canvas')
//     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
// })

// const sub = interval(500).subscribe((v) => {
//     console.log(v)
// })
// setTimeout(() => sub.unsubscribe(), 4000)

// timer(2500).subscribe((v) => console.log(v))

range(9, 10).subscribe((v) => console.log(v))