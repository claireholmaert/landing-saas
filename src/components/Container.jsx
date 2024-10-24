export const Container = ({ children, className }) => {
  return (
    <div
      className={`max-w-7xl mx-auto px-5 md:px-10 lg:px-16 ${className || ""}`}
    >
      {children}
    </div>
  );
};
