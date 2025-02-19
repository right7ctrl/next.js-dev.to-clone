import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import style from "./header.module.css";
import { Search } from "@material-ui/icons";

export default function Header() {
  const router = useRouter();
  return (
    <div id={style.header} className="fixed-top">
      <div className="container">
        <div className="row">
          <div id={style.leftContainer} className="col">
            <Link href="/">
              <img
                id={style.logo}
                src="https://play-lh.googleusercontent.com/BbOCITw24y0uayV9jSAJ7lv5iLs70QhhXwhD4ORWT1Yi3wYocyBWOv38jEwtKzuc_RE=s360-rw"
              />
            </Link>
            <div className="d-none d-sm-block" id={style.searchContainer}>
              <Search id={style.searchIcon} />
              <input placeholder="Ara..." id={style.searchInput} type="text" />
            </div>
          </div>
          <div id={style.rightContainer} className="col-xs">
            <Link href="/register">
              <a className={style.registerButton}>Kayıt Ol</a>
            </Link>
            <Link href="/login">
              <a className={style.loginButton}>Giriş Yap</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
