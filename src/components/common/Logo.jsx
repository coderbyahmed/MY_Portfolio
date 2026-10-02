

const Logo = ({ showText = true, showSubtitle = true, size = "sm" }) => {
  const containerSize = size === "lg" ? "h-10 w-10" : "h-9 w-9";
  const textSize = size === "lg" ? "text-base" : "text-sm";

  return (
    <a
      href="#home"
      className="group flex items-center gap-3 transition-colors"
    >
      <div
        className={`group flex ${containerSize} items-center justify-center border border-slate-800/80 bg-gradient-to-br from-slate-900 to-slate-950 text-center shadow-[0_0_0_1px_rgba(14,165,233,0.08)] transition-all hover:border-sky-400/50`}
      >
        <span
          className={`font-semibold tracking-tight text-slate-50 ${textSize}`}
        >
          MA
        </span>
      </div>

      {showText && (
        <div className="hidden flex-col leading-none sm:flex">
          <span className="text-base font-medium tracking-tight text-sky-400 transition-colors group-hover:text-sky-400">
            Muhammad Ahmed
          </span>
          {showSubtitle && (
            <span className="text-xs font-normal tracking-[0.2em] uppercase text-slate-400">
              Backend-Focused Developer
            </span>
          )}
        </div>
      )}
    </a>
  );
};

export default Logo;