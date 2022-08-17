import React, { ReactElement } from "react"
import { isFromMac } from "src/lib/utils"
import { StyledWidgetInstructions } from "src/components/widgets/BaseWidget"
import { StyledMessage } from "./styled-components"

export interface Props {
  dirty: boolean
  value: string
  maxLength?: number
  className?: string
  type?: "multiline" | "single"
}

const InputInstructions = ({
  dirty,
  value,
  maxLength,
  className,
  type = "single",
}: Props): ReactElement => {
  const messages: ReactElement[] = []
  const addMessage = (text: string, shouldBlink = false): void => {
    messages.push(
      <StyledMessage
        key={messages.length}
        includeDot={messages.length > 0}
        shouldBlink={shouldBlink}
      >
        {text}
      </StyledMessage>
    )
  }

  if (dirty) {
    if (type === "multiline") {
      if (isFromMac()) {
        addMessage("Press ⌘+Enter to apply")
      } else {
        addMessage("Press Ctrl+Enter to apply")
      }
    } else {
      addMessage("Press Enter to apply")
    }
  }

  if (maxLength) {
    addMessage(
      `${value.length}/${maxLength}`,
      dirty && value.length >= maxLength
    )
  }

  return (
    <StyledWidgetInstructions className={className}>
      {messages}
    </StyledWidgetInstructions>
  )
}

export default InputInstructions
