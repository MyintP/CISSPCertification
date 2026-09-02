# Quiz — Domain 8: Software Development Security

> 10 practice questions. Answers at the bottom.

---

## Questions

**Q1.** "Shift left" in secure software development means:

A) Moving security testing to after deployment  
B) Moving security activities earlier in the SDLC, such as at requirements and design  
C) Reducing the number of developers on a project  
D) Only applying security review to legacy code  

---

**Q2.** Which development model is iterative and explicitly risk-driven, repeating phases in expanding loops while reassessing risk each cycle?

A) Waterfall  
B) Spiral  
C) Big Bang  
D) V-Model  

---

**Q3.** The structural fix for SQL injection is:

A) Allow-listing input characters only  
B) Parameterized queries / prepared statements  
C) Increasing database timeout values  
D) Disabling error messages  

---

**Q4.** A vulnerability where untrusted input is rendered as executable script in another user's browser session is called:

A) CSRF  
B) XSS  
C) SSRF  
D) TOCTOU  

---

**Q5.** A vulnerability where a victim's authenticated session is used to submit a request they did not intend to make is called:

A) XSS  
B) CSRF  
C) SQL injection  
D) Buffer overflow  

---

**Q6.** Combining multiple pieces of individually low-sensitivity data to derive a higher-sensitivity conclusion is called:

A) Inference  
B) Aggregation  
C) Polyinstantiation  
D) Tailoring  

---

**Q7.** Deducing restricted information purely from patterns in what a user can already legitimately access, without ever touching the restricted data directly, is called:

A) Aggregation  
B) Inference  
C) Federation  
D) Fuzzing  

---

**Q8.** Storing multiple versions of the same database record at different classification levels, to prevent a low-clearance user from even inferring a high-clearance record exists, is called:

A) Polyinstantiation  
B) Aggregation  
C) Normalization  
D) Sharding  

---

**Q9.** A Software Bill of Materials (SBOM) is primarily used to:

A) Track project budget and licensing costs  
B) Inventory exactly what components (including third-party and open-source) are present in a software build  
C) Replace the need for code review  
D) Encrypt source code repositories  

---

**Q10.** Which maturity model levels, in CMMI, run from least to most mature?

A) Bronze, Silver, Gold  
B) 1 Initial, 2 Managed, 3 Defined, 4 Quantitatively Managed, 5 Optimizing  
C) Low, Medium, High, Critical  
D) A, B, C, D, E  

---

## Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | **B** | Shift left moves security earlier in the SDLC since defects are cheaper to fix earlier |
| 2 | **B** | Spiral is iterative and risk-driven, reassessing risk at each expanding loop |
| 3 | **B** | Parameterized queries separate code from data structurally, fixing SQL injection at the root |
| 4 | **B** | XSS executes attacker-supplied script in another user's browser context |
| 5 | **B** | CSRF abuses a victim's already-authenticated session to perform an unintended action |
| 6 | **B** | Aggregation combines multiple low-sensitivity pieces into a higher-sensitivity picture |
| 7 | **B** | Inference deduces restricted information from patterns, without direct access to the restricted data |
| 8 | **A** | Polyinstantiation stores classification-specific record versions to prevent inference of a higher-classified record's existence |
| 9 | **B** | An SBOM inventories all components in a build, supporting supply-chain vulnerability management |
| 10 | **B** | CMMI levels run 1 Initial through 5 Optimizing, in increasing process maturity |

---

**Score:** 9–10 = Domain mastered | 7–8 = Review flagged areas | Below 7 = Re-read Domain 8
