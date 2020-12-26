import { Button, Form } from "react-bootstrap";
import Header from "../components/header";
import Layout from "../components/layout/layout";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  return (
    <div id="__next" className="container col-sm-12 col-md-3">
      <Layout>
        <div className="logoContainer">
          <img
            className="logo"
            src="https://play-lh.googleusercontent.com/BbOCITw24y0uayV9jSAJ7lv5iLs70QhhXwhD4ORWT1Yi3wYocyBWOv38jEwtKzuc_RE=s360-rw"
          />
          <h3>Kayıt Ol</h3>
          <p>Kayıtlı hesabınız ile giriş yapın</p>
        </div>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="E-Mail" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Şifre" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword2">
          <Form.Control type="password" placeholder="Şifre" />
        </Form.Group>
        <div className="forgotPassword">
          <a href="">Şifremi Unuttum</a>
        </div>

        <Button size="lg" block className="loginBtn">
          Kayıt Ol
        </Button>
        <div className="dontHaveAcc d-flex">
          <div id="dder"></div>
          <p>Hesabınız yok mu?</p>
          <div id="dder"></div>
        </div>
        <Link href="/login">
          <Button size="lg" block className="regButton">
            Giriş yap
          </Button>
        </Link>
      </Layout>
    </div>
  );
}
