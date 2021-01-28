import React, { createContext } from "react"

export type IUiContext = {
  ns?: string
  getPrefix: (element: string) => string
}

export const UiContext = createContext<IUiContext>({
  ns: "kb",
  getPrefix: () => "",
})

export const UiContextProvider: React.FC = ({ children }) => {
  const defaultConfig = {
    ns: "kb",
  }

  const getPrefix = (element: string) => {
    return `${defaultConfig.ns}--${element}`
  }

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