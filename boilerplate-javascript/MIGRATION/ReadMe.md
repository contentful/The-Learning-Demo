module.exports = function (migration) {
//create content type
const instructor = migration
.createContentType([CONTENT_TYPE])
.name([CONTENT_TYPE_NAME])
.description([CONTENT_TYPE_DESCRIPTION])
.displayField([CONTENT_TYPE_DISPLAY_FIELD]);

    example:
        const instructor = migration
        .createContentType("instructor")
        .name("Instructor")
        .description("")
        .displayField("fullName");

    //define fields
    instructor.createField([FIELD]).name([FIELD_NAME]).type([FIELD_TYPE]);

    example:
    instructor
      .createField("avatar")
      .name("Avatar")
      .type("Link")
      .linkType("Asset");

    //define appearances by calling changeEditorInterface on the contentType
    //takes field id and id of the widget
    instructor
    .changeEditorInterface([FIELD_ID], [WIDGET_ID], {});
    example:
        instructor
        .changeEditorInterface("website", "urlEditor", {});

};

//Commands to execute:
contentful login
cd to migration folder
contentful space migration --space-id '{SPACE_ID}' --environment-id '{ENVIRONMENT_ID}' {FILENAME.js}
