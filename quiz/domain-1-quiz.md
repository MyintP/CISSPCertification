# Quiz — Domain 1: Security and Risk Management

> 10 practice questions. Answers at the bottom.

---

## Questions

**Q1.** A ransomware attack encrypts a hospital's patient records, making them completely inaccessible to staff. Which element of the CIA triad is most directly violated?

A) Confidentiality  
B) Availability  
C) Integrity  
D) Non-repudiation  

---

**Q2.** Which of the following best distinguishes a security "standard" from a "baseline"?

A) A standard is discretionary; a baseline is mandatory  
B) A standard is a mandatory rule; a baseline is a minimum reference configuration state to measure systems against  
C) A baseline applies only to hardware; a standard applies only to software  
D) They are interchangeable terms in most frameworks  

---

**Q3.** An organization purchases cyber insurance to cover the financial impact of a potential data breach. This is an example of which risk treatment strategy?

A) Mitigation  
B) Avoidance  
C) Transfer  
D) Acceptance  

---

**Q4.** An asset has a value of $200,000. A specific threat is expected to destroy 25% of the asset's value each time it occurs, and is expected to occur twice per year. What is the ALE?

A) $50,000  
B) $100,000  
C) $25,000  
D) $200,000  

---

**Q5.** A company backs up its database nightly at midnight with no other replication. A failure occurs at 6:00 PM. What is the effective RPO exposure in this scenario?

A) 0 hours  
B) Up to 18 hours  
C) 24 hours exactly, always  
D) RPO does not apply to database failures  

---

**Q6.** Which threat modeling methodology categorizes threats using Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege?

A) PASTA  
B) DREAD  
C) STRIDE  
D) MITRE ATT&CK  

---

**Q7.** Which of the four forms of intellectual property protection has no fixed expiration date but loses all protection the moment it is disclosed publicly?

A) Copyright  
B) Patent  
C) Trademark  
D) Trade secret  

---

**Q8.** Under the (ISC)² Code of Ethics, when two canons appear to conflict in a given scenario, which canon takes priority?

A) The canon listed last  
B) Advance and protect the profession, always  
C) The lower-numbered (higher-priority) canon  
D) Whichever canon the individual professional personally finds most important  

---

**Q9.** A SOC 2 Type II report differs from a SOC 2 Type I report in that it:

A) Covers only financial controls  
B) Assesses control design and operating effectiveness over a period of time, rather than at a single point in time  
C) Is intended only for public release  
D) Does not require an independent auditor  

---

**Q10.** Which legal system relies primarily on case law and precedent, and includes criminal, civil/tort, and administrative branches?

A) Civil law  
B) Common law  
C) Religious law  
D) Customary law  

---

## Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | **B** | Encrypted, inaccessible data is primarily an availability failure, even though ransomware often also threatens confidentiality via exfiltration |
| 2 | **B** | A standard is a mandatory rule; a baseline is the minimum configuration state used as a reference point |
| 3 | **C** | Insurance changes who bears the financial impact — it does not reduce the likelihood of the event, so it is transfer, not mitigation |
| 4 | **B** | SLE = AV × EF = $200,000 × 0.25 = $50,000; ALE = SLE × ARO = $50,000 × 2 = $100,000 |
| 5 | **B** | With only nightly backups and no replication, up to a full day (up to 18 hours since the last backup at midnight) of data could be lost |
| 6 | **C** | STRIDE's six categories spell out Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege |
| 7 | **D** | Trade secrets last exactly as long as secrecy is maintained — no fixed term, but no protection once disclosed |
| 8 | **C** | The canons are explicitly ranked; the lower-numbered canon always takes precedence in a conflict |
| 9 | **B** | Type II adds operating effectiveness testing over a review period (commonly 6–12 months), not just a design snapshot |
| 10 | **B** | Common law relies on precedent and has criminal, civil, and administrative branches; civil law systems rely primarily on codified statutes |

---

**Score:** 9–10 = Domain mastered | 7–8 = Review flagged areas | Below 7 = Re-read Domain 1
