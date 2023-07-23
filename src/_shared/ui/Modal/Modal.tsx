import { useEffect } from 'react';
import styled from '@emotion/styled';
import portal from '../../util/Portal/portal.util';
import {
  allowScroll,
  lockScroll,
  preventScroll,
} from '../../util/Element/element.util';

interface ModalProps {
  open: boolean;
  children?: React.ReactNode;
}

const ModalWrap = styled.div({
  position: 'absolute',
  zIndex: 1010,
  top: 0,
  left: 0,
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ModalContainer = styled.div({
  backgroundColor: '#fff',
  borderRadius: '5px',
  width: '30rem',
  margin: '0 30px',
  position: 'relative',

  [`@media (max-width: ${import.meta.env.VITE_MOBILE_WIDTH})`]: {
    width: '100%',
    height: '100vh',
    margin: '0',
  },
});

const Dimmer = styled.div({
  position: 'fixed',
  zIndex: 1009,
  top: '0',
  left: '0',
  height: '100vh',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

export const Modal = ({ open, children }: ModalProps) => {
  useEffect(() => {
    const prevScrollY = preventScroll();
    if (open) {
      lockScroll(prevScrollY);
    } else {
      allowScroll(prevScrollY);
    }
  }, [open]);

  return (
    <>
      {open &&
        portal(
          <>
            <ModalWrap className="modal-wrap">
              <ModalContainer className="modal">{children}</ModalContainer>
            </ModalWrap>
            <Dimmer className="dimmer" />
          </>,
        )}
    </>
  );
};
