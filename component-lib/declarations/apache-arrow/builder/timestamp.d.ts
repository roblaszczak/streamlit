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
  Timestamp,
  TimestampSecond,
  TimestampMillisecond,
  TimestampMicrosecond,
  TimestampNanosecond
} from "../type";
/** @ignore */
export declare class TimestampBuilder<
  T extends Timestamp = Timestamp,
  TNull = any
> extends FixedWidthBuilder<T, TNull> {}
/** @ignore */
export declare class TimestampSecondBuilder<
  TNull = any
> extends TimestampBuilder<TimestampSecond, TNull> {}
/** @ignore */
export declare class TimestampMillisecondBuilder<
  TNull = any
> extends TimestampBuilder<TimestampMillisecond, TNull> {}
/** @ignore */
export declare class TimestampMicrosecondBuilder<
  TNull = any
> extends TimestampBuilder<TimestampMicrosecond, TNull> {}
/** @ignore */
export declare class TimestampNanosecondBuilder<
  TNull = any
> extends TimestampBuilder<TimestampNanosecond, TNull> {}
