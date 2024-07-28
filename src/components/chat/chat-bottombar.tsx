import {
  FileImage,
  Mic,
  Paperclip,
  PlusCircle,
  SendHorizontal,
} from "lucide-react";
import React, { useRef } from "react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Message, loggedInUserData } from "../../data/data";
import { Textarea } from "../ui/textarea";
import { EmojiPicker } from "../EmojiPicker";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface ChatBottombarProps {
  sendMessage: (newMessage: Message) => void;
  isMobile: boolean;
}

export const BottombarIcons = [{ icon: FileImage }, { icon: Paperclip }];

export default function ChatBottombar({
  sendMessage,
  isMobile = false,
}: ChatBottombarProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (inputRef.current) {
      console.log(inputRef.current.value)
      const message = inputRef.current.value;
      if (message.trim()) {
        const newMessage: Message = {
          id: new Date().getTime(), // Use timestamp for unique ID
          name: loggedInUserData.name,
          avatar: loggedInUserData.avatar,
          message: message.trim(),
        };
        sendMessage(newMessage);
        inputRef.current.value = ""; // Clear the input value
        inputRef.current.focus();
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    } else if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      if (inputRef.current) {
        inputRef.current.value += "\n";
      }
    }
  };

  return (
    <div className="p-2 flex justify-between w-full items-center gap-2">
      <div className="flex gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <div
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "h-9 w-9",
                "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
              )}
            >
              <PlusCircle size={20} className="text-muted-foreground" />
            </div>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-full p-2">
            {inputRef.current && inputRef.current.value.trim() || isMobile ? (
              <div className="flex gap-2">
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "h-9 w-9",
                    "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                  )}
                >
                  <Mic size={20} className="text-muted-foreground" />
                </div>
                {BottombarIcons.map((icon, index) => (
                  <div
                    key={index}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "h-9 w-9",
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                    )}
                  >
                    <icon.icon size={20} className="text-muted-foreground" />
                  </div>
                ))}
              </div>
            ) : (
              <div
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "h-9 w-9",
                  "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                )}
              >
                <Mic size={20} className="text-muted-foreground" />
              </div>
            )}
          </PopoverContent>
        </Popover>
        {!(inputRef.current && inputRef.current.value.trim()) && !isMobile && (
          <div className="flex gap-2">
            {BottombarIcons.map((icon, index) => (
              <div
                key={index}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "h-9 w-9",
                  "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                )}
              >
                <icon.icon size={20} className="text-muted-foreground" />
              </div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          key="input"
          className="w-full relative"
          layout
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{
            opacity: { duration: 0.05 },
            layout: {
              type: "spring",
              bounce: 0.15,
            },
          }}
        >
          <Textarea
            autoComplete="off"
            ref={inputRef}
            onKeyDown={handleKeyPress}
            name="message"
            placeholder="Aa"
            className="w-full border h-9 rounded-full flex items-center resize-none overflow-hidden bg-background"
          />
          <div className="absolute right-2 bottom-0.5">
            <EmojiPicker
              onChange={(value: any) => {
                if (inputRef.current) {
                  inputRef.current.value += value
                  inputRef.current.focus()
                }
              }}
            />
          </div>
        </motion.div>

        {inputRef.current && (
          <div
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-9 w-9",
              "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white shrink-0"
            )}
            onClick={handleSend}
          >
            <SendHorizontal size={20} className="text-muted-foreground" />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
