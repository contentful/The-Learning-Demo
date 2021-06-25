module.exports = function (migration) {
  //create content type
  const lesson = migration
    .createContentType("lesson")
    .name("Lesson")
    .description("")
    .displayField("title");

  //define fields
  lesson.createField("title").name("Title").type("Symbol");

  lesson.createField("slug").name("Slug").type("Symbol");

  lesson.createField("body").name("Body").type("RichText");

  lesson
    .createField("instructor")
    .name("Instructor")
    .type("Link")
    .validations([
      {
        linkContentType: ["instructor"],
      },
    ])
    .linkType("Entry");

  lesson.createField("image").name("Image").type("Link").linkType("Asset");

  lesson
    .createField("seo")
    .name("SEO")
    .type("Link")
    .validations([
      {
        linkContentType: ["seo"],
      },
    ])
    .linkType("Entry");

  //define appearances by calling changeEditorInterface on the contentType
  //takes field id and id of the widget
  lesson.changeEditorInterface("slug", "slugEditor", {});
};
