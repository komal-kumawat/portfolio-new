interface DottedBorderProps {
  children: React.ReactNode;
}

export default function DottedBorder({ children }: DottedBorderProps) {
  return (
    <div className="relative w-full">
      {/* Dotted border */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          rounded-xl
          border border-transparent
          [background:
            radial-gradient(circle,rgba(0,0,0,0.25)_1px,transparent_1px)
          ]
          [background-size:14px_14px]
          [mask:
            linear-gradient(#000_0_0)_content-box,
            linear-gradient(#000_0_0)
          ]
          [mask-composite:exclude]
          p-[1px]
          dark:[background:
            radial-gradient(circle,rgba(255,255,255,0.25)_1px,transparent_1px)
          ]
        "
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
