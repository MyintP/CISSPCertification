# Quiz — Domain 5: Identity and Access Management (IAM)

> 10 practice questions. Answers at the bottom.

---

## Questions

**Q1.** Put the IAAA steps in the correct order.

A) Authorization, Identification, Authentication, Accountability  
B) Identification, Authentication, Authorization, Accountability  
C) Authentication, Identification, Accountability, Authorization  
D) Accountability, Identification, Authentication, Authorization  

---

**Q2.** A user logs in with both a password and a separately memorized PIN. Does this satisfy true multi-factor authentication?

A) Yes, because two credentials are required  
B) No, because both factors are "something you know" — the same category  
C) Yes, because a PIN is a possession factor  
D) No, MFA always requires biometrics  

---

**Q3.** In biometric systems, which error type occurs when an impostor is incorrectly granted access?

A) FRR (False Rejection Rate)  
B) FAR (False Acceptance Rate)  
C) CER (Crossover Error Rate)  
D) MTBF  

---

**Q4.** Which access control model enforces access based on system-assigned labels/clearances that the object owner cannot override?

A) DAC  
B) RBAC  
C) MAC  
D) ABAC  

---

**Q5.** Which access control model evaluates real-time attributes such as time of day, device posture, and location to make a dynamic access decision?

A) DAC  
B) MAC  
C) RBAC  
D) ABAC  

---

**Q6.** OAuth 2.0 is primarily a protocol for:

A) Authentication (proving identity)  
B) Delegated authorization (granting access to a resource without sharing credentials)  
C) Encrypting data at rest  
D) Network segmentation  

---

**Q7.** Which protocol adds an identity/authentication layer on top of OAuth 2.0?

A) SAML  
B) Kerberos  
C) OpenID Connect (OIDC)  
D) RADIUS  

---

**Q8.** In Kerberos, what does the KDC issue after a user successfully authenticates for the first time?

A) A digital certificate  
B) A Ticket Granting Ticket (TGT)  
C) A SAML assertion  
D) An OAuth access token  

---

**Q9.** An employee moves from Finance to Marketing, but retains their old Finance system access in addition to their new Marketing access. This is an example of:

A) Least privilege  
B) Separation of duties  
C) Privilege creep  
D) Federation  

---

**Q10.** Which control is the primary defense against privilege creep over time?

A) One-time password issuance at hire  
B) Periodic access recertification/attestation by managers  
C) Disabling MFA for convenience  
D) Increasing password complexity requirements  

---

## Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | **B** | IAAA order is Identification, Authentication, Authorization, Accountability |
| 2 | **B** | Both a password and a PIN are "something you know" — true MFA requires factors from different categories |
| 3 | **B** | FAR (Type II error) is an impostor being incorrectly accepted — the more security-critical error |
| 4 | **C** | MAC enforces access via system-assigned labels/clearance that the owner cannot override |
| 5 | **D** | ABAC evaluates real-time attributes of subject, object, and environment to make dynamic decisions |
| 6 | **B** | OAuth 2.0 grants delegated authorization to access a resource, without directly asserting identity |
| 7 | **C** | OpenID Connect (OIDC) adds an authentication/identity layer on top of OAuth 2.0's authorization framework |
| 8 | **B** | After initial authentication, the KDC issues a TGT, which is then used to request service tickets without re-entering credentials |
| 9 | **C** | Retaining old access after a role change without removal is privilege creep |
| 10 | **B** | Periodic recertification/attestation is the primary control catching and reversing accumulated unneeded access |

---

**Score:** 9–10 = Domain mastered | 7–8 = Review flagged areas | Below 7 = Re-read Domain 5
