import noop from './noop';

export function bindHTMLElementEvent(
  elem: HTMLElement | null,
  eventName: string,
  handler: (event: Event) => void,
): () => void {
  if (!elem) return noop;

  elem.addEventListener(eventName, handler);

  return () => elem.removeEventListener(eventName, handler);
}
