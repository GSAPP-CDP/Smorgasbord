---
moduleid: 264
title: Setting Up Cull Operations and Deploying Columns
published: True
slug: setting-up-cull-operations-and-deploying-columns
authors:
 - "Joe Brennan"
---

# Setting Up Cull Operations to Get Only Needed Points

Now that we’ve created our grids and established the main site geometry, we’re ready to start building our **column grid system**.  
In this step, we’ll generate grid intersection points, move them up to each level, and then **filter out only the points that fall within our building massing**. This gives us a clean, data-driven foundation for our structural layout.

---

## Creating Grid Intersections

We’ll start by using our existing **horizontal** and **vertical grid lines** to find their intersection points.

1. Go back to the curves that represent your grid lines in Grasshopper.  
   These are the same curves we previously sent to Revit as Grid elements, but we now need them here to calculate intersections.

2. Use the **Line-Line Intersection (LLX)** component.  
   - Input A: Vertical grid lines  
   - Input B: Horizontal grid lines  

3. **Graft the vertical grid lines** before they enter the component.  
   This keeps the output structured by vertical grid line — meaning each branch corresponds to one vertical grid, containing a list of intersection points along that line.

   <img src="images/est_org_24.jpg" width="1000">

> **Joe’s Tip**  
> Grafting only one set of inputs (the verticals) keeps your data trees predictable. Each branch represents one grid line and all of its intersection points, making it much easier to reference or filter later.

---

## Moving Points Up to Each Level

Once we have the grid intersection points, we need to replicate them up through the building — one set of points per level.

1. Go back to your **floor slab definition** at the top of your script.  
   We previously extracted the **Z-values** from each slab to determine level heights.
   <img src="images/est_org_25.jpg" width="1000">

2. Use those Z-values to **construct XY planes** at each level.  
   - Create a `Construct Point` using `X=0`, `Y=0`, and `Z` from each floor level.  
   - Plug those into an **XY Plane** component to generate one plane per level.

3. Then use **Orient** to copy your grid intersection points to each plane.  
   - Base Plane: World XY  
   - Target Plane: Each level plane  

   <img src="images/est_org_26.jpg" width="1000">

Now you’ll have a full set of intersection points per level — the base positions where columns will go.

---

## Creating Base and Top Points

Each column will need two points: one for the **base** and one for the **top**.

1. The **base points** are the ones you just created at each level.  
2. For the **top points**, we’ll move the base points up by the **floor-to-floor height**, minus the slab thickness.

To do this:
- Pull the **floor-to-floor height** from your user values (the same way we previously got program data).  
<img src="images/est_org_27.jpg" width="750">
- Subtract the **slab thickness** — for now, use 0.5’ (6”).  
- Use a **Move** component with a **Unit Z** vector multiplied by that adjusted height.
<img src="images/est_org_28.jpg" width="1000">

This gives you a clear pair of point sets — base and top — with identical tree structures.

---

## Drawing Column Centerlines

Now that we have base and top points, it’s time to connect them.

- Use the **Line** component.  
  - Start = Base points  
  - End = Top points  

You should now see a clean grid of column centerlines extending throughout your building.

---

## Culling Columns Outside the Massing

At this stage, we likely have some columns that fall outside of our building volume.  
Let’s remove those automatically so we only keep structural elements that exist **within** the building envelope.

1. **Reference the building massing**  
   Use a **Geometry Pipeline** to pull in your massing Brep (from your “Overall Massing” layer).

2. **Check if points are inside**  
   - Use the **Point in Brep** component twice — once for the base points and once for the top points.  
   - Each will output a list of `True`/`False` values.

3. **Combine the results**  
   - Multiply the two Boolean lists together.  
   - Any column whose base and top both fall inside the massing will produce a `1`.  
   - Any column that’s partially or fully outside will produce a `0`.

4. **Cull or Dispatch**  
   - Plug the result into a **Dispatch** component.  
   - Input the list of column lines as the geometry to filter.  
   - The “True” output gives you only the valid, inside columns.
   <img src="images/est_org_29.jpg" width="1000">

> **Joe’s Tip**  
> Booleans can double as numbers in Grasshopper. Multiplying `True/False` lists (1 × 0) is a quick way to get a clean binary filter — no need to overcomplicate the logic.

---

## Sending to Revit

Now to create actual Revit columns from your centerlines:

1. Use the **Add Structural Column** component from Rhino.Inside.Revit.  
2. Connect your **filtered column lines** to the input.  
3. Add a **Type** node and right-click to select your preferred Revit column family (e.g. *Concrete - Rectangular* or *Steel - Wide Flange*).
<img src="images/est_org_30.jpg" width="1000">

Changing the type node will automatically update all placed columns.

<img src="images/est_org_31.jpg" width="250">


---

## Side Challenge

Try using **different massing volumes** (like Retail, Office, or Hotel) instead of a single overall mass.  
Use the **Point in Brep** test against each program volume, and assign unique Revit column types for each one.  
This builds a program-aware structural system that updates dynamically as your model evolves.

---

## Summary

At this point, you should have:
- Grid intersections structured by data trees  
- Points replicated at each floor level  
- Column base and top points with consistent organization  
- Clean centerlines filtered to only those inside the building  
- Automated Revit column creation  

This workflow establishes the foundation for a fully parametric structural system that automatically adapts to your geometry and massing logic.
