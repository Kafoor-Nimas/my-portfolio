import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * One reusable button for the whole site.
 *
 *  - with `href`      -> renders a link (internal), or an external / download link
 *  - without `href`   -> renders a normal button (e.g. type="submit")
 *
 * Props:
 *  href, external, download   where it goes
 *  variant, size              passed to the shared <Button> ("outline", "lg", ...)
 *  icon, iconPosition         optional icon, "right" (default) or "left"
 *  uppercase                  uppercase label (default true)
 *  className                  extra classes for the button itself
 *  wrapperClassName           extra classes for the surrounding link
 *  ...props                   anything else (type, disabled, onClick ...)
 */
const ActionButton = ({
  href,
  external = false,
  download,
  variant,
  size,
  icon,
  iconPosition = "right",
  uppercase = true,
  wrapperClassName,
  className,
  children,
  ...props
}) => {
  const button = (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "flex items-center gap-2 font-bold",
        uppercase && "uppercase",
        className,
      )}
    >
      {icon && iconPosition === "left" && icon}
      <span>{children}</span>
      {icon && iconPosition === "right" && icon}
    </Button>
  );

  if (!href) return button;

  if (download)
    return (
      <a href={href} download={download} className={wrapperClassName}>
        {button}
      </a>
    );

  if (external)
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={wrapperClassName}
      >
        {button}
      </a>
    );

  return (
    <Link href={href} className={wrapperClassName}>
      {button}
    </Link>
  );
};

export default ActionButton;
