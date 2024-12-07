# CS-to-JS-Code-Conversion

Specifications
Read the full handout before beginning.

In this lab, you will receive a project in C#. You will convert the project from C# into JavaScript.
Create a new Node.js project in the “code_conversion_js” folder. The directory is not empty, so click
the “Create from Existing Sources” option when you get a warning.

Maintain the structure of the source code as closely as possible during the conversion process. Ensure
that you use appropriate JavaScript equivalents for C# constructs. For example, use arrow functions for
expression-bodied members. Also, preserve the file structure, ensuring that JavaScript files mirror the
class separation present in the C# project.

When converting C# properties, transform them into JavaScript properties. Remember proper
encapsulation rules.
https://www.w3schools.com/js/js_object_accessors.asp

Follow proper casing conventions: use camelCase for variables and functions, and PascalCase for
classes. Note that classes remain PascalCase in JavaScript.

After construction, seal objects so new properties can’t be added to them.

Use the .mjs extension for JavaScript files to signify them as ECMAScript modules. Ensure that file
names are in lowercase for consistency. This choice facilitates cleaner exporting and importing syntax.
Use getter and setter methods to replace the getters and setters used for the C# properties.
