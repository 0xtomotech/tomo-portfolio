import { Send } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="group flex w-[8rem] items-center justify-center gap-2 bg-primary font-semibold text-primary-foreground transition-all duration-300 hover:bg-foreground/90 hover:text-background"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>Send Message</>
      )}
    </Button>
  );
};

export default SubmitBtn;
