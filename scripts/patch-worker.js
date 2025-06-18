import fs from 'fs';
import path from 'path';

// Comprehensive MessageChannel polyfill code
const polyfill = `
// MessageChannel polyfill for Cloudflare Workers
if (typeof globalThis.MessageChannel === 'undefined') {
  const MessagePortPolyfill = class MessagePort {
    constructor(otherPort) {
      this._otherPort = otherPort;
      this._listeners = new Map();
      this._messageQueue = [];
      this._started = false;
    }
    
    postMessage(message) {
      if (this._otherPort && this._otherPort._started) {
        Promise.resolve().then(() => {
          const event = { data: message, type: 'message' };
          if (this._otherPort.onmessage) {
            this._otherPort.onmessage(event);
          }
          const listeners = this._otherPort._listeners.get('message');
          if (listeners) {
            listeners.forEach(listener => listener(event));
          }
        });
      }
    }
    
    addEventListener(type, listener) {
      if (!this._listeners.has(type)) {
        this._listeners.set(type, []);
      }
      this._listeners.get(type).push(listener);
    }
    
    removeEventListener(type, listener) {
      const listeners = this._listeners.get(type);
      if (listeners) {
        const index = listeners.indexOf(listener);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      }
    }
    
    start() {
      this._started = true;
    }
    
    close() {
      this._started = false;
      this._listeners.clear();
      this._messageQueue = [];
    }
    
    dispatchEvent() { return false; }
  };
  
  globalThis.MessageChannel = class MessageChannel {
    constructor() {
      const port1 = new MessagePortPolyfill(null);
      const port2 = new MessagePortPolyfill(null);
      port1._otherPort = port2;
      port2._otherPort = port1;
      this.port1 = port1;
      this.port2 = port2;
    }
  };
}

// Also polyfill MessagePort if needed
if (typeof globalThis.MessagePort === 'undefined') {
  globalThis.MessagePort = globalThis.MessageChannel ? 
    Object.getPrototypeOf(new MessageChannel().port1).constructor : 
    class MessagePort {};
}
`;

try {
  // Read the worker file
  const workerPath = path.join(process.cwd(), 'dist', '_worker.js');
  
  if (!fs.existsSync(workerPath)) {
    console.error('❌ Worker file not found at:', workerPath);
    process.exit(1);
  }
  
  let workerContent = fs.readFileSync(workerPath, 'utf-8');
  
  // Check if polyfill already exists
  if (!workerContent.includes('MessageChannel polyfill')) {
    // Add polyfill at the beginning
    workerContent = polyfill + '\n' + workerContent;
    
    // Write back
    fs.writeFileSync(workerPath, workerContent);
    console.log('✅ Added MessageChannel polyfill to worker');
  } else {
    console.log('✅ MessageChannel polyfill already exists in worker');
  }
} catch (error) {
  console.error('❌ Error patching worker:', error);
  process.exit(1);
}
