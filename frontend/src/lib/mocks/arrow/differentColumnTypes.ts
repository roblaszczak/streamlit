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

// Raw data (in Apache Arrow format) for 2 dataframes
// with different column types.
//
// df1 = pd.DataFrame([["baz", "1"], ["qux", "2"]], columns=[1, 2], index=["i1", "i2"])
// df2 = pd.DataFrame([["foo", "1"], ["bar", "2"]], columns=["c1", "c2"], index=["i1", "i2"])

export const DIFFERENT_COLUMN_TYPES = new Uint8Array([
  255,
  255,
  255,
  255,
  72,
  3,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  10,
  0,
  14,
  0,
  6,
  0,
  5,
  0,
  8,
  0,
  10,
  0,
  0,
  0,
  0,
  1,
  4,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  10,
  0,
  12,
  0,
  0,
  0,
  4,
  0,
  8,
  0,
  10,
  0,
  0,
  0,
  120,
  2,
  0,
  0,
  4,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  12,
  0,
  0,
  0,
  8,
  0,
  12,
  0,
  4,
  0,
  8,
  0,
  8,
  0,
  0,
  0,
  80,
  2,
  0,
  0,
  4,
  0,
  0,
  0,
  67,
  2,
  0,
  0,
  123,
  34,
  105,
  110,
  100,
  101,
  120,
  95,
  99,
  111,
  108,
  117,
  109,
  110,
  115,
  34,
  58,
  32,
  91,
  34,
  95,
  95,
  105,
  110,
  100,
  101,
  120,
  95,
  108,
  101,
  118,
  101,
  108,
  95,
  48,
  95,
  95,
  34,
  93,
  44,
  32,
  34,
  99,
  111,
  108,
  117,
  109,
  110,
  95,
  105,
  110,
  100,
  101,
  120,
  101,
  115,
  34,
  58,
  32,
  91,
  123,
  34,
  110,
  97,
  109,
  101,
  34,
  58,
  32,
  110,
  117,
  108,
  108,
  44,
  32,
  34,
  102,
  105,
  101,
  108,
  100,
  95,
  110,
  97,
  109,
  101,
  34,
  58,
  32,
  110,
  117,
  108,
  108,
  44,
  32,
  34,
  112,
  97,
  110,
  100,
  97,
  115,
  95,
  116,
  121,
  112,
  101,
  34,
  58,
  32,
  34,
  105,
  110,
  116,
  54,
  52,
  34,
  44,
  32,
  34,
  110,
  117,
  109,
  112,
  121,
  95,
  116,
  121,
  112,
  101,
  34,
  58,
  32,
  34,
  105,
  110,
  116,
  54,
  52,
  34,
  44,
  32,
  34,
  109,
  101,
  116,
  97,
  100,
  97,
  116,
  97,
  34,
  58,
  32,
  110,
  117,
  108,
  108,
  125,
  93,
  44,
  32,
  34,
  99,
  111,
  108,
  117,
  109,
  110,
  115,
  34,
  58,
  32,
  91,
  123,
  34,
  110,
  97,
  109,
  101,
  34,
  58,
  32,
  34,
  49,
  34,
  44,
  32,
  34,
  102,
  105,
  101,
  108,
  100,
  95,
  110,
  97,
  109,
  101,
  34,
  58,
  32,
  34,
  49,
  34,
  44,
  32,
  34,
  112,
  97,
  110,
  100,
  97,
  115,
  95,
  116,
  121,
  112,
  101,
  34,
  58,
  32,
  34,
  117,
  110,
  105,
  99,
  111,
  100,
  101,
  34,
  44,
  32,
  34,
  110,
  117,
  109,
  112,
  121,
  95,
  116,
  121,
  112,
  101,
  34,
  58,
  32,
  34,
  111,
  98,
  106,
  101,
  99,
  116,
  34,
  44,
  32,
  34,
  109,
  101,
  116,
  97,
  100,
  97,
  116,
  97,
  34,
  58,
  32,
  110,
  117,
  108,
  108,
  125,
  44,
  32,
  123,
  34,
  110,
  97,
  109,
  101,
  34,
  58,
  32,
  34,
  50,
  34,
  44,
  32,
  34,
  102,
  105,
  101,
  108,
  100,
  95,
  110,
  97,
  109,
  101,
  34,
  58,
  32,
  34,
  50,
  34,
  44,
  32,
  34,
  112,
  97,
  110,
  100,
  97,
  115,
  95,
  116,
  121,
  112,
  101,
  34,
  58,
  32,
  34,
  117,
  110,
  105,
  99,
  111,
  100,
  101,
  34,
  44,
  32,
  34,
  110,
  117,
  109,
  112,
  121,
  95,
  116,
  121,
  112,
  101,
  34,
  58,
  32,
  34,
  111,
  98,
  106,
  101,
  99,
  116,
  34,
  44,
  32,
  34,
  109,
  101,
  116,
  97,
  100,
  97,
  116,
  97,
  34,
  58,
  32,
  110,
  117,
  108,
  108,
  125,
  44,
  32,
  123,
  34,
  110,
  97,
  109,
  101,
  34,
  58,
  32,
  110,
  117,
  108,
  108,
  44,
  32,
  34,
  102,
  105,
  101,
  108,
  100,
  95,
  110,
  97,
  109,
  101,
  34,
  58,
  32,
  34,
  95,
  95,
  105,
  110,
  100,
  101,
  120,
  95,
  108,
  101,
  118,
  101,
  108,
  95,
  48,
  95,
  95,
  34,
  44,
  32,
  34,
  112,
  97,
  110,
  100,
  97,
  115,
  95,
  116,
  121,
  112,
  101,
  34,
  58,
  32,
  34,
  117,
  110,
  105,
  99,
  111,
  100,
  101,
  34,
  44,
  32,
  34,
  110,
  117,
  109,
  112,
  121,
  95,
  116,
  121,
  112,
  101,
  34,
  58,
  32,
  34,
  111,
  98,
  106,
  101,
  99,
  116,
  34,
  44,
  32,
  34,
  109,
  101,
  116,
  97,
  100,
  97,
  116,
  97,
  34,
  58,
  32,
  110,
  117,
  108,
  108,
  125,
  93,
  44,
  32,
  34,
  99,
  114,
  101,
  97,
  116,
  111,
  114,
  34,
  58,
  32,
  123,
  34,
  108,
  105,
  98,
  114,
  97,
  114,
  121,
  34,
  58,
  32,
  34,
  112,
  121,
  97,
  114,
  114,
  111,
  119,
  34,
  44,
  32,
  34,
  118,
  101,
  114,
  115,
  105,
  111,
  110,
  34,
  58,
  32,
  34,
  52,
  46,
  48,
  46,
  48,
  34,
  125,
  44,
  32,
  34,
  112,
  97,
  110,
  100,
  97,
  115,
  95,
  118,
  101,
  114,
  115,
  105,
  111,
  110,
  34,
  58,
  32,
  34,
  49,
  46,
  50,
  46,
  52,
  34,
  125,
  0,
  6,
  0,
  0,
  0,
  112,
  97,
  110,
  100,
  97,
  115,
  0,
  0,
  3,
  0,
  0,
  0,
  116,
  0,
  0,
  0,
  60,
  0,
  0,
  0,
  4,
  0,
  0,
  0,
  168,
  255,
  255,
  255,
  0,
  0,
  1,
  5,
  16,
  0,
  0,
  0,
  36,
  0,
  0,
  0,
  4,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  0,
  95,
  95,
  105,
  110,
  100,
  101,
  120,
  95,
  108,
  101,
  118,
  101,
  108,
  95,
  48,
  95,
  95,
  0,
  0,
  0,
  168,
  255,
  255,
  255,
  220,
  255,
  255,
  255,
  0,
  0,
  1,
  5,
  16,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  4,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  50,
  0,
  0,
  0,
  204,
  255,
  255,
  255,
  16,
  0,
  20,
  0,
  8,
  0,
  6,
  0,
  7,
  0,
  12,
  0,
  0,
  0,
  16,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  1,
  5,
  16,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  4,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  49,
  0,
  0,
  0,
  4,
  0,
  4,
  0,
  4,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  255,
  255,
  255,
  255,
  24,
  1,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  12,
  0,
  22,
  0,
  6,
  0,
  5,
  0,
  8,
  0,
  12,
  0,
  12,
  0,
  0,
  0,
  0,
  3,
  4,
  0,
  24,
  0,
  0,
  0,
  72,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  10,
  0,
  24,
  0,
  12,
  0,
  4,
  0,
  8,
  0,
  10,
  0,
  0,
  0,
  172,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  9,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  12,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  6,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  12,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  40,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  48,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  48,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  12,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  64,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  3,
  0,
  0,
  0,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  3,
  0,
  0,
  0,
  6,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  98,
  97,
  122,
  113,
  117,
  120,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  49,
  50,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  0,
  0,
  0,
  4,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  105,
  49,
  105,
  50,
  0,
  0,
  0,
  0,
  255,
  255,
  255,
  255,
  0,
  0,
  0,
  0,
])
