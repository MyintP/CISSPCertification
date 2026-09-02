# Quick Reference / Formula Cheat Sheet

> A single cram page for exam week. Aim to recall everything here without looking. Pulled forward and updated from an earlier version of this study repo — still accurate and still worth knowing cold.

---

## Risk Management Formulas

```
SLE  = Asset Value (AV) × Exposure Factor (EF)
ALE  = SLE × ARO

Value of a safeguard = (ALE before) − (ALE after) − (annual cost of the safeguard)
Implement the safeguard only if that value is positive.
```

| Term | Full Name | Meaning |
|---|---|---|
| AV | Asset Value | Dollar value of the asset |
| EF | Exposure Factor | % of asset value lost per incident (0.0–1.0) |
| SLE | Single Loss Expectancy | Cost of ONE occurrence |
| ARO | Annualized Rate of Occurrence | Expected times per year (0.1 = once per 10 years) |
| ALE | Annualized Loss Expectancy | Expected annual loss |

**Worked example:** A server worth $500,000 is hit by ransomware that encrypts 80% of its data (EF = 0.80). SLE = $500,000 × 0.80 = **$400,000**. Expected once every 2 years (ARO = 0.5): ALE = $400,000 × 0.5 = **$200,000/year**. An EDR solution costing $50,000/year would reduce ALE to $20,000/year. Value = $200,000 − $20,000 − $50,000 = **$130,000 net benefit → implement it.**

---

## Symmetric Key Distribution Problem

```
Keys needed for N users to each have a unique shared symmetric key = N(N-1) / 2
```

| Users | Keys Needed |
|---|---|
| 2 | 1 |
| 5 | 10 |
| 10 | 45 |
| 100 | 4,950 |

This is *why* symmetric key management doesn't scale on its own — asymmetric key exchange (or a KDC, as in Kerberos) solves it.

---

## Biometric Accuracy

```
Lower CER = more accurate system
Reducing FAR generally increases FRR, and vice versa — they trade off against each other
CER = the point where FAR = FRR
```

## Common Port Numbers

| Port | Protocol | Note |
|---|---|---|
| 20 / 21 | FTP | 20 = data, 21 = control |
| 22 | SSH | Encrypted remote access |
| 23 | Telnet | Unencrypted — avoid |
| 25 | SMTP | Email sending |
| 53 | DNS | Name resolution |
| 80 | HTTP | Unencrypted web |
| 110 | POP3 | Email retrieval |
| 143 | IMAP | Email retrieval (leaves mail on server) |
| 161 / 162 | SNMP | Network monitoring |
| 389 | LDAP | Directory access |
| 443 | HTTPS | Encrypted web |
| 636 | LDAPS | Encrypted directory access |
| 3389 | RDP | Remote desktop |

## Cryptographic Algorithm Status

| Algorithm | Type | Key/Output Size | Current Status |
|---|---|---|---|
| DES | Symmetric block | 56-bit | Broken — obsolete |
| 3DES | Symmetric block | 112/168-bit | Deprecated |
| AES-128 | Symmetric block | 128-bit | Acceptable |
| AES-256 | Symmetric block | 256-bit | Current standard |
| RSA-2048 | Asymmetric | 2048-bit | Current minimum |
| ECC-256 | Asymmetric (elliptic curve) | 256-bit | Efficient, current |
| MD5 | Hash | 128-bit | Broken — collision attacks |
| SHA-1 | Hash | 160-bit | Deprecated |
| SHA-256 | Hash | 256-bit | Current standard |

## Fire Classes

| Class | Fuel | Suppression |
|---|---|---|
| A | Wood, paper, fabric | Water, soda acid |
| B | Liquids, petroleum, gases | CO2, clean agent, dry chemical |
| C | Electrical equipment | CO2 or clean agent — **never water** |
| D | Combustible metals | Dry powder specific to the metal |

## Recovery Site Comparison

| Site | Readiness | Typical failover | Cost |
|---|---|---|---|
| Hot | Fully operational, near-real-time replication | Minutes to hours | Highest |
| Warm | Hardware in place, restore from recent backup | Hours to a day | Medium |
| Cold | Empty shell — space and power only | Days to weeks | Lowest |

## Backup Types

| Type | Backs up | Restore complexity |
|---|---|---|
| Full | Everything | Simplest — one set |
| Incremental | Changes since the *last backup of any kind* | Slowest — full backup plus every incremental, in order |
| Differential | Changes since the *last full backup* | Faster — full backup plus only the latest differential |
