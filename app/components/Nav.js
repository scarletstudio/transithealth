import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/explorer">Explorer</Link>
      <Link href="/questions">Questions</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}