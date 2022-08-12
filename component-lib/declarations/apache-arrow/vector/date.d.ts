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

import { DateUnit } from "../enum";
import { Chunked } from "./chunked";
import { BaseVector } from "./base";
import { VectorType as V } from "../interfaces";
import { VectorBuilderOptions } from "./index";
import { VectorBuilderOptionsAsync } from "./index";
import { Date_, DateDay, DateMillisecond } from "../type";
/** @ignore */
declare type FromArgs<T extends Date_> = [Iterable<Date>, T["unit"]];
/** @ignore */
export declare class DateVector<T extends Date_ = Date_> extends BaseVector<
  T
> {
  static from<T extends DateUnit.DAY>(...args: FromArgs<DateDay>): V<DateDay>;
  static from<T extends DateUnit.MILLISECOND>(
    ...args: FromArgs<DateMillisecond>
  ): V<DateMillisecond>;
  static from<T extends Date_, TNull = any>(
    input: Iterable<Date | TNull>
  ): V<T>;
  static from<T extends Date_, TNull = any>(
    input: AsyncIterable<Date | TNull>
  ): Promise<V<T>>;
  static from<T extends Date_, TNull = any>(
    input: VectorBuilderOptions<T, TNull>
  ): Chunked<T>;
  static from<T extends Date_, TNull = any>(
    input: VectorBuilderOptionsAsync<T, TNull>
  ): Promise<Chunked<T>>;
}
/** @ignore */
export declare class DateDayVector extends DateVector<DateDay> {}
/** @ignore */
export declare class DateMillisecondVector extends DateVector<
  DateMillisecond
> {}
export {};
