/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022)
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

import { Data } from "../data";
import { DataType } from "../type";
import { Chunked } from "./chunked";
import { VectorType as V } from "../interfaces";
import {
  AbstractVector,
  Vector,
  Clonable,
  Sliceable,
  Applicative
} from "../vector";
/** @ignore */
export interface BaseVector<T extends DataType = any>
  extends Clonable<V<T>>,
    Sliceable<V<T>>,
    Applicative<T, Chunked<T>> {
  slice(begin?: number, end?: number): V<T>;
  concat(...others: Vector<T>[]): Chunked<T>;
  clone<R extends DataType = T>(data: Data<R>, children?: Vector<R>[]): V<R>;
}
/** @ignore */
export declare abstract class BaseVector<T extends DataType = any>
  extends AbstractVector<T>
  implements Clonable<V<T>>, Sliceable<V<T>>, Applicative<T, Chunked<T>> {
  protected _children?: Vector[];
  constructor(data: Data<T>, children?: Vector[]);
  readonly data: Data<T>;
  readonly numChildren: number;
  readonly type: T;
  readonly typeId: T["TType"];
  readonly length: number;
  readonly offset: number;
  readonly stride: number;
  readonly nullCount: number;
  readonly byteLength: number;
  readonly VectorName: string;
  readonly ArrayType: T["ArrayType"];
  readonly values: T["TArray"];
  readonly typeIds: T["TArray"];
  readonly nullBitmap: Uint8Array;
  readonly valueOffsets: Int32Array;
  readonly [Symbol.toStringTag]: string;
  isValid(index: number): boolean;
  getChildAt<R extends DataType = any>(index: number): Vector<R> | null;
  toJSON(): any;
  protected _sliceInternal(self: this, begin: number, end: number): any;
  protected _bindDataAccessors(data: Data<T>): void;
}
