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

import { Binary } from "../type";
import { VariableWidthBuilder, BuilderOptions } from "../builder";
/** @ignore */
export declare class BinaryBuilder<TNull = any> extends VariableWidthBuilder<
  Binary,
  TNull
> {
  constructor(opts: BuilderOptions<Binary, TNull>);
  readonly byteLength: number;
  setValue(index: number, value: Uint8Array): void;
  protected _flushPending(
    pending: Map<number, Uint8Array | undefined>,
    pendingLength: number
  ): void;
}
