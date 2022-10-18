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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      type: "string",
      title: "Sub Chapter Name",
      validation: (Rule) => Rule.required(),
    },
  ],
};
