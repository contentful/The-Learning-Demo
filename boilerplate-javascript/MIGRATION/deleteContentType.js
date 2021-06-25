module.exports = function (migration) {
    // Create a new category field in the blog post content type.
    const instructor = migration.editContentType("instructor");
  
    instructor.deleteField("category");
  };