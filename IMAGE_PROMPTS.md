# HARITHAYUR — IMAGE PROMPTS

Nine photographs used as assets across the site. **Every one must contain zero text.**

These are photographs only. Nothing here asks a model to draw a web page, a layout, a
button or an interface. Each file is a plain image that gets masked into an arch,
capsule or leaf shape and placed into the build.

Read Section 1 before generating anything. Generate the Section 3 test image first and
check it before spending credits on the rest.

---

## 1. READ THIS FIRST

### 1.1 The text problem

Image models add lettering when a prompt sounds like design work or describes an object
that usually carries writing. Three things trigger it hardest:

- Words like **design, editorial, brand, poster, layout, website, label, packaging**
- Objects that normally have printing: bottles, jars, boxes, shelves, books
- Saying *"no labels"* or *"unlabelled"*, which can make the model draw a label anyway

So the prompts below never use those words, describe glass as **plain and smooth**
rather than *unlabelled*, and end with an explicit suppression line.

### 1.2 The suppression line

**Paste this at the END of every prompt, exactly as written:**

> Absolutely no text anywhere in this image. No letters, no words, no numbers, no
> writing, no printing, no signage, no watermark, no logo, no symbols, no handwriting.
> Every surface is blank and unmarked. This is a pure photograph with nothing written
> on any object or anywhere in the frame.

Put it last. Models weight the beginning and end of a prompt most heavily, and the
style spine already occupies the beginning.

### 1.3 If text still appears

Do not keep re-rolling the same prompt, it wastes credits. Change the object instead:

- Bottle with a label appearing → *"a plain glass bottle straight from the glassworks,
  its surface completely smooth and bare, nothing applied to it"*
- Shelf with signage → remove the shelf, put the objects on a plain wooden table
- Anything else → describe the object as *"freshly made, blank, nothing attached"*

### 1.4 What changed from the last version

An earlier draft of this file contained eight prompts asking for whole website mockups,
with headlines, paragraphs and buttons drawn inside the image. That was wrong on two
counts: it guaranteed gibberish text, and a picture of a web page is not an asset you
can put into a web page. Those prompts are deleted. Nothing below asks for an
interface. If you want to see layout, open the running site.

---

## 2. THE STYLE SPINE

Paste this at the **start** of every prompt. Then the slot description. Then the
suppression line from 1.2.

> A warm, calm, natural-light photograph for a Sri Lankan herbal wellness brand.
> Colours limited to: warm off-white, soft cream, deep forest green, fresh leaf green,
> and warm reddish-brown wood. No black, no grey, no blue, no purple.
> Soft diffused daylight from the upper left, gentle shadows, low contrast, nothing
> harsh or dramatic. Materials are matte and handmade: warm cream ceramic, pale aged
> wood, fresh green leaves, plain amber glass, undyed cream cloth.
> Photorealistic, shot on a medium format camera, shallow but controlled depth of
> field. Not an illustration, not a 3D render, not a painting.

**Framing rule for every slot:** the site masks these photographs into arches,
capsules and leaf shapes, so the corners and edges get cut away. Keep the subject
centred with generous empty space on all four sides. Anything near an edge will be lost.

---

## 3. GENERATE THIS ONE FIRST

Run this single image before the batch. It is the hero, the largest picture on the
site, and it contains a small glass bottle, which is the kind of object models most
want to put writing on. If this comes back clean, the rest will be fine.

**Test → `hero-ayurvedic-mortar.webp`. Vertical 4:5, 1600 x 2000.**

The current file is a wide landscape with stray lettering in it. A true portrait with
no text fixes both problems at once.

> [STYLE SPINE]
> A traditional dark hardwood mortar and pestle standing upright in the centre of the
> frame, photographed slightly from above on a warm off-white surface. The mortar holds
> coarsely ground green herb paste. Fresh green leaves rest around its base. A few pale
> dried roots and one small plain amber glass bottle sit nearby, the glass completely
> smooth and bare with nothing applied to it. Soft diffused daylight, a long gentle
> shadow falling to the lower right. Warm cream background falling softly out of focus.
> Tall vertical composition with generous empty space above the mortar.
> [SUPPRESSION LINE]

Check it for four things: no lettering anywhere, nothing printed on the small bottle,
the warm cream and green palette, and the mortar centred with space around it. If all
four pass, continue.

---

## 4. THE REMAINING EIGHT

Ordered so the background and scene assets come first and the product shots come last.
Stop wherever your credits run out; the existing file simply stays in place until it
is replaced.

### TIER 1 — scene assets

#### `heritage-preparation.webp` — **ultra-wide 21:9**, 2800 x 1200

> [STYLE SPINE]
> Seen from directly overhead, looking straight down. A pair of weathered older hands
> grinding green herbs in a stone mortar on a pale aged wooden workbench. The hands
> enter the frame from the right side. The left two thirds of the frame is bare wooden
> bench with only a scattering of dried leaves, a folded cream cloth, and a small
> ceramic dish of green paste. Soft even daylight. Very wide letterbox composition.
> [SUPPRESSION LINE]

Hands only, no face. Nothing important within 15 percent of the left or right edge,
because this gets masked into a capsule with fully rounded ends.

### TIER 2 — article and background assets

#### `blog-dosha.webp` — landscape 3:2, 1800 x 1200

> [STYLE SPINE]
> Three small cream ceramic dishes arranged in a loose triangle on a pale wooden
> surface, seen from a high angle. One holds dried flowers, one holds coarse green
> powder, one holds whole dark seeds. A length of undyed cream cloth runs diagonally
> beneath them. A few fresh green leaves scattered sparsely around. Soft daylight.
> [SUPPRESSION LINE]

#### `blog-hela-wedakama.webp` — landscape 3:2, 1800 x 1200

> [STYLE SPINE]
> Fresh green tropical leaves filling the frame, photographed close after rain, with
> water droplets sitting on the leaf surfaces and catching soft daylight. A simple pale
> clay pot is partly visible in the lower right corner. Bright, fresh and airy, not
> dark or gloomy. The background dissolves into soft green blur.
> [SUPPRESSION LINE]

#### `about-heritage.webp` — landscape 3:2, 1800 x 1200

Described as a table rather than a shelf, because shelves attract signage.

> [STYLE SPINE]
> A long pale aged wooden table seen straight on, holding a row of plain amber glass
> bottles of different heights and two cream ceramic jars. Every glass surface is
> completely smooth and bare with nothing applied to it. Bundles of dried herbs lie
> beside them. Soft daylight from the left. Calm and quietly arranged, almost
> symmetrical but not exactly.
> [SUPPRESSION LINE]

#### `texture-botanical.webp` — square, 1200 x 1200 (optional)

> [STYLE SPINE]
> An extreme close-up of a single green leaf surface filling the entire frame, showing
> the vein structure and fine surface texture. Very soft, very pale, washed out and low
> contrast, almost abstract. No subject, no arrangement, just surface.
> [SUPPRESSION LINE]

### TIER 3 — product shots, last

Three shots that sit in one row on the page, so they have to match each other. Generate
them in the same session if you can. These are the highest text risk in the whole set,
because a glass container is what a model most wants to write on.

#### `product-ashwagandha.webp` — square, 1400 x 1400

> [STYLE SPINE]
> A tall amber glass bottle with a warm wooden cap, standing upright in the centre of a
> warm cream surface. The glass is completely smooth and bare, straight from the
> glassworks, with nothing applied to its surface. Behind it to the left sits a small
> cream ceramic dish holding pale tan dried roots. A sprig of fresh green leaves rests
> to the right. Soft daylight, one gentle shadow falling to the right. Warm off-white
> background falling softly out of focus. The bottle is centred with even empty space on
> all four sides.
> [SUPPRESSION LINE]

#### `product-neem-turmeric.webp` — square, 1400 x 1400

> [STYLE SPINE]
> A short wide amber glass jar with a warm wooden lid, open, standing in the centre of a
> warm cream surface. The glass is completely smooth and bare with nothing applied to
> it. Inside the open jar is a soft golden-ochre balm catching the light. Fresh green
> leaves fan out behind the jar. A small pile of raw turmeric root sits to the left,
> its orange muted and soft. Soft daylight. The jar is centred with even empty space on
> all four sides.
> [SUPPRESSION LINE]

#### `product-brahmi.webp` — square, 1400 x 1400

> [STYLE SPINE]
> A slim amber glass dropper bottle with a warm wooden cap, standing upright in the
> centre of a warm cream surface. The glass is completely smooth and bare with nothing
> applied to it. Small round succulent green leaves trail across the surface from the
> right. A single clear droplet hangs at the tip of the dropper. Soft daylight, gentle
> shadow. The bottle is centred with even empty space on all four sides.
> [SUPPRESSION LINE]

---

## 5. DELIVERY

Drop the files into `public/assets/`, overwriting what is already there.

**Format and size do not matter.** Send PNG or JPG at whatever dimensions the model
gives you. `sharp` is already installed in this project, so conversion to WebP,
resizing and compression happen on this side. Do not spend effort on export settings.

If a filename comes out different, that is fine too, just say which image is which.

| Order | Filename | Masked into | Aspect |
|---|---|---|---|
| test | `hero-ayurvedic-mortar.webp` | arch | 4:5 |
| 1 | `heritage-preparation.webp` | capsule | 21:9 |
| 2 | `blog-dosha.webp` | leaf | 3:2 |
| 2 | `blog-hela-wedakama.webp` | arch | 3:2 |
| 2 | `about-heritage.webp` | capsule | 3:2 |
| 2 | `texture-botanical.webp` | background | 1:1 |
| 3 | `product-ashwagandha.webp` | arch | 1:1 |
| 3 | `product-neem-turmeric.webp` | leaf | 1:1 |
| 3 | `product-brahmi.webp` | leaf | 1:1 |

---

## 6. LOGO

Not a generation task. The supplied `harithayur-logo.png` is used exactly as it is and
will not be redrawn. If the client can supply a **transparent-background PNG** of the
same mark, save it as `public/assets/harithayur-logo-transparent.png` and say so. It
would sit better on the green footer. Do not ask a model to make a replacement logo.
