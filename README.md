# K. Yashvanthakumar – Developer Portfolio
React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide + EmailJS.

## 1. Run locally
```bash
npm install
cp .env.example .env     # then fill in EmailJS values (step 3)
npm run dev              # http://localhost:5173
npm run build            # type-check + production build into dist/
```

## 2. Fill in your details (all in `src/data/site.ts`)
- `linkedin`, `leetcode`: paste your profile URLs (until then they show as disabled "add URL" placeholders).
- Projects: add `repo`, `demo` (only real URLs) and `image` (e.g. `/projects/sensai.png` placed in `public/projects/`).
- Certifications: add `url` and `image` per certificate (images in `public/certificates/`).
- Profile photo: save as `public/profile.jpg` (initials placeholder shows until then).
- Social preview: add a 1200×630 `public/og-image.png`.

## 3. Contact form (EmailJS – no private keys in code)
1. Create an account at emailjs.com → **Email Services** → add Gmail → note the **Service ID**.
2. **Email Templates** → create a template. Set *To email* = `k.yashvanthakumar@gmail.com`, *Reply-To* = `{{reply_to}}`, subject `{{subject}}`, body using `{{from_name}}`, `{{from_email}}`, `{{message}}`. Note the **Template ID**.
3. **Account → General** → copy the **Public Key** (EmailJS public keys are meant for browsers).
4. Put them in `.env` as `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`.
5. In EmailJS → Account → Security, restrict allowed domains to your deployed site and enable rate limits.
Spam protection built in: hidden honeypot field, minimum-time check, 30 s resend cooldown, plus EmailJS limits.
Until configured, the form shows a clear "not configured – email me directly" message.

## 4. Resume
Put your PDF at `public/K_Yashvanthakumar_Resume.pdf`. To update later, replace that file (same name) and redeploy.
View opens it in a new tab; Download saves it with the same filename; the Resume section embeds a preview. A placeholder appears if the file is missing.

## 5. Deploy to Vercel
1. Push the project to GitHub (`.env` is git-ignored).
2. vercel.com → **Add New Project** → import the repo (Vite is auto-detected: build `npm run build`, output `dist`).
3. **Settings → Environment Variables**: add the three `VITE_EMAILJS_*` values, then redeploy.
`vercel.json` already handles SPA routing (custom 404 page) and serves the resume PDF correctly.
