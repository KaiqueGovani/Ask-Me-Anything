import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useMessageWebsockets as useMessageWebSockets } from "../hooks/use-messages-web-sockets";
import { getRoomMessages } from "../http/get-room-messages";
import { Message } from "./message";

export function Messages() {
  const { roomId } = useParams();

  if (!roomId)
    throw new Error("Messages component must be used inside the room page.");

  const { data } = useSuspenseQuery({
    queryKey: ["messages", roomId],
    queryFn: () => getRoomMessages({ roomId }),
  });

  useMessageWebSockets({ roomId });

  const sortedMessages = data.messages
    .sort((a, b) => {
      return b.amountOfReactions - a.amountOfReactions;
    })
    .sort((a, b) => {
      return Number(a.answered) - Number(b.answered);
    });

  return (
    <ol className="list-decimal list-outside px-3 space-y-8">
      {sortedMessages.map((message) => (
        <Message
          key={message.id}
          id={message.id}
          text={message.text}
          answered={message.answered}
          amountOfReactions={message.amountOfReactions}
        />
      ))}
    </ol>
  );
}
