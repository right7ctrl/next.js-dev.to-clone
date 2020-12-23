import React from "react";
import { Modal, Container, Button } from "@material-ui/core";
export default function LoginModal({ show, onHide }) {
  return (
    <>
      <Modal
        isOpen={true} // The modal should always be shown on page load, it is the 'page'
        onRequestClose={() => router.push("/")}
        contentLabel="Post modal"
      >
        <p>asdasdasdas</p>
      </Modal>
    </>
  );
}
