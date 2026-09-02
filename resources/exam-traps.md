# Exam Traps

Recurring patterns where CISSP candidates lose points — not because they don't know the material, but because two similar-sounding concepts get swapped under time pressure. Organized by domain.

---

## Domain 1 — Security and Risk Management

- **Transfer vs. mitigate**: buying insurance is *transfer* (changes who pays), not *mitigation* (which reduces likelihood/impact).
- **Standard vs. baseline**: a standard is a mandatory *rule*; a baseline is a minimum *reference configuration state*.
- **RTO vs. RPO**: RTO is about *time to restore*; RPO is about *acceptable data loss window*, measured backward in time.
- **Trade secret vs. copyright**: trade secret has no fixed term but zero protection once disclosed; copyright has a long, fixed term regardless of secrecy.

## Domain 2 — Asset Security

- **Owner vs. Custodian**: the Owner sets classification and requirements and holds liability; the Custodian carries out the technical work day-to-day.
- **Controller vs. Processor (GDPR)**: the Controller decides *why* data is processed; the Processor acts *on behalf of* the Controller.
- **Degaussing and SSDs**: degaussing does nothing to solid-state drives — they have no magnetic domains to disrupt. Use cryptographic erase or physical destruction instead.

## Domain 3 — Security Architecture and Engineering

- **Bell-LaPadula vs. Biba**: Bell-LaPadula = confidentiality = no read up/no write down. Biba = integrity = no write up/no read down. These are exact mirror images and the single most-confused pair on the exam.
- **Signing vs. encrypting for confidentiality**: sign with the *sender's private* key; encrypt for confidentiality with the *recipient's public* key. Getting the key direction backward is the most common crypto mistake under time pressure.
- **Fire suppression**: never water on a Class C (electrical) fire — always a non-conductive agent.

## Domain 4 — Communication and Network Security

- **TCP vs. UDP for SYN floods**: SYN floods exploit TCP's handshake specifically; UDP has no handshake to exploit this way.
- **AH vs. ESP (IPsec)**: AH provides integrity/authentication only, no confidentiality. ESP adds confidentiality (encryption) on top.
- **Transport vs. tunnel mode**: transport mode encrypts only the payload (host-to-host); tunnel mode encrypts the whole original packet (network-to-network, e.g., site-to-site VPN).

## Domain 5 — Identity and Access Management

- **Two "something you know" factors ≠ MFA**: MFA requires factors from *different* categories, not just two credentials.
- **FAR vs. FRR**: FAR (impostor accepted) is the security-critical error; FRR (legitimate user rejected) is a usability problem. If a question emphasizes high security, minimizing FAR is the goal even at the cost of higher FRR.
- **OAuth vs. OIDC**: OAuth grants *authorization* (delegated access to a resource); it does not by itself authenticate identity. OIDC adds the identity/authentication layer on top of OAuth.
- **RBAC vs. ABAC**: RBAC is static, tied to role membership; ABAC evaluates real-time context/attributes dynamically. "Context-dependent" in a question usually signals ABAC.

## Domain 6 — Security Assessment and Testing

- **Vulnerability assessment vs. penetration test**: an assessment *lists* weaknesses; a pentest *proves* they're exploitable and shows real impact.
- **SAST vs. DAST**: SAST analyzes code without running it (earlier, cheaper); DAST tests the running application from the outside (catches runtime/config issues SAST can't see). Neither replaces the other.
- **SOC 2 Type I vs. Type II**: Type I is a design snapshot at one point in time; Type II tests design *and* operating effectiveness over a period (stronger assurance).

## Domain 7 — Security Operations

- **Containment vs. eradication**: isolating an infected host (stopping the spread) is containment; removing the malware/root cause is eradication. Containment always comes first.
- **Incremental vs. differential backups**: incremental is fastest to *create* but slowest to *restore* (replay every increment in order); differential is the opposite trade-off.
- **Fail-safe vs. fail-secure**: fire/life-safety exits must fail-*safe* (unlock on power loss); fail-*secure* (locks on power loss) is for security-critical doors where life safety isn't the primary concern.

## Domain 8 — Software Development Security

- **Aggregation vs. inference**: aggregation *combines* multiple allowed pieces into a bigger picture; inference *deduces* a forbidden piece from patterns, without direct access to it.
- **Input validation vs. parameterized queries**: allow-listing input helps, but parameterized queries are the actual *structural* fix for SQL injection because they separate code from data.
- **XSS vs. CSRF**: XSS runs attacker script in a victim's browser; CSRF abuses a victim's already-authenticated session to submit an unwanted request. Different mechanism, different fix (output encoding/CSP vs. anti-CSRF tokens/SameSite cookies).

---

## General Exam-Taking Traps

- **Absolutes are usually (not always) wrong** — "always," "never," "only" often signal an incorrect option in a domain built around risk trade-offs and context-dependent decisions.
- **"Best answer," not "the only true answer"** — multiple options may be factually correct; CISSP wants the one a security leader would choose given the full context of the scenario.
- **Don't answer from memory of a *different* exam or vendor cert** — CISSP is management/architecture-focused and generalist; a deeply technical, single-vendor-specific answer is rarely the "most appropriate" choice even when it's technically valid.
- **CAT means no going back** — you cannot skip and return to a question on the adaptive English exam, so read carefully the first time.
