# Electronics Trainer ⚡

A fast, self-contained study app for the Electronics course (based on
Boylestad — *Introductory Circuit Analysis*). Concept & definition quizzes,
clear notes, hints, instant feedback, and progress tracking.

## How to run

**Just double-click `index.html`** — it opens in any web browser. No install,
works offline. (Keep `content.js` in the same folder; the page loads it.)

## What's inside

- **9 topics:** L1 Fundamentals · L2 Network Theorems · L3 Capacitors & Inductors ·
  L4 Sinusoidal AC · L5 Basic Elements & Phasors · L6 AC Circuits ·
  L7 Resonance & Transformers · Pulse Waveforms & RC Response · Decibels/Filters/Bode.
- **Notes** tab: the most useful, exam-ready facts, formulas and units per topic.
- **Quiz** tab: 10–12 multiple-choice concept questions each (102 total), with a
  hint button, an explanation after every answer, score, and a "retry the ones
  you missed" option.
- **Mixed Exam:** 20 random questions drawn from all topics.
- **Progress** (best score per topic) is saved in your browser automatically.

## Keyboard shortcuts (during a quiz)

`A` `B` `C` `D` answer · `H` hint · `Enter` next question.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The app (UI + quiz engine). Open this. |
| `content.js` | All notes and quiz questions. Edit here to add/change content. |

## Adding or editing questions

Open `content.js`. Each question is:

```js
{ q: "Question text?",
  options: ["A", "B", "C", "D"],
  answer: 2,                 // index of the correct option (0 = first)
  hint: "A nudge.",
  explain: "Why the answer is correct." }
```

Content is grounded in the lecture decks in `Desktop\Presentations-20260530`.
The source slides are mostly images, so explanations are written from the
textbook the course follows.
