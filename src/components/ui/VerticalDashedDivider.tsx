interface VerticalContainerBordersProps {
  className?: string;
}

export default function VerticalContainerBorders({
  className = "",
}: VerticalContainerBordersProps) {
  return (
    <>
      {/* Left border */}
      <div
        className={`
          absolute
          top-0
          left-0
          h-full
          border-l-2
          border-dashed
          border-gray-300 dark:border-neutral-600
          pointer-events-none
          ${className}
        `}
      />

      {/* Right border */}
      <div
        className={`
          absolute
          top-0
          right-0
          h-full
          border-r-2
          border-dashed
          border-gray-300 dark:border-neutral-600
          pointer-events-none
          ${className}
        `}
      />
    </>
  );
}
