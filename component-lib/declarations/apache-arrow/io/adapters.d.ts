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
import { ArrayBufferViewInput } from "../util/buffer";
import { ReadableDOMStreamOptions } from "./interfaces";
declare const _default: {
  fromIterable<T extends ArrayBufferViewInput>(
    source: T | Iterable<T>
  ): IterableIterator<Uint8Array>;
  fromAsyncIterable<T extends ArrayBufferViewInput>(
    source: AsyncIterable<T> | PromiseLike<T>
  ): AsyncIterableIterator<Uint8Array>;
  fromDOMStream<T extends ArrayBufferViewInput>(
    source: ReadableStream<T>
  ): AsyncIterableIterator<Uint8Array>;
  fromNodeStream(
    stream: NodeJS.ReadableStream
  ): AsyncIterableIterator<Uint8Array>;
  toDOMStream<T>(
    source: Iterable<T> | AsyncIterable<T>,
    options?: ReadableDOMStreamOptions | undefined
  ): ReadableStream<T>;
  toNodeStream<T>(
    source: Iterable<T> | AsyncIterable<T>,
    options?: import("stream").ReadableOptions | undefined
  ): import("stream").Readable;
};
/** @ignore */
export default _default;
