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

import { Field } from "../schema";
import { Column } from "../column";
import { Vector } from "../vector";
import { DataType } from "../type";
/** @ignore */
export declare const selectArgs: <T>(Ctor: any, vals: any[]) => T[];
/** @ignore */
export declare const selectColumnArgs: <T extends {
  [key: string]: DataType<import("../enum").Type, any>;
}>(
  args: any[]
) => Column<any>[];
/** @ignore */
export declare const selectFieldArgs: <T extends {
  [key: string]: DataType<import("../enum").Type, any>;
}>(
  args: any[]
) => [Field<T[keyof T]>[], (T[keyof T] | Vector<T[keyof T]>)[]];
/** @ignore */
export declare const selectChunkArgs: <T>(Ctor: any, vals: any[]) => T[];
/** @ignore */
export declare const selectVectorChildrenArgs: <T extends Vector<any>>(
  Ctor: typeof import("../recordbatch").RecordBatch,
  vals: any[]
) => T[];
/** @ignore */
export declare const selectColumnChildrenArgs: <T extends Column<any>>(
  Ctor: typeof import("../recordbatch").RecordBatch,
  vals: any[]
) => T[];
