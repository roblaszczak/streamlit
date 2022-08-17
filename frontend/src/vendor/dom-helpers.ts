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

/* eslint-disable */

// We only need a single function from https://github.com/react-bootstrap/dom-helpers,
// so we copy it here instead of adding a new dependency.

const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
)

let size: number

// https://github.com/react-bootstrap/dom-helpers/blob/3f509a03c5e330faa93bcf8acf30976b5a7bacac/src/scrollbarSize.ts#L5
export function scrollbarSize(recalc?: boolean) {
  if ((!size && size !== 0) || recalc) {
    if (canUseDOM) {
      const scrollDiv = document.createElement("div")

      scrollDiv.style.position = "absolute"
      scrollDiv.style.top = "-9999px"
      scrollDiv.style.width = "50px"
      scrollDiv.style.height = "50px"
      scrollDiv.style.overflow = "scroll"

      document.body.appendChild(scrollDiv)
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth
      document.body.removeChild(scrollDiv)
    }
  }

  return size
}
