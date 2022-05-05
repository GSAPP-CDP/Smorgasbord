---
moduleid: 184
title: "Mapbox SDK"
published: True
slug: mapbox-sdk
authors:
 - "Violet Whitney"
---

# Mapbox SDK
## Module Summary

In this intro you will get an intro to the Mapbox SDK for Unity.


## Conceptual Introduction
Mapbox is allows designers to control the deseign of maps, especially interactive maps hosted on the web. Within mapbox you can control things like colors and fonts, to 3D features and camera angles. The Unity Mapboox SDK allows you to reference the richness of a Mapbox (pre-modeled environments covering cities, neighbvorhoods, and rural areas all over the world). Its a good way to start a simulation without having to model the whole environment yourself. 

![mapbox](images/mapbox-1.gif#img-full)    
*mapbox Unity UI*    

## Tutorial
1. Go to https://www.mapbox.com/unity/.
2. Select `Install the SDK`→ → Sign up (free) and hit `Get started`. If you already have a mapbox account, you can log in with your usual credentials.
3. From the `Tools & Resources` menu → **select** `Integrate Mapbox`

![mapbox](images/mapbox-2.gif#img-full)    
*mapbox Unity steps 1-2*    
![mapbox](images/mapbox-3.gif#img-full)    
*mapbox Unity step 3*    


5. Select → mapbox-unity-sdk_v2.1.0.unitypackage to download.

![mapbox](images/mapbox-4.gif#img-full)    
*mapbox Unity step 5*   
![mapbox](images/mapbox-5.gif#img-full)    
*mapbox Unity step 5*  

7. **Creating a Mapbox Account**
 - In your Mapbox account. Scroll to the bottom and select + **Create a token** → type a name for this token which you will use for your Unity Project (this allows you to create separate tokens and track usage for different Unity projects. 
 - Scroll to the bottom and select **Create token** → **Confirm Password** → Scroll to the bottom where you will find your new access token. 
 - Hit the blue button to copy your access token.
9. **Add Mapbox SDK to a new Unity Project**
 - Open up Unity. Create a new Unity project and name it whatever you like. 
 - In your new Unity project select → **Assets** → **Import Package** → **Custom Package** → select your unzipped file from the Downloads folder and click **open**.
 - This opens a list of assets to import. 
 - Deselect everything except the Mapbox SDK and the Third Party Assets.
12. **Add your Mapbox token**
 - Go back to your Mapbox account. 
 - Scroll to the bottom where you will find your new access token. 
 - Hit the blue button to copy your access token. 
 - Go back to Unity and paste it under “Manage your tokens” and click submit.
14. Now in Unity test out the various game examples by going into the Assets folder → **Mapbox→Examples** → **2_AstronautGame** →then double click the Astronaut game and hit Unity’s play button to ensure it works

### Challenge
Click through some of the example mapbox projects and see if you can leverage some of the mapbox styles in a project of your own. Consider creating a custom mapbox stylee in the first tutorial below.

### Not required but useful:
- [Creating Custom Map Styles](https://docs.mapbox.com/help/tutorials/unity-custom-map-style/)
- [Video Tutorials for Unity Mapbox SDK](https://www.youtube.com/channel/UCIHl9sd2brgvjBlSETKYDcg/search?query=unity)
- [Procedural vehicle movement on road data:](https://docs.mapbox.com/unity/maps/examples/astronaut-game/)

