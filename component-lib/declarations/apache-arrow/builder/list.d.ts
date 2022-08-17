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

import { Run } from "./run";
import { DataType, List } from "../type";
import { OffsetsBufferBuilder } from "./buffer";
import { Builder, BuilderOptions, VariableWidthBuilder } from "../builder";
/** @ignore */
export declare class ListBuilder<
  T extends DataType = any,
  TNull = any
> extends VariableWidthBuilder<List<T>, TNull> {
  protected _run: Run<T, TNull>;
  protected _offsets: OffsetsBufferBuilder;
  constructor(opts: BuilderOptions<List<T>, TNull>);
  addChild(child: Builder<T>, name?: string): number;
  clear(): this;
  protected _flushPending(pending: Map<number, T["TValue"] | undefined>): void;
}
