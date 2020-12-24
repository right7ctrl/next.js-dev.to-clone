import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import style from "../styles/login-modal.module.css";
import Header from "../components/header";
import Head from "next";
export default function Login() {
  return (
    <div className={style.modal + " container col-sm-12 col-md-3"}>
      <Header />
      <div className={style.logoContainer}>
        <img
          className={style.logo}
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
      <div className={style.forgotPassword}>
        <a href="">Şifremi Unuttum</a>
      </div>

      <Button size="lg" block className={style.loginBtn}>
        Giriş Yap
      </Button>
      <div className={style.dontHaveAcc + " d-flex"}>
        <div id={style.dder}></div>
        <p>Hesabınız yok mu?</p>
        <div id={style.dder}></div>
      </div>

      <Button size="lg" block className={style.regButton}>
        Hemen Kaydolun
      </Button>
    </div>
  );
}
