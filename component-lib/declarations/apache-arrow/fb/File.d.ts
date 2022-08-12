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

import { flatbuffers } from "flatbuffers";
import * as NS7624605610262437867 from "./Schema";
/**
 * ----------------------------------------------------------------------
 * Arrow File metadata
 *
 *
 * @constructor
 */
export declare namespace org.apache.arrow.flatbuf {
  class Footer {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    /**
     * @param number i
     * @param flatbuffers.ByteBuffer bb
     * @returns Footer
     */
    __init(i: number, bb: flatbuffers.ByteBuffer): Footer;
    /**
     * @param flatbuffers.ByteBuffer bb
     * @param Footer= obj
     * @returns Footer
     */
    static getRootAsFooter(bb: flatbuffers.ByteBuffer, obj?: Footer): Footer;
    /**
     * @returns org.apache.arrow.flatbuf.MetadataVersion
     */
    version(): NS7624605610262437867.org.apache.arrow.flatbuf.MetadataVersion;
    /**
     * @param org.apache.arrow.flatbuf.Schema= obj
     * @returns org.apache.arrow.flatbuf.Schema|null
     */
    schema(
      obj?: NS7624605610262437867.org.apache.arrow.flatbuf.Schema
    ): NS7624605610262437867.org.apache.arrow.flatbuf.Schema | null;
    /**
     * @param number index
     * @param org.apache.arrow.flatbuf.Block= obj
     * @returns org.apache.arrow.flatbuf.Block
     */
    dictionaries(
      index: number,
      obj?: org.apache.arrow.flatbuf.Block
    ): org.apache.arrow.flatbuf.Block | null;
    /**
     * @returns number
     */
    dictionariesLength(): number;
    /**
     * @param number index
     * @param org.apache.arrow.flatbuf.Block= obj
     * @returns org.apache.arrow.flatbuf.Block
     */
    recordBatches(
      index: number,
      obj?: org.apache.arrow.flatbuf.Block
    ): org.apache.arrow.flatbuf.Block | null;
    /**
     * @returns number
     */
    recordBatchesLength(): number;
    /**
     * @param flatbuffers.Builder builder
     */
    static startFooter(builder: flatbuffers.Builder): void;
    /**
     * @param flatbuffers.Builder builder
     * @param org.apache.arrow.flatbuf.MetadataVersion version
     */
    static addVersion(
      builder: flatbuffers.Builder,
      version: NS7624605610262437867.org.apache.arrow.flatbuf.MetadataVersion
    ): void;
    /**
     * @param flatbuffers.Builder builder
     * @param flatbuffers.Offset schemaOffset
     */
    static addSchema(
      builder: flatbuffers.Builder,
      schemaOffset: flatbuffers.Offset
    ): void;
    /**
     * @param flatbuffers.Builder builder
     * @param flatbuffers.Offset dictionariesOffset
     */
    static addDictionaries(
      builder: flatbuffers.Builder,
      dictionariesOffset: flatbuffers.Offset
    ): void;
    /**
     * @param flatbuffers.Builder builder
     * @param number numElems
     */
    static startDictionariesVector(
      builder: flatbuffers.Builder,
      numElems: number
    ): void;
    /**
     * @param flatbuffers.Builder builder
     * @param flatbuffers.Offset recordBatchesOffset
     */
    static addRecordBatches(
      builder: flatbuffers.Builder,
      recordBatchesOffset: flatbuffers.Offset
    ): void;
    /**
     * @param flatbuffers.Builder builder
     * @param number numElems
     */
    static startRecordBatchesVector(
      builder: flatbuffers.Builder,
      numElems: number
    ): void;
    /**
     * @param flatbuffers.Builder builder
     * @returns flatbuffers.Offset
     */
    static endFooter(builder: flatbuffers.Builder): flatbuffers.Offset;
    /**
     * @param flatbuffers.Builder builder
     * @param flatbuffers.Offset offset
     */
    static finishFooterBuffer(
      builder: flatbuffers.Builder,
      offset: flatbuffers.Offset
    ): void;
    static createFooter(
      builder: flatbuffers.Builder,
      version: NS7624605610262437867.org.apache.arrow.flatbuf.MetadataVersion,
      schemaOffset: flatbuffers.Offset,
      dictionariesOffset: flatbuffers.Offset,
      recordBatchesOffset: flatbuffers.Offset
    ): flatbuffers.Offset;
  }
}
/**
 * @constructor
 */
export declare namespace org.apache.arrow.flatbuf {
  class Block {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    /**
     * @param number i
     * @param flatbuffers.ByteBuffer bb
     * @returns Block
     */
    __init(i: number, bb: flatbuffers.ByteBuffer): Block;
    /**
     * Index to the start of the RecordBlock (note this is past the Message header)
     *
     * @returns flatbuffers.Long
     */
    offset(): flatbuffers.Long;
    /**
     * Length of the metadata
     *
     * @returns number
     */
    metaDataLength(): number;
    /**
     * Length of the data (this is aligned so there can be a gap between this and
     * the metadata).
     *
     * @returns flatbuffers.Long
     */
    bodyLength(): flatbuffers.Long;
    /**
     * @param flatbuffers.Builder builder
     * @param flatbuffers.Long offset
     * @param number metaDataLength
     * @param flatbuffers.Long bodyLength
     * @returns flatbuffers.Offset
     */
    static createBlock(
      builder: flatbuffers.Builder,
      offset: flatbuffers.Long,
      metaDataLength: number,
      bodyLength: flatbuffers.Long
    ): flatbuffers.Offset;
  }
}
