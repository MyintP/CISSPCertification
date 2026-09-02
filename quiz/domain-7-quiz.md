# Quiz — Domain 7: Security Operations

> 10 practice questions. Answers at the bottom.

---

## Questions

**Q1.** An analyst disconnects an infected workstation from the network to stop malware from spreading further. Which incident response phase is this?

A) Eradication  
B) Containment  
C) Recovery  
D) Lessons Learned  

---

**Q2.** Removing a backdoor and the root-cause malware from a compromised system occurs during which phase?

A) Containment  
B) Eradication  
C) Detection and Analysis  
D) Preparation  

---

**Q3.** Which detection system is inline and actively blocks malicious traffic, as opposed to only alerting?

A) IDS  
B) IPS  
C) SIEM  
D) Honeypot  

---

**Q4.** Which backup type is fastest to create but generally slowest to restore, since every increment since the last full backup must be replayed in order?

A) Full  
B) Differential  
C) Incremental  
D) Snapshot-only  

---

**Q5.** Which disaster recovery site type is fully operational with near-real-time data replication and can fail over within minutes to hours?

A) Cold site  
B) Warm site  
C) Hot site  
D) Reciprocal site  

---

**Q6.** During evidence collection, which of the following should be collected FIRST, according to the order of volatility?

A) Data on backup tapes  
B) CPU registers and cache  
C) Printed documents  
D) Archived logs on a remote server  

---

**Q7.** In a life-safety scenario such as a fire, a door on the emergency exit path should default to which state on power loss?

A) Fail-secure (locked)  
B) Fail-safe (unlocked)  
C) Remain in its last state indefinitely  
D) Require manual override only from building security  

---

**Q8.** An unbroken, documented record of who handled a piece of evidence, when, and how, is called:

A) Order of volatility  
B) Chain of custody  
C) Due diligence  
D) A clipping level  

---

**Q9.** A formal, documented process requiring request, assessment/approval by a Change Advisory Board, testing, and implementation before a production system is modified is called:

A) Configuration management  
B) Change management  
C) Patch management  
D) Asset management  

---

**Q10.** Which DR/BCP test type actually cuts over production operations to the alternate site, carrying the highest risk but also the highest confidence?

A) Tabletop/walkthrough  
B) Simulation  
C) Parallel test  
D) Full interruption test  

---

## Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | **B** | Isolating an infected host to stop spread is containment, which happens before eradication |
| 2 | **B** | Removing the root cause (malware, backdoor) is eradication |
| 3 | **B** | IPS is inline and actively blocks; IDS is passive and only alerts |
| 4 | **C** | Incremental backups are fast to create but require replaying the full backup plus every incremental in order to restore |
| 5 | **C** | A hot site offers near-real-time replication and rapid failover, at the highest cost |
| 6 | **B** | Order of volatility starts with the most volatile data — CPU registers and cache — before RAM, network state, disk, and archives |
| 7 | **B** | Life-safety exits must fail-safe (unlock) on power loss so people are never trapped |
| 8 | **B** | Chain of custody is the unbroken documented handling record required for evidence admissibility |
| 9 | **B** | Change management is the formal request-approve-test-implement process governing production changes |
| 10 | **D** | A full interruption test actually cuts over production — highest risk, highest realism/confidence |

---

**Score:** 9–10 = Domain mastered | 7–8 = Review flagged areas | Below 7 = Re-read Domain 7
