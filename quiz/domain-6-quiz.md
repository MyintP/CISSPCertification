# Quiz — Domain 6: Security Assessment and Testing

> 10 practice questions. Answers at the bottom.

---

## Questions

**Q1.** What is the primary difference between a vulnerability assessment and a penetration test?

A) They are identical processes with different names  
B) A vulnerability assessment finds and lists weaknesses; a penetration test proves they are exploitable and shows real impact  
C) Vulnerability assessments require written authorization; penetration tests do not  
D) Penetration tests are always automated; vulnerability assessments are always manual  

---

**Q2.** In a penetration test, a tester who is given full source code, architecture diagrams, and credentials in advance is performing which type of test?

A) Black box  
B) Gray box  
C) White box  
D) Blind box  

---

**Q3.** What must exist, in writing, before any authorized penetration test begins?

A) A signed non-disclosure agreement only  
B) Rules of Engagement defining scope, timing, and allowed techniques  
C) A completed BIA  
D) A CVSS report from a prior scan  

---

**Q4.** Which testing technique analyzes application source code for vulnerabilities without executing the program?

A) DAST  
B) SAST  
C) Fuzzing  
D) Penetration testing  

---

**Q5.** Which testing technique tests a running application from the outside, black-box style, and can catch runtime/configuration issues that static analysis cannot?

A) SAST  
B) SCA  
C) DAST  
D) Code review  

---

**Q6.** Feeding malformed or unexpected input into a program to discover crashes or memory-safety bugs is known as:

A) Fuzzing  
B) Tailoring  
C) Baselining  
D) Scoping  

---

**Q7.** What is the key difference between a SOC 2 Type I report and a SOC 2 Type II report?

A) Type I covers financial controls; Type II covers security controls  
B) Type I assesses control design at a point in time; Type II assesses design and operating effectiveness over a period  
C) Type II is always public; Type I is always confidential  
D) There is no meaningful difference  

---

**Q8.** An authenticated (credentialed) vulnerability scan generally produces:

A) More false positives than an unauthenticated scan  
B) Fewer false positives and greater visibility into missing patches and local misconfiguration  
C) No results, since credentials are not needed for scanning  
D) Results only about network-layer vulnerabilities  

---

**Q9.** A threshold below which minor policy violations are logged but not escalated, used to reduce alert noise, is called a:

A) Clipping level  
B) CVSS score  
C) Rules of Engagement  
D) SOC 3 report  

---

**Q10.** Which report is the public-facing, high-level summary version of a SOC 2 report, containing no sensitive control detail?

A) SOC 1  
B) SOC 2 Type I  
C) SOC 2 Type II  
D) SOC 3  

---

## Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | **B** | Vulnerability assessments find/list weaknesses; penetration tests actively prove exploitability and impact |
| 2 | **C** | Full knowledge provided in advance defines white box testing |
| 3 | **B** | Rules of Engagement (scope, timing, techniques, contacts) must be agreed and signed before testing begins |
| 4 | **B** | SAST analyzes source code without executing it |
| 5 | **C** | DAST tests the running application externally, catching issues invisible to static analysis |
| 6 | **A** | Fuzzing feeds malformed/random input to surface crashes and memory-safety issues |
| 7 | **B** | Type II adds operating effectiveness testing over a period; Type I is a design-only snapshot |
| 8 | **B** | Authenticated scans see more (missing patches, local config) and produce fewer false positives than unauthenticated scans |
| 9 | **A** | A clipping level is the threshold below which minor violations are tolerated without triggering alerts |
| 10 | **D** | SOC 3 is the public, high-level summary; SOC 2 reports contain sensitive detail and are restricted |

---

**Score:** 9–10 = Domain mastered | 7–8 = Review flagged areas | Below 7 = Re-read Domain 6
