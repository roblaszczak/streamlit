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

import { FixedWidthBuilder } from "../builder";
import { Float, Float16, Float32, Float64 } from "../type";
/** @ignore */
export declare class FloatBuilder<
  T extends Float = Float,
  TNull = any
> extends FixedWidthBuilder<T, TNull> {}
/** @ignore */
export declare class Float16Builder<TNull = any> extends FloatBuilder<
  Float16,
  TNull
> {
  setValue(index: number, value: number): void;
}
/** @ignore */
export declare class Float32Builder<TNull = any> extends FloatBuilder<
  Float32,
  TNull
> {
  setValue(index: number, value: number): void;
}
/** @ignore */
export declare class Float64Builder<TNull = any> extends FloatBuilder<
  Float64,
  TNull
> {
  setValue(index: number, value: number): void;
}
