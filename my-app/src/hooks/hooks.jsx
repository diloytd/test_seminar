//Хук создан для работы с модальными окнами. НИГДЕ не используется. 
import { useState } from "react";
export const useModalState = ({ initialOpen = false } = {}) => {
    const [isOpen, setIsOpen] = useState(initialOpen);
  
    const onOpen = () => {
      setIsOpen(true);
    };
  
    const onClose = () => {
      setIsOpen(false);
    };
  
    const onToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return { onOpen, onClose, isOpen, onToggle };
  };