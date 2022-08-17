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

import { FixedWidthBuilder } from "../builder";
import { Date_, DateDay, DateMillisecond } from "../type";
/** @ignore */
export declare class DateBuilder<
  T extends Date_ = Date_,
  TNull = any
> extends FixedWidthBuilder<T, TNull> {}
/** @ignore */
export declare class DateDayBuilder<TNull = any> extends DateBuilder<
  DateDay,
  TNull
> {}
/** @ignore */
export declare class DateMillisecondBuilder<TNull = any> extends DateBuilder<
  DateMillisecond,
  TNull
> {}
