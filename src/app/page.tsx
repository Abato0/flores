// import Image from "next/image";
import Link from "next/link";
import "./main.css";

export default function Home() {
  return (
    <div className="body-main">
      <div className="greetings">
        <span>M</span>
        <span>I</span>
        &nbsp;
        <span>A</span>
        <span>M</span>
        <span>O</span>
        <span>R</span>
        <span>C</span>
        <span>I</span>
        <span>T</span>
        <span>O</span>
      </div>
      <div className="greetings">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="description">
        <span>
          Te obsequio estas rosas, a ti, la mujer más bella del mundo. ¿Las
          aceptarías?
        </span>
      </div>
      <div className="button">
        <button>
          <Link href="/flores">Acepto</Link>
        </button>
      </div>
    </div>
  );
}
