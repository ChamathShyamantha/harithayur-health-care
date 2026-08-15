# Image prompts

One file per image. Each file is a complete, self-contained prompt: style spine,
scene, framing rule and text-suppression paragraph are all already inside it.

**Drag the file straight into ChatGPT. Do not add anything to it.**

Do not drag this README in. It is the index, not a prompt.

---

## Order

Generate `01-hero.md` on its own first. It is the largest image on the site and it
contains a small glass bottle, which is the thing image models most want to write on.
It is the cheapest way to find out whether the suppression paragraph is working.

When it comes back, check four things:

1. No lettering anywhere in the frame
2. Nothing printed on the small glass bottle
3. Warm cream, green and wood tones only, no grey or blue
4. Subject centred with empty space around it

If all four pass, run the rest in any order you like.

| # | Prompt file | Save the result as | Aspect | Masked into |
|---|---|---|---|---|
| 01 | `01-hero.md` | `hero-ayurvedic-mortar.webp` | 4:5 tall | arch |
| 02 | `02-heritage.md` | `heritage-preparation.webp` | 21:9 wide | capsule |
| 03 | `03-blog-dosha.md` | `blog-dosha.webp` | 3:2 | leaf |
| 04 | `04-blog-hela-wedakama.md` | `blog-hela-wedakama.webp` | 3:2 | arch |
| 05 | `05-about-heritage.md` | `about-heritage.webp` | 3:2 | capsule |
| 06 | `06-texture-botanical.md` | `texture-botanical.webp` | 1:1 | background, optional |
| 07 | `07-product-ashwagandha.md` | `product-ashwagandha.webp` | 1:1 | arch |
| 08 | `08-product-neem-turmeric.md` | `product-neem-turmeric.webp` | 1:1 | leaf |
| 09 | `09-product-brahmi.md` | `product-brahmi.webp` | 1:1 | leaf |

Files 07, 08 and 09 sit in one row on the page, so run them in the same session and
they will match each other better.

### Benefit tiles, 10 to 12

| # | Prompt file | Save the result as | Aspect | Tile |
|---|---|---|---|---|
| 10 | `10-benefit-personalized-care.md` | `benefit-personalized.webp` | 3:2 | Personalized care |
| 11 | `11-benefit-trusted.md` | `benefit-trusted.webp` | 3:2 | Trusted by thousands |
| 12 | `12-benefit-sustainable.md` | `benefit-sustainable.webp` | 3:2 | Sustainable wellness |

**You probably want two of these three, not all three.** The tile grid currently runs
one photograph, one solid forest panel and two plain tiles. Filling every cell with a
photograph makes the section busy and removes the contrast the solid panel provides.
Two photographs, one solid panel and one plain tile is the balance to aim for.

If you only generate two, 11 and 12 are the ones to do: "Personalized care" is the
tile currently carrying the solid forest fill, and that fill is worth keeping.

These sit behind white text with a dark overlay, so each prompt asks for a calm
region where the words will land. Text legibility comes from the overlay, not from
the photograph, so do not worry if they look bright on their own.

---

## If text still appears

Do not re-roll the same prompt, that is how credits disappear. Change the object
instead, then run once more:

- **Writing on a bottle or jar** → replace the object sentence with: *"a plain glass
  vessel straight from the glassworks, its surface completely smooth and bare, nothing
  attached to it and nothing printed on it"*
- **Writing on the wooden table or bench** → say the wood is *"freshly planed, plain
  and unmarked"*
- **Anything else** → describe that object as *"freshly made, blank, with nothing
  attached"*

---

## Delivery

Save the results into `public/assets/` using the filenames in the table above,
overwriting what is there.

**Format and size do not matter.** PNG or JPG at whatever dimensions the model gives
you is fine. Conversion to WebP, resizing and compression happen on the build side.

If a filename ends up different, that is fine too, just say which image is which.
