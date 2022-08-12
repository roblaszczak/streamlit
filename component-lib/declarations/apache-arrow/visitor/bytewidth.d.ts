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

import { Data } from "../data";
import { Visitor } from "../visitor";
import { VectorType } from "../interfaces";
import { Type } from "../enum";
import { Schema, Field } from "../schema";
import {
  DataType,
  Dictionary,
  Float,
  Int,
  Date_,
  Interval,
  Time,
  Timestamp,
  Bool,
  Null,
  Utf8,
  Binary,
  Decimal,
  FixedSizeBinary,
  List,
  FixedSizeList,
  Map_,
  Struct,
  Union
} from "../type";
/** @ignore */
export interface ByteWidthVisitor extends Visitor {
  visit<T extends DataType>(node: T): number;
  visitMany<T extends DataType>(nodes: T[]): number[];
  getVisitFn<T extends Type>(node: T): (type: DataType<T>) => number;
  getVisitFn<T extends DataType>(
    node: VectorType<T> | Data<T> | T
  ): (type: T) => number;
}
/** @ignore */
export declare class ByteWidthVisitor extends Visitor {
  visitNull(____: Null): number;
  visitInt(type: Int): number;
  visitFloat(type: Float): number;
  visitBinary(type: Binary): void;
  visitUtf8(type: Utf8): void;
  visitBool(____: Bool): number;
  visitDecimal(____: Decimal): number;
  visitDate(type: Date_): number;
  visitTime(type: Time): number;
  visitTimestamp(type: Timestamp): 4 | 8;
  visitInterval(type: Interval): number;
  visitList(type: List): void;
  visitStruct(type: Struct): number;
  visitUnion(type: Union): number;
  visitFixedSizeBinary(type: FixedSizeBinary): number;
  visitFixedSizeList(type: FixedSizeList): number;
  visitMap(type: Map_): number;
  visitDictionary(type: Dictionary): number;
  visitFields(fields: Field[]): number[];
  visitSchema(schema: Schema): number;
}
/** @ignore */
export declare const instance: ByteWidthVisitor;
