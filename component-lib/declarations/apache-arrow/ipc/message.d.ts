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

import { MessageHeader } from "../enum";
import { Message } from "./metadata/message";
import { ArrayBufferViewInput } from "../util/buffer";
import { ByteStream, ReadableSource, AsyncByteStream } from "../io/stream";
import { ArrowJSON, ArrowJSONLike, FileHandle } from "../io/interfaces";
/** @ignore */
export declare class MessageReader implements IterableIterator<Message> {
  protected source: ByteStream;
  constructor(
    source: ByteStream | ArrayBufferViewInput | Iterable<ArrayBufferViewInput>
  );
  [Symbol.iterator](): IterableIterator<Message>;
  next(): IteratorResult<Message>;
  throw(value?: any): any;
  return(value?: any): any;
  readMessage<T extends MessageHeader>(type?: T | null): Message<T> | null;
  readMessageBody(bodyLength: number): Uint8Array;
  readSchema(throwIfNull?: boolean): import("../schema").Schema<any> | null;
  protected readMetadataLength(): IteratorResult<number>;
  protected readMetadata(metadataLength: number): IteratorResult<Message>;
}
/** @ignore */
export declare class AsyncMessageReader
  implements AsyncIterableIterator<Message> {
  protected source: AsyncByteStream;
  constructor(source: ReadableSource<Uint8Array>);
  constructor(source: FileHandle, byteLength?: number);
  [Symbol.asyncIterator](): AsyncIterableIterator<Message>;
  next(): Promise<IteratorResult<Message>>;
  throw(value?: any): Promise<any>;
  return(value?: any): Promise<any>;
  readMessage<T extends MessageHeader>(
    type?: T | null
  ): Promise<Message<T> | null>;
  readMessageBody(bodyLength: number): Promise<Uint8Array>;
  readSchema(
    throwIfNull?: boolean
  ): Promise<import("../schema").Schema<any> | null>;
  protected readMetadataLength(): Promise<IteratorResult<number>>;
  protected readMetadata(
    metadataLength: number
  ): Promise<IteratorResult<Message>>;
}
/** @ignore */
export declare class JSONMessageReader extends MessageReader {
  private _schema;
  private _json;
  private _body;
  private _batchIndex;
  private _dictionaryIndex;
  constructor(source: ArrowJSON | ArrowJSONLike);
  next(): any;
  readMessageBody(_bodyLength?: number): any;
  readMessage<T extends MessageHeader>(type?: T | null): Message<T> | null;
  readSchema(): import("../schema").Schema<any>;
}
/** @ignore */
export declare const PADDING = 4;
/** @ignore */
export declare const MAGIC_STR = "ARROW1";
/** @ignore */
export declare const MAGIC: Uint8Array;
/** @ignore */
export declare function checkForMagicArrowString(
  buffer: Uint8Array,
  index?: number
): boolean;
/** @ignore */
export declare const magicLength: number;
/** @ignore */
export declare const magicAndPadding: number;
/** @ignore */
export declare const magicX2AndPadding: number;
