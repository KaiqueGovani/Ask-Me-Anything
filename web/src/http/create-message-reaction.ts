interface CreateMessageReactionRequest {
  roomId: string;
  messageId: string;
}

export async function createMessageReaction({
  messageId,
  roomId,
}: CreateMessageReactionRequest) {
  const response = await fetch(
    `/api/rooms/${roomId}/messages/${messageId}/react`,
    {
      method: "PATCH",
    }
  );

  const data: { id: string } = await response.json();

  return { roomId: data.id };
}
