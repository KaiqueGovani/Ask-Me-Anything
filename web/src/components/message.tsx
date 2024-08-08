import { ArrowUp } from "lucide-react";
import { useState } from "react";

interface MessageProps {
  text: string;
  amountOfReactions: number;
  answered?: boolean;
}

export function Message({
  text,
  amountOfReactions,
  answered = false,
}: MessageProps) {
  const [hasReacted, setHasReacted] = useState(false);

  function handleReactToMessage() {
    setHasReacted(true);
  }

  function handleRemoveReactToMessage() {
    setHasReacted(false);
  }

  return (
    <li data-answered={answered} className="ml-4 leading-relaxed text-zinc-100 data-[answered=true]:opacity-50 data-[answered=true]:pointer-events-none">
      {text}
      {hasReacted ? (
        <button
          type="button"
          onClick={handleRemoveReactToMessage}
          className="mt-3 flex items-center gap-2 text-orange-400 text-sm font-medium hover:text-orange-500"
        >
          <ArrowUp className="size-4" />
          Descurtir Pergunta ({amountOfReactions})
        </button>
      ) : (
        <button
          type="button"
          onClick={handleReactToMessage}
          className="mt-3 flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-zinc-300"
        >
          <ArrowUp className="size-4" />
          Curtir Pergunta ({amountOfReactions})
        </button>
      )}
    </li>
  );
}
