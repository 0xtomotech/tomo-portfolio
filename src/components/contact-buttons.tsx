import React from "react";
import { MailOpen, Phone, Copy } from "lucide-react";
import { toast } from "sonner";

const ContactButtons = () => {
  const copyToClipboard = (text: string, type: "email" | "phone number") => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(
        `${type.charAt(0).toUpperCase() + type.slice(1)} copied to clipboard!`,
        {
          duration: 2000,
          icon: <Copy className="h-4 w-4" />,
        },
      );
    });
  };

  return (
    <div className="flex items-center space-x-6">
      <button
        onClick={() => copyToClipboard("email@email.com", "email")}
        className="flex items-center space-x-2 transition-colors duration-300 hover:text-background"
      >
        <span className="relative inline-block">
          <MailOpen className="h-5 w-5" />
          <span
            className="absolute inset-0 animate-ping rounded-full bg-primary/20 opacity-50"
            style={{ animationDuration: "1s" }}
          ></span>
        </span>
        <span className="text-sm font-medium">email@email.com</span>
      </button>
      <div className="h-6 w-px bg-foreground/20"></div>
      <button
        onClick={() => copyToClipboard("+49 1234567", "phone number")}
        className="flex items-center space-x-2 transition-colors duration-300 hover:text-background"
      >
        <span className="relative inline-block">
          <Phone className="h-5 w-5" />
          <span
            className="absolute inset-0 animate-ping rounded-full bg-primary/20 opacity-50"
            style={{ animationDuration: "1s" }}
          ></span>
        </span>
        <span className="text-sm font-medium">+49 1234567</span>
      </button>
    </div>
  );
};

export default ContactButtons;
