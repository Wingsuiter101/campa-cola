# Image Generation Prompts for SAFF Women's Championship Pitch Deck

Here are 3 high-end, AWWWARDS-style image prompts designed to be generated in Midjourney (v6) or a similar high-quality AI image generator. These are strictly focused on football action and stadium atmosphere, tailored to match the dark, neon-accented, premium aesthetic of the pitch deck.

---

### 1. Hero Slide Background (Abstract Stadium Energy)
**Placement:** Background of the `Hero.tsx` section (behind the logos and title).
**Purpose:** To create a sense of massive scale, energy, and premium sports broadcasting without distracting from the text.

**Prompt:**
> A cinematic, extreme wide shot of a massive football stadium at night from the perspective of the pitch, deep black night sky, vibrant glowing neon stadium floodlights casting a violet-pink and orange-red gradient flare, atmospheric fog rolling across the grass, out-of-focus stadium seating in the distant background, premium sports broadcast aesthetic, extreme depth of field, dark and moody, 8k resolution, photorealistic, sleek and modern, negative space in the center for typography --ar 16:9 --style raw --v 6.0

---

### 2. The "Opportunity" Visual (The Player's Perspective)
**Placement:** Left side of the `Tournament.tsx` section (above or beside "Why SAFF Women's Championship?").
**Purpose:** To visually represent the passion and emotional significance of the women's game.

**Prompt:**
> A powerful, cinematic close-up of a female football player's boots and a football resting on wet stadium grass, deep shadows, atmospheric smoke, the background is a blurred roar of stadium lights in red and blue, intense emotional anticipation, premium sports documentary style, high contrast, dramatic edge lighting reflecting off the wet grass, 8k, highly detailed, dark aesthetic --ar 16:9 --v 6.0

---

### 3. The "Telecast Advantage" Visual (High-Speed Action)
**Placement:** Inside or behind the sticky right-column panel in the `Schedule.tsx` section ("The Telecast Advantage").
**Purpose:** To illustrate the high-speed, dynamic action that viewers will be tuning in to watch.

**Prompt:**
> A dynamic, high-speed action shot of a female football player striking the ball mid-air, dramatic motion blur on the background, deep black background with sweeping streaks of violet-pink and orange-red neon light following the trajectory of the ball, intense athletic energy, premium Nike/Adidas commercial aesthetic, dark cinematic lighting, highly aesthetic, 8k --ar 4:5 --v 6.0

---

### How to use these in the code:
Once you generate these images, save them to the `public/` folder (e.g., `hero-bg.jpg`, `stadium-tunnel.jpg`, `mobile-stream.jpg`) and you can easily add them using Next.js `<Image />` tags with `className="opacity-40 object-cover"` to blend them perfectly into the dark theme.