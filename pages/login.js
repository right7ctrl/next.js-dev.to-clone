import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import Layout from "../components/layout/layout";
import Head from "next/head";

export default function Login() {
  return (
    <div id="__next" className="container col-sm-12 col-md-3">
      <Head>
        <title>Giriş Yap</title>
      </Head>
      <Layout>
        <div className="logoContainer">
          <img
            className="logo"
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
        <div className="forgotPassword">
          <a href="">Şifremi Unuttum</a>
        </div>

        <Button size="lg" block className="loginBtn">
          Giriş Yap
        </Button>
        <div className="dontHaveAcc d-flex">
          <div id="dder"></div>
          <p>Hesabınız yok mu?</p>
          <div id="dder"></div>
        </div>
        <Link href="/register">
          <Button size="lg" block className="regButton">
            Hemen Kaydolun
          </Button>
        </Link>
      </Layout>
    </div>
  );
}
