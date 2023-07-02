export const Vue2Notes = (): { text: string; link: string }[] => {
  return [{ text: "Vue2生命周期", link: "lifecyclevue2" }].map((obj) => {
    return { text: obj.text, link: `/AllDocs/Vue2Notes/${obj.link}` };
  });
};
