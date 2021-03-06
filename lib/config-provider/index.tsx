import React, { createContext } from "react"
import _ from "lodash"

export type IUiContext = {
  ns?: string
  getPrefix: (element: string) => string
}

export const UiContext = createContext<IUiContext>({
  ns: "kb",
  getPrefix: () => "",
})

export const Provider: React.FC = ({ children }) => {
  const defaultConfig = {
    ns: "kb",
  }

  const getPrefix = (element: string) =>
    `${defaultConfig.ns}__${_.kebabCase(element)}`

  const _providerValue = () => {
    return {
      ...defaultConfig,
      getPrefix,
    }
  }

  return (
    <UiContext.Provider value={_providerValue()}>{children}</UiContext.Provider>
  )
}
