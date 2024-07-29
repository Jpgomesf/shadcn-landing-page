import { Avatar, AvatarImage } from '../ui/avatar'
import { UserData } from '../../data/data';
import {
  Info,
  Phone,
  Video,
  Trash,
  Tags,
  CalendarClockIcon,
  CircleCheckBig,
  Pen,
  Ellipsis,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "../ui/tooltip";
import { cn } from '../../lib/utils';
import { buttonVariants } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

interface ChatTopbarProps {
  selectedUser: UserData;
  isMobile: boolean;
}

export const TopbarIcons = [
  { icon: Phone, purpose: 'call' },
  { icon: Video, purpose: 'call' },
  { icon: Info, purpose: 'call' },
  { icon: Tags, tooltip: "Add a Tag", purpose: 'ticket' },
  { icon: Pen, tooltip: "Edit Ticket", purpose: 'ticket' },
  { icon: CalendarClockIcon, tooltip: "Schedule", purpose: 'ticket' },
  { icon: Trash, tooltip: "Delete Ticket", purpose: 'ticket' },
  { icon: CircleCheckBig, tooltip: "Finish Ticket", purpose: 'ticket' }
];

const TopbarTicketIcons = TopbarIcons.filter((icon) => icon.purpose === 'ticket')
const TopbarCallIcons = TopbarIcons.filter((icon) => icon.purpose === 'call')

export default function ChatTopbar({ selectedUser, isMobile = false }: ChatTopbarProps) {
  return (
    <div className="w-full h-20 flex p-4 justify-between items-center border-b">
      <div className="flex items-center gap-2">
        <Avatar className="flex justify-center items-center">
          <AvatarImage
            src={selectedUser.avatar}
            alt={selectedUser.name}
            width={6}
            height={6}
            className="w-10 h-10 "
          />
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{selectedUser.name}</span>
          <span className="text-xs">Active 2 mins ago</span>
        </div>
      </div>


      {isMobile ? (
        <Popover>
          <PopoverTrigger asChild>
            <div
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "h-9 w-9",
                "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
              )}
            >
              <Ellipsis size={20} className="text-muted-foreground" />
            </div>
          </PopoverTrigger>
          <PopoverContent side="bottom" className="w-full p-2">
            <div className="flex gap-2">
              {TopbarTicketIcons.map((icon, index) => (
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
          </PopoverContent>
        </Popover>
      ) : (
        <>
          <div className='flex gap-2'>
            {TopbarTicketIcons.map((icon, index) => (
              <TooltipProvider key={index}>
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div
                      key={index}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "h-9 w-9 cursor-pointer",
                        "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                      )}
                    >
                      <icon.icon size={20} className="text-muted-foreground" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">{icon.tooltip}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>

          <div className='flex gap-2'>
            {TopbarCallIcons.map((icon, index) => (
              <a
                key={index}
                href="#"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "h-9 w-9",
                  "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                )}
              >
                <icon.icon size={20} className="text-muted-foreground" />
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
