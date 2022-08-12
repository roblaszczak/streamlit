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

import { Vector } from "../vector";
import { IntBuilder } from "./int";
import { Dictionary, DataType } from "../type";
import { Builder, BuilderOptions } from "../builder";
declare type DictionaryHashFunction = (x: any) => string | number;
export interface DictionaryBuilderOptions<
  T extends DataType = any,
  TNull = any
> extends BuilderOptions<T, TNull> {
  dictionaryHashFunction?: DictionaryHashFunction;
}
/** @ignore */
export declare class DictionaryBuilder<
  T extends Dictionary,
  TNull = any
> extends Builder<T, TNull> {
  protected _dictionaryOffset: number;
  protected _dictionary?: Vector<T["dictionary"]>;
  protected _keysToIndices: {
    [key: string]: number;
  };
  readonly indices: IntBuilder<T["indices"]>;
  readonly dictionary: Builder<T["dictionary"]>;
  constructor({
    type: type,
    nullValues: nulls,
    dictionaryHashFunction: hashFn
  }: DictionaryBuilderOptions<T, TNull>);
  readonly values: T["indices"]["TArray"];
  readonly nullCount: number;
  readonly nullBitmap: Uint8Array | null;
  readonly byteLength: number;
  readonly reservedLength: number;
  readonly reservedByteLength: number;
  isValid(value: T["TValue"] | TNull): boolean;
  setValid(index: number, valid: boolean): boolean;
  setValue(index: number, value: T["TValue"]): void;
  flush(): import("../data").Data<T>;
  finish(): this;
  clear(): this;
  valueToKey(val: any): string | number;
}
export {};
