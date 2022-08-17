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

import { Chunked } from "./chunked";
import { BaseVector } from "./base";
import { Utf8 } from "../type";
import { VectorBuilderOptions } from "./index";
import { VectorBuilderOptionsAsync } from "./index";
/** @ignore */
export declare class Utf8Vector extends BaseVector<Utf8> {
  static from<TNull = any>(input: Iterable<string | TNull>): Utf8Vector;
  static from<TNull = any>(
    input: AsyncIterable<string | TNull>
  ): Promise<Utf8Vector>;
  static from<TNull = any>(
    input: VectorBuilderOptions<Utf8, TNull>
  ): Chunked<Utf8>;
  static from<TNull = any>(
    input: VectorBuilderOptionsAsync<Utf8, TNull>
  ): Promise<Chunked<Utf8>>;
  asBinary(): import("./binary").BinaryVector;
}
