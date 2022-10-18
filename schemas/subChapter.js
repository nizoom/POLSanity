export default {
  name: "subChapter",
  title: "Sub Chapter",
  type: "document",
  fields: [
    {
      name: "parentChapter",
      type: "reference",
      title: "Parent Chapter",
      to: [{ type: "parentChapter" }],
    },
    {
      name: "name",
      type: "string",
      title: "Sub Chapter Name",
    },
  ],
};
