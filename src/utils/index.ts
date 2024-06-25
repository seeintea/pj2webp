import noop from './noop';
import { isMatchNumber } from './match';
import { bindHTMLElementEvent } from './dom';
import { getFileSizeForHuman } from './size';

function getFileSize(size: number): string {
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

export { noop, isMatchNumber, bindHTMLElementEvent, getFileSizeForHuman, getFileSize };
