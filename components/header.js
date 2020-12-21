import Link from "next/link";
import style from "./header.module.css";
import { Search } from "@material-ui/icons";

export default function Header() {
  return (
    <div id={style.header}>
      <div className="container">
        <div class="row">
          <div id={style.leftContainer} class="col-sm-12 col-md-6">
            <img
              id={style.logo}
              src="https://play-lh.googleusercontent.com/BbOCITw24y0uayV9jSAJ7lv5iLs70QhhXwhD4ORWT1Yi3wYocyBWOv38jEwtKzuc_RE=s360-rw"
            />
            <div id={style.searchContainer}>
              <Search id={style.searchIcon} />
              <input placeholder="Ara..." id={style.searchInput} type="text" />
            </div>
          </div>
          <div
            id={style.rightContainer}
            class="col-md-6 d-none d-sm-block float-right"
          >
            <div className={style.registerButton}>Kayıt Ol</div>
            <div className={style.loginButton}>Giriş Yap</div>
          </div>
        </div>
      </div>
    </div>
  );
}
