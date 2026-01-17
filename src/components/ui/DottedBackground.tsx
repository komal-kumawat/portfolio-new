interface DottedBackgroundProps {
  height?: string;
}

const DottedBackground = ({ height }: DottedBackgroundProps) => {
  return (
    <div
      className={`
        w-full
        max-w-2xl
        ${height ?? "min-h-[200px]"}
        mx-auto my-2
        px-2
        rounded-xl
        bg-transparent

        [background-image:radial-gradient(rgba(0,0,0,0.25)_1px,transparent_1px)]
        [background-size:10px_10px]
        dark:[background-image:radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)]
      `}
    />
  );
};

export default DottedBackground;
