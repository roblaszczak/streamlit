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
import {
  Time,
  TimeSecond,
  TimeMillisecond,
  TimeMicrosecond,
  TimeNanosecond
} from "../type";
/** @ignore */
export declare class TimeBuilder<
  T extends Time = Time,
  TNull = any
> extends FixedWidthBuilder<T, TNull> {}
/** @ignore */
export declare class TimeSecondBuilder<TNull = any> extends TimeBuilder<
  TimeSecond,
  TNull
> {}
/** @ignore */
export declare class TimeMillisecondBuilder<TNull = any> extends TimeBuilder<
  TimeMillisecond,
  TNull
> {}
/** @ignore */
export declare class TimeMicrosecondBuilder<TNull = any> extends TimeBuilder<
  TimeMicrosecond,
  TNull
> {}
/** @ignore */
export declare class TimeNanosecondBuilder<TNull = any> extends TimeBuilder<
  TimeNanosecond,
  TNull
> {}
