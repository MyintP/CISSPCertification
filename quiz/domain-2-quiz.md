# Quiz — Domain 2: Asset Security

> 10 practice questions. Answers at the bottom.

---

## Questions

**Q1.** Who is ultimately accountable for assigning a data classification level and bears liability for its protection?

A) Data Custodian  
B) Data Owner  
C) Data Processor  
D) End User  

---

**Q2.** Under GDPR, which role determines the purpose and means of processing personal data?

A) Data Controller  
B) Data Processor  
C) Data Custodian  
D) Data Steward  

---

**Q3.** Which sanitization method is generally ineffective on a solid-state drive (SSD) because it relies on disrupting magnetic domains?

A) Cryptographic erase  
B) Physical destruction  
C) Degaussing  
D) Multi-pass overwrite  

---

**Q4.** Sensitive data being actively processed in a server's RAM is best described as being in which state?

A) Data at rest  
B) Data in transit  
C) Data in use  
D) Data in archive  

---

**Q5.** An organization removes several controls from a NIST SP 800-53 baseline that don't apply to its environment. This activity is best described as:

A) Tailoring  
B) Scoping  
C) Classification  
D) Remanence reduction  

---

**Q6.** Which of the following is the ONLY acceptable disposal method for media holding the organization's highest-sensitivity data?

A) Clear (single-pass overwrite)  
B) Purge  
C) Physical destruction  
D) Formatting the drive  

---

**Q7.** A day-to-day IT administrator applies backup schedules and access controls exactly as specified by policy, without setting the policy themselves. This role is best described as:

A) Data Owner  
B) Data Custodian  
C) Data Controller  
D) Data Subject  

---

**Q8.** Which control most directly enforces confidentiality for data at rest?

A) Digital signature  
B) Full-disk or volume encryption  
C) Intrusion detection system  
D) Access recertification  

---

**Q9.** An organization's retention policy must reconcile all of the following EXCEPT:

A) Legal and regulatory minimum retention requirements  
B) Business need for the data  
C) Storage cost and breach blast-radius risk of retaining data longer than necessary  
D) The personal preference of whichever employee created the file  

---

**Q10.** Residual data that remains on media after a file is "deleted" through normal OS deletion is known as:

A) Data remanence  
B) Data aggregation  
C) Data custodianship  
D) Data tailoring  

---

## Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | **B** | The Data Owner is accountable for classification and ultimate liability, even though the Custodian does the technical work |
| 2 | **A** | The Controller determines purpose and means of processing; the Processor acts on the Controller's behalf |
| 3 | **C** | Degaussing disrupts magnetic domains — SSDs are not magnetic media, so degaussing does not reliably sanitize them |
| 4 | **C** | Data actively in CPU/RAM is data in use, distinct from at-rest (stored) or in-transit (network) states |
| 5 | **B** | Removing inapplicable controls from a baseline is scoping; adjusting/adding controls to fit context is tailoring |
| 6 | **C** | Physical destruction is the only irreversible method acceptable for the highest sensitivity levels |
| 7 | **B** | Implementing policy day-to-day (backups, access) without setting it is the Custodian role |
| 8 | **B** | Encryption at rest directly enforces confidentiality for stored data |
| 9 | **D** | Retention policy is a governance decision balancing legal, business, and risk factors — not individual employee preference |
| 10 | **A** | Data remanence is residual data left behind after deletion, which is why proper sanitization/destruction is required |

---

**Score:** 9–10 = Domain mastered | 7–8 = Review flagged areas | Below 7 = Re-read Domain 2
