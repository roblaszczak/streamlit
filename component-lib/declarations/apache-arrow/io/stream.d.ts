/**
 * Copyright 2022 Snowflake Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/// <reference types="node" />
import { Readable, Writable, AsyncQueue } from "./interfaces";
import { ArrayBufferViewInput } from "../util/buffer";
/** @ignore */
export declare type WritableSink<T> =
  | Writable<T>
  | WritableStream<T>
  | NodeJS.WritableStream
  | null;
/** @ignore */
export declare type ReadableSource<T> =
  | Readable<T>
  | PromiseLike<T>
  | AsyncIterable<T>
  | ReadableStream<T>
  | NodeJS.ReadableStream
  | null;
/** @ignore */
export declare class AsyncByteQueue<
  T extends ArrayBufferViewInput = Uint8Array
> extends AsyncQueue<Uint8Array, T> {
  write(value: ArrayBufferViewInput | Uint8Array): void;
  toString(sync: true): string;
  toString(sync?: false): Promise<string>;
  toUint8Array(sync: true): Uint8Array;
  toUint8Array(sync?: false): Promise<Uint8Array>;
}
/** @ignore */
export declare class ByteStream implements IterableIterator<Uint8Array> {
  private source;
  constructor(source?: Iterable<ArrayBufferViewInput> | ArrayBufferViewInput);
  [Symbol.iterator](): this;
  next(value?: any): IteratorResult<Uint8Array>;
  throw(value?: any): any;
  return(value?: any): any;
  peek(size?: number | null): Uint8Array | null;
  read(size?: number | null): Uint8Array | null;
}
/** @ignore */
export declare class AsyncByteStream
  implements Readable<Uint8Array>, AsyncIterableIterator<Uint8Array> {
  private source;
  constructor(
    source?:
      | PromiseLike<ArrayBufferViewInput>
      | Response
      | ReadableStream<ArrayBufferViewInput>
      | NodeJS.ReadableStream
      | AsyncIterable<ArrayBufferViewInput>
      | Iterable<ArrayBufferViewInput>
  );
  [Symbol.asyncIterator](): this;
  next(value?: any): Promise<IteratorResult<Uint8Array>>;
  throw(value?: any): Promise<any>;
  return(value?: any): Promise<any>;
  readonly closed: Promise<void>;
  cancel(reason?: any): Promise<void>;
  peek(size?: number | null): Promise<Uint8Array | null>;
  read(size?: number | null): Promise<Uint8Array | null>;
}
