import Link from "next/link"

export default function Header() {
  return (
    <header>
      <noscript>
        <style></style>
      </noscript>
      <ul className="nav_wrapper">
        <Link href="/">
          <a className="nav_item logo"> </a>
        </Link>
        <Link href="/room">
          <a className="nav_item"> </a>
        </Link>
        <Link href="/mypage">
          <a className="nav_item avatar"> </a>
        </Link>
      </ul>
    </header>
  )
}