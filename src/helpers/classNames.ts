export const getNavLinkColor = (scrolled: boolean, active: boolean): string => {
  if (active)
    return scrolled
      ? "font-semibold text-primary-foreground"
      : "font-semibold text-foreground";
  return scrolled
    ? "font-medium text-primary-foreground/70"
    : "font-medium text-muted-foreground";
};

export const getIconColor = (scrolled: boolean): string => {
  return scrolled ? "text-primary-foreground" : "text-foreground";
};

export const getUnderlineClass = (
  scrolled: boolean,
  active: boolean
): string => {
  const base =
    "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[3px] after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full after:w-[14px]";

  const opacity = active
    ? "after:opacity-100"
    : "after:opacity-0 group-hover:after:opacity-100";

  const color = scrolled
    ? "after:bg-primary-foreground"
    : "after:bg-foreground";

  return `${base} ${opacity} ${color}`;
};
