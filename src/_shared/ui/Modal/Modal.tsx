import styled from '@emotion/styled';
import portal from '../../util/Portal/portal.util';

interface ModalProps {
  open: boolean;
  children?: React.ReactNode;
}

const ModalContainer = styled.div({
  position: 'fixed',
  zIndex: 1010,
  top: '0',
  left: '0',
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
  return (
    <>
      {open &&
        portal(
          <>
            <ModalContainer>{children}</ModalContainer>
            <Dimmer className="dimmer" />
          </>,
        )}
    </>
  );
};
