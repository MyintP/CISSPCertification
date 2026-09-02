# Domain 3: Security Architecture and Engineering
**Exam Weight: 13%**

---

## Security Models — Know What Each One Protects

The exam consistently asks "which model would you use to enforce X?" Anchor each model to the *one property* it was built for:

| Model | Protects | Core rule |
|---|---|---|
| **Bell-LaPadula** | Confidentiality | No read up (Simple Security Property), no write down (*-Property / Star Property) |
| **Biba** | Integrity | No write up, no read down — the mirror image of Bell-LaPadula |
| **Clark-Wilson** | Integrity (commercial) | Well-formed transactions + separation of duties; subjects touch data only through a constrained interface (access triple: subject–program–object) |
| **Brewer-Nash (Chinese Wall)** | Confidentiality / conflict of interest | Access dynamically blocked based on what you've *already* accessed (prevents a consultant from touching two competing clients' data) |
| **Graham-Denning** | Access rights | Formal rules for how subjects can create/delete/transfer rights over objects |
| **Take-Grant** | Access rights | Models rights propagation via a directed graph |

> **Trap:** "No read up, no write down" is Bell-LaPadula (confidentiality). Reverse it and it's Biba (integrity). Students consistently swap these under time pressure — anchor it as **B**ell-LaPadula = **B**arred from Above (can't read up), Biba = Barred from Below (can't read down).

---

## Evaluation Criteria and Assurance

| Standard | Origin | Key idea |
|---|---|---|
| **TCSEC (Orange Book)** | US DoD, 1980s | Divisions D (minimal) → C → B → A (verified). Legacy but still tested by name. |
| **ITSEC** | Europe | Separated *functionality* from *assurance* — an advance TCSEC didn't make |
| **Common Criteria (ISO 15408)** | International | **EAL 1–7** (Evaluation Assurance Levels); Protection Profiles (PP) define requirements, Security Targets (ST) define what a specific product claims to meet |

---

## System Architecture Concepts

- **Trusted Computing Base (TCB)** — all hardware/firmware/software that enforces the security policy; everything inside must be trustworthy since a failure here undermines every control built on top.
- **Security perimeter** — the boundary separating the TCB from the untrusted rest of the system.
- **Reference monitor** — the abstract concept: mediates *every* access between subject and object, always invoked, tamperproof, small enough to verify.
- **Security kernel** — the actual hardware/firmware/software implementation of the reference monitor concept.
- **Rings of protection** — Ring 0 (kernel, most privileged) → Ring 3 (user applications, least privileged); enforces process isolation and least privilege at the CPU level.

---

## Cryptography Fundamentals

**Symmetric vs. asymmetric — the core trade-off table:**

| | Symmetric | Asymmetric |
|---|---|---|
| Keys | One shared secret key | Key pair: public + private |
| Speed | Fast | Slow (100–1000x slower) |
| Use case | Bulk data encryption | Key exchange, digital signatures, small payloads |
| Key distribution problem | Hard (n(n-1)/2 keys for n parties) | Easier (publish public key) |
| Examples | AES, 3DES, ChaCha20 | RSA, ECC, Diffie-Hellman, DSA |

**Hybrid cryptosystems** use asymmetric crypto to exchange a symmetric session key, then symmetric crypto for the bulk data — this is exactly what TLS does.

**Hashing** provides integrity, not confidentiality (one-way, fixed-length output): MD5 (broken, still tested as the "don't use this" answer), SHA-1 (deprecated/broken), SHA-2 family (SHA-256/384/512, current standard), SHA-3.

**Digital signatures** = hash the message, then encrypt the hash with the sender's **private** key. The recipient decrypts with the sender's **public** key and compares hashes — this proves authenticity, integrity, and non-repudiation, but **not confidentiality** (the message itself isn't encrypted by this step).

> **Trap:** Signing uses the sender's *private* key (so anyone with the public key can verify who sent it). Encrypting *for confidentiality* uses the recipient's *public* key (so only the recipient's private key can decrypt it). These are opposite key directions for opposite goals — a top exam confusion point.

**PKI components:** CA (Certificate Authority, issues/signs certs), RA (Registration Authority, verifies identity before CA issues), CRL (Certificate Revocation List), OCSP (Online Certificate Status Protocol — real-time revocation check, replaces slow CRL polling).

**Key cryptographic attacks to recognize by name:** brute force, known-plaintext, chosen-plaintext, birthday attack (hash collisions), man-in-the-middle, replay, downgrade/rollback.

---

## Site and Facility / Physical Security

Layered defense, outside-in: **deterrent → delayed access (barriers) → detection (sensors/CCTV) → response.**

| Layer | Examples |
|---|---|
| Perimeter | Fencing, bollards, lighting, CPTED (Crime Prevention Through Environmental Design) |
| Building | Locks, mantraps, badge/biometric access, security guards |
| Server/data center | Cages, HVAC, fire suppression, redundant power (UPS, generators) |

**Fire suppression:** know the classes and the exam favorite — **Class C (electrical)** requires a non-conductive agent (CO2, clean agents like FM-200), never water. Water is fine for Class A (ordinary combustibles) but never on live electrical equipment.

---

## Cloud, Virtualization, and Emerging Architectures

- **IaaS / PaaS / SaaS** — decreasing customer responsibility, increasing provider responsibility as you move up the stack; the **shared responsibility model** always keeps the customer accountable for data classification and access management, regardless of layer.
- **Virtualization risks**: hypervisor as a single point of compromise (VM escape), resource exhaustion between tenants.
- **Containers**: share the host OS kernel — weaker isolation boundary than VMs; image provenance and minimal base images matter.
- **IoT/ICS/SCADA**: often can't be patched quickly, long lifecycles, availability usually outweighs confidentiality in priority — segment them off the main network rather than trying to harden each device.

---

## Quick Recall Table

| If the question says… | Think… |
|---|---|
| "No read up, no write down" | Bell-LaPadula (confidentiality) |
| "No write up, no read down" | Biba (integrity) |
| "Well-formed transaction, separation of duties" | Clark-Wilson |
| "Conflict of interest, dynamic access block" | Brewer-Nash |
| "Always invoked, tamperproof, verifiable" | Reference monitor |
| "EAL 1–7" | Common Criteria |
| "Sign a message" | Sender's private key |
| "Encrypt for confidentiality" | Recipient's public key |
| "Real-time cert revocation check" | OCSP |
| "Fire suppression, electrical equipment" | Non-conductive agent (never water) |

---

**Test yourself:** `quiz/domain-3-quiz.md` · Practice sheet → Domain 3 Knowledge Check
