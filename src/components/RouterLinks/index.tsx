import { Link } from "react-router";

type RouterLinksProps = {
    children: React.ReactNode;
    href: string;
} & React.ComponentProps<'a'>

export function RouterLinks({ children, href, ...props }: RouterLinksProps) {
    return(
        <Link to={href} {...props}>
            {children}
        </Link>
    );
}