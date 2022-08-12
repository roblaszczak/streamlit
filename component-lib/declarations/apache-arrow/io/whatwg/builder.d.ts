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

import { DataType } from "../../type";
import { VectorType as V } from "../../interfaces";
import { Builder, BuilderOptions } from "../../builder/index";
/** @ignore */
export interface BuilderTransformOptions<
  T extends DataType = any,
  TNull = any
> extends BuilderOptions<T, TNull> {
  queueingStrategy?: "bytes" | "count";
  dictionaryHashFunction?: (value: any) => string | number;
  readableStrategy?: {
    highWaterMark?: number;
    size?: any;
    type?: "bytes";
  };
  writableStrategy?: {
    highWaterMark?: number;
    size?: any;
    type?: "bytes";
  };
  valueToChildTypeId?: (
    builder: Builder<T, TNull>,
    value: any,
    offset: number
  ) => number;
}
/** @ignore */
export declare function builderThroughDOMStream<
  T extends DataType = any,
  TNull = any
>(options: BuilderTransformOptions<T, TNull>): BuilderTransform<T, TNull>;
/** @ignore */
export declare class BuilderTransform<T extends DataType = any, TNull = any> {
  readable: ReadableStream<V<T>>;
  writable: WritableStream<T["TValue"] | TNull>;
  _controller: ReadableStreamDefaultController<V<T>> | null;
  private _numChunks;
  private _finished;
  private _bufferedSize;
  private _builder;
  private _getSize;
  constructor(options: BuilderTransformOptions<T, TNull>);
  private _writeValueAndReturnChunkSize;
  private _maybeFlush;
  private _enqueue;
}
