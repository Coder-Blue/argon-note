import { useUser } from "@clerk/clerk-react";
import { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserMessage({ children }: { children: ReactNode }) {
  const { user } = useUser();

  return (
    <div className="relative ml-3 mr-20 rounded-lg border p-4 pb-10">
      {children}
      <div className="absolute -bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-lg bg-secondary">
        <Avatar>
          <AvatarImage src={user?.imageUrl} />
          <AvatarFallback>BF</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
