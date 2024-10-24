export const Button = ({ children, theme, className, href }) => {
  const baseClass = "text-white";
  const themeClass =
    theme === "primary"
      ? "bg-yellow-400 transition-colors hover:bg-yellow-500"
      : theme === "secondary"
      ? "bg-violet-600 transition-colors hover:bg-violet-500"
      : "";

  const renderButton = () => {
    return (
      <button
        className={`text-white px-3 py-2 rounded-lg tracking-wider lg:py-3 lg:px-6 ${themeClass} ${baseClass} ${className}`}
      >
        {children}
      </button>
    );
  };

  const renderLink = () => {
    return (
      <a
        href={href}
        className={`text-white inline-block rounded-lg lg:py-4 lg:px-6 ${themeClass} ${baseClass} ${className}`}
      >
        {children}
      </a>
    );
  };

  return href ? renderLink() : renderButton();
};
