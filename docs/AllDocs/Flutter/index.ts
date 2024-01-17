export const Flutter = (): { text: string; link: string }[] => {
  return [
    { text: "Flutter", link: "" },
    { text: "Dart语言基础", link: "Dart" },
    { text: "一个商城Demo", link: "FlutterMarket" },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/Flutter/${obj.link}`,
    };
  });
};
