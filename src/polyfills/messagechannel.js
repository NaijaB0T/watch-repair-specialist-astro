// MessageChannel polyfill for Cloudflare Workers
if (typeof globalThis.MessageChannel === 'undefined') {
  globalThis.MessageChannel = class MessageChannel {
    constructor() {
      const channel = { port1: {}, port2: {} };
      
      channel.port1.postMessage = (message) => {
        if (channel.port2.onmessage) {
          setTimeout(() => channel.port2.onmessage({ data: message }), 0);
        }
      };
      
      channel.port2.postMessage = (message) => {
        if (channel.port1.onmessage) {
          setTimeout(() => channel.port1.onmessage({ data: message }), 0);
        }
      };
      
      this.port1 = channel.port1;
      this.port2 = channel.port2;
    }
  };
}
