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

import { Table } from "../table";
import { Vector } from "../vector";
import { Predicate, Col } from "./predicate";
import { RecordBatch } from "../recordbatch";
import { VectorType as V } from "../interfaces";
import { DataType, Int, Struct } from "../type";
/** @ignore */
export declare type BindFunc = (batch: RecordBatch) => void;
/** @ignore */
export declare type NextFunc = (idx: number, batch: RecordBatch) => void;
export declare class DataFrame<
  T extends {
    [key: string]: DataType;
  } = any
> extends Table<T> {
  filter(predicate: Predicate): FilteredDataFrame<T>;
  scan(next: NextFunc, bind?: BindFunc): void;
  scanReverse(next: NextFunc, bind?: BindFunc): void;
  countBy(
    name: Col | string
  ): CountByResult<
    any,
    Int<
      | import("../enum").Type.Int
      | import("../enum").Type.Int8
      | import("../enum").Type.Int16
      | import("../enum").Type.Int32
      | import("../enum").Type.Int64
      | import("../enum").Type.Uint8
      | import("../enum").Type.Uint16
      | import("../enum").Type.Uint32
      | import("../enum").Type.Uint64
    >
  >;
}
/** @ignore */
export declare class CountByResult<
  T extends DataType = any,
  TCount extends Int = Int
> extends Table<{
  values: T;
  counts: TCount;
}> {
  constructor(values: Vector<T>, counts: V<TCount>);
  toJSON(): Object;
}
/** @ignore */
export declare class FilteredDataFrame<
  T extends {
    [key: string]: DataType;
  } = any
> extends DataFrame<T> {
  private _predicate;
  constructor(batches: RecordBatch<T>[], predicate: Predicate);
  scan(next: NextFunc, bind?: BindFunc): void;
  scanReverse(next: NextFunc, bind?: BindFunc): void;
  count(): number;
  [Symbol.iterator](): IterableIterator<Struct<T>["TValue"]>;
  filter(predicate: Predicate): FilteredDataFrame<T>;
  countBy(
    name: Col | string
  ): CountByResult<
    any,
    Int<
      | import("../enum").Type.Int
      | import("../enum").Type.Int8
      | import("../enum").Type.Int16
      | import("../enum").Type.Int32
      | import("../enum").Type.Int64
      | import("../enum").Type.Uint8
      | import("../enum").Type.Uint16
      | import("../enum").Type.Uint32
      | import("../enum").Type.Uint64
    >
  >;
}
