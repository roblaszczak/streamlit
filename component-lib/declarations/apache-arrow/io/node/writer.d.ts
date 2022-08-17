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

/// <reference types="node" />
import { DataType } from "../../type";
import { Duplex, DuplexOptions } from "stream";
import { AsyncByteStream } from "../../io/stream";
import { RecordBatchWriter } from "../../ipc/writer";
/** @ignore */
export declare function recordBatchWriterThroughNodeStream<
  T extends {
    [key: string]: DataType;
  } = any
>(
  this: typeof RecordBatchWriter,
  options?: DuplexOptions & {
    autoDestroy: boolean;
  }
): RecordBatchWriterDuplex<T>;
/** @ignore */
declare type CB = (error?: Error | null | undefined) => void;
/** @ignore */
declare class RecordBatchWriterDuplex<
  T extends {
    [key: string]: DataType;
  } = any
> extends Duplex {
  private _pulling;
  private _reader;
  private _writer;
  constructor(writer: RecordBatchWriter<T>, options?: DuplexOptions);
  _final(cb?: CB): void;
  _write(x: any, _: string, cb: CB): boolean;
  _read(size: number): void;
  _destroy(err: Error | null, cb: (error: Error | null) => void): void;
  _pull(size: number, reader: AsyncByteStream): Promise<boolean>;
}
export {};
