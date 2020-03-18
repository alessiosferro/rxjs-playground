import { fromEvent, buffer, interval } from "../main.js"

// Buffers the source Observable values until closingNotifier emits.

export default () => {
  const click$ = fromEvent(document, 'click');
  const interval$ = interval(1000);

  /**
   * Ad ogni click del mouse, le emissioni di interval vengono
   * "bufferizzate" in un array
   */
  const bufferedIntervalCounters$ = interval$.pipe(buffer(click$));

  bufferedIntervalCounters$
    .subscribe(buffer => console.log(buffer));
}