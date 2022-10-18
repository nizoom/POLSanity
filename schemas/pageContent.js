export default {
  name: "pageContent",
  title: "Page Content", // name of the model
  type: "document",
  fields: [
    {
      title: "Sub chapter",
      name: "subChapter",
      type: "reference",
      to: [{ type: "subChapter" }],
      validation: (Rule) => Rule.required(),
    },
    { name: "Title", title: "Image title", type: "string" },
    // { name: "Description", title: "Short image description", type: "string" },
    { name: "Citation", title: "Citation", type: "string" },
    {
      name: "image", // name of the field
      title: "Image",
      // photos are identified in the sanity database by the keyword image
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "audio",
      title: "Audio",
      type: "file",
      options: {
        hotspot: true,
      },
    },
    {
      name: "slideText",
      title: "Slide Text",
      type: "text",
    },
    {
      name: "slideNumber",
      title: "Slide Number",
      type: "number",
    },
  ],
};
