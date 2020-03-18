// Ignores source values for a duration determined by another Observable, 
// then emits the most recent value from the source Observable, 
// then repeats this process.

import { interval, fromEvent, audit } from '../main.js';

function defaultExample() {
  const click$ = fromEvent(document, 'click');

  click$.pipe(
    audit(() => interval(1000))
  ).subscribe(event => console.log(event));
}

function myExample() {
  const keyDown$ = fromEvent(document, 'keydown');

  keyDown$.pipe(
    audit(() => fromEvent(document, 'click'))
  ).subscribe(keyboardEvent => console.log(keyboardEvent.key));
}

export default () => {
  myExample();
}