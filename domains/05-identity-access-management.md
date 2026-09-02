# Domain 5: Identity and Access Management (IAM)
**Exam Weight: 13%**

---

## Identification, Authentication, Authorization, Accountability (IAAA)

The four pillars, in strict order — a scenario question often describes one step and expects you to name it:

| Step | Question it answers | Example |
|---|---|---|
| **Identification** | Who are you claiming to be? | Username, badge ID |
| **Authentication** | Prove it | Password, token, biometric |
| **Authorization** | What are you allowed to do? | ACL, role permissions |
| **Accountability** | Can we prove what you did? | Logging, audit trail tied to a unique identity |

> **Trap:** Accountability *requires* unique identification — a shared admin account defeats accountability even if every other control is perfect, because an action can't be tied to one individual.

---

## Authentication Factors

| Factor type | Examples | Category |
|---|---|---|
| Something you **know** | Password, PIN | Type 1 |
| Something you **have** | Token, smart card, phone (OTP app) | Type 2 |
| Something you **are** | Fingerprint, iris, face | Type 3 (biometric) |
| Something you **do** | Behavioral biometrics — keystroke dynamics, gait | Sometimes called Type 4 |
| Somewhere you **are** | Geolocation, IP range | Context factor, not a true independent factor |

**MFA** requires factors from **at least two different categories** — a password + a PIN is still only Type 1 (two things you know), not MFA.

**Biometric performance metrics — the classic exam pair:**

| Metric | Meaning |
|---|---|
| **FRR (False Rejection Rate)** | Type I error — legitimate user rejected |
| **FAR (False Acceptance Rate)** | Type II error — impostor accepted (the more dangerous error) |
| **CER (Crossover Error Rate)** | The point where FRR = FAR — lower CER = better overall system accuracy |

> **Trap:** FAR (Type II, letting the wrong person in) is the security-critical error; FRR (Type I, annoying a legitimate user) is a usability problem. If a question asks which error matters most for a high-security vault, the answer is minimizing FAR even at the cost of higher FRR.

---

## Access Control Models

| Model | How access is decided | Typical use |
|---|---|---|
| **DAC** (Discretionary) | Object owner decides who gets access | Windows NTFS permissions |
| **MAC** (Mandatory) | System enforces based on labels/clearance; owner *cannot* override | Military/government (maps to Bell-LaPadula/Biba) |
| **RBAC** (Role-Based) | Access tied to job role, not individual | Most enterprise systems — scales well |
| **ABAC** (Attribute-Based) | Access decided by policy evaluating attributes of subject, object, and environment at request time | Fine-grained, dynamic, cloud-native |
| **Rule-Based** | Access follows a defined set of if-then rules | Firewall ACLs |

> **Trap:** RBAC assigns access via role membership (static until the role changes); ABAC evaluates a policy dynamically against real-time attributes (time of day, device posture, location) — ABAC is the more flexible/granular answer whenever the scenario mentions *context-dependent* decisions.

---

## Identity Lifecycle and Provisioning

**Provisioning → Review/Recertification → De-provisioning.**

- **Joiner-Mover-Leaver (JML)**: access must be granted at joining, *adjusted* at role change (mover — old access should be removed, not just new access added, to avoid privilege creep), and fully revoked at leaving.
- **Access recertification/attestation**: periodic manager review confirming each user still needs their current access — the primary control against privilege creep.
- **Aggregation vs. creep**: privilege creep is the *accumulation* of unneeded rights over time (usually from role moves without cleanup); it directly undermines least privilege and separation of duties.

---

## Federation and SSO

| Standard | Purpose | Format |
|---|---|---|
| **SAML** | Enterprise SSO, browser-based federation | XML |
| **OAuth 2.0** | **Authorization** — delegated access to resources (not identity) | Tokens (typically JSON) |
| **OpenID Connect (OIDC)** | **Authentication** layer built on top of OAuth 2.0 | JWT (JSON Web Token) |
| **Kerberos** | Enterprise network SSO (on-prem AD) | Tickets, symmetric crypto, relies on a trusted **KDC** (Key Distribution Center) |

> **Trap:** OAuth grants *authorization* (a token to access an API on your behalf) — it does not by itself authenticate *who* the user is. OIDC was built specifically to add an authentication/identity layer on top of OAuth because OAuth alone is commonly misused for login.

**Kerberos specifics worth knowing:** the KDC issues a **TGT** (Ticket Granting Ticket) after initial authentication, then service tickets are issued using the TGT without re-entering credentials. The KDC is a **single point of failure** — if it's down, no new authentication succeeds. Kerberos is also vulnerable to time-based replay if clocks aren't synchronized.

---

## Privileged Access Management (PAM)

Privileged accounts (root, domain admin, service accounts) carry outsized risk. Controls: vaulting credentials, just-in-time elevation, session recording, and eliminating standing/always-on privileged access in favor of granting it only when needed and for a limited time.

---

## Quick Recall Table

| If the question says… | Think… |
|---|---|
| "Prove who you claim to be" | Authentication |
| "Impostor let in" | FAR (Type II — the dangerous one) |
| "Legitimate user rejected" | FRR (Type I) |
| "Owner decides access" | DAC |
| "System enforces via labels, owner can't override" | MAC |
| "Access tied to job function" | RBAC |
| "Access decided by real-time context/attributes" | ABAC |
| "Delegated API access, no identity claim" | OAuth 2.0 |
| "Identity layer on top of OAuth" | OIDC |
| "Ticket-based on-prem SSO" | Kerberos |
| "Old access not removed after a role change" | Privilege creep |

---

**Test yourself:** `quiz/domain-5-quiz.md` · Practice sheet → Domain 5 Knowledge Check
