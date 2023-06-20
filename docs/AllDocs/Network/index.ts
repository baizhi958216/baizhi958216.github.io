export const Network = (): { text: string; link: string }[] => {
  return [
    { text: "OSI 七层模型", link: "OSI" },
    {
      text: "TCP/IP 三次握手",
      link: "TCPhandshake",
    },
    {
      text: "TCP/IP 四次挥手",
      link: "TCPhandwave",
    },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/Network/${obj.link}`,
    };
  });
};
