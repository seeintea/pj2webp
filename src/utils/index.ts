// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function noop(..._args: unknown[]) {}

export function isMatchNumber(match: unknown): boolean {
  return typeof match === 'number';
}

export function bindHTMLElementEvent(
  elem: HTMLElement | null,
  eventName: string,
  handler: (event: Event) => void,
): () => void {
  if (!elem) return noop;

  elem.addEventListener(eventName, handler);

  return () => elem.removeEventListener(eventName, handler);
}

export function getFileSize(size: number): string {
  if (size < 1024) {
    return `${size}B`;
  }
  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(2)}KB`;
  }
  if (size < 1024 * 1024 * 1024) {
    return `${(size / (1024 * 1024)).toFixed(2)}MB`;
  }
  return '';
}
