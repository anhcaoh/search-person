const Heading = ({
  text,
  children,
}: {
  text?: string;
  children?: string | JSX.Element;
}) => {
  return (
    <h2 className="leading-loose font-bold text-3xl">{text ?? children}</h2>
  );
};
export default Heading;
