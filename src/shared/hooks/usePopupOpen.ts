import React from 'react';
import { usePopupContext } from 'src/contexts/usePopupContext';

// кастомный хук для плавного открытия попапа,
// его закрытие по оверлею, иконке и кнопке esc,
// a так же fixed позициоинирование при скролле
// и липкая кнопка с хедера

export default function usePopupOpen() {
  const { isOpenPopup, setIsOpenPopup, isStickyButton, setStickyButton } =
    usePopupContext();
  const [isStickyPopup, setIsStickyPopup] = React.useState<boolean>(false);
  const popupContainerRef = React.useRef<HTMLDivElement | null>(null);
  const modalRef = React.useRef<HTMLDivElement | null>(null);

  const handleOpenPopup = () => {
    setStickyButton(false);
    setIsOpenPopup(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClosePopup = React.useCallback(() => {
    setIsOpenPopup(false);
    document.body.style.overflow = 'auto';
  }, []);

  const handleScrollHeader = React.useCallback(() => {
    if (isOpenPopup) return;
    if (window.scrollY > 70) {
      setStickyButton(true);
    } else {
      setStickyButton(false);
    }
  }, [isOpenPopup]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScrollHeader);

    return () => {
      window.removeEventListener('scroll', handleScrollHeader);
    };
  }, [handleScrollHeader]);

  React.useEffect(() => {
    if (isOpenPopup) {
      setStickyButton(false);
    }
  }, [isOpenPopup]);

  React.useEffect(() => {
    if (modalRef.current && isOpenPopup) {
      const modal = modalRef.current;
      modal.style.display = 'block';
      modal.style.opacity = '0';
      modal.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 400,
        easing: 'ease-in-out',
        fill: 'forwards',
      });
    }
  }, [isOpenPopup]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (popupContainerRef.current) {
        setIsStickyPopup(popupContainerRef.current.scrollTop > 100);
      }
    };
    const popupContainer = popupContainerRef.current;
    if (popupContainerRef.current) {
      popupContainerRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (popupContainer) {
        popupContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isOpenPopup]);

  React.useEffect(() => {
    function closeByEscape(evt: KeyboardEvent) {
      if (evt.key === 'Escape') {
        handleClosePopup();
      }
    }

    function closeByOverlayClick(evt: MouseEvent) {
      const target = evt.target as HTMLElement;
      if (
        target.classList.contains('popup') ||
        target.classList.contains('button__close') ||
        target.classList.contains('svg-close')
      ) {
        handleClosePopup();
      }
    }
    if (isOpenPopup) {
      document.addEventListener('keydown', closeByEscape);
      document.addEventListener('click', closeByOverlayClick);
    }
    return () => {
      document.removeEventListener('keydown', closeByEscape);
      document.removeEventListener('click', closeByOverlayClick);
    };
  }, [isOpenPopup, handleClosePopup]);

  return {
    isStickyPopup,
    isStickyButton,
    modalRef,
    isOpenPopup,
    popupContainerRef,
    setStickyButton,
    handleOpenPopup,
    handleClosePopup,
  };
}
