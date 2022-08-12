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
import { Duplex } from "stream";
import { DataType } from "../../type";
import { Builder, BuilderOptions } from "../../builder/index";
/** @ignore */
export interface BuilderDuplexOptions<T extends DataType = any, TNull = any>
  extends BuilderOptions<T, TNull> {
  autoDestroy?: boolean;
  highWaterMark?: number;
  queueingStrategy?: "bytes" | "count";
  dictionaryHashFunction?: (value: any) => string | number;
  valueToChildTypeId?: (
    builder: Builder<T, TNull>,
    value: any,
    offset: number
  ) => number;
}
/** @ignore */
export declare function builderThroughNodeStream<
  T extends DataType = any,
  TNull = any
>(options: BuilderDuplexOptions<T, TNull>): BuilderDuplex<any, TNull>;
/** @ignore */
declare type CB = (error?: Error | null | undefined) => void;
/** @ignore */
declare class BuilderDuplex<
  T extends DataType = any,
  TNull = any
> extends Duplex {
  private _finished;
  private _numChunks;
  private _desiredSize;
  private _builder;
  private _getSize;
  constructor(
    builder: Builder<T, TNull>,
    options: BuilderDuplexOptions<T, TNull>
  );
  _read(size: number): void;
  _final(cb?: CB): void;
  _write(value: any, _: string, cb?: CB): boolean;
  _destroy(err: Error | null, cb?: (error: Error | null) => void): void;
  private _maybeFlush;
}
export {};
