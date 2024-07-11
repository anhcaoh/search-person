const Heading = ({
  text,
  className,
  children,
}: {
  text?: string;
  className?: string;
  children?: string | JSX.Element;
}) => {
  return (
    <h2
      className={["leading-loose font-bold text-3xl mb-5", className]
        .join(" ")
        .trim()}
    >
      {text ?? children}
    </h2>
  );
};
export const SubHeading = ({
  text,
  className,
  children,
}: {
  text?: string;
  className?: string;
  children?: string | JSX.Element;
}) => {
  return (
    <h3
      className={["leading-loose font-bold text-xl mb-5", className]
        .join(" ")
        .trim()}
    >
      {text ?? children}
    </h3>
  );
};

export default Heading;
