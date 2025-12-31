# Planet Texture Generation Prompt

Use this prompt template with AI image generators (DALL-E, Midjourney, Stable Diffusion, etc.) to create planet textures:

## Basic Prompt Template

```
Create an equirectangular projection (2:1 aspect ratio) of a [PLANET_TYPE] planet surface. 
The image must be seamless horizontally (left and right edges match perfectly) and designed 
for sphere mapping. Keep important details away from the top and bottom edges (poles) as 
they will be distorted when wrapped. The image should be [WIDTH]x[HEIGHT] pixels, 
preferably 2048x1024 or higher resolution. [ADDITIONAL_DETAILS]
```

## Example Prompts

### Purple Gas Giant with Clouds
```
Create an equirectangular projection (2:1 aspect ratio) of a purple gas giant planet 
with swirling white cloud bands. The image must be seamless horizontally (left and right 
edges match perfectly) and designed for sphere mapping. Keep important cloud formations 
away from the top and bottom edges (poles) as they will be distorted when wrapped. 
The image should be 2048x1024 pixels. Use rich purple and violet tones with white 
atmospheric clouds forming horizontal bands across the planet surface.
```

### Alien Desert Planet
```
Equirectangular projection (2:1 aspect ratio) of an alien desert planet surface with 
orange and red sand dunes, rocky terrain, and scattered craters. Seamless horizontal 
wrapping required - left and right edges must match perfectly. Designed for sphere 
mapping, avoid important features at top and bottom edges. Resolution: 2048x1024. 
Atmospheric perspective with subtle color gradients.
```

### Ocean World
```
Equirectangular map (2:1 aspect ratio) of an ocean planet with deep blue water, 
white cloud formations, and subtle landmasses. Seamless horizontal edges essential. 
Optimized for sphere mapping - keep key features in the middle third of the image. 
2048x1024 resolution. Realistic water textures with atmospheric clouds.
```

### Ice Planet
```
Create an equirectangular projection (2:1 aspect ratio) of an ice planet with 
crystalline blue-white surface, frozen terrain patterns, and subtle ice formations. 
Must be seamless horizontally (left matches right edge perfectly). Designed for 
sphere texture mapping - avoid detailed features at poles. 2048x1024 pixels. 
Glacial blue tones with white highlights.
```

## Key Requirements for All Prompts

1. **Always specify "equirectangular projection (2:1 aspect ratio)"**
2. **Always mention "seamless horizontally" or "left and right edges match"**
3. **Always note "designed for sphere mapping"**
4. **Always warn about "avoid important features at top/bottom edges (poles)"**
5. **Specify resolution (2048x1024 minimum recommended)**
6. **Use descriptive details about colors, textures, and atmosphere**

## Tips

- **Horizontal Seamlessness**: The most critical aspect - the left and right edges must match perfectly
- **Pole Distortion**: Features at the very top and bottom will be stretched/distorted, so keep important details in the middle
- **Resolution**: Higher is better (2048x1024, 4096x2048, etc.) for sharper textures
- **Color Consistency**: Use consistent color palettes that work well when wrapped
- **Atmospheric Effects**: Clouds, haze, and atmospheric effects work great for seamless wrapping

## After Generation

1. Verify the image is 2:1 aspect ratio
2. Check that left and right edges match (you may need to edit in Photoshop/GIMP)
3. Save as PNG or JPEG
4. Place in the `public/` folder
5. Update the `texturePath` in `src/constants/planets.js`

