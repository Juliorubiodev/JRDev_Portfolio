export const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-background" />

      {/* Aurora blobs - navy/blue/slate tones (pure CSS animations, compositor-only) */}
      <div
        className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full opacity-20 dark:opacity-15 motion-safe:animate-aurora-1"
        style={{
          background: "radial-gradient(circle, hsl(207 90% 54% / 0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div
        className="absolute top-[20%] -right-[20%] w-[70%] h-[70%] rounded-full opacity-15 dark:opacity-10 motion-safe:animate-aurora-2"
        style={{
          background: "radial-gradient(circle, hsl(215 25% 27% / 0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div
        className="absolute -bottom-[30%] left-[20%] w-[60%] h-[60%] rounded-full opacity-15 dark:opacity-10 motion-safe:animate-aurora-3"
        style={{
          background: "radial-gradient(circle, hsl(217 33% 30% / 0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Mesh overlay for texture - visible in both modes */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
};
