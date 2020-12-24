import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import styles from "./login-modal.module.css";

export default function Example({ show, handleClose }) {
  return (
    <>
      <Modal className={styles.modal} show={show} onHide={handleClose}>
        <Modal.Body>
          <div className={styles.logoContainer}>
            <img
              className={styles.logo}
              src="https://play-lh.googleusercontent.com/BbOCITw24y0uayV9jSAJ7lv5iLs70QhhXwhD4ORWT1Yi3wYocyBWOv38jEwtKzuc_RE=s360-rw"
            />
            <h3>Giriş Yap</h3>
            <p>Kayıtlı hesabınız ile giriş yapın</p>
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="E-Mail" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Şifre" />
          </Form.Group>
          <div className={styles.forgotPassword}>
            <a href="">Şifremi Unuttum</a>
          </div>

          <Button size="lg" block variant="primary" onClick={handleClose}>
            Giriş Yap
          </Button>
          <p>Hesabınız yok mu?</p>
          <Button size="lg" block variant="secondary" onClick={handleClose}>
            Hemen Kaydolun
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
