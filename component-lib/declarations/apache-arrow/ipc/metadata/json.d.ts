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

import { Schema, Field } from "../../schema";
import { DataType } from "../../type";
import { DictionaryBatch, RecordBatch } from "./message";
/** @ignore */
export declare function schemaFromJSON(
  _schema: any,
  dictionaries?: Map<number, DataType>
): Schema<any>;
/** @ignore */
export declare function recordBatchFromJSON(b: any): RecordBatch;
/** @ignore */
export declare function dictionaryBatchFromJSON(b: any): DictionaryBatch;
/** @ignore */
export declare function fieldFromJSON(
  _field: any,
  dictionaries?: Map<number, DataType>
): Field<any>;
