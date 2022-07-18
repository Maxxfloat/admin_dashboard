import { useRouter } from "next/router";
import Link from "next/link";
import { ComponentProps, CSSProperties, FC, ReactNode } from "react";

export { NavLink };

type CustomClassNameCallback = (a: boolean) => string;
type CustomStyleCallback = (a: boolean) => CSSProperties;

const NavLink: FC<
  {
    href: string;
    exact?: boolean;
    children: ReactNode;
    className?: string | CustomClassNameCallback;
    style?: CSSProperties | CustomStyleCallback;
  } & Omit<ComponentProps<"a">, "className">
> = ({ href, exact, children, className, style, ...props }) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  let CustomClassName: string;
  let CustomStyle: CSSProperties;

  if (typeof className === "function") {
    CustomClassName = className(isActive);
  } else {
    CustomClassName = className;
  }
  if (typeof style === "function") {
    CustomStyle = style(isActive);
  } else {
    CustomStyle = style;
  }

  return (
    <Link href={href}>
      <a {...props} className={CustomClassName} style={CustomStyle}>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
