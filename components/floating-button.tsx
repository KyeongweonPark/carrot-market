import Link from "next/link";

interface FloatingButton {
  href: string;
  children: React.ReactNode;
}

export default function FloatingButton({ children, href }: FloatingButton) {
  return (
    <Link href={href}>
      <a className="fixed bottom-24 right-5 cursor-pointer rounded-full bg-orange-400 p-4 text-white shadow-sm transition-colors hover:bg-orange-500">
        {children}
      </a>
    </Link>
  );
}
