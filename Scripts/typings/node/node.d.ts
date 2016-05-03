// Type definitions for Node.js v0.10.1
// Project: http://nodejs.org/
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/************************************************
*                                               *
*               Node.js v0.10.1 API              *
*                                               *
************************************************/

/************************************************
*                                               *
*                   GLOBAL                      *
*                                               *
************************************************/
declare var process: NodeProcess;
declare var global: any;

declare var __filename: string;
declare var __dirname: string;

declare function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeTimer;
declare function clearTimeout(timeoutId: NodeTimer): void;
declare function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeTimer;
declare function clearInterval(intervalId: NodeTimer): void;
declare function setImmediate(callback: (...args: any[]) => void, ...args: any[]): any;
declare function clearImmediate(immediateId: any): void;

declare var require: {
    (id: string): any;
    resolve(id: string): string;
    cache: any;
    extensions: any;
    main: any;
}

declare var module: {
    exports: any;
    require(id: string): any;
    id: string;
    filename: string;
    loaded: boolean;
    parent: any;
    children: any[];
}

// Same as module.exports
declare var exports: any;
declare var SlowBuffer: {
    new (str: string, encoding?: string): NodeBuffer;
    new (size: number): NodeBuffer;
    new (array: any[]): NodeBuffer;
    prototype: NodeBuffer;
    isBuffer(obj: any): boolean;
    byteLength(string: string, encoding?: string): number;
    concat(list: NodeBuffer[], totalLength?: number): NodeBuffer;
};
declare var Buffer: {
    new (str: string, encoding?: string): NodeBuffer;
    new (size: number): NodeBuffer;
    new (array: any[]): NodeBuffer;
    prototype: NodeBuffer;
    isBuffer(obj: any): boolean;
    byteLength(string: string, encoding?: string): number;
    concat(list: NodeBuffer[], totalLength?: number): NodeBuffer;
}

/************************************************
*                                               *
*                   INTERFACES                  *
*                                               *
************************************************/

interface ErrnoException extends Error {
    errno?: any;
    code?: string;
    path?: string;
    syscall?: string;
}

interface NodeEventEmitter {
    addListener(event: string, listener: Function): NodeEventEmitter;
    on(event: string, listener: Function): NodeEventEmitter;
    once(event: string, listener: Function): NodeEventEmitter;
    removeListener(event: string, listener: Function): NodeEventEmitter;
    removeAllListeners(event?: string): NodeEventEmitter;
    setMaxListeners(n: number): void;
    listeners(event: string): Function[];
    emit(event: string, ...args: any[]): boolean;
}

interface ReadableStream extends NodeEventEmitter {
    readable: boolean;
    read(size?: number): any;
    setEncoding(encoding: string): void;
    pause(): void;
    resume(): void;
    pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
    unpipe<T extends WritableStream>(destination?: T): void;
    unshift(chunk: string): void;
    unshift(chunk: NodeBuffer): void;
    wrap(oldStream: ReadableStream): ReadableStream;
}

interface WritableStream extends NodeEventEmitter {
    writable: boolean;
    write(buffer: NodeBuffer, cb?: Function): boolean;
    write(str: string, cb?: Function): boolean;
    write(str: string, encoding?: string, cb?: Function): boolean;
    end(): void;
    end(buffer: NodeBuffer, cb?: Function): void;
    end(str: string, cb?: Function): void;
    end(str: string, encoding?: string, cb?: Function): void;
}

interface ReadWriteStream extends ReadableStream, WritableStream { }

interface NodeProcess extends NodeEventEmitter {
    stdout: WritableStream;
    stderr: WritableStream;
    stdin: ReadableStream;
    argv: string[];
    execPath: string;
    abort(): void;
    chdir(directory: string): void;
    cwd(): string;
    env: any;
    exit(code?: number): void;
    getgid(): number;
    setgid(id: number): void;
    setgid(id: string): void;
    getuid(): number;
    setuid(id: number): void;
    setuid(id: string): void;
    version: string;
    versions: { http_parser: string; node: string; v8: string; ares: string; uv: string; zlib: string; openssl: string; };
    config: {
        target_defaults: {
            cflags: any[];
            default_configuration: string;
            defines: string[];
            include_dirs: string[];
            libraries: string[];
        };
        variables: {
            clang: number;
            host_arch: string;
            node_install_npm: boolean;
            node_install_waf: boolean;
            node_prefix: string;
            node_shared_openssl: boolean;
            node_shared_v8: boolean;
            node_shared_zlib: boolean;
            node_use_dtrace: boolean;
            node_use_etw: boolean;
            node_use_openssl: boolean;
            target_arch: string;
            v8_no_strict_aliasing: number;
            v8_use_snapshot: boolean;
            visibility: string;
        };
    };
    kill(pid: number, signal?: string): void;
    pid: number;
    title: string;
    arch: string;
    platform: string;
    memoryUsage(): { rss: number; heapTotal: number; heapUsed: number; };
    nextTick(callback: Function): void;
    umask(mask?: number): number;
    uptime(): number;
    hrtime(time?: number[]): number[];

    // Worker
    send? (message: any, sendHandle?: any): void;
}

// Buffer class
interface NodeBuffer {
    [index: number]: number;
    write(string: string, offset?: number, length?: number, encoding?: string): number;
    toString(encoding?: string, start?: number, end?: number): string;
    length: number;
    copy(targetBuffer: NodeBuffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
    slice(start?: number, end?: number): NodeBuffer;
    readUInt8(offset: number, noAsset?: boolean): number;
    readUInt16LE(offset: number, noAssert?: boolean): number;
    readUInt16BE(offset: number, noAssert?: boolean): number;
    readUInt32LE(offset: number, noAssert?: boolean): number;
    readUInt32BE(offset: number, noAssert?: boolean): number;
    readInt8(offset: number, noAssert?: boolean): number;
    readInt16LE(offset: number, noAssert?: boolean): number;
    readInt16BE(offset: number, noAssert?: boolean): number;
    readInt32LE(offset: number, noAssert?: boolean): number;
    readInt32BE(offset: number, noAssert?: boolean): number;
    readFloatLE(offset: number, noAssert?: boolean): number;
    readFloatBE(offset: number, noAssert?: boolean): number;
    readDoubleLE(offset: number, noAssert?: boolean): number;
    readDoubleBE(offset: number, noAssert?: boolean): number;
    writeUInt8(value: number, offset: number, noAssert?: boolean): void;
    writeUInt16LE(value: number, offset: number, noAssert?: boolean): void;
    writeUInt16BE(value: number, offset: number, noAssert?: boolean): void;
    writeUInt32LE(value: number, offset: number, noAssert?: boolean): void;
    writeUInt32BE(value: number, offset: number, noAssert?: boolean): void;
    writeInt8(value: number, offset: number, noAssert?: boolean): void;
    writeInt16LE(value: number, offset: number, noAssert?: boolean): void;
    writeInt16BE(value: number, offset: number, noAssert?: boolean): void;
    writeInt32LE(value: number, offset: number, noAssert?: boolean): void;
    writeInt32BE(value: number, offset: number, noAssert?: boolean): void;
    writeFloatLE(value: number, offset: number, noAssert?: boolean): void;
    writeFloatBE(value: number, offset: number, noAssert?: boolean): void;
    writeDoubleLE(value: number, offset: number, noAssert?: boolean): void;
    writeDoubleBE(value: number, offset: number, noAssert?: boolean): void;
    fill(value: any, offset?: number, end?: number): void;
}

interface NodeTimer {
    ref(): void;
    unref(): void;
}

/************************************************
*                                               *
*                   MODULES                     *
*                                               *
************************************************/
declare module "querystring" {
    export function stringify(obj: any, sep?: string, eq?: string): string;
    export function parse(str: string, sep?: string, eq?: string, options?: { maxKeys?: number; }): any;
    export function escape(): any;
    export function unescape(): any;
}

declare module "events" {
    export class EventEmitter implements NodeEventEmitter {
        static listenerCount(emitter: EventEmitter, event: string): number;

        addListener(event: string, listener: Function): EventEmitter;
        on(event: string, listener: Function): EventEmitter;
        once(event: string, listener: Function): EventEmitter;
        removeListener(event: string, listener: Function): EventEmitter;
        removeAllListeners(event?: string): EventEmitter;
        setMaxListeners(n: number): void;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
    }
}

declare module "http" {
    import events = require("events");
    import net = require("net");
    import stream = require("stream");

    export interface Server extends NodeEventEmitter {
        listen(port: number, hostname?: string, backlog?: number, callback?: Function): void;
        listen(path: string, callback?: Function): void;
        listen(handle: any, listeningListener?: Function): void;
        close(cb?: any): void;
        maxHeadersCount: number;
    }
    export interface ServerRequest extends NodeEventEmitter, ReadableStream {
        method: string;
        url: string;
        headers: any;
        trailers: string;
        httpVersion: string;
        setEncoding(encoding?: string): void;
        pause(): void;
        resume(): void;
        connection: net.NodeSocket;
    }
    export interface ServerResponse extends NodeEventEmitter, WritableStream {
        // Extended base methods
        write(buffer: NodeBuffer): boolean;
        write(buffer: NodeBuffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;

        writeContinue(): void;
        writeHead(statusCode: number, reasonPhrase?: string, headers?: any): void;
        writeHead(statusCode: number, headers?: any): void;
        statusCode: number;
        setHeader(name: string, value: string): void;
        sendDate: boolean;
        getHeader(name: string): string;
        removeHeader(name: string): void;
        write(chunk: any, encoding?: string): any;
        addTrailers(headers: any): void;

        // Extended base methods
        end(): void;
        end(buffer: NodeBuffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        end(data?: any, encoding?: string): void;
    }
    export interface ClientRequest extends NodeEventEmitter, WritableStream {
        // Extended base methods
        write(buffer: NodeBuffer): boolean;
        write(buffer: NodeBuffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;

        write(chunk: any, encoding?: string): void;
        abort(): void;
        setTimeout(timeout: number, callback?: Function): void;
        setNoDelay(noDelay?: Function): void;
        setSocketKeepAlive(enable?: boolean, initialDelay?: number): void;

        // Extended base methods
        end(): void;
        end(buffer: NodeBuffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        end(data?: any, encoding?: string): void;
    }
    export interface ClientResponse extends NodeEventEmitter, ReadableStream {
        statusCode: number;
        httpVersion: string;
        headers: any;
        trailers: any;
        setEncoding(encoding?: string): void;
        pause(): void;
        resume(): void;
    }
    export interface Agent { maxSockets: number; sockets: any; requests: any; }

    export var STATUS_CODES: any;
    export function createServer(requestListener?: (request: ServerRequest, response: ServerResponse) => void): Server;
    export function createClient(port?: number, host?: string): any;
    export function request(options: any, callback?: Function): ClientRequest;
    export function get(options: any, callback?: Function): ClientRequest;
    export var globalAgent: Agent;
}

declare module "cluster" {
    import child = require("child_process");
    import events = require("events");

    export interface ClusterSettings {
        exec?: string;
        args?: string[];
        silent?: boolean;
    }

    export class Worker extends events.EventEmitter {
        id: string;
        process: child.ChildProcess;
        suicide: boolean;
        send(message: any, sendHandle?: any): void;
        kill(signal?: string): void;
        destroy(signal?: string): void;
        disconnect(): void;
    }

    export var settings: ClusterSettings;
    export var isMaster: boolean;
    export var isWorker: boolean;
    export function setupMaster(settings?: ClusterSettings): void;
    export function fork(env?: any): Worker;
    export function disconnect(callback?: Function): void;
    export var worker: Worker;
    export var workers: Worker[];

    // Event emitter
    export function addListener(event: string, listener: Function): void;
    export function on(event: string, listener: Function): any;
    export function once(event: string, listener: Function): void;
    export function removeListener(event: string, listener: Function): void;
    export function removeAllListeners(event?: string): void;
    export function setMaxListeners(n: number): void;
    export function listeners(event: string): Function[];
    export function emit(event: string, ...args: any[]): boolean;
}

declare module "zlib" {
    import stream = require("stream");
    export interface ZlibOptions { chunkSize?: number; windowBits?: number; level?: number; memLevel?: number; strategy?: number; dictionary?: any; }

    export interface Gzip extends ReadWriteStream { }
    export interface Gunzip extends ReadWriteStream { }
    export interface Deflate extends ReadWriteStream { }
    export interface Inflate extends ReadWriteStream { }
    export interface DeflateRaw extends ReadWriteStream { }
    export interface InflateRaw extends ReadWriteStream { }
    export interface Unzip extends ReadWriteStream { }

    export function createGzip(options?: ZlibOptions): Gzip;
    export function createGunzip(options?: ZlibOptions): Gunzip;
    export function createDeflate(options?: ZlibOptions): Deflate;
    export function createInflate(options?: ZlibOptions): Inflate;
    export function createDeflateRaw(options?: ZlibOptions): DeflateRaw;
    export function createInflateRaw(options?: ZlibOptions): InflateRaw;
    export function createUnzip(options?: ZlibOptions): Unzip;

    export function deflate(buf: NodeBuffer, callback: (error: Error, result: any) => void): void;
    export function deflateRaw(buf: NodeBuffer, callback: (error: Error, result: any) => void): void;
    export function gzip(buf: NodeBuffer, callback: (error: Error, result: any) => void): void;
    export function gunzip(buf: NodeBuffer, callback: (error: Error, result: any) => void): void;
    export function inflate(buf: NodeBuffer, callback: (error: Error, result: any) => void): void;
    export function inflateRaw(buf: NodeBuffer, callback: (error: Error, result: any) => void): void;
    export function unzip(buf: NodeBuffer, callback: (error: Error, result: any) => void): void;

    // Constants
    export var Z_NO_FLUSH: number;
    export var Z_PARTIAL_FLUSH: number;
    export var Z_SYNC_FLUSH: number;
    export var Z_FULL_FLUSH: number;
    export var Z_FINISH: number;
    export var Z_BLOCK: number;
    export var Z_TREES: number;
    export var Z_OK: number;
    export var Z_STREAM_END: number;
    export var Z_NEED_DICT: number;
    export var Z_ERRNO: number;
    export var Z_STREAM_ERROR: number;
    export var Z_DATA_ERROR: number;
    export var Z_MEM_ERROR: number;
    export var Z_BUF_ERROR: number;
    export var Z_VERSION_ERROR: number;
    export var Z_NO_COMPRESSION: number;
    export var Z_BEST_SPEED: number;
    export var Z_BEST_COMPRESSION: number;
    export var Z_DEFAULT_COMPRESSION: number;
    export var Z_FILTERED: number;
    export var Z_HUFFMAN_ONLY: number;
    export var Z_RLE: number;
    export var Z_FIXED: number;
    export var Z_DEFAULT_STRATEGY: number;
    export var Z_BINARY: number;
    export var Z_TEXT: number;
    export var Z_ASCII: number;
    export var Z_UNKNOWN: number;
    export var Z_DEFLATED: number;
    export var Z_NULL: number;
}

declare module "os" {
    export function tmpDir(): string;
    export function hostname(): string;
    export function type(): string;
    export function platform(): string;
    export function arch(): string;
    export function release(): string;
    export function uptime(): number;
    export function loadavg(): number[];
    export function totalmem(): number;
    export function freemem(): number;
    export function cpus(): { model: string; speed: number; times: { user: number; nice: number; sys: number; idle: number; irq: number; }; }[];
    export function networkInterfaces(): any;
    export var EOL: string;
}

declare module "https" {
    import tls = require("tls");
    import events = require("events");
    import http = require("http");

    export interface ServerOptions {
        pfx?: any;
        key?: any;
        passphrase?: string;
        cert?: any;
        ca?: any;
        crl?: any;
        ciphers?: string;
        honorCipherOrder?: boolean;
        requestCert?: boolean;
        rejectUnauthorized?: boolean;
        NPNProtocols?: any;
        SNICallback?: (servername: string) => any;
    }

    export interface RequestOptions {
        host?: string;
        hostname?: string;
        port?: number;
        path?: string;
        method?: string;
        headers?: any;
        auth?: string;
        agent?: any;
        pfx?: any;
        key?: any;
        passphrase?: string;
        cert?: any;
        ca?: any;
        ciphers?: string;
        rejectUnauthorized?: boolean;
    }

    export interface NodeAgent {
        maxSockets: number;
        sockets: any;
        requests: any;
    }
    export var Agent: {
        new (options?: RequestOptions): NodeAgent;
    };
    export interface Server extends tls.Server { }
    export function createServer(options: ServerOptions, requestListener?: Function): Server;
    export function request(options: RequestOptions, callback?: (res: NodeEventEmitter) => void): http.ClientRequest;
    export function get(options: RequestOptions, callback?: (res: NodeEventEmitter) => void): http.ClientRequest;
    export var globalAgent: NodeAgent;
}

declare module "punycode" {
    export function decode(string: string): string;
    export function encode(string: string): string;
    export function toUnicode(domain: string): string;
    export function toASCII(domain: string): string;
    export var ucs2: ucs2;
    interface ucs2 {
        decode(string: string): string;
        encode(codePoints: number[]): string;
    }
    export var version: any;
}

declare module "repl" {
    import stream = require("stream");
    import events = require("events");

    export interface ReplOptions {
        prompt?: string;
        input?: ReadableStream;
        output?: WritableStream;
        terminal?: boolean;
        eval?: Function;
        useColors?: boolean;
        useGlobal?: boolean;
        ignoreUndefined?: boolean;
        writer?: Function;
    }
    export function start(options: ReplOptions): NodeEventEmitter;
}

declare module "readline" {
    import events = require("events");
    import stream = require("stream");

    export interface ReadLine extends NodeEventEmitter {
        setPrompt(prompt: string, length: number): void;
        prompt(preserveCursor?: boolean): void;
        question(query: string, callback: Function): void;
        pause(): void;
        resume(): void;
        close(): void;
        write(data: any, key?: any): void;
    }
    export interface ReadLineOptions {
        input: ReadableStream;
        output: WritableStream;
        completer?: Function;
        terminal?: boolean;
    }
    export function createInterface(options: ReadLineOptions): ReadLine;
}

declare module "vm" {
    export interface Context { }
    export interface Script {
        runInThisContext(): void;
        runInNewContext(sandbox?: Context): void;
    }
    export function runInThisContext(code: string, filename?: string): void;
    export function runInNewContext(code: string, sandbox?: Context, filename?: string): void;
    export function runInContext(code: string, context: Context, filename?: string): void;
    export function createContext(initSandbox?: Context): Context;
    export function createScript(code: string, filename?: string): Script;
}

declare module "child_process" {
    import events = require("events");
    import stream = require("stream");

    export interface ChildProcess extends NodeEventEmitter {
        stdin: WritableStream;
        stdout: ReadableStream;
        stderr: ReadableStream;
        pid: number;
        kill(signal?: string): void;
        send(message: any, sendHandle: any): void;
        disconnect(): void;
    }

    export function spawn(command: string, args?: string[], options?: {
        cwd?: string;
        stdio?: any;
        custom?: any;
        env?: any;
        detached?: boolean;
    }): ChildProcess;
    export function exec(command: string, options: {
        cwd?: string;
        stdio?: any;
        customFds?: any;
        env?: any;
        encoding?: string;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
    }, callback: (error: Error, stdout: NodeBuffer, stderr: NodeBuffer) => void): ChildProcess;
    export function exec(command: string, callback: (error: Error, stdout: NodeBuffer, stderr: NodeBuffer) => void): ChildProcess;
    export function execFile(file: string, args: string[], options: {
        cwd?: string;
        stdio?: any;
        customFds?: any;
        env?: any;
        encoding?: string;
        timeout?: number;
        maxBuffer?: string;
        killSignal?: string;
    }, callback: (error: Error, stdout: NodeBuffer, stderr: NodeBuffer) => void): ChildProcess;
    export function fork(modulePath: string, args?: string[], options?: {
        cwd?: string;
        env?: any;
        encoding?: string;
    }): ChildProcess;
}

declare module "url" {
    export interface Url {
        href: string;
        protocol: string;
        auth: string;
        hostname: string;
        port: string;
        host: string;
        pathname: string;
        search: string;
        query: string;
        slashes: boolean;
    }

    export interface UrlOptions {
        protocol?: string;
        auth?: string;
        hostname?: string;
        port?: string;
        host?: string;
        pathname?: string;
        search?: string;
        query?: any;
    }

    export function parse(urlStr: string, parseQueryString?: boolean, slashesDenoteHost?: boolean): Url;
    export function format(url: UrlOptions): string;
    export function resolve(from: string, to: string): string;
}

declare module "dns" {
    export function lookup(domain: string, family: number, callback: (err: Error, address: string, family: number) => void): string;
    export function lookup(domain: string, callback: (err: Error, address: string, family: number) => void): string;
    export function resolve(domain: string, rrtype: string, callback: (err: Error, addresses: string[]) => void): string[];
    export function resolve(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
    export function resolve4(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
    export function resolve6(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
    export function resolveMx(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
    export function resolveTxt(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
    export function resolveSrv(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
    export function resolveNs(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
    export function resolveCname(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
    export function reverse(ip: string, callback: (err: Error, domains: string[]) => void): string[];
}

declare module "net" {
    import stream = require("stream");

    export interface NodeSocket extends ReadWriteStream {
        // Extended base methods
        write(buffer: NodeBuffer): boolean;
        write(buffer: NodeBuffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;

        connect(port: number, host?: string, connectionListener?: Function): void;
        connect(path: string, connectionListener?: Function): void;
        bufferSize: number;
        setEncoding(encoding?: string): void;
        write(data: any, encoding?: string, callback?: Function): void;
        destroy(): void;
        pause(): void;
        resume(): void;
        setTimeout(timeout: number, callback?: Function): void;
        setNoDelay(noDelay?: boolean): void;
        setKeepAlive(enable?: boolean, initialDelay?: number): void;
        address(): { port: number; family: string; address: string; };
        remoteAddress: string;
        remotePort: number;
        bytesRead: number;
        bytesWritten: number;

        // Extended base methods
        end(): void;
        end(buffer: NodeBuffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        end(data?: any, encoding?: string): void;
    }

    export var Socket: {
        new (options?: { fd?: string; type?: string; allowHalfOpen?: boolean; }): NodeSocket;
    };

    export interface Server extends NodeSocket {
        listen(port: number, host?: string, backlog?: number, listeningListener?: Function): void;
        listen(path: string, listeningListener?: Function): void;
        listen(handle: any, listeningListener?: Function): void;
        close(callback?: Function): void;
        address(): { port: number; family: string; address: string; };
        maxConnections: number;
        connections: number;
    }
    export function createServer(connectionListener?: (socket: NodeSocket) => void): Server;
    export function createServer(options?: { allowHalfOpen?: boolean; }, connectionListener?: (socket: NodeSocket) => void): Server;
    export function connect(options: { allowHalfOpen?: boolean; }, connectionListener?: Function): NodeSocket;
    export function connect(port: number, host?: string, connectionListener?: Function): NodeSocket;
    export function connect(path: string, connectionListener?: Function): NodeSocket;
    export function createConnection(options: { allowHalfOpen?: boolean; }, connectionListener?: Function): NodeSocket;
    export function createConnection(port: number, host?: string, connectionListener?: Function): NodeSocket;
    export function createConnection(path: string, connectionListener?: Function): NodeSocket;
    export function isIP(input: string): number;
    export function isIPv4(input: string): boolean;
    export function isIPv6(input: string): boolean;
}

declare module "dgram" {
    import events = require("events");

    export function createSocket(type: string, callback?: Function): Socket;

    interface Socket extends NodeEventEmitter {
        send(buf: NodeBuffer, offset: number, length: number, port: number, address: string, callback?: Function): void;
        bind(port: number, address?: string): void;
        close(): void;
        address: { address: string; family: string; port: number; };
        setBroadcast(flag: boolean): void;
        setMulticastTTL(ttl: number): void;
        setMulticastLoopback(flag: boolean): void;
        addMembership(multicastAddress: string, multicastInterface?: string): void;
        dropMembership(multicastAddress: string, multicastInterface?: string): void;
    }
}

declare module "fs" {
    import stream = require("stream");

    interface Stats {
        isFile(): boolean;
        isDirectory(): boolean;
        isBlockDevice(): boolean;
        isCharacterDevice(): boolean;
        isSymbolicLink(): boolean;
        isFIFO(): boolean;
        isSocket(): boolean;
        dev: number;
        ino: number;
        mode: number;
        nlink: number;
        uid: number;
        gid: number;
        rdev: number;
        size: number;
        blksize: number;
        blocks: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }

    interface FSWatcher extends NodeEventEmitter {
        close(): void;
    }

    export interface ReadStream extends ReadableStream { }
    export interface WriteStream extends WritableStream { }

    export function rename(oldPath: string, newPath: string, callback?: (err?: ErrnoException) => void): void;
    export function renameSync(oldPath: string, newPath: string): void;
    export function truncate(path: string, callback?: (err?: ErrnoException) => void): void;
    export function truncate(path: string, len: number, callback?: (err?: ErrnoException) => void): void;
    export function truncateSync(path: string, len?: number): void;
    export function ftruncate(fd: number, callback?: (err?: ErrnoException) => void): void;
    export function ftruncate(fd: number, len: number, callback?: (err?: ErrnoException) => void): void;
    export function ftruncateSync(fd: number, len?: number): void;
    export function chown(path: string, uid: number, gid: number, callback?: (err?: ErrnoException) => void): void;
    export function chownSync(path: string, uid: number, gid: number): void;
    export function fchown(fd: number, uid: number, gid: number, callback?: (err?: ErrnoException) => void): void;
    export function fchownSync(fd: number, uid: number, gid: number): void;
    export function lchown(path: string, uid: number, gid: number, callback?: (err?: ErrnoException) => void): void;
    export function lchownSync(path: string, uid: number, gid: number): void;
    export function chmod(path: string, mode: number, callback?: (err?: ErrnoException) => void): void;
    export function chmod(path: string, mode: string, callback?: (err?: ErrnoException) => void): void;
    export function chmodSync(path: string, mode: number): void;
    export function chmodSync(path: string, mode: string): void;
    export function fchmod(fd: number, mode: number, callback?: (err?: ErrnoException) => void): void;
    export function fchmod(fd: number, mode: string, callback?: (err?: ErrnoException) => void): void;
    export function fchmodSync(fd: number, mode: number): void;
    export function fchmodSync(fd: number, mode: string): void;
    export function lchmod(path: string, mode: number, callback?: (err?: ErrnoException) => void): void;
    export function lchmod(path: string, mode: string, callback?: (err?: ErrnoException) => void): void;
    export function lchmodSync(path: string, mode: number): void;
    export function lchmodSync(path: string, mode: string): void;
    export function stat(path: string, callback?: (err: ErrnoException, stats: Stats) => any): void;
    export function lstat(path: string, callback?: (err: ErrnoException, stats: Stats) => any): void;
    export function fstat(fd: number, callback?: (err: ErrnoException, stats: Stats) => any): void;
    export function statSync(path: string): Stats;
    export function lstatSync(path: string): Stats;
    export function fstatSync(fd: number): Stats;
    export function link(srcpath: string, dstpath: string, callback?: (err?: ErrnoException) => void): void;
    export function linkSync(srcpath: string, dstpath: string): void;
    export function symlink(srcpath: string, dstpath: string, type?: string, callback?: (err?: ErrnoException) => void): void;
    export function symlinkSync(srcpath: string, dstpath: string, type?: string): void;
    export function readlink(path: string, callback?: (err: ErrnoException, linkString: string) => any): void;
    export function readlinkSync(path: string): string;
    export function realpath(path: string, callback?: (err: ErrnoException, resolvedPath: string) => any): void;
    export function realpath(path: string, cache: { [path: string]: string }, callback: (err: ErrnoException, resolvedPath: string) => any): void;
    export function realpathSync(path: string, cache?: { [path: string]: string }): void;
    export function unlink(path: string, callback?: (err?: ErrnoException) => void): void;
    export function unlinkSync(path: string): void;
    export function rmdir(path: string, callback?: (err?: ErrnoException) => void): void;
    export function rmdirSync(path: string): void;
    export function mkdir(path: string, callback?: (err?: ErrnoException) => void): void;
    export function mkdir(path: string, mode: number, callback?: (err?: ErrnoException) => void): void;
    export function mkdir(path: string, mode: string, callback?: (err?: ErrnoException) => void): void;
    export function mkdirSync(path: string, mode?: number): void;
    export function mkdirSync(path: string, mode?: string): void;
    export function readdir(path: string, callback?: (err: ErrnoException, files: string[]) => void): void;
    export function readdirSync(path: string): string[];
    export function close(fd: number, callback?: (err?: ErrnoException) => void): void;
    export function closeSync(fd: number): void;
    export function open(path: string, flags: string, callback?: (err: ErrnoException, fd: number) => any): void;
    export function open(path: string, flags: string, mode: number, callback?: (err: ErrnoException, fd: number) => any): void;
    export function open(path: string, flags: string, mode: string, callback?: (err: ErrnoException, fd: number) => any): void;
    export function openSync(path: string, flags: string, mode?: number): number;
    export function openSync(path: string, flags: string, mode?: string): number;
    export function utimes(path: string, atime: number, mtime: number, callback?: (err?: ErrnoException) => void): void;
    export function utimesSync(path: string, atime: number, mtime: number): void;
    export function futimes(fd: number, atime: number, mtime: number, callback?: (err?: ErrnoException) => void): void;
    export function futimesSync(fd: number, atime: number, mtime: number): void;
    export function fsync(fd: number, callback?: (err?: ErrnoException) => void): void;
    export function fsyncSync(fd: number): void;
    export function write(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number, callback?: (err: ErrnoException, written: number, buffer: NodeBuffer) => void): void;
    export function writeSync(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number): number;
    export function read(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number, callback?: (err: ErrnoException, bytesRead: number, buffer: NodeBuffer) => void): void;
    export function readSync(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number): number;
    export function readFile(filename: string, options: { encoding?: string; flag?: string; }, callback: (err: ErrnoException, data: any) => void): void;
    export function readFile(filename: string, callback: (err: ErrnoException, data: NodeBuffer) => void): void;
    export function readFileSync(filename: string, options?: { flag?: string; }): NodeBuffer;
    export function readFileSync(filename: string, options: { encoding: string; flag?: string; }): string;
    export function writeFile(filename: string, data: any, callback?: (err: ErrnoException) => void): void;
    export function writeFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: ErrnoException) => void): void;
    export function writeFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: ErrnoException) => void): void;
    export function writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
    export function writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
    export function appendFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: ErrnoException) => void): void;
    export function appendFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: ErrnoException) => void): void;
    export function appendFile(filename: string, data: any, callback?: (err: ErrnoException) => void): void;
    export function appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
    export function appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
    export function watchFile(filename: string, listener: (curr: Stats, prev: Stats) => void): void;
    export function watchFile(filename: string, options: { persistent?: boolean; interval?: number; }, listener: (curr: Stats, prev: Stats) => void): void;
    export function unwatchFile(filename: string, listener?: (curr: Stats, prev: Stats) => void): void;
    export function watch(filename: string, listener?: (event: string, filename: string) => any): FSWatcher;
    export function watch(filename: string, options: { persistent?: boolean; }, listener?: (event: string, filename: string) => any): FSWatcher;
    export function exists(path: string, callback?: (exists: boolean) => void): void;
    export function existsSync(path: string): boolean;
    export function createReadStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        fd?: string;
        mode?: number;
        bufferSize?: number;
    }): ReadStream;
    export function createReadStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        fd?: string;
        mode?: string;
        bufferSize?: number;
    }): ReadStream;
    export function createWriteStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        string?: string;
    }): WriteStream;
}

declare module "path" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export function resolve(...pathSegments: any[]): string;
    export function relative(from: string, to: string): string;
    export function dirname(p: string): string;
    export function basename(p: string, ext?: string): string;
    export function extname(p: string): string;
    export var sep: string;
}

declare module "string_decoder" {
    export interface NodeStringDecoder {
        write(buffer: NodeBuffer): string;
        detectIncompleteChar(buffer: NodeBuffer): number;
    }
    export var StringDecoder: {
        new (encoding: string): NodeStringDecoder;
    };
}

declare module "tls" {
    import crypto = require("crypto");
    import net = require("net");
    import stream = require("stream");

    var CLIENT_RENEG_LIMIT: number;
    var CLIENT_RENEG_WINDOW: number;

    export interface TlsOptions {
        pfx?: any;   //string or buffer
        key?: any;   //string or buffer
        passphrase?: string;
        cert?: any;
        ca?: any;    //string or buffer
        crl?: any;   //string or string array
        ciphers?: string;
        honorCipherOrder?: any;
        requestCert?: boolean;
        rejectUnauthorized?: boolean;
        NPNProtocols?: any;  //array or Buffer;
        SNICallback?: (servername: string) => any;
    }

    export interface ConnectionOptions {
        host?: string;
        port?: number;
        socket?: net.NodeSocket;
        pfx?: any;   //string | Buffer
        key?: any;   //string | Buffer
        passphrase?: string;
        cert?: any;  //string | Buffer
        ca?: any;    //Array of string | Buffer
        rejectUnauthorized?: boolean;
        NPNProtocols?: any;  //Array of string | Buffer
        servername?: string;
    }

    export interface Server extends net.Server {
        // Extended base methods
        listen(port: number, host?: string, backlog?: number, listeningListener?: Function): void;
        listen(path: string, listeningListener?: Function): void;
        listen(handle: any, listeningListener?: Function): void;

        listen(port: number, host?: string, callback?: Function): void;
        close(): void;
        address(): { port: number; family: string; address: string; };
        addContext(hostName: string, credentials: {
            key: string;
            cert: string;
            ca: string;
        }): void;
        maxConnections: number;
        connections: number;
    }

    export interface ClearTextStream extends ReadWriteStream {
        authorized: boolean;
        authorizationError: Error;
        getPeerCertificate(): any;
        getCipher: {
            name: string;
            version: string;
        };
        address: {
            port: number;
            family: string;
            address: string;
        };
        remoteAddress: string;
        remotePort: number;
    }

    export interface SecurePair {
        encrypted: any;
        cleartext: any;
    }

    export function createServer(options: TlsOptions, secureConnectionListener?: (cleartextStream: ClearTextStream) => void): Server;
    export function connect(options: TlsOptions, secureConnectionListener?: () => void): ClearTextStream;
    export function connect(port: number, host?: string, options?: ConnectionOptions, secureConnectListener?: () => void): ClearTextStream;
    export function connect(port: number, options?: ConnectionOptions, secureConnectListener?: () => void): ClearTextStream;
    export function createSecurePair(credentials?: crypto.Credentials, isServer?: boolean, requestCert?: boolean, rejectUnauthorized?: boolean): SecurePair;
}

declare module "crypto" {
    export interface CredentialDetails {
        pfx: string;
        key: string;
        passphrase: string;
        cert: string;
        ca: any;    //string | string array
        crl: any;   //string | string array
        ciphers: string;
    }
    export interface Credentials { context?: any; }
    export function createCredentials(details: CredentialDetails): Credentials;
    export function createHash(algorithm: string): Hash;
    export function createHmac(algorithm: string, key: string): Hmac;
    interface Hash {
        update(data: any, input_encoding?: string): Hash;
        digest(encoding?: string): string;
    }
    interface Hmac {
        update(data: any): void;
        digest(encoding?: string): void;
    }
    export function createCipher(algorithm: string, password: any): Cipher;
    export function createCipheriv(algorithm: string, key: any, iv: any): Cipher;
    interface Cipher {
        update(data: any, input_encoding?: string, output_encoding?: string): string;
        final(output_encoding?: string): string;
        setAutoPadding(auto_padding: boolean): void;
        createDecipher(algorithm: string, password: any): Decipher;
        createDecipheriv(algorithm: string, key: any, iv: any): Decipher;
    }
    interface Decipher {
        update(data: any, input_encoding?: string, output_encoding?: string): void;
        final(output_encoding?: string): string;
        setAutoPadding(auto_padding: boolean): void;
    }
    export function createSign(algorithm: string): Signer;
    interface Signer {
        update(data: any): void;
        sign(private_key: string, output_format: string): string;
    }
    export function createVerify(algorith: string): Verify;
    interface Verify {
        update(data: any): void;
        verify(object: string, signature: string, signature_format?: string): boolean;
    }
    export function createDiffieHellman(prime_length: number): DiffieHellman;
    export function createDiffieHellman(prime: number, encoding?: string): DiffieHellman;
    interface DiffieHellman {
        generateKeys(encoding?: string): string;
        computeSecret(other_public_key: string, input_encoding?: string, output_encoding?: string): string;
        getPrime(encoding?: string): string;
        getGenerator(encoding: string): string;
        getPublicKey(encoding?: string): string;
        getPrivateKey(encoding?: string): string;
        setPublicKey(public_key: string, encoding?: string): void;
        setPrivateKey(public_key: string, encoding?: string): void;
    }
    export function getDiffieHellman(group_name: string): DiffieHellman;
    export function pbkdf2(password: string, salt: string, iterations: number, keylen: number, callback: (err: Error, derivedKey: string) => any): void;
    export function randomBytes(size: number): NodeBuffer;
    export function randomBytes(size: number, callback: (err: Error, buf: NodeBuffer) => void): void;
    export function pseudoRandomBytes(size: number): NodeBuffer;
    export function pseudoRandomBytes(size: number, callback: (err: Error, buf: NodeBuffer) => void): void;
}

declare module "stream" {
    import events = require("events");

    export interface ReadableOptions {
        highWaterMark?: number;
        encoding?: string;
        objectMode?: boolean;
    }

    export class Readable extends events.EventEmitter implements ReadableStream {
        readable: boolean;
        constructor(opts?: ReadableOptions);
        _read(size: number): void;
        read(size?: number): any;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T extends WritableStream>(destination?: T): void;
        unshift(chunk: string): void;
        unshift(chunk: NodeBuffer): void;
        wrap(oldStream: ReadableStream): ReadableStream;
        push(chunk: any, encoding?: string): boolean;
    }

    export interface WritableOptions {
        highWaterMark?: number;
        decodeStrings?: boolean;
    }

    export class Writable extends events.EventEmitter implements WritableStream {
        writable: boolean;
        constructor(opts?: WritableOptions);
        _write(data: NodeBuffer, encoding: string, callback: Function): void;
        _write(data: string, encoding: string, callback: Function): void;
        write(buffer: NodeBuffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(buffer: NodeBuffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
    }

    export interface DuplexOptions extends ReadableOptions, WritableOptions {
        allowHalfOpen?: boolean;
    }

    // Note: Duplex extends both Readable and Writable.
    export class Duplex extends Readable implements ReadWriteStream {
        writable: boolean;
        constructor(opts?: DuplexOptions);
        _write(data: NodeBuffer, encoding: string, callback: Function): void;
        _write(data: string, encoding: string, callback: Function): void;
        write(buffer: NodeBuffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(buffer: NodeBuffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
    }

    export interface TransformOptions extends ReadableOptions, WritableOptions { }

    // Note: Transform lacks the _read and _write methods of Readable/Writable.
    export class Transform extends events.EventEmitter implements ReadWriteStream {
        readable: boolean;
        writable: boolean;
        constructor(opts?: TransformOptions);
        _transform(chunk: NodeBuffer, encoding: string, callback: Function): void;
        _transform(chunk: string, encoding: string, callback: Function): void;
        _flush(callback: Function): void;
        read(size?: number): any;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T extends WritableStream>(destination?: T): void;
        unshift(chunk: string): void;
        unshift(chunk: NodeBuffer): void;
        wrap(oldStream: ReadableStream): ReadableStream;
        push(chunk: any, encoding?: string): boolean;
        write(buffer: NodeBuffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(buffer: NodeBuffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
    }

    export class PassThrough extends Transform { }
}

declare module "util" {
    export interface InspectOptions {
        showHidden?: boolean;
        depth?: number;
        colors?: boolean;
        customInspect?: boolean;
    }

    export function format(format: any, ...param: any[]): string;
    export function debug(string: string): void;
    export function error(...param: any[]): void;
    export function puts(...param: any[]): void;
    export function print(...param: any[]): void;
    export function log(string: string): void;
    export function inspect(object: any, showHidden?: boolean, depth?: number, color?: boolean): string;
    export function inspect(object: any, options: InspectOptions): string;
    export function isArray(object: any): boolean;
    export function isRegExp(object: any): boolean;
    export function isDate(object: any): boolean;
    export function isError(object: any): boolean;
    export function inherits(constructor: any, superConstructor: any): void;
}

declare module "assert" {
    function internal(value: any, message?: string): void;
    module internal {
        export class AssertionError implements Error {
            name: string;
            message: string;
            actual: any;
            expected: any;
            operator: string;
            generatedMessage: boolean;

            constructor(options?: {
                message?: string; actual?: any; expected?: any;
                operator?: string; stackStartFunction?: Function
            });
        }

        export function fail(actual?: any, expected?: any, message?: string, operator?: string): void;
        export function ok(value: any, message?: string): void;
        export function equal(actual: any, expected: any, message?: string): void;
        export function notEqual(actual: any, expected: any, message?: string): void;
        export function deepEqual(actual: any, expected: any, message?: string): void;
        export function notDeepEqual(acutal: any, expected: any, message?: string): void;
        export function strictEqual(actual: any, expected: any, message?: string): void;
        export function notStrictEqual(actual: any, expected: any, message?: string): void;
        export var throws: {
            (block: Function, message?: string): void;
            (block: Function, error: Function, message?: string): void;
            (block: Function, error: RegExp, message?: string): void;
            (block: Function, error: (err: any) => boolean, message?: string): void;
        }

        export var doesNotThrow: {
            (block: Function, message?: string): void;
            (block: Function, error: Function, message?: string): void;
            (block: Function, error: RegExp, message?: string): void;
            (block: Function, error: (err: any) => boolean, message?: string): void;
        }

        export function ifError(value: any): void;
    }

    export = internal;
}

declare module "tty" {
    import net = require("net");

    export function isatty(fd: number): boolean;
    export interface ReadStream extends net.NodeSocket {
        isRaw: boolean;
        setRawMode(mode: boolean): void;
    }
    export interface WriteStream extends net.NodeSocket {
        columns: number;
        rows: number;
    }
}

declare module "domain" {
    import events = require("events");

    export class Domain extends events.EventEmitter {
        run(fn: Function): void;
        add(emitter: NodeEventEmitter): void;
        remove(emitter: NodeEventEmitter): void;
        bind(cb: (err: Error, data: any) => any): any;
        intercept(cb: (data: any) => any): any;
        dispose(): void;

        addListener(event: string, listener: Function): Domain;
        on(event: string, listener: Function): Domain;
        once(event: string, listener: Function): Domain;
        removeListener(event: string, listener: Function): Domain;
        removeAllListeners(event?: string): Domain;
    }

    export function create(): Domain;
}

// Type definitions for Express 3.1
// Project: http://expressjs.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/* =================== USAGE =================== 

    import express = require('express');
    var app = express();

 =============================================== */

/// <reference path="../node/node.d.ts" />


declare module Express {

    // These open interfaces may be extended in an application-specific manner via declaration merging.
    // See for example passport.d.ts (https://github.com/borisyankov/DefinitelyTyped/blob/master/passport/passport.d.ts)
    export interface Request { }
    export interface Response { }
    export interface Application { }
}


declare module "express" {
    import http = require('http');

    // Merged declaration, e is both a callable function and a namespace
    function e(): e.Express;

    module e {
        interface IRoute {
            path: string;

            method: string;

            callbacks: Function[];

            regexp: any;

            /**
            * Check if this route matches `path`, if so
            * populate `.params`.
            */
            match(path: string): boolean;
        }

        class Route implements IRoute {
            path: string;

            method: string;

            callbacks: Function[];

            regexp: any;
            match(path: string): boolean;

            /**
             * Initialize `Route` with the given HTTP `method`, `path`,
             * and an array of `callbacks` and `options`.
             *
             * Options:
             *
             *   - `sensitive`    enable case-sensitive routes
             *   - `strict`       enable strict matching for trailing slashes
             *
             * @param method
             * @param path
             * @param callbacks
             * @param options
             */
            new(method: string, path: string, callbacks: Function[], options: any): Route;
        }

        interface IRouter<T> {
            /**
             * Map the given param placeholder `name`(s) to the given callback(s).
             *
             * Parameter mapping is used to provide pre-conditions to routes
             * which use normalized placeholders. For example a _:user_id_ parameter
             * could automatically load a user's information from the database without
             * any additional code,
             *
             * The callback uses the samesignature as middleware, the only differencing
             * being that the value of the placeholder is passed, in this case the _id_
             * of the user. Once the `next()` function is invoked, just like middleware
             * it will continue on to execute the route, or subsequent parameter functions.
             *
             *      app.param('user_id', function(req, res, next, id){
             *        User.find(id, function(err, user){
             *          if (err) {
             *            next(err);
             *          } else if (user) {
             *            req.user = user;
             *            next();
             *          } else {
             *            next(new Error('failed to load user'));
             *          }
             *        });
             *      });
             *
             * @param name
             * @param fn
             */
            param(name: string, fn: Function): T;

            param(name: string[], fn: Function): T;

            /**
             * Special-cased "all" method, applying the given route `path`,
             * middleware, and callback to _every_ HTTP method.
             *
             * @param path
             * @param fn
             */
            all(path: string, fn?: (req: Request, res: Response, next: Function) => any): T;

            all(path: string, ...callbacks: Function[]): void;

            get(name: string, ...handlers: RequestFunction[]): T;

            get(name: RegExp, ...handlers: RequestFunction[]): T;

            post(name: string, ...handlers: RequestFunction[]): T;

            post(name: RegExp, ...handlers: RequestFunction[]): T;

            put(name: string, ...handlers: RequestFunction[]): T;

            put(name: RegExp, ...handlers: RequestFunction[]): T;

            del(name: string, ...handlers: RequestFunction[]): T;

            del(name: RegExp, ...handlers: RequestFunction[]): T;

            patch(name: string, ...handlers: RequestFunction[]): T;

            patch(name: RegExp, ...handlers: RequestFunction[]): T;
        }

        export class Router implements IRouter<Router> {
            new(options?: any): Router;

            middleware(): any;

            param(name: string, fn: Function): Router;

            param(name: any[], fn: Function): Router;

            all(path: string, fn?: (req: Request, res: Response, next: Function) => any): Router;

            all(path: string, ...callbacks: Function[]): void;

            get(name: string, ...handlers: RequestFunction[]): Router;

            get(name: RegExp, ...handlers: RequestFunction[]): Router;

            post(name: string, ...handlers: RequestFunction[]): Router;

            post(name: RegExp, ...handlers: RequestFunction[]): Router;

            put(name: string, ...handlers: RequestFunction[]): Router;

            put(name: RegExp, ...handlers: RequestFunction[]): Router;

            del(name: string, ...handlers: RequestFunction[]): Router;

            del(name: RegExp, ...handlers: RequestFunction[]): Router;

            patch(name: string, ...handlers: RequestFunction[]): Router;

            patch(name: RegExp, ...handlers: RequestFunction[]): Router;
        }

        interface Handler {
            (req: Request, res: Response, next?: Function): void;
        }

        interface CookieOptions {
            maxAge?: number;
            signed?: boolean;
            expires?: Date;
            httpOnly?: boolean;
            path?: string;
            domain?: string;
            secure?: boolean;
        }

        interface Errback { (err: Error): void; }

        interface Session {
            /**
             * Update reset `.cookie.maxAge` to prevent
             * the cookie from expiring when the
             * session is still active.
             *
             * @return {Session} for chaining
             * @api public
             */
            touch(): Session;

            /**
             * Reset `.maxAge` to `.originalMaxAge`.
             */
            resetMaxAge(): Session;

            /**
             * Save the session data with optional callback `fn(err)`.
             */
            save(fn: Function): Session;

            /**
             * Re-loads the session data _without_ altering
             * the maxAge properties. Invokes the callback `fn(err)`,
             * after which time if no exception has occurred the
             * `req.session` property will be a new `Session` object,
             * although representing the same session.
             */
            reload(fn: Function): Session;

            /**
             * Destroy `this` session.
             */
            destroy(fn: Function): Session;

            /**
             * Regenerate this request's session.
             */
            regenerate(fn: Function): Session;

            user: any;

            error: string;

            success: string;

            views: any;

            count: number;
        }

        interface Request extends http.ServerRequest, Express.Request {

            session: Session;

            /**
             * Return request header.
             *
             * The `Referrer` header field is special-cased,
             * both `Referrer` and `Referer` are interchangeable.
             *
             * Examples:
             *
             *     req.get('Content-Type');
             *     // => "text/plain"
             *
             *     req.get('content-type');
             *     // => "text/plain"
             *
             *     req.get('Something');
             *     // => undefined
             *
             * Aliased as `req.header()`.
             *
             * @param name
             */
            get(name: string): string;

            header(name: string): string;

            headers: { [key: string]: string; };

            /**
             * Check if the given `type(s)` is acceptable, returning
             * the best match when true, otherwise `undefined`, in which
             * case you should respond with 406 "Not Acceptable".
             *
             * The `type` value may be a single mime type string
             * such as "application/json", the extension name
             * such as "json", a comma-delimted list such as "json, html, text/plain",
             * or an array `["json", "html", "text/plain"]`. When a list
             * or array is given the _best_ match, if any is returned.
             *
             * Examples:
             *
             *     // Accept: text/html
             *     req.accepts('html');
             *     // => "html"
             *
             *     // Accept: text/*, application/json
             *     req.accepts('html');
             *     // => "html"
             *     req.accepts('text/html');
             *     // => "text/html"
             *     req.accepts('json, text');
             *     // => "json"
             *     req.accepts('application/json');
             *     // => "application/json"
             *
             *     // Accept: text/*, application/json
             *     req.accepts('image/png');
             *     req.accepts('png');
             *     // => undefined
             *
             *     // Accept: text/*;q=.5, application/json
             *     req.accepts(['html', 'json']);
             *     req.accepts('html, json');
             *     // => "json"
             */
            accepts(type: string): string;

            accepts(type: string[]): string;

            /**
             * Check if the given `charset` is acceptable,
             * otherwise you should respond with 406 "Not Acceptable".
             *
             * @param charset
             */
            acceptsCharset(charset: string): boolean;

            /**
             * Check if the given `lang` is acceptable,
             * otherwise you should respond with 406 "Not Acceptable".
             *
             * @param lang
             */
            acceptsLanguage(lang: string): boolean;

            /**
             * Parse Range header field,
             * capping to the given `size`.
             *
             * Unspecified ranges such as "0-" require
             * knowledge of your resource length. In
             * the case of a byte range this is of course
             * the total number of bytes. If the Range
             * header field is not given `null` is returned,
             * `-1` when unsatisfiable, `-2` when syntactically invalid.
             *
             * NOTE: remember that ranges are inclusive, so
             * for example "Range: users=0-3" should respond
             * with 4 users when available, not 3.
             *
             * @param size
             */
            range(size: number): any[];

            /**
             * Return an array of Accepted media types
             * ordered from highest quality to lowest.
             */
            accepted: MediaType[];

            /**
             * Return an array of Accepted languages
             * ordered from highest quality to lowest.
             *
             * Examples:
             *
             *     Accept-Language: en;q=.5, en-us
             *     ['en-us', 'en']
             */
            acceptedLanguages: any[];

            /**
             * Return an array of Accepted charsets
             * ordered from highest quality to lowest.
             *
             * Examples:
             *
             *     Accept-Charset: iso-8859-5;q=.2, unicode-1-1;q=0.8
             *     ['unicode-1-1', 'iso-8859-5']
             */
            acceptedCharsets: any[];

            /**
             * Return the value of param `name` when present or `defaultValue`.
             *
             *  - Checks route placeholders, ex: _/user/:id_
             *  - Checks body params, ex: id=12, {"id":12}
             *  - Checks query string params, ex: ?id=12
             *
             * To utilize request bodies, `req.body`
             * should be an object. This can be done by using
             * the `connect.bodyParser()` middleware.
             *
             * @param name
             * @param defaultValue
             */
            param(name: string, defaultValue?: any): string;

            /**
             * Check if the incoming request contains the "Content-Type"
             * header field, and it contains the give mime `type`.
             *
             * Examples:
             *
             *      // With Content-Type: text/html; charset=utf-8
             *      req.is('html');
             *      req.is('text/html');
             *      req.is('text/*');
             *      // => true
             *
             *      // When Content-Type is application/json
             *      req.is('json');
             *      req.is('application/json');
             *      req.is('application/*');
             *      // => true
             *
             *      req.is('html');
             *      // => false
             *
             * @param type
             */
            is(type: string): boolean;

            /**
             * Return the protocol string "http" or "https"
             * when requested with TLS. When the "trust proxy"
             * setting is enabled the "X-Forwarded-Proto" header
             * field will be trusted. If you're running behind
             * a reverse proxy that supplies https for you this
             * may be enabled.
             */
            protocol: string;

            /**
             * Short-hand for:
             *
             *    req.protocol == 'https'
             */
            secure: boolean;

            /**
             * Return the remote address, or when
             * "trust proxy" is `true` return
             * the upstream addr.
             */
            ip: string;

            /**
             * When "trust proxy" is `true`, parse
             * the "X-Forwarded-For" ip address list.
             *
             * For example if the value were "client, proxy1, proxy2"
             * you would receive the array `["client", "proxy1", "proxy2"]`
             * where "proxy2" is the furthest down-stream.
             */
            ips: string[];

            /**
             * Return basic auth credentials.
             *
             * Examples:
             *
             *    // http://tobi:hello@example.com
             *    req.auth
             *    // => { username: 'tobi', password: 'hello' }
             */
            auth: any;

            /**
             * Return subdomains as an array.
             *
             * Subdomains are the dot-separated parts of the host before the main domain of
             * the app. By default, the domain of the app is assumed to be the last two
             * parts of the host. This can be changed by setting "subdomain offset".
             *
             * For example, if the domain is "tobi.ferrets.example.com":
             * If "subdomain offset" is not set, req.subdomains is `["ferrets", "tobi"]`.
             * If "subdomain offset" is 3, req.subdomains is `["tobi"]`.
             */
            subdomains: string[];

            /**
             * Short-hand for `url.parse(req.url).pathname`.
             */
            path: string;

            /**
             * Parse the "Host" header field hostname.
             */
            host: string;

            /**
             * Check if the request is fresh, aka
             * Last-Modified and/or the ETag
             * still match.
             */
            fresh: boolean;

            /**
             * Check if the request is stale, aka
             * "Last-Modified" and / or the "ETag" for the
             * resource has changed.
             */
            stale: boolean;

            /**
             * Check if the request was an _XMLHttpRequest_.
             */
            xhr: boolean;

            //body: { username: string; password: string; remember: boolean; title: string; };
            body: any;

            //cookies: { string; remember: boolean; };
            cookies: any;

            /**
             * Used to generate an anti-CSRF token.
             * Placed by the CSRF protection middleware.
             */
            csrfToken(): string;

            method: string;

            params: any;

            user: any;

            authenticatedUser: any;

            files: any;

            /**
             * Clear cookie `name`.
             *
             * @param name
             * @param options
             */
            clearCookie(name: string, options?: any): Response;

            query: any;

            route: any;

            signedCookies: any;

            originalUrl: string;

            url: string;
        }

        interface MediaType {
            value: string;
            quality: number;
            type: string;
            subtype: string;
        }

        interface Send {
            (status: number, body?: any): Response;
            (body: any): Response;
        }

        interface Response extends http.ServerResponse, Express.Response {
            /**
             * Set status `code`.
             *
             * @param code
             */
            status(code: number): Response;

            /**
             * Set Link header field with the given `links`.
             *
             * Examples:
             *
             *    res.links({
             *      next: 'http://api.example.com/users?page=2',
             *      last: 'http://api.example.com/users?page=5'
             *    });
             *
             * @param links
             */
            links(links: any): Response;

            /**
             * Send a response.
             *
             * Examples:
             *
             *     res.send(new Buffer('wahoo'));
             *     res.send({ some: 'json' });
             *     res.send('<p>some html</p>');
             *     res.send(404, 'Sorry, cant find that');
             *     res.send(404);
             */
            send: Send;

            /**
             * Send JSON response.
             *
             * Examples:
             *
             *     res.json(null);
             *     res.json({ user: 'tj' });
             *     res.json(500, 'oh noes!');
             *     res.json(404, 'I dont have that');
             */
            json: Send;

            /**
             * Send JSON response with JSONP callback support.
             *
             * Examples:
             *
             *     res.jsonp(null);
             *     res.jsonp({ user: 'tj' });
             *     res.jsonp(500, 'oh noes!');
             *     res.jsonp(404, 'I dont have that');
             */
            jsonp: Send;

            /**
             * Transfer the file at the given `path`.
             *
             * Automatically sets the _Content-Type_ response header field.
             * The callback `fn(err)` is invoked when the transfer is complete
             * or when an error occurs. Be sure to check `res.sentHeader`
             * if you wish to attempt responding, as the header and some data
             * may have already been transferred.
             *
             * Options:
             *
             *   - `maxAge` defaulting to 0
             *   - `root`   root directory for relative filenames
             *
             * Examples:
             *
             *  The following example illustrates how `res.sendfile()` may
             *  be used as an alternative for the `static()` middleware for
             *  dynamic situations. The code backing `res.sendfile()` is actually
             *  the same code, so HTTP cache support etc is identical.
             *
             *     app.get('/user/:uid/photos/:file', function(req, res){
             *       var uid = req.params.uid
             *         , file = req.params.file;
             *
             *       req.user.mayViewFilesFrom(uid, function(yes){
             *         if (yes) {
             *           res.sendfile('/uploads/' + uid + '/' + file);
             *         } else {
             *           res.send(403, 'Sorry! you cant see that.');
             *         }
             *       });
             *     });
             */
            sendfile(path: string): void;

            sendfile(path: string, options: any): void;

            sendfile(path: string, fn: Errback): void;

            sendfile(path: string, options: any, fn: Errback): void;

            /**
             * Transfer the file at the given `path` as an attachment.
             *
             * Optionally providing an alternate attachment `filename`,
             * and optional callback `fn(err)`. The callback is invoked
             * when the data transfer is complete, or when an error has
             * ocurred. Be sure to check `res.headerSent` if you plan to respond.
             *
             * This method uses `res.sendfile()`.
             */
            download(path: string): void;

            download(path: string, filename: string): void;

            download(path: string, fn: Errback): void;

            download(path: string, filename: string, fn: Errback): void;

            /**
             * Set _Content-Type_ response header with `type` through `mime.lookup()`
             * when it does not contain "/", or set the Content-Type to `type` otherwise.
             *
             * Examples:
             *
             *     res.type('.html');
             *     res.type('html');
             *     res.type('json');
             *     res.type('application/json');
             *     res.type('png');
             *
             * @param type
             */
            contentType(type: string): Response;

            /**
             * Set _Content-Type_ response header with `type` through `mime.lookup()`
             * when it does not contain "/", or set the Content-Type to `type` otherwise.
             *
             * Examples:
             *
             *     res.type('.html');
             *     res.type('html');
             *     res.type('json');
             *     res.type('application/json');
             *     res.type('png');
             *
             * @param type
             */
            type(type: string): Response;

            /**
             * Respond to the Acceptable formats using an `obj`
             * of mime-type callbacks.
             *
             * This method uses `req.accepted`, an array of
             * acceptable types ordered by their quality values.
             * When "Accept" is not present the _first_ callback
             * is invoked, otherwise the first match is used. When
             * no match is performed the server responds with
             * 406 "Not Acceptable".
             *
             * Content-Type is set for you, however if you choose
             * you may alter this within the callback using `res.type()`
             * or `res.set('Content-Type', ...)`.
             *
             *    res.format({
             *      'text/plain': function(){
             *        res.send('hey');
             *      },
             *
             *      'text/html': function(){
             *        res.send('<p>hey</p>');
             *      },
             *
             *      'appliation/json': function(){
             *        res.send({ message: 'hey' });
             *      }
             *    });
             *
             * In addition to canonicalized MIME types you may
             * also use extnames mapped to these types:
             *
             *    res.format({
             *      text: function(){
             *        res.send('hey');
             *      },
             *
             *      html: function(){
             *        res.send('<p>hey</p>');
             *      },
             *
             *      json: function(){
             *        res.send({ message: 'hey' });
             *      }
             *    });
             *
             * By default Express passes an `Error`
             * with a `.status` of 406 to `next(err)`
             * if a match is not made. If you provide
             * a `.default` callback it will be invoked
             * instead.
             *
             * @param obj
             */
            format(obj: any): Response;

            /**
             * Set _Content-Disposition_ header to _attachment_ with optional `filename`.
             *
             * @param filename
             */
            attachment(filename?: string): Response;

            /**
             * Set header `field` to `val`, or pass
             * an object of header fields.
             *
             * Examples:
             *
             *    res.set('Foo', ['bar', 'baz']);
             *    res.set('Accept', 'application/json');
             *    res.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
             *
             * Aliased as `res.header()`.
             */
            set(field: any): Response;

            set(field: string, value?: string): Response;

            header(field: any): Response;

            header(field: string, value?: string): Response;

            /**
             * Get value for header `field`.
             *
             * @param field
             */
            get(field: string): string;

            /**
             * Clear cookie `name`.
             *
             * @param name
             * @param options
             */
            clearCookie(name: string, options?: any): Response;

            /**
             * Set cookie `name` to `val`, with the given `options`.
             *
             * Options:
             *
             *    - `maxAge`   max-age in milliseconds, converted to `expires`
             *    - `signed`   sign the cookie
             *    - `path`     defaults to "/"
             *
             * Examples:
             *
             *    // "Remember Me" for 15 minutes
             *    res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
             *
             *    // save as above
             *    res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })
             */
            cookie(name: string, val: string, options: CookieOptions): Response;

            cookie(name: string, val: any, options: CookieOptions): Response;

            cookie(name: string, val: any): Response;

            /**
             * Set the location header to `url`.
             *
             * The given `url` can also be the name of a mapped url, for
             * example by default express supports "back" which redirects
             * to the _Referrer_ or _Referer_ headers or "/".
             *
             * Examples:
             *
             *    res.location('/foo/bar').;
             *    res.location('http://example.com');
             *    res.location('../login'); // /blog/post/1 -> /blog/login
             *
             * Mounting:
             *
             *   When an application is mounted and `res.location()`
             *   is given a path that does _not_ lead with "/" it becomes
             *   relative to the mount-point. For example if the application
             *   is mounted at "/blog", the following would become "/blog/login".
             *
             *      res.location('login');
             *
             *   While the leading slash would result in a location of "/login":
             *
             *      res.location('/login');
             *
             * @param url
             */
            location(url: string): Response;

            /**
             * Redirect to the given `url` with optional response `status`
             * defaulting to 302.
             *
             * The resulting `url` is determined by `res.location()`, so
             * it will play nicely with mounted apps, relative paths,
             * `"back"` etc.
             *
             * Examples:
             *
             *    res.redirect('/foo/bar');
             *    res.redirect('http://example.com');
             *    res.redirect(301, 'http://example.com');
             *    res.redirect('http://example.com', 301);
             *    res.redirect('../login'); // /blog/post/1 -> /blog/login
             */
            redirect(url: string): void;

            redirect(status: number, url: string): void;

            redirect(url: string, status: number): void;

            /**
             * Render `view` with the given `options` and optional callback `fn`.
             * When a callback function is given a response will _not_ be made
             * automatically, otherwise a response of _200_ and _text/html_ is given.
             *
             * Options:
             *
             *  - `cache`     boolean hinting to the engine it should cache
             *  - `filename`  filename of the view being rendered
             */

            render(view: string, options?: Object, callback?: (err: Error, html: string) => void): void;

            render(view: string, callback?: (err: Error, html: string) => void): void;

            locals: any;

            charset: string;
        }

        interface RequestFunction {
            (req: Request, res: Response, next: Function): any;
        }

        interface Application extends IRouter<Application>, Express.Application {
            /**
             * Initialize the server.
             *
             *   - setup default configuration
             *   - setup default middleware
             *   - setup route reflection methods
             */
            init(): void;

            /**
             * Initialize application configuration.
             */
            defaultConfiguration(): void;

            /**
             * Proxy `connect#use()` to apply settings to
             * mounted applications.
            **/
            use(route: string, callback?: Function): Application;

            use(route: string, server: Application): Application;

            use(callback: Function): Application;

            use(server: Application): Application;

            /**
             * Register the given template engine callback `fn`
             * as `ext`.
             *
             * By default will `require()` the engine based on the
             * file extension. For example if you try to render
             * a "foo.jade" file Express will invoke the following internally:
             *
             *     app.engine('jade', require('jade').__express);
             *
             * For engines that do not provide `.__express` out of the box,
             * or if you wish to "map" a different extension to the template engine
             * you may use this method. For example mapping the EJS template engine to
             * ".html" files:
             *
             *     app.engine('html', require('ejs').renderFile);
             *
             * In this case EJS provides a `.renderFile()` method with
             * the same signature that Express expects: `(path, options, callback)`,
             * though note that it aliases this method as `ejs.__express` internally
             * so if you're using ".ejs" extensions you dont need to do anything.
             *
             * Some template engines do not follow this convention, the
             * [Consolidate.js](https://github.com/visionmedia/consolidate.js)
             * library was created to map all of node's popular template
             * engines to follow this convention, thus allowing them to
             * work seamlessly within Express.
             */
            engine(ext: string, fn: Function): Application;

            param(name: string, fn: Function): Application;

            param(name: string[], fn: Function): Application;

            /**
             * Assign `setting` to `val`, or return `setting`'s value.
             *
             *    app.set('foo', 'bar');
             *    app.get('foo');
             *    // => "bar"
             *
             * Mounted servers inherit their parent server's settings.
             *
             * @param setting
             * @param val
             */
            set(setting: string, val: string): Application;

            get(name: string): string;

            get(name: string, ...handlers: RequestFunction[]): Application;

            get(name: RegExp, ...handlers: RequestFunction[]): Application;

            /**
             * Return the app's absolute pathname
             * based on the parent(s) that have
             * mounted it.
             *
             * For example if the application was
             * mounted as "/admin", which itself
             * was mounted as "/blog" then the
             * return value would be "/blog/admin".
             */
            path(): string;

            /**
             * Check if `setting` is enabled (truthy).
             *
             *    app.enabled('foo')
             *    // => false
             *
             *    app.enable('foo')
             *    app.enabled('foo')
             *    // => true
             */
            enabled(setting: string): boolean;

            /**
             * Check if `setting` is disabled.
             *
             *    app.disabled('foo')
             *    // => true
             *
             *    app.enable('foo')
             *    app.disabled('foo')
             *    // => false
             *
             * @param setting
             */
            disabled(setting: string): boolean;

            /**
             * Enable `setting`.
             *
             * @param setting
             */
            enable(setting: string): Application;

            /**
             * Disable `setting`.
             *
             * @param setting
             */
            disable(setting: string): Application;

            /**
             * Configure callback for zero or more envs,
             * when no `env` is specified that callback will
             * be invoked for all environments. Any combination
             * can be used multiple times, in any order desired.
             *
             * Examples:
             *
             *    app.configure(function(){
             *      // executed for all envs
             *    });
             *
             *    app.configure('stage', function(){
             *      // executed staging env
             *    });
             *
             *    app.configure('stage', 'production', function(){
             *      // executed for stage and production
             *    });
             *
             * Note:
             *
             *  These callbacks are invoked immediately, and
             *  are effectively sugar for the following:
             *
             *     var env = process.env.NODE_ENV || 'development';
             *
             *      switch (env) {
             *        case 'development':
             *          ...
             *          break;
             *        case 'stage':
             *          ...
             *          break;
             *        case 'production':
             *          ...
             *          break;
             *      }
             *
             * @param env
             * @param fn
             */
            configure(env: string, fn: Function): Application;

            configure(env0: string, env1: string, fn: Function): Application;

            configure(env0: string, env1: string, env2: string, fn: Function): Application;

            configure(env0: string, env1: string, env2: string, env3: string, fn: Function): Application;

            configure(env0: string, env1: string, env2: string, env3: string, env4: string, fn: Function): Application;

            configure(fn: Function): Application;


            /**
             * Render the given view `name` name with `options`
             * and a callback accepting an error and the
             * rendered template string.
             *
             * Example:
             *
             *    app.render('email', { name: 'Tobi' }, function(err, html){
             *      // ...
             *    })
             *
             * @param name
             * @param options or fn
             * @param fn
             */
            render(name: string, options?: Object, callback?: (err: Error, html: string) => void): void;

            render(name: string, callback: (err: Error, html: string) => void): void;


            /**
             * Listen for connections.
             *
             * A node `http.Server` is returned, with this
             * application (which is a `Function`) as its
             * callback. If you wish to create both an HTTP
             * and HTTPS server you may do so with the "http"
             * and "https" modules as shown here:
             *
             *    var http = require('http')
             *      , https = require('https')
             *      , express = require('express')
             *      , app = express();
             *
             *    http.createServer(app).listen(80);
             *    https.createServer({ ... }, app).listen(443);
             */
            listen(port: number, hostname: string, backlog: number, callback?: Function): http.Server;

            listen(port: number, hostname: string, callback?: Function): http.Server;

            listen(port: number, callback?: Function): http.Server;

            listen(path: string, callback?: Function): http.Server;

            listen(handle: any, listeningListener?: Function): http.Server;

            route: IRoute;

            router: string;

            settings: any;

            resource: any;

            map: any;

            locals: any;

            /**
             * The app.routes object houses all of the routes defined mapped by the
             * associated HTTP verb. This object may be used for introspection
             * capabilities, for example Express uses this internally not only for
             * routing but to provide default OPTIONS behaviour unless app.options()
             * is used. Your application or framework may also remove routes by
             * simply by removing them from this object.
             */
            routes: any;
        }

        interface Express extends Application {
            /**
             * Framework version.
             */
            version: string;

            /**
             * Expose mime.
             */
            mime: string;

            (): Application;

            /**
            * Create an express application.
            */
            createApplication(): Application;

            createServer(): Application;

            application: any;

            request: Request;

            response: Response;
        }

        /**
         * Body parser:
         * 
         *   Parse request bodies, supports _application/json_,
         *   _application/x-www-form-urlencoded_, and _multipart/form-data_.
         *
         *   This is equivalent to: 
         *
         *     app.use(connect.json());
         *     app.use(connect.urlencoded());
         *     app.use(connect.multipart());
         *
         * Examples:
         *
         *      connect()
         *        .use(connect.bodyParser())
         *        .use(function(req, res) {
         *          res.end('viewing user ' + req.body.user.name);
         *        });
         *
         *      $ curl -d 'user[name]=tj' http://local/
         *      $ curl -d '{"user":{"name":"tj"}}' -H "Content-Type: application/json" http://local/
         *
         *  View [json](json.html), [urlencoded](urlencoded.html), and [multipart](multipart.html) for more info.
         *
         * @param options
         */
        function bodyParser(options?: any): Handler;

        /**
         * Error handler:
         *
         * Development error handler, providing stack traces
         * and error message responses for requests accepting text, html,
         * or json.
         *
         * Text:
         *
         *   By default, and when _text/plain_ is accepted a simple stack trace
         *   or error message will be returned.
         *
         * JSON:
         *
         *   When _application/json_ is accepted, connect will respond with
         *   an object in the form of `{ "error": error }`.
         *
         * HTML:
         *
         *   When accepted connect will output a nice html stack trace.
         */
        function errorHandler(opts?: any): Handler;

        /**
         * Method Override:
         * 
         * Provides faux HTTP method support.
         * 
         * Pass an optional `key` to use when checking for
         * a method override, othewise defaults to _\_method_.
         * The original method is available via `req.originalMethod`.
         *
         * @param key
         */
        function methodOverride(key?: string): Handler;

        /**
         * Cookie parser:
         *
         * Parse _Cookie_ header and populate `req.cookies`
         * with an object keyed by the cookie names. Optionally
         * you may enabled signed cookie support by passing
         * a `secret` string, which assigns `req.secret` so
         * it may be used by other middleware.
         *
         * Examples:
         *
         *     connect()
         *       .use(connect.cookieParser('optional secret string'))
         *       .use(function(req, res, next){
         *         res.end(JSON.stringify(req.cookies));
         *       })
         *
         * @param secret
         */
        function cookieParser(secret?: string): Handler;

        /**
         * Session:
         * 
         *   Setup session store with the given `options`.
         *
         *   Session data is _not_ saved in the cookie itself, however
         *   cookies are used, so we must use the [cookieParser()](cookieParser.html)
         *   middleware _before_ `session()`.
         *
         * Examples:
         *
         *     connect()
         *       .use(connect.cookieParser())
         *       .use(connect.session({ secret: 'keyboard cat', key: 'sid', cookie: { secure: true }}))
         *
         * Options:
         *
         *   - `key` cookie name defaulting to `connect.sid`
         *   - `store` session store instance
         *   - `secret` session cookie is signed with this secret to prevent tampering
         *   - `cookie` session cookie settings, defaulting to `{ path: '/', httpOnly: true, maxAge: null }`
         *   - `proxy` trust the reverse proxy when setting secure cookies (via "x-forwarded-proto")
         *
         * Cookie option:
         *
         *  By default `cookie.maxAge` is `null`, meaning no "expires" parameter is set
         *  so the cookie becomes a browser-session cookie. When the user closes the 
         *  browser the cookie (and session) will be removed.
         *
         * ## req.session
         *
         *  To store or access session data, simply use the request property `req.session`,
         *  which is (generally) serialized as JSON by the store, so nested objects 
         *  are typically fine. For example below is a user-specific view counter:
         *
         *       connect()
         *         .use(connect.favicon())
         *         .use(connect.cookieParser())
         *         .use(connect.session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
         *         .use(function(req, res, next){
         *           var sess = req.session;
         *           if (sess.views) {
         *             res.setHeader('Content-Type', 'text/html');
         *             res.write('<p>views: ' + sess.views + '</p>');
         *             res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>');
         *             res.end();
         *             sess.views++;
         *           } else {
         *             sess.views = 1;
         *             res.end('welcome to the session demo. refresh!');
         *           }
         *         }
         *       )).listen(3000);
         *
         * ## Session#regenerate()
         *
         *  To regenerate the session simply invoke the method, once complete
         *  a new SID and `Session` instance will be initialized at `req.session`.
         *
         *      req.session.regenerate(function(err){
         *        // will have a new session here
         *      });
         *
         * ## Session#destroy()
         *
         *  Destroys the session, removing `req.session`, will be re-generated next request.
         *
         *      req.session.destroy(function(err){
         *        // cannot access session here
         *      });
         * 
         * ## Session#reload()
         *
         *  Reloads the session data.
         *
         *      req.session.reload(function(err){
         *        // session updated
         *      });
         *
         * ## Session#save()
         *
         *  Save the session.
         *
         *      req.session.save(function(err){
         *        // session saved
         *      });
         *
         * ## Session#touch()
         *
         *   Updates the `.maxAge` property. Typically this is
         *   not necessary to call, as the session middleware does this for you.
         *
         * ## Session#cookie
         *
         *  Each session has a unique cookie object accompany it. This allows
         *  you to alter the session cookie per visitor. For example we can
         *  set `req.session.cookie.expires` to `false` to enable the cookie
         *  to remain for only the duration of the user-agent.
         *
         * ## Session#maxAge
         *
         *  Alternatively `req.session.cookie.maxAge` will return the time
         *  remaining in milliseconds, which we may also re-assign a new value
         *  to adjust the `.expires` property appropriately. The following
         *  are essentially equivalent
         *
         *     var hour = 3600000;
         *     req.session.cookie.expires = new Date(Date.now() + hour);
         *     req.session.cookie.maxAge = hour;
         *
         * For example when `maxAge` is set to `60000` (one minute), and 30 seconds
         * has elapsed it will return `30000` until the current request has completed,
         * at which time `req.session.touch()` is called to reset `req.session.maxAge`
         * to its original value.
         *
         *     req.session.cookie.maxAge;
         *     // => 30000
         *
         * Session Store Implementation:
         *
         * Every session store _must_ implement the following methods
         *
         *    - `.get(sid, callback)`
         *    - `.set(sid, session, callback)`
         *    - `.destroy(sid, callback)`
         *
         * Recommended methods include, but are not limited to:
         *
         *    - `.length(callback)`
         *    - `.clear(callback)`
         *
         * For an example implementation view the [connect-redis](http://github.com/visionmedia/connect-redis) repo.
         *
         * @param options
         */
        function session(options?: any): Handler;

        /**
         * Hash the given `sess` object omitting changes
         * to `.cookie`.
         *
         * @param sess
         */
        function hash(sess: string): string;

        /**
         * Static:
         *
         *   Static file server with the given `root` path.
         *
         * Examples:
         *
         *     var oneDay = 86400000;
         *
         *     connect()
         *       .use(connect.static(__dirname + '/public'))
         *
         *     connect()
         *       .use(connect.static(__dirname + '/public', { maxAge: oneDay }))
         *
         * Options:
         *
         *    - `maxAge`     Browser cache maxAge in milliseconds. defaults to 0
         *    - `hidden`     Allow transfer of hidden files. defaults to false
         *    - `redirect`   Redirect to trailing "/" when the pathname is a dir. defaults to true
         *
         * @param root
         * @param options
         */
        function static(root: string, options?: any): Handler;

        /**
         * Basic Auth:
         *
         * Enfore basic authentication by providing a `callback(user, pass)`,
         * which must return `true` in order to gain access. Alternatively an async
         * method is provided as well, invoking `callback(user, pass, callback)`. Populates
         * `req.user`. The final alternative is simply passing username / password
         * strings.
         *
         *  Simple username and password
         *
         *     connect(connect.basicAuth('username', 'password'));
         *
         *  Callback verification
         *
         *     connect()
         *       .use(connect.basicAuth(function(user, pass){
         *         return 'tj' == user & 'wahoo' == pass;
         *       }))
         *
         *  Async callback verification, accepting `fn(err, user)`.
         *
         *     connect()
         *       .use(connect.basicAuth(function(user, pass, fn){
         *         User.authenticate({ user: user, pass: pass }, fn);
         *       }))
         *
         * @param callback or username
         * @param realm
         */
        export function basicAuth(callback: (user: string, pass: string, fn: Function) => void, realm?: string): Handler;

        export function basicAuth(callback: (user: string, pass: string) => boolean, realm?: string): Handler;

        export function basicAuth(user: string, pass: string, realm?: string): Handler;

        /**
         * Compress:
         *
         * Compress response data with gzip/deflate.
         *
         * Filter:
         *
         *  A `filter` callback function may be passed to
         *  replace the default logic of:
         *
         *     exports.filter = function(req, res){
         *       return /json|text|javascript/.test(res.getHeader('Content-Type'));
         *     };
         *
         * Options:
         *
         *  All remaining options are passed to the gzip/deflate
         *  creation functions. Consult node's docs for additional details.
         *
         *   - `chunkSize` (default: 16*1024)
         *   - `windowBits`
         *   - `level`: 0-9 where 0 is no compression, and 9 is slow but best compression
         *   - `memLevel`: 1-9 low is slower but uses less memory, high is fast but uses more
         *   - `strategy`: compression strategy
         *
         * @param options
         */
        function compress(options?: any): Handler;

        /**
         * Cookie Session:
         *
         *   Cookie session middleware.
         *
         *      var app = connect();
         *      app.use(connect.cookieParser());
         *      app.use(connect.cookieSession({ secret: 'tobo!', cookie: { maxAge: 60 * 60 * 1000 }}));
         *
         * Options:
         *
         *   - `key` cookie name defaulting to `connect.sess`
         *   - `secret` prevents cookie tampering
         *   - `cookie` session cookie settings, defaulting to `{ path: '/', httpOnly: true, maxAge: null }`
         *   - `proxy` trust the reverse proxy when setting secure cookies (via "x-forwarded-proto")
         *
         * Clearing sessions:
         *
         *  To clear the session simply set its value to `null`,
         *  `cookieSession()` will then respond with a 1970 Set-Cookie.
         *
         *     req.session = null;
         *
         * @param options
         */
        function cookieSession(options?: any): Handler;

        /**
         * Anti CSRF:
         *
         * CSRF protection middleware.
         *
         * This middleware adds a `req.csrfToken()` function to make a token
         * which should be added to requests which mutate
         * state, within a hidden form field, query-string etc. This
         * token is validated against the visitor's session.
         *
         * The default `value` function checks `req.body` generated
         * by the `bodyParser()` middleware, `req.query` generated
         * by `query()`, and the "X-CSRF-Token" header field.
         *
         * This middleware requires session support, thus should be added
         * somewhere _below_ `session()` and `cookieParser()`.
         *
         * Options:
         *
         *    - `value` a function accepting the request, returning the token
         *
         * @param options
         */
        export function csrf(options?: { value?: Function }): Handler;

        /**
         * Directory:
         *
         * Serve directory listings with the given `root` path.
         *
         * Options:
         *
         *  - `hidden` display hidden (dot) files. Defaults to false.
         *  - `icons`  display icons. Defaults to false.
         *  - `filter` Apply this filter function to files. Defaults to false.
         *
         * @param root
         * @param options
         */
        function directory(root: string, options?: any): Handler;

        /**
         * Favicon:
         *
         * By default serves the connect favicon, or the favicon
         * located by the given `path`.
         *
         * Options:
         *
         *   - `maxAge`  cache-control max-age directive, defaulting to 1 day
         *
         * Examples:
         *
         *   Serve default favicon:
         *
         *     connect()
         *       .use(connect.favicon())
         *
         *   Serve favicon before logging for brevity:
         *
         *     connect()
         *       .use(connect.favicon())
         *       .use(connect.logger('dev'))
         *
         *   Serve custom favicon:
         *
         *     connect()
         *       .use(connect.favicon('public/favicon.ico))
         *
         * @param path
         * @param options
         */
        export function favicon(path?: string, options?: any): Handler;

        /**
         * JSON:
         *
         * Parse JSON request bodies, providing the
         * parsed object as `req.body`.
         *
         * Options:
         *
         *   - `strict`  when `false` anything `JSON.parse()` accepts will be parsed
         *   - `reviver`  used as the second "reviver" argument for JSON.parse
         *   - `limit`  byte limit disabled by default
         *
         * @param options
         */
        function json(options?: any): Handler;

        /**
         * Limit:
         *
         *   Limit request bodies to the given size in `bytes`.
         *
         *   A string representation of the bytesize may also be passed,
         *   for example "5mb", "200kb", "1gb", etc.
         *
         *     connect()
         *       .use(connect.limit('5.5mb'))
         *       .use(handleImageUpload)
         */
        function limit(bytes: number): Handler;

        function limit(bytes: string): Handler;

        /**
         * Logger:
         *
         * Log requests with the given `options` or a `format` string.
         *
         * Options:
         *
         *   - `format`  Format string, see below for tokens
         *   - `stream`  Output stream, defaults to _stdout_
         *   - `buffer`  Buffer duration, defaults to 1000ms when _true_
         *   - `immediate`  Write log line on request instead of response (for response times)
         *
         * Tokens:
         *
         *   - `:req[header]` ex: `:req[Accept]`
         *   - `:res[header]` ex: `:res[Content-Length]`
         *   - `:http-version`
         *   - `:response-time`
         *   - `:remote-addr`
         *   - `:date`
         *   - `:method`
         *   - `:url`
         *   - `:referrer`
         *   - `:user-agent`
         *   - `:status`
         *
         * Formats:
         *
         *   Pre-defined formats that ship with connect:
         *
         *    - `default` ':remote-addr - - [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
         *    - `short` ':remote-addr - :method :url HTTP/:http-version :status :res[content-length] - :response-time ms'
         *    - `tiny`  ':method :url :status :res[content-length] - :response-time ms'
         *    - `dev` concise output colored by response status for development use
         *
         * Examples:
         *
         *      connect.logger() // default
         *      connect.logger('short')
         *      connect.logger('tiny')
         *      connect.logger({ immediate: true, format: 'dev' })
         *      connect.logger(':method :url - :referrer')
         *      connect.logger(':req[content-type] -> :res[content-type]')
         *      connect.logger(function(tokens, req, res){ return 'some format string' })
         *
         * Defining Tokens:
         *
         *   To define a token, simply invoke `connect.logger.token()` with the
         *   name and a callback function. The value returned is then available
         *   as ":type" in this case.
         *
         *      connect.logger.token('type', function(req, res){ return req.headers['content-type']; })
         *
         * Defining Formats:
         *
         *   All default formats are defined this way, however it's public API as well:
         *
         *       connect.logger.format('name', 'string or function')
         */
        function logger(options: string): Handler;

        function logger(options: Function): Handler;

        function logger(options?: any): Handler;

        /**
         * Compile `fmt` into a function.
         *
         * @param fmt
         */
        function compile(fmt: string): Handler;

        /**
         * Define a token function with the given `name`,
         * and callback `fn(req, res)`.
         *
         * @param name
         * @param fn
         */
        function token(name: string, fn: Function): any;

        /**
         * Define a `fmt` with the given `name`.
         */
        function format(name: string, str: string): any;

        function format(name: string, str: Function): any;

        /**
         * Query:
         *
         * Automatically parse the query-string when available,
         * populating the `req.query` object.
         *
         * Examples:
         *
         *     connect()
         *       .use(connect.query())
         *       .use(function(req, res){
         *         res.end(JSON.stringify(req.query));
         *       });
         *
         *  The `options` passed are provided to qs.parse function.
         */
        function query(options: any): Handler;

        /**
         * Reponse time:
         *
         * Adds the `X-Response-Time` header displaying the response
         * duration in milliseconds.
         */
        function responseTime(): Handler;

        /**
         * Static cache:
         *
         * Enables a memory cache layer on top of
         * the `static()` middleware, serving popular
         * static files.
         *
         * By default a maximum of 128 objects are
         * held in cache, with a max of 256k each,
         * totalling ~32mb.
         *
         * A Least-Recently-Used (LRU) cache algo
         * is implemented through the `Cache` object,
         * simply rotating cache objects as they are
         * hit. This means that increasingly popular
         * objects maintain their positions while
         * others get shoved out of the stack and
         * garbage collected.
         *
         * Benchmarks:
         *
         *     static(): 2700 rps
         *     node-static: 5300 rps
         *     static() + staticCache(): 7500 rps
         *
         * Options:
         *
         *   - `maxObjects`  max cache objects [128]
         *   - `maxLength`  max cache object length 256kb
         */
        function staticCache(options: any): Handler;

        /**
         * Timeout:
         *
         * Times out the request in `ms`, defaulting to `5000`. The
         * method `req.clearTimeout()` is added to revert this behaviour
         * programmatically within your application's middleware, routes, etc.
         *
         * The timeout error is passed to `next()` so that you may customize
         * the response behaviour. This error has the `.timeout` property as
         * well as `.status == 408`.
         */
        function timeout(ms: number): Handler;

        /**
         * Vhost:
         * 
         *   Setup vhost for the given `hostname` and `server`.
         *
         *     connect()
         *       .use(connect.vhost('foo.com', fooApp))
         *       .use(connect.vhost('bar.com', barApp))
         *       .use(connect.vhost('*.com', mainApp))
         *
         *  The `server` may be a Connect server or
         *  a regular Node `http.Server`. 
         *
         * @param hostname
         * @param server
         */
        function vhost(hostname: string, server: any): Handler;

        function urlencoded(): any;

        function multipart(): any;

    }

    export = e;
}


// Type definitions for sqlite3 2.2.3
// Project: https://github.com/mapbox/node-sqlite3
// Definitions by: Nick Malaguti <https://github.com/nmalaguti/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "sqlite3" {
    import events = require("events");

    export var OPEN_READONLY: number;
    export var OPEN_READWRITE: number;
    export var OPEN_CREATE: number;

    export var cached: {
        Database(filename: string, callback?: (err: Error) => void): Database;
        Database(filename: string, mode?: number, callback?: (err: Error) => void): Database;
    };

    export interface RunResult {
        lastID: number;
        changes: number;
    }

    export class Statement {
        public bind(callback?: (err: Error) => void): Statement;
        public bind(...params: any[]): Statement;

        public reset(callback?: (err: Error) => void): Statement;

        public finalize(callback?: (err: Error) => void): Statement;

        public run(callback?: (err: Error) => void): Statement;
        public run(...params: any[]): Statement;

        public get(callback?: (err: Error, row: any) => void): Statement;
        public get(...params: any[]): Statement;

        public all(callback?: (err: Error, rows: any[]) => void): Statement;
        public all(...params: any[]): Statement;

        public each(callback?: (err: Error, row: any) => void, complete?: (err: Error, count: number) => void): Statement;
        public each(...params: any[]): Statement;
    }

    export class Database extends events.EventEmitter {
        constructor(filename: string, callback?: (err: Error) => void);
        constructor(filename: string, mode?: number, callback?: (err: Error) => void);

        public close(callback?: (err: Error) => void): void;

        public run(sql: string, callback?: (err: Error) => void): Database;
        public run(sql: string, ...params: any[]): Database;

        public get(sql: string, callback?: (err: Error, row: any) => void): Database;
        public get(sql: string, ...params: any[]): Database;

        public all(sql: string, callback?: (err: Error, rows: any[]) => void): Database;
        public all(sql: string, ...params: any[]): Database;

        public each(sql: string, callback?: (err: Error, row: any) => void, complete?: (err: Error, count: number) => void): Database;
        public each(sql: string, ...params: any[]): Database;

        public exec(sql: string, callback?: (err: Error) => void): Database;

        public prepare(sql: string, callback?: (err: Error) => void): Statement;
        public prepare(sql: string, ...params: any[]): Statement;

        public serialize(callback?: () => void): void;
        public parallelize(callback?: () => void): void;

        public on(event: "trace", listener: (sql: string) => void): Database;
        public on(event: "profile", listener: (sql: string, time: number) => void): Database;
        public on(event: "error", listener: (err: Error) => void): Database;
        public on(event: "open", listener: () => void): Database;
        public on(event: "close", listener: () => void): Database;
        public on(event: string, listener: Function): Database;
    }

    function verbose(): void;
}

/*
Example:

/// SERVER

import sio = module("socket.io");
import http = module("http");

var httpServer = http.createServer(app);

var io = sio.listen(httpServer);
io.sockets.on('connection', function (socket: sio.Socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

httpServer.listen(app.get('port'), function () {

/// CLIENT

<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io.connect('http://localhost');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
</script>
{% endblock %}

*/

/// <reference path="node.d.ts" />

declare module "socket.io" {

 import http = require("http");

    export function listen(server: http.Server, options: any, fn: Function): SocketManager;
    export function listen(server: http.Server, fn?: Function): SocketManager;
    export function listen(port: Number): SocketManager;
}

interface Socket {
    json: any;
    log: any;
    volatile: any;
    broadcast: any;
    in(room: string): Socket;
    to(room: string): Socket;
    join(name: string, fn: Function): Socket;
    unjoin(name: string, fn: Function): Socket;
    set(key: string, value: any, fn: Function): Socket;
    get(key: string, value: any, fn: Function): Socket;
    has(key: string, fn: Function): Socket;
    del(key: string, fn: Function): Socket;
    disconnect(): Socket;
    send(data: any, fn: Function): Socket;
    emit(ev: any): Socket;
}

interface SocketNamespace {
    clients(room: string): Socket[];
    log: any;
    store: any;
    json: any;
    volatile: any;
    in(room: string): SocketNamespace;
    on(evt: string, fn: Function): SocketNamespace;
    to(room: string): SocketNamespace;
    except(id: any): SocketNamespace;
    send(data: any): any;
    emit(data: any): any;
    socket(sid: any, readable: any): Socket;
    authorization(fn: Function);
}

interface SocketManager {
    get(key: any): any;
    set(key: any, value: any): SocketManager;
    enable(key: any): SocketManager;
    disable(key: any): SocketManager;
    enabled(key: any): any;
    disabled(key: any): any;
    configure(env: string, fn: Function): SocketManager;
    configure(fn: Function): SocketManager;
    of(nsp: string): SocketNamespace;
    on(ns: string, fn: Function): SocketManager;
    sockets: SocketNamespace;
}

// Type definitions for websocket
// Project: https://github.com/Worlize/WebSocket-Node
// Definitions by: Paul Loyd <https://github.com/loyd>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

// Type definitions for Async 0.1.23
// Project: https://github.com/caolan/async
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface AsyncMultipleResultsCallback<T> { (err: Error, results: T[]): any; }
interface AsyncSingleResultCallback<T> { (err: Error, result: T): void; }
interface AsyncTimesCallback<T> { (n: number, callback: AsyncMultipleResultsCallback<T>): void; }

interface AsyncIterator<T, R> { (item: T, callback: AsyncSingleResultCallback<R>): void; }
interface AsyncMemoIterator<T, R> { (memo: R, item: T, callback: AsyncSingleResultCallback<R>): void; }

interface AsyncWorker<T> { (task: T, callback: Function): void; }

interface AsyncQueue<T>
{
    length(): number;
    concurrency: number;
    started: boolean;
    paused: boolean;
    push(task: T, callback?: AsyncMultipleResultsCallback<T>): void;
    push(task: T[], callback?: AsyncMultipleResultsCallback<T>): void;
    unshift(task: T, callback?: AsyncMultipleResultsCallback<T>): void;
    unshift(task: T[], callback?: AsyncMultipleResultsCallback<T>): void;
    saturated: () => any;
    empty: () => any;
    drain: () => any;
    running(): number;
    idle(): boolean;
    pause(): void;
    resume(): void;
    kill(): void;
}

interface Async
{

    // Collections
    each<T, R>(arr: T[], iterator: AsyncIterator<T, R>, callback: AsyncMultipleResultsCallback<R>): void;
    eachSeries<T, R>(arr: T[], iterator: AsyncIterator<T, R>, callback: AsyncMultipleResultsCallback<R>): void;
    eachLimit<T, R>(arr: T[], limit: number, iterator: AsyncIterator<T, R>, callback: AsyncMultipleResultsCallback<R>): void;
    map<T, R>(arr: T[], iterator: AsyncIterator<T, R>, callback: AsyncMultipleResultsCallback<R>): any;
    mapSeries<T, R>(arr: T[], iterator: AsyncIterator<T, R>, callback: AsyncMultipleResultsCallback<R>): any;
    filter<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    select<T, R>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    filterSeries<T, R>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    selectSeries<T, R>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    reject<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    rejectSeries<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    reduce<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncSingleResultCallback<R>): any;
    inject<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncSingleResultCallback<R>): any;
    foldl<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncSingleResultCallback<R>): any;
    reduceRight<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncSingleResultCallback<R>): any;
    foldr<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncSingleResultCallback<R>): any;
    detect<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    detectSeries<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    sortBy<T, V>(arr: T[], iterator: AsyncIterator<T, V>, callback: AsyncMultipleResultsCallback<T>): any;
    some<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    any<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    every<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: (result: boolean) => any): any;
    all<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: (result: boolean) => any): any;
    concat<T, R>(arr: T[], iterator: AsyncIterator<T, R[]>, callback: AsyncMultipleResultsCallback<R>): any;
    concatSeries<T, R>(arr: T[], iterator: AsyncIterator<T, R[]>, callback: AsyncMultipleResultsCallback<R>): any;

    // Control Flow
    series<T>(tasks: T[], callback?: AsyncMultipleResultsCallback<T>): void;
    series<T>(tasks: T, callback?: AsyncMultipleResultsCallback<T>): void;
    parallel<T>(tasks: T[], callback?: AsyncMultipleResultsCallback<T>): void;
    parallel<T>(tasks: T, callback?: AsyncMultipleResultsCallback<T>): void;
    parallelLimit<T>(tasks: T[], limit: number, callback?: AsyncMultipleResultsCallback<T>): void;
    parallelLimit<T>(tasks: T, limit: number, callback?: AsyncMultipleResultsCallback<T>): void;
    whilst(test: Function, fn: Function, callback: Function): void;
    until(test: Function, fn: Function, callback: Function): void;
    waterfall<T>(tasks: T[], callback?: AsyncMultipleResultsCallback<T>): void;
    waterfall<T>(tasks: T, callback?: AsyncMultipleResultsCallback<T>): void;
    queue<T>(worker: AsyncWorker<T>, concurrency: number): AsyncQueue<T>;
    // auto(tasks: any[], callback?: AsyncMultipleResultsCallback<T>): void;
    auto(tasks: any, callback?: AsyncMultipleResultsCallback<any>): void;
    iterator(tasks: Function[]): Function;
    apply(fn: Function, ...arguments: any[]): void;
    nextTick<T>(callback: Function): void;

    times<T>(n: number, callback: AsyncTimesCallback<T>): void;
    timesSeries<T>(n: number, callback: AsyncTimesCallback<T>): void;

    // Utils
    memoize(fn: Function, hasher?: Function): Function;
    unmemoize(fn: Function): Function;
    log(fn: Function, ...arguments: any[]): void;
    dir(fn: Function, ...arguments: any[]): void;
    noConflict(): Async;
}

declare var async: Async;

declare module "async" {
    export = async;
}
