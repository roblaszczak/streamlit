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

import * as File_ from "../../fb/File";
import { flatbuffers } from "flatbuffers";
import Long = flatbuffers.Long;
import Builder = flatbuffers.Builder;
import _Block = File_.org.apache.arrow.flatbuf.Block;
import { Schema } from "../../schema";
import { MetadataVersion } from "../../enum";
import { ArrayBufferViewInput } from "../../util/buffer";
/** @ignore */
declare class Footer_ {
  schema: Schema;
  version: MetadataVersion;
  /** @nocollapse */
  static decode(buf: ArrayBufferViewInput): Footer_;
  /** @nocollapse */
  static encode(footer: Footer_): Uint8Array;
  protected _recordBatches: FileBlock[];
  protected _dictionaryBatches: FileBlock[];
  readonly numRecordBatches: number;
  readonly numDictionaries: number;
  constructor(
    schema: Schema,
    version?: MetadataVersion,
    recordBatches?: FileBlock[],
    dictionaryBatches?: FileBlock[]
  );
  recordBatches(): Iterable<FileBlock>;
  dictionaryBatches(): Iterable<FileBlock>;
  getRecordBatch(index: number): FileBlock | null;
  getDictionaryBatch(index: number): FileBlock | null;
}
export { Footer_ as Footer };
/** @ignore */
export declare class FileBlock {
  /** @nocollapse */
  static decode(block: _Block): FileBlock;
  /** @nocollapse */
  static encode(b: Builder, fileBlock: FileBlock): number;
  offset: number;
  bodyLength: number;
  metaDataLength: number;
  constructor(
    metaDataLength: number,
    bodyLength: Long | number,
    offset: Long | number
  );
}
