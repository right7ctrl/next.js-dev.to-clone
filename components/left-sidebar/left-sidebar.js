import Link from "next/link";
import style from "./left-sidebar.module.css";
import { Home } from "@material-ui/icons";

export default function LeftSidebar() {
  return (
    <div className="col-md-2 col-sm-4" id={style.sidebar}>
      <nav>
        <h6>Menü</h6>
        <div id={style.menuItem} className="d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="24"
            height="24"
            role="img"
            aria-labelledby="a66k3o2gnvp2tr0pnnyn5d3afdzhmyq7"
            class="crayons-icon crayons-icon--default"
          >
            <title id="a66k3o2gnvp2tr0pnnyn5d3afdzhmyq7">Home</title>
            <g class="nc-icon-wrapper">
              <path
                fill="#A0041E"
                d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"
              ></path>
              <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
              <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
              <path
                fill="#66757F"
                d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"
              ></path>
              <path
                fill="#66757F"
                d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"
              ></path>
              <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
              <path
                fill="#55ACEE"
                d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"
              ></path>
              <path
                fill="#5C913B"
                d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"
              ></path>
            </g>
          </svg>
          <p>Anasayfa</p>
        </div>
        <div id={style.menuItem} className="d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="24"
            height="24"
          >
            <g class="nc-icon-wrapper">
              <path
                fill="#FFD983"
                d="M36 4H14a4 4 0 00-4 4v24H8a4 4 0 000 8h24a4 4 0 004-4V12a4 4 0 000-8z"
              ></path>
              <path fill="#E39F3D" d="M12 14h24v-2H14l-2-1z"></path>
              <path
                fill="#FFE8B6"
                d="M14 4a4 4 0 00-4 4v24.555A3.955 3.955 0 008 32a4 4 0 104 4V11.445c.59.344 1.268.555 2 .555a4 4 0 000-8z"
              ></path>
              <path
                fill="#C1694F"
                d="M16 8a2 2 0 11-4.001-.001A2 2 0 0116 8m-6 28a2 2 0 11-4.001-.001A2 2 0 0110 36m24-17a1 1 0 01-1 1H15a1 1 0 010-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1"
              ></path>
            </g>
          </svg>
          <p>Gündem</p>
        </div>
        <div id={style.menuItem} className="d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="24"
            height="24"
          >
            <g class="nc-icon-wrapper">
              <path
                fill="#292F33"
                d="M10 19h24v2H10zm15 15c0 2.208-.792 4-3 4-2.209 0-3-1.792-3-4s.791-2 3-2c2.208 0 3-.208 3 2z"
              ></path>
              <path
                fill="#66757F"
                d="M22 35c-6.627 0-10 1.343-10 3v2h20v-2c0-1.657-3.373-3-10-3z"
              ></path>
              <path
                fill="#99AAB5"
                d="M22 4a9 9 0 00-9 9v7h18v-7a9 9 0 00-9-9z"
              ></path>
              <g fill="#292F33" transform="translate(4 4)">
                <circle cx="15.5" cy="2.5" r="1.5"></circle>
                <circle cx="20.5" cy="2.5" r="1.5"></circle>
                <circle cx="17.5" cy="6.5" r="1.5"></circle>
                <circle cx="22.5" cy="6.5" r="1.5"></circle>
                <circle cx="12.5" cy="6.5" r="1.5"></circle>
                <circle cx="15.5" cy="10.5" r="1.5"></circle>
                <circle cx="10.5" cy="10.5" r="1.5"></circle>
                <circle cx="20.5" cy="10.5" r="1.5"></circle>
                <circle cx="25.5" cy="10.5" r="1.5"></circle>
                <circle cx="17.5" cy="14.5" r="1.5"></circle>
                <circle cx="22.5" cy="14.5" r="1.5"></circle>
                <circle cx="12.5" cy="14.5" r="1.5"></circle>
              </g>
              <path
                fill="#66757F"
                d="M13 19.062V21c0 4.971 4.029 9 9 9s9-4.029 9-9v-1.938H13z"
              ></path>
              <path
                fill="#66757F"
                d="M34 18a1 1 0 00-1 1v2c0 6.074-4.925 11-11 11s-11-4.926-11-11v-2a1 1 0 00-2 0v2c0 7.18 5.82 13 13 13s13-5.82 13-13v-2a1 1 0 00-1-1z"
              ></path>
            </g>
          </svg>
          <p>Podcastler</p>
        </div>
        <div id={style.menuItem} className="d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="24"
            height="24"
          >
            <g transform="translate(4 4)">
              <path
                fill="#31373D"
                d="M34.074 18l-4.832 3H28v-4c0-.088-.02-.169-.026-.256C31.436 15.864 34 12.735 34 9a8 8 0 00-16.001 0c0 1.463.412 2.822 1.099 4H14.92c.047-.328.08-.66.08-1a7 7 0 10-14 0 6.995 6.995 0 004 6.317V29a4 4 0 004 4h15a4 4 0 004-4v-3h1.242l4.832 3H35V18h-.926zM28.727 3.977a5.713 5.713 0 012.984 4.961L28.18 8.35a2.276 2.276 0 00-.583-.982l1.13-3.391zm-.9 6.342l3.552.592a5.713 5.713 0 01-4.214 3.669 3.985 3.985 0 00-1.392-1.148l.625-2.19a2.425 2.425 0 001.429-.923zM26 3.285c.282 0 .557.027.828.067l-1.131 3.392c-.404.054-.772.21-1.081.446L21.42 5.592A5.703 5.703 0 0126 3.285zM20.285 9c0-.563.085-1.106.236-1.62l3.194 1.597-.002.023c0 .657.313 1.245.771 1.662L23.816 13h-1.871a5.665 5.665 0 01-1.66-4zm-9.088-.385A4.64 4.64 0 0112.667 12c0 .344-.043.677-.113 1H10.1c.145-.304.233-.641.233-1a2.32 2.32 0 00-.392-1.292l1.256-2.093zM8 7.333c.519 0 1.01.105 1.476.261L8.22 9.688c-.073-.007-.145-.022-.22-.022a2.32 2.32 0 00-1.292.392L4.615 8.803A4.64 4.64 0 018 7.333zM3.333 12c0-.519.105-1.01.261-1.477l2.095 1.257c-.007.073-.022.144-.022.22 0 .75.36 1.41.91 1.837a3.987 3.987 0 00-1.353 1.895C4.083 14.881 3.333 13.533 3.333 12z"
              ></path>
              <circle fill="#8899A6" cx="24" cy="19" r="2"></circle>
              <circle fill="#8899A6" cx="9" cy="19" r="2"></circle>
              <path
                fill="#8899A6"
                d="M24 27a2 2 0 00-2-2H11a2 2 0 00-2 2v6a2 2 0 002 2h11a2 2 0 002-2v-6z"
              ></path>
            </g>
          </svg>
          <p>Videolar</p>
        </div>
        <div id={style.menuItem} className="d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="24"
            height="24"
          >
            <g class="nc-icon-wrapper">
              <path
                fill="#FFD983"
                d="M33 15.06c0 6.439-5 7.439-5 13.44 0 3.098-3.123 3.359-5.5 3.359-2.053 0-6.586-.779-6.586-3.361C15.914 22.5 11 21.5 11 15.06c0-6.031 5.285-10.92 11.083-10.92C27.883 4.14 33 9.029 33 15.06z"
              ></path>
              <path
                fill="#CCD6DD"
                d="M26.167 36.5c0 .828-2.234 2.5-4.167 2.5-1.933 0-4.167-1.672-4.167-2.5 0-.828 2.233-.5 4.167-.5 1.933 0 4.167-.328 4.167.5z"
              ></path>
              <path
                fill="#FFCC4D"
                d="M26.707 14.293a.999.999 0 00-1.414 0L22 17.586l-3.293-3.293a1 1 0 10-1.414 1.414L21 19.414V30a1 1 0 102 0V19.414l3.707-3.707a.999.999 0 000-1.414z"
              ></path>
              <path
                fill="#99AAB5"
                d="M28 35a2 2 0 01-2 2h-8a2 2 0 01-2-2v-6h12v6z"
              ></path>
              <path
                fill="#CCD6DD"
                d="M15.999 36a1 1 0 01-.163-1.986l12-2a.994.994 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014zm0-4a1 1 0 01-.163-1.986l12-2a.995.995 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014z"
              ></path>
            </g>
          </svg>
          <p>S.S.S</p>
        </div>
      </nav>

      <nav>
        <h6>Trendler</h6>
        <div id={style.menuItem} className="d-flex">
          <p>#soru</p>
        </div>
        <div id={style.menuItem} className="d-flex">
          <p>#gündem</p>
        </div>
        <div id={style.menuItem} className="d-flex">
          <p>#bişeyler</p>
        </div>
        <div id={style.menuItem} className="d-flex">
          <p>#neolaki</p>
        </div>
      </nav>
    </div>
  );
}
