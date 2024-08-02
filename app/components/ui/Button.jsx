import { cn } from "@/app/lib/utils";

const Button = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        "rounded-full bg-foreground px-3 py-2 shadow-sm outline-none transition-all ease-linear hover:scale-[1.03] active:scale-[0.97]",
        className,
      )}
      {...props}
    />
  );
};
export default Button;
