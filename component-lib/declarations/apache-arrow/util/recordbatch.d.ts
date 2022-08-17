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

import { Column } from "../column";
import { Vector } from "../vector";
import { DataType } from "../type";
import { Data } from "../data";
import { Schema } from "../schema";
import { Chunked } from "../vector/chunked";
import { RecordBatch } from "../recordbatch";
/** @ignore */
export declare function ensureSameLengthData<
  T extends {
    [key: string]: DataType;
  } = any
>(
  schema: Schema<T>,
  chunks: Data<T[keyof T]>[],
  batchLength?: number
): [Schema<T>, number, Data<T[keyof T]>[]];
/** @ignore */
export declare function distributeColumnsIntoRecordBatches<
  T extends {
    [key: string]: DataType;
  } = any
>(columns: Column<T[keyof T]>[]): [Schema<T>, RecordBatch<T>[]];
/** @ignore */
export declare function distributeVectorsIntoRecordBatches<
  T extends {
    [key: string]: DataType;
  } = any
>(
  schema: Schema<T>,
  vecs: (Vector<T[keyof T]> | Chunked<T[keyof T]>)[]
): [Schema<T>, RecordBatch<T>[]];
