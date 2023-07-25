import { Modal as ModalComp } from './Modal';
import { MHeader } from './components/MHeader';
import { MContents } from './components/MContents';
import { MFooter } from './components/MFooter';

type ModalType = typeof ModalComp & {
  Header: typeof MHeader;
  Contents: typeof MContents;
  Footer: typeof MFooter;
};

const Modal = ModalComp as ModalType;

Modal.Header = MHeader;
Modal.Contents = MContents;
Modal.Footer = MFooter;

export { Modal };
