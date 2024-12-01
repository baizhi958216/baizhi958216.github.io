export interface IMessage {
  role: string;
  content: string;
}

export default interface IHistory {
  chatId: string;
  chatModel: string;
  chatTitle: string;
  chatTimestamp: string;
  chatList: IMessage[];
}