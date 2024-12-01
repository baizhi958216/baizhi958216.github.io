export default interface ISettings {
  api: string;
  model: string;
  tags: { name: string }[];
  systemPrompt: string;
}
