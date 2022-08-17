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

import * as type from "../type";
import { Visitor } from "../visitor";
/** @ignore */
export interface JSONTypeAssembler extends Visitor {
  visit<T extends type.DataType>(node: T): object | undefined;
}
/** @ignore */
export declare class JSONTypeAssembler extends Visitor {
  visitNull<T extends type.Null>({
    typeId
  }: T): {
    name: string;
  };
  visitInt<T extends type.Int>({
    typeId,
    bitWidth,
    isSigned
  }: T): {
    name: string;
    bitWidth: type.IntBitWidth;
    isSigned: boolean;
  };
  visitFloat<T extends type.Float>({
    typeId,
    precision
  }: T): {
    name: string;
    precision: string;
  };
  visitBinary<T extends type.Binary>({
    typeId
  }: T): {
    name: string;
  };
  visitBool<T extends type.Bool>({
    typeId
  }: T): {
    name: string;
  };
  visitUtf8<T extends type.Utf8>({
    typeId
  }: T): {
    name: string;
  };
  visitDecimal<T extends type.Decimal>({
    typeId,
    scale,
    precision
  }: T): {
    name: string;
    scale: number;
    precision: number;
  };
  visitDate<T extends type.Date_>({
    typeId,
    unit
  }: T): {
    name: string;
    unit: string;
  };
  visitTime<T extends type.Time>({
    typeId,
    unit,
    bitWidth
  }: T): {
    name: string;
    unit: string;
    bitWidth: type.TimeBitWidth;
  };
  visitTimestamp<T extends type.Timestamp>({
    typeId,
    timezone,
    unit
  }: T): {
    name: string;
    unit: string;
    timezone: string | null | undefined;
  };
  visitInterval<T extends type.Interval>({
    typeId,
    unit
  }: T): {
    name: string;
    unit: string;
  };
  visitList<T extends type.List>({
    typeId
  }: T): {
    name: string;
  };
  visitStruct<T extends type.Struct>({
    typeId
  }: T): {
    name: string;
  };
  visitUnion<T extends type.Union>({
    typeId,
    mode,
    typeIds
  }: T): {
    name: string;
    mode: string;
    typeIds: number[];
  };
  visitDictionary<T extends type.Dictionary>(node: T): object | undefined;
  visitFixedSizeBinary<T extends type.FixedSizeBinary>({
    typeId,
    byteWidth
  }: T): {
    name: string;
    byteWidth: number;
  };
  visitFixedSizeList<T extends type.FixedSizeList>({
    typeId,
    listSize
  }: T): {
    name: string;
    listSize: number;
  };
  visitMap<T extends type.Map_>({
    typeId,
    keysSorted
  }: T): {
    name: string;
    keysSorted: boolean;
  };
}
