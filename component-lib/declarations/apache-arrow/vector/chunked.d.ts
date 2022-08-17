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
import { DataType, Dictionary } from "../type";
import { AbstractVector, Vector } from "../vector";
import { Clonable, Sliceable, Applicative } from "../vector";
/** @ignore */
declare type ChunkedDict<T extends DataType> = T extends Dictionary
  ? Vector<T["dictionary"]>
  : null | never;
/** @ignore */
declare type ChunkedKeys<T extends DataType> = T extends Dictionary
  ? Vector<T["indices"]> | Chunked<T["indices"]>
  : null | never;
/** @ignore */
export declare type SearchContinuation<T extends Chunked> = (
  column: T,
  chunkIndex: number,
  valueIndex: number
) => any;
/** @ignore */
export declare class Chunked<T extends DataType = any>
  extends AbstractVector<T>
  implements
    Clonable<Chunked<T>>,
    Sliceable<Chunked<T>>,
    Applicative<T, Chunked<T>> {
  /** @nocollapse */
  static flatten<T extends DataType>(
    ...vectors: (Vector<T> | Vector<T>[])[]
  ): Vector<T>[];
  /** @nocollapse */
  static concat<T extends DataType>(
    ...vectors: (Vector<T> | Vector<T>[])[]
  ): Chunked<T>;
  protected _type: T;
  protected _length: number;
  protected _chunks: Vector<T>[];
  protected _numChildren: number;
  protected _children?: Chunked[];
  protected _nullCount: number;
  protected _chunkOffsets: Uint32Array;
  constructor(type: T, chunks?: Vector<T>[], offsets?: Uint32Array);
  readonly type: T;
  readonly length: number;
  readonly chunks: Vector<T>[];
  readonly typeId: T["TType"];
  readonly VectorName: string;
  readonly data: Data<T>;
  readonly ArrayType: any;
  readonly numChildren: number;
  readonly stride: number;
  readonly byteLength: number;
  readonly nullCount: number;
  protected _indices?: ChunkedKeys<T>;
  readonly indices: ChunkedKeys<T> | null;
  readonly dictionary: ChunkedDict<T> | null;
  [Symbol.iterator](): IterableIterator<T["TValue"] | null>;
  clone(chunks?: Vector<T>[]): Chunked<T>;
  concat(...others: Vector<T>[]): Chunked<T>;
  slice(begin?: number, end?: number): Chunked<T>;
  getChildAt<R extends DataType = any>(index: number): Chunked<R> | null;
  search(index: number): [number, number] | null;
  search<N extends SearchContinuation<Chunked<T>>>(
    index: number,
    then?: N
  ): ReturnType<N>;
  isValid(index: number): boolean;
  get(index: number): T["TValue"] | null;
  set(index: number, value: T["TValue"] | null): void;
  indexOf(element: T["TValue"], offset?: number): number;
  toArray(): T["TArray"];
  protected getInternal(
    { _chunks }: Chunked<T>,
    i: number,
    j: number
  ): T["TValue"] | null;
  protected isValidInternal(
    { _chunks }: Chunked<T>,
    i: number,
    j: number
  ): boolean;
  protected indexOfInternal(
    { _chunks }: Chunked<T>,
    chunkIndex: number,
    fromIndex: number,
    element: T["TValue"]
  ): number;
  protected _sliceInternal(
    self: Chunked<T>,
    begin: number,
    end: number
  ): Chunked<T>;
}
export {};
