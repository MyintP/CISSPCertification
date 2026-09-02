# Quiz — Domain 3: Security Architecture and Engineering

> 10 practice questions. Answers at the bottom.

---

## Questions

**Q1.** Which security model enforces "no read up, no write down" to protect confidentiality?

A) Biba  
B) Bell-LaPadula  
C) Clark-Wilson  
D) Brewer-Nash  

---

**Q2.** Which security model enforces "no write up, no read down" to protect integrity?

A) Biba  
B) Bell-LaPadula  
C) Graham-Denning  
D) Take-Grant  

---

**Q3.** Which model uses well-formed transactions and separation of duties, requiring subjects to interact with objects only through a constrained interface?

A) Bell-LaPadula  
B) Brewer-Nash  
C) Clark-Wilson  
D) Biba  

---

**Q4.** A consultant who has accessed one client's confidential data is automatically blocked from accessing a competing client's data. This is an example of which model?

A) Bell-LaPadula  
B) Brewer-Nash (Chinese Wall)  
C) Biba  
D) Graham-Denning  

---

**Q5.** In Common Criteria (ISO 15408), what does an Evaluation Assurance Level (EAL) range from?

A) 0 to 5  
B) 1 to 7  
C) A to D  
D) I to IV  

---

**Q6.** To create a digital signature, which key does the sender use to encrypt the message hash?

A) The sender's public key  
B) The recipient's public key  
C) The sender's private key  
D) The recipient's private key  

---

**Q7.** To encrypt a message so that only the intended recipient can read it, which key should be used?

A) The sender's private key  
B) The recipient's public key  
C) The sender's public key  
D) A shared symmetric key sent in cleartext  

---

**Q8.** Which protocol provides real-time certificate revocation checking, replacing the need to download and parse a full CRL?

A) OCSP  
B) RA  
C) AH  
D) TCB  

---

**Q9.** Which of the following best describes the Trusted Computing Base (TCB)?

A) A public cloud provider's shared infrastructure  
B) All hardware, firmware, and software that enforces the system's security policy  
C) A list of all approved vendors  
D) The organization's incident response team  

---

**Q10.** For a Class C (electrical) fire, which suppression approach is correct?

A) Water  
B) A non-conductive agent such as CO2 or a clean agent  
C) Foam  
D) Sand only  

---

## Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | **B** | Bell-LaPadula: no read up, no write down — protects confidentiality |
| 2 | **A** | Biba: no write up, no read down — protects integrity, the mirror of Bell-LaPadula |
| 3 | **C** | Clark-Wilson enforces well-formed transactions and separation of duties via a constrained interface |
| 4 | **B** | Brewer-Nash (Chinese Wall) dynamically blocks access based on conflict of interest with prior accesses |
| 5 | **B** | Common Criteria EALs range from 1 (lowest) to 7 (highest) |
| 6 | **C** | The sender signs with their own private key so anyone can verify authenticity using the sender's public key |
| 7 | **B** | Encrypting with the recipient's public key ensures only the recipient's private key can decrypt it |
| 8 | **A** | OCSP provides real-time revocation status, unlike the slower, batch-oriented CRL |
| 9 | **B** | The TCB is everything that enforces the security policy — hardware, firmware, and software |
| 10 | **B** | Electrical fires require a non-conductive suppressant; water conducts electricity and creates a shock/spread hazard |

---

**Score:** 9–10 = Domain mastered | 7–8 = Review flagged areas | Below 7 = Re-read Domain 3
