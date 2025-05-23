import { Avatar, AvatarFallback, AvatarImage } from "@bluevoid/ui/avatar";
import { Button } from "@bluevoid/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@bluevoid/ui/hover-card";
import { IconAlertCircle } from "@tabler/icons-react";

function TestHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="font-semibold text-sm">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <IconAlertCircle className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-muted-foreground text-xs">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default TestHoverCard;
