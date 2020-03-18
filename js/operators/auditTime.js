import { auditTime, fromEvent } from "../main.js";

// Ignores source values for duration milliseconds, then emits the most recent value from the source Observable, then repeats this process.

export default () => {
  const keyDown$ = fromEvent(document, 'keydown');

  keyDown$.pipe(
    auditTime(500)
  ).subscribe(event => console.log(event.key));
}