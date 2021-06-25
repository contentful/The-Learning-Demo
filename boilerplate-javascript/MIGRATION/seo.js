module.exports = function (migration) {
  //create content type
  const seo = migration
    .createContentType("seo")
    .name("SEO")
    .description("")
    .displayField("title");

  //define fields
  seo.createField("title").name("Title").type("Symbol");

  seo.createField("description").name("Description").type("Symbol");

  seo.createField("keywords").name("Keywords").type("Symbol");  
};
