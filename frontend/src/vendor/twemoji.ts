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

/* eslint-disable */

// We only need a few functions of Twemoji to locate the CDN emoji image,
// so we copy them instead of importing the whole library.

// https://github.com/twitter/twemoji/blob/42f8843cb3aa1f9403d5479d7e3f7e01176ad08e/scripts/build.js#L571
export function toCodePoint(unicodeSurrogates: string, sep?: string): string {
  const r = []
  let c = 0
  let p = 0
  let i = 0
  while (i < unicodeSurrogates.length) {
    c = unicodeSurrogates.charCodeAt(i++)
    if (p) {
      r.push((0x10000 + ((p - 0xd800) << 10) + (c - 0xdc00)).toString(16))
      p = 0
    } else if (0xd800 <= c && c <= 0xdbff) {
      p = c
    } else {
      r.push(c.toString(16))
    }
  }
  return r.join(sep || "-")
}

// https://github.com/twitter/twemoji/blob/42f8843cb3aa1f9403d5479d7e3f7e01176ad08e/scripts/build.js#L255
const UFE0Fg = /\uFE0F/g
const U200D = String.fromCharCode(0x200d)

// https://github.com/twitter/twemoji/blob/42f8843cb3aa1f9403d5479d7e3f7e01176ad08e/scripts/build.js#L344
export function grabTheRightIcon(rawText: string) {
  return toCodePoint(
    rawText.indexOf(U200D) < 0 ? rawText.replace(UFE0Fg, "") : rawText
  )
}
