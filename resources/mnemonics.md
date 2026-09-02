# Memory Aids and Mnemonics

Simple recall devices for the pairs and sequences candidates most often mix up under exam pressure. Use these as retrieval anchors, not a substitute for understanding *why* each concept works the way it does — the domain deep-dives explain the why.

---

## Bell-LaPadula vs. Biba (Domain 3)

**"BLP = Barred from above, Biba = Barred from Below."**

- **B**ell-**L**a**P**adula → confidentiality → can't read/see *above* your clearance ("no read up"), can't write *down* (leak) below it.
- **Biba** → integrity → can't read *below* your integrity level (bad data flowing up), can't write *above* it (corrupting trusted data).

They are exact mirror images of each other — if you know one cold, flip it for the other.

---

## OSI 7 Layers, Top to Bottom (Domain 4)

**"All People Seem To Need Data Processing"**

Application (7) → Presentation (6) → Session (5) → Transport (4) → Network (3) → Data Link (2) → Physical (1)

Bottom to top, reverse the sentence: **"Please Do Not Throw Sausage Pizza Away"**

Physical (1) → Data Link (2) → Network (3) → Transport (4) → Session (5) → Presentation (6) → Application (7)

---

## IAAA Order (Domain 5)

**"I Am Always Accountable."**

**I**dentification → **A**uthentication → **A**uthorization → **A**ccountability — in that exact order; you cannot authorize what hasn't been authenticated, and you cannot hold accountable an action that wasn't tied to a verified identity.

---

## Incident Response Lifecycle (Domain 7)

**"People Don't Care Enough, Really, Learn!"**

**P**reparation → **D**etection & Analysis → **C**ontainment → **E**radication → **R**ecovery → **L**essons Learned

The key ordering trap: Containment always comes *before* Eradication — stop the spread first, then remove the cause.

---

## Risk Treatment Options (Domain 1)

**"MATA"** — **M**itigate, **A**void, **T**ransfer, **A**ccept.

Ask: *did the likelihood/impact actually go down (mitigate), did we stop doing the risky thing entirely (avoid), did someone else start bearing the cost (transfer), or did we knowingly do nothing further (accept)?*

---

## Backup Types — Speed Trade-off (Domain 7)

**"Incremental is quick In, slow Out."**

Incremental: fast to *create* (only today's changes), slow to *restore* (replay every increment since the last full backup, in order).
Differential: slower to create over time (grows until the next full backup), but faster to restore (only the full + the latest differential needed).

---

## Digital Signature Key Direction (Domain 3)

**"Sign with your own Secret, verify with their Well-known."**

To sign: use **your own private (secret)** key.
Anyone can verify: using **your public (well-known)** key.

Reverse it for confidentiality: **"Lock it with THEIR public key, so only THEY can unlock it with their own private key."**

---

## CIA Triad's Opposite (Domain 1)

**"DAD ruins CIA."**

**D**isclosure (breaks Confidentiality), **A**lteration (breaks Integrity), **D**estruction (breaks Availability).

---

## (ISC)² Code of Ethics Canon Order (Domain 1)

**"Society, Self, Sponsor, Society-of-professionals"** (approximate, for ordering only):

1. Protect **society**, the common good, public trust, and infrastructure.
2. Act **honorably**, honestly, justly, responsibly, legally.
3. Provide diligent, competent service to **principals** (your employer/client).
4. Advance and protect **the profession**.

Lower number always wins in a conflict.
