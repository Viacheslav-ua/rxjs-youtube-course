import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs'

document.addEventListener('click', () => {
  const stream$ = new ReplaySubject(2)
  
  // stream$.subscribe((v) => console.log('Value ', v))
  stream$.next('Hello')
  stream$.next('rx')
  stream$.next('js')
  stream$.subscribe((v) => console.log('Value ', v))
})