import { ReactNode } from "react";

function Button({
  children,
  className,
  onClick,
  look,
}: {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  look?: "default" | "brand" | "space" | "subscribe";
}) {
  const before =
    "border-none cursor-pointer inline-flex justify-center items-center relative overflow-hidden text-sm ";
  const overide = "text-white rounded focus:outline focus:outline-[0.3rem]";
  const defaultLook = `${overide} bg-[#222] gap-1 py-2 px-2.5 focus:outline-[#444]`;
  const brandLook = `${overide} outline-indigo-400 py-0.5 px-0.5 bg-gradient-to-r from-blue-600 to-violet-500`;
  return (
    <button
      {...(onClick && { onClick: onClick })}
      className={`${before} ${look == "default" || !look ? defaultLook : look == "brand" ? brandLook : look == "subscribe" ? "py-2 px-4 rounded-md bg-red-600 drop-shadow-md text-white uppercase font-semibold" : look == "space" ? "py-2 px-4 rounded-3xl bg-[#fff] font-semibold hover:bg-[#ddd] text-black" : defaultLook} ${className && className}`}
    >
      {look == "brand" ? (
        <span className="bg-[#222] py-1.5 px-2 relative rounded transition hover:bg-transparent">
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
