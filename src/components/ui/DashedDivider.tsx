interface DashedDividerProps {
  className?: string;
}

export default function DashedDivider({ className = "" }: DashedDividerProps) {
  return (
    <div
      className={`
        relative
        left-1/2 right-1/2
        -ml-[50vw] -mr-[50vw]
        w-screen
        border-t-2 border-dashed
        border-gray-300 dark:border-neutral-600
        my-2
        ${className}
      `}
    />
  );
}
