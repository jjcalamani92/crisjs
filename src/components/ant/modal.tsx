import { Button, Modal } from 'antd';
import React, { FC, useState } from 'react';

interface Props {
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalComponent:FC<Props>= ({modal, setModal}) => {
  // const [modal, setModal] = useState(false);

  return (
    <>
      {/* <Button type="primary" onClick={() => setModal(true)}>
        Vertically centered modal dialog
      </Button> */}
      <Modal
        title="Vertically centered modal dialog"
        centered
        visible={modal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};
