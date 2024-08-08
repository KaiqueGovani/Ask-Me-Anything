interface RemoveMessageReactionRequest {
  roomId: string;
  messageId: string;
}

export async function removeMessageReaction({
  messageId,
  roomId,
}: RemoveMessageReactionRequest) {
  const response = await fetch(
    `/api/rooms/${roomId}/messages/${messageId}/react`,
    {
      method: "DELETE",
    }
  );

  const data: { id: string } = await response.json();

  return { roomId: data.id };
}
