# Convert JPG to SVG and display in web page
### https://jpleva91.github.io/svg-playground/


## Take JPG file and open it in Inkscape
![image](https://user-images.githubusercontent.com/17632264/222222225-d3cfef1e-b52d-48bb-95d9-55ca27f95e0e.png)

## Convert image to svg
### Here's how you can convert an image to SVG using Inkscape:

### Open Inkscape and create a new document.

### Import the image you want to convert to SVG by selecting "File" > "Import" from the menu and choosing the image file.

### Select the imported image by clicking on it with the Selector tool.

### Open the "Trace Bitmap" dialog box by selecting "Path" > "Trace Bitmap" from the menu.

### In the "Trace Bitmap" dialog box, choose the tracing options that best fit your image. You can preview the results in real-time as you adjust the settings.

### Click "OK" to apply the tracing and create a new vector-based copy of the image.

### Save the new vector-based image as an SVG file by selecting "File" > "Save As" from the menu and choosing "Scalable Vector Graphics" as the file type.
![image](https://user-images.githubusercontent.com/17632264/222222316-bbcaec3d-4a7e-4629-96a4-dbe4228050c1.png)

## Break apart svg to create multiple svg paths
### Select the object

### Select "Path" > "Break Apart"
![image](https://user-images.githubusercontent.com/17632264/222222488-ca91e018-2ac2-49b6-8277-2e707d0e4c68.png)
![image](https://user-images.githubusercontent.com/17632264/222222568-04b49302-f137-40d1-8dd6-f1551233ef41.png)

## Add custom attributes
![image](https://user-images.githubusercontent.com/17632264/222222697-fe02bb4c-135a-4edd-a420-8c2611e26bf9.png)
### Select the Object

### Select "Edit" > "XML Editor"

### Add your custom attribute
![image](https://user-images.githubusercontent.com/17632264/222222789-aada9da6-2752-4aae-bb38-e76d698b79b4.png)


## Overview
### Open Inkscape and create a new document.

### Create the elements you want to add click handlers to. For example, you could create a circle by selecting the "Circle" tool from the toolbar and clicking and dragging on the canvas to draw the circle.

### Select the element you want to add a click handler to by clicking on it with the Selector tool.

### Open the "XML Editor" dialog box by selecting "XML Editor" from the "Edit" menu.

### In the "XML Editor" dialog box, click the "New Attribute" button to create a new custom attribute.

### Enter a name for the custom attribute (such as "data-click-handler") and a value (such as "my-click-handler").

### Click "Apply" to add the custom attribute to the selected element.

### Repeat this process for any other elements you want to add click handlers to.

### Save the SVG file and use it in your web page or application.
