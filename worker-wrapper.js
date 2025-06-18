// MessageChannel polyfill for Cloudflare Workers
if (typeof globalThis.MessageChannel === 'undefined') {
  class MessageChannel {
    constructor() {
      this.port1 = {
        postMessage: () => {},
        onmessage: null,
        close: () => {}
      };
      this.port2 = {
        postMessage: () => {},
        onmessage: null,
        close: () => {}
      };
    }
  }
  globalThis.MessageChannel = MessageChannel;
}

// Import the default Astro worker
import worker from './dist/_worker.js';

export default worker;
