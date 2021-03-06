---
moduleid: 133
title: Lighting, Materials & Rendering
published: True
slug: lighting-materials-and-rendering
authors:
 - "Zachary White"
---
# Lighting, Materials & Rendering
## Module Summary

This module will introduce how to create a simple rendered perspective from Rhino. It will cover choosing a view, setting up the camera, applying lighting and materials to the model, and rendering an image.

## Introduction to Rendering

![zaha stadium](images/13-3/zaha-stadium.jpg#img-full)
*Zaha Hadid Architects, Xi'An International Football Centre, 2020.*

A **rendering** communicates the experience or visual impression of an architectural design. They're typically in perspective, and emphasize materiality, lighting, narrative, and atmosphere.

In the past, of course, rendering was done by hand, using analog techniques of drawing and painting. But before the twentieth century, images we would today recognize as architectural renderings were quite rare. Architects usually produced plans and sections, even when they were concerned with color, material and light.

![labroustre section](images/13-3/labrouste-section.jpg#img-full)
*A rendered section. Henri Labrouste, Bibliothèque Sainte-Geneviève, 1838.*

An architect was more likely to paint a life-like scene attempting to reconstruct a great scructure from the ruins of Greece or Rome than an original design, though occasionally this romantic sensibility can be found projected onto proposed structures as well.

![john soane bank of england](images/13-3/soane-bank.jpg#img-full)
*John Soane, Bank of England, 1830. The proposal is rendered as if it was already a ruin, creating a Romantic association with classical civilization while also cleverly revealing the interior layout.*

![schinkel orianda](images/13-3/schinkel-orianda.jpg#img-full)
*Karl Friederich Schinkel, Schloss Orianda, 1873.*

Hand-drawn renderings become more common in the twentieth century (a side-effect, maybe, of the proliferation of photography and mass visual media), but are still secondary to orthographic and axonometric drawings.

![mies](images/13-3/mies.jpg#img-full)
*Ludwig Mies van der Rohe, Friedrichstrasse Skyscraper Project, Berlin-Mitte, Germany, 1921. Museum of Modern Art, New York.*

![flw](images/13-3/flw.jpg#img-full)
*Frank Lloyd Wright, Fallingwater, 1935. Museum of Modern Art, New York.*

Often the most compellingly rendered images are of speculative and conceptual proposals that will never exist in the real world, meaning the images themselves carry the entire burden of the project.

![SITE](images/13-3/james-wines.jpg#img-full)
*James Wines / SITE, Highrise of Homes, 1981. MuseuM of Modern Art, New York.*

![lebbeus woods](images/13-3/woods.jpg#img-full)
*Lebbeus Woods, Zagreb Free-Zone, 1991.*

But the use of digital modeling and simulation has completely transformed the landscape of architectural representation. In the space of a couple decades, rendering has become, overwhelmingly, the dominant mainstream tool for communicating architectural ideas to clients and the public.

![gehry](images/13-3/gehry.jpeg#img-full)
*Gehry Partners, The Grand, Los Angeles, 2019.*

Commercial rendering engines like VRay and Enscape, and even open-source software like Blender, make it easier every year to produce images nearly indistinguishable from photographs (though this might say as much about architectural photography as it does about software).

![wework](images/13-3/wework.jpg#img-full)
*WeWork, 2019.*

Not all architects appreciate this state of affairs. Some consider "photorealistic" rendering deceptive, making unrealistic or unresolved designs look plausible. Others find rendering excessively authoritative, impersonal, and non-participatory, rejecting it altogether in favor of more impressionistic methods like collage:

![wework](images/13-3/tatiana-bilbao.jpg#img-full)
*Tatiana Bilbao Estudio, Botániqo, 2021.*

while others appropriate digital tools to imagine counter-narratives to the contemporary economic and political order:

![jeyifous](images/13-3/Azure_Olalekan-Jeyifous_3.jpg#img-full)
*Olalekan Jeyifous, The Frozen Neighborhoods, 2021.*

## Tutorial

However you plan to use it, the ability to create compelling rendered images is a useful one to have at your disposal. Let's look at the basics of how it's done.

Open your completed model of the Casa Bahia Azul, and switch to Rendered view. You'll have an all white model in a white environment.

![starting model](images/13-3/white-model.PNG#img-full)
*Initial Model*

### Lighting & Environment

Let's start by creating a more specific **environment** for our model. Use the `Sun` command, and a window will appear which allows you to control the sunlight. You can move the sun manually, but let's use the actual location of the building, which is in Chile. Select this on the map, and you can choose the time of day and year to simulate. Note that the "house" shaped profiles seen in the image below face North (there's a North arrow on the site plan).

![sun settings](images/13-3/sun-settings.PNG#img-full)
*Sun Settings*

Next we'll add an environment, which acts like a **spherical image surrounding the model**, and will affect the reflections and ambient lighting in your image. Use the `Environment` command to open the environments palette (or open it from the "Panels" dropdown menu). Rhino has a built-in library of environments, which you can find by clicking the menu button at the top right corner of the palette and choosing "Import from Environment Library." You can also find environments online in the form of HDRIs (for "High Dynamic Range Image"), which combine data from a wide range of photographic exposures. I'll be using [one I found on Poly Haven](https://polyhaven.com/a/cannon) that seems pretty similar to the site of the Casa Bahia Azul. Unwrapped, the image looks like this:

![environment image](images/13-3/cannon.jpg#img-full)
*Lighting Environment*

To use this instead of a built-in option, download the HDRI, choose "Create New Environment" >> "Basic Environment" from the environment palette menu, and set the file you downloaded as the background image. Double-click the new environment to activate it. A message at the top of the palette will give you the option to see the environment as the background in your viewport.

![model with environment](images/13-3/environment.PNG#img-full)
*Model with Environment*

### Simple Materials

Now we can start **adding materials to our model**. We'll start with a simple one: the frames of the windows and doors, which appear to be made of anodized aluminum. We'll create a material for these and apply it to the layer these objects are on.

In the layers panel, click on the empty slot under "Material" next to the layer containing your window frames. A Layer Material window will appear. Click the dropdown at the top where it says "Default Material," choose "Use a New Material" and then "Metal." You'll see a preview of the material at the top of the window. It's a more mirror-like reflection than we're looking for, so bring the "Polish" slider down to about 80%. Then click 'OK' and you'll see the material applied in your viewport.

![window frame material](images/13-3/materials-frame.PNG#img-full)
*Window Frame Material*

Next let's do the **glass** for the windows. There's a built-in glass material, but it's almost totally transparent, and I want the windows to reflect the surroundings more, so I'm going to create my own. Click the empty material slot next to your glass layer and create another new material, this time using the "Custom" preset. Leave the color as white, the Gloss and Reflectivity at 100%, and bring the Transparency down to about 35% (you may need to click "OK" to see the material update in your viewport). While you're here, play around with the material options a bit on your own to get a feel for what's possible.

![glass material](images/13-3/materials-glass.PNG#img-full)
*Glass Material*

### Textures & Texture Mapping

The rest of the materials we need aren't homogenous like glass and metal, so we need to use textures: ordinary image files, like JPEGs or PNGs, which get applied to our geometry. 

We'll start with the concrete texture of the walls, which show the imprint of the wooden formwork used to pour them. For this we can start with a built-in texture. Click your wall layer's material slot, then choose "Use a New Material" >> "Import from Material Library...". Navigate to "Architectural/Wall/Concrete" and double-click "Conc stripes.rmtl". Click "OK" to preview the material in your viewport.

![default concrete material](images/13-3/material-concrete-unmapped.PNG#img-full)
*Default Concrete Material*

You can see the texture, but it's the wrong scale and orientation. To fix this, find the Color slot under "Textures" in the material editor, which will show the name of the image file being used ("Conc_stripes_600_DB.jpg"). Click the file name, and in the texture editor which pops up, select the button under "Mapping" which reads "Mapping Channel: (1)". Then hit "OK".

![concrete texture unmapped](images/13-3/material-concrete-mapping-channel.PNG#img-full)
*Unmapped Concrete Texture*

Admittedly, this isn't exactly an improvement. But we can now edit how the texture is mapped to our geometry directly in Rhino. Select all the objects on your wall layer by right-clicking on it in the layers panel and choosing "Select Objects." Then in the Properties panel, click the "Texture Mapping" tab (it looks like a rolled sheet with a red and white checkerboard pattern). At the top of the panel you'll see a series of icons representing ways to create and adjust texture mappings. They can be hard to interpret, so hover over them with your mouse to see their names. Since our building shells are more or less box-shaped, we want to apply a Box mapping. Click that icon, or just use the `ApplyBoxMapping` command. Then, just as if you were modeling a box, create a cube roughly 3m in size. Choose "Yes" for the "Capped" command prompt.

![applying the box mapping](images/13-3/box-mapping.gif#img-full)
*Applying Box Mapping*

This is closer, but not quite there. Select the outer walls again, and click the "Show Mapping" button in the texture editing palette. The mapping "widgets" for these objects, the cube we just created, will appear as objects in the scene. You can move, scale and rotate them like ordinary geometry, and it will alter how your textures are being mapped. Try using the mapping widget to get your concrete looking right.

![applying the box mapping](images/13-3/box-map-edits.gif#img-full)
*Editing the Box Mapping*

I'm going to make a couple more edits to this material. First, in the material editor, I'm going to uncheck the "Bump / Normal" box. **Bump and normal maps** are a way of adding texture or roughness to a model, affecting the way light bounces without having to alter an object's geometry. They're essential for photorealistic rendering, but in a simple visualization like we're doing here the results can be a little uncanny. Second, the concrete looks a bit dark. In the Color texture editor, where we changed the Mapping mode earlier, there's a "Color Ajustment" section. Changing the "Gamma" from 1.0 to 1.5 will lighten it up a bit.

![editing the box mapping](images/13-3/concrete-adjustments.PNG#img-full)
*Adjusting the Texture Map*

Try using the built-in materials library to texture the terrace, stone wall, and gravel yard too:

![additional textures](images/13-3/additional-textures.PNG#img-full)
*Model with Additional Textures*

### Texturing the Terrain

The landscape around the house is the most important material missing from our scene. Large natural areas like this are difficult to texture, since regular tiling looks very artificial and the repetition is often obvious. You can see a bit of this in the gravel texture in the image above: even though this texture is "seamless," meaning the image has been edited so that the edges match perfectly, a slight variation in shade between parts of the texture causes a repeated stripe pattern.

One solution to this problem is to use procedural textures, which are generated algorithmically and don't repeat, but Rhino doesn't have that capability. Another is to use satellite imagery of a larger area, but it can be hard to find images that are both the right environment and high enough resolution to be effective. So instead I'm going to use an ordinary landscape photograph:

![landscape image](images/13-3/boulder-hill.jpg#img-full)
*Landscape Photograph*

Since this image isn't looking straight down at the ground, I'll have to orient it to a specific view, which means we need to pick a camera placement for our image. I've chosen this view from the bottom of the hill looking up at the house, using forced Two Point Perspective projection, but you can try out an angle of your own. Save it as a `NamedView` so you don't lose it by accident, and keep it open in a `NewFloatingViewport` so you can see it update as you work.

![view selection](images/13-3/view.PNG#img-full)
*Selecting a View*

Download the landscape photograph above. Create a new Custom material for your terrain layer, and use the image in the "Color" texture slot.

![terrain texture without mapping](images/13-3/terrain-unmapped.PNG#img-full)
*Unmapped Terrain Texture*

This time we're going to apply a Planar instead of a Box mapping. Do this to all the objects on your terrain layer in the Texture Mapping palette (or use `ApplyPlanarMapping`), then click the ShowMapping button. Move, scale, and rotate the mapping widget until the hillside looks right in your chosen view. Making your floating vieport `Camera` visible will make this easier.

![planar mapping of terrain](images/13-3/terrain-mapping.PNG#img-full)
*Planar Mapping of Terrain*

This may not be perfect, but it works pretty well for our current purposes. We can always clean this up later in Photoshop, or collage in a different image entirely. In this tutorial we'll stay in Rhino, but collaging and compositing will be covered in the next one.

### Plants

Adding some plants to our scene will liven it up (and maybe hide the artificiality of the ground texture). For this we'll need some images, like these **PNG files with transparent backgrounds**:

![desert bush png](images/13-3/bush.png#img-full)
*Desert Bush PNG*
![lavender png](images/13-3/lavender.png#img-full)
*Lavender PNG*

Make a layer for your plants and place them in the scene using the `Picture` command. Orienting them towards the camera, try using some bushes to break up the crest of the hill:

![bushes on hill](images/13-3/hill-bushes.PNG#img-full)
*Placing Bushes*

A quick way to make plants look more three-dimensional is to place two PNGs perpendicular to each other, like this:

![lavender on hill](images/13-3/hill-lavender.PNG#img-full)
*Placing Lavender*

Sometimes you find a plant or other image you want to place in your scene, but the background isn't transparent. When this happens, you can create **an Alpha Channel** for your material: a second image file which encodes which parts of the texture should be transparent. Here's a PNG with a solid background:

![succulent](images/13-3/succulent.png#img-full)
*Succulent Diffuse Channel*

And here's an alpha channel I created in Photoshop, by using the magic wand tool and adjusting the levels:

![succulent alpha](images/13-3/succulent-alpha.png#img-full)
*Succulent Alpha Channel*

The white areas are where the image should be opaque, and the black is where it should be transparent. If you place the first image in your scene using `Picture`, it will appear on a solid white plane. Select the object, go to its material properties, and change the material type from "Picture" to "Custom." You can then add the black and white image in the "Transparency" slot under "Textures."

![succulent with transparency](images/13-3/succulent-with-alpha.PNG#img-full)
*Adding Succulents with Transparency*

Finish populating your scene with plants, and then change your floating viewport's render mode to "Raytraced." This will use the Cycles rendering engine in real time to create more realistic lighting and reflections.

![raytraced](images/13-3/raytraced.PNG#img-full)
*Raytraced View*

From here you can make adjustments to your materials, lighting and environment until you're satisfied with the image.

### Output

To do a high-quality rendering, it's common to use an external plugin like VRay, or even export to an entirely different application like 3D Studio Max. But to keep things simple we'll use Rhino's built-in renderer, Cycles.

The easiest way to output an image is using the `ViewCaptureToFile` command. This saves a viewport directly to an image file with a specified resolution.

![view capture](images/13-3/view-capture.PNG#img-full)
*View Capture Settings*

For higher-quality images, we can use proper rendering. Go to "Render properties..." at the bottom of the Render dropdown menu to set resolution, render quality, and many other settings. 

![render-settings](images/13-3/render-settings.PNG#img-full)
*Render Settings*

When you're ready, choose "Render" from the same dropdown menu or use the `Render` command to create your final image.

![final image](images/13-3/cba-rendering.jpg#img-full)
*Final Image*

### Additional Challenges

Some other things you can try before moving on to the next tutorial:

- **People** can be added to a scene the same way we added plants. Try finding transparent PNGs to include in your rendering, or create your own in Photoshop.
- This rendering only used the sun for lighting, but you can **add Lights** to a scene too. Try using some in the interior of the house, and see if it improves this image.
- Create a rendered image from one of the **other views** you created in the Projection tutorial. What new materials do you have to create? Which parts of this model work for both renderings, and which do you have to customize to the view?


## Conclusion

In this tutorial we created a simple rendering with materials and textures. To create a more photo-realistic image, we could use more powerful rendering software and more realistic assets. But we can also develop the image further in Photoshop, which would let us work more delibrately (and often more quickly as well). Collaging and compositing images in Photoshop, and combining vector and raster images using Illustrator, will be the subject of the next tutorial.
