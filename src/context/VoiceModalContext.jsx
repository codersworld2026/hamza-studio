import { createContext, useCallback, useContext, useMemo, useState } from "react";

const VoiceModalContext = createContext({ isOpen: false, open: () => {}, close: () => {} });

export function VoiceModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);
  return <VoiceModalContext.Provider value={value}>{children}</VoiceModalContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useVoiceModal() {
  return useContext(VoiceModalContext);
}
