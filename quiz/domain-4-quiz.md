# Quiz — Domain 4: Communication and Network Security

> 10 practice questions. Answers at the bottom.

---

## Questions

**Q1.** A SYN flood attack exploits which protocol's connection-establishment process?

A) UDP  
B) ICMP  
C) TCP  
D) ARP  

---

**Q2.** Which OSI layer do switches primarily operate at, forwarding traffic based on MAC address?

A) Layer 1  
B) Layer 2  
C) Layer 3  
D) Layer 4  

---

**Q3.** Which network segment sits between two firewalls and hosts public-facing services, isolating them from the internal network?

A) VLAN  
B) DMZ  
C) VPN concentrator  
D) Intranet  

---

**Q4.** Which IPsec component provides confidentiality in addition to integrity and authentication?

A) AH (Authentication Header)  
B) ESP (Encapsulating Security Payload)  
C) IKE Phase 1 only  
D) SNMP  

---

**Q5.** Which IPsec mode encrypts the entire original packet and re-encapsulates it, typically used for site-to-site VPNs?

A) Transport mode  
B) Tunnel mode  
C) Broadcast mode  
D) Promiscuous mode  

---

**Q6.** Which current wireless security standard replaces the WPA2 PSK four-way handshake with SAE (Simultaneous Authentication of Equals)?

A) WEP  
B) WPA  
C) WPA2  
D) WPA3  

---

**Q7.** An attacker forges ARP replies on a local segment to redirect traffic through their own machine. This is:

A) DNS poisoning  
B) ARP spoofing  
C) SYN flood  
D) Smurf attack  

---

**Q8.** Which security principle holds that no device or user should be trusted by network location alone, and every request must be verified regardless of source?

A) Defense in depth  
B) Zero trust  
C) Security through obscurity  
D) Least functionality  

---

**Q9.** Which protocol should replace Telnet to provide encrypted remote administrative access?

A) FTP  
B) SSH  
C) SNMP v1  
D) HTTP  

---

**Q10.** Which network architecture concept separates the control plane (routing decisions) from the data plane (packet forwarding) to enable centralized, programmable policy?

A) VLAN tagging  
B) Software-Defined Networking (SDN)  
C) NAT  
D) Spanning Tree Protocol  

---

## Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | **C** | SYN floods exploit TCP's three-way handshake by leaving connections half-open; UDP has no handshake to exploit this way |
| 2 | **B** | Switches forward by MAC address at Layer 2 (Data Link) |
| 3 | **B** | A DMZ, bounded by two firewalls, isolates public-facing services from the internal network |
| 4 | **B** | ESP provides confidentiality (encryption) plus integrity/authentication; AH provides integrity/authentication only, no encryption |
| 5 | **B** | Tunnel mode encrypts and re-encapsulates the entire original packet, standard for site-to-site VPNs |
| 6 | **D** | WPA3 introduces SAE, replacing the vulnerable WPA2 PSK handshake and adding forward secrecy |
| 7 | **B** | Forging ARP replies to redirect Layer 2 traffic is ARP spoofing |
| 8 | **B** | Zero trust requires verification of every request regardless of network location, rather than trusting "inside the perimeter" |
| 9 | **B** | SSH encrypts remote administrative sessions, replacing cleartext Telnet |
| 10 | **B** | SDN centralizes control-plane decisions separately from the data plane's packet forwarding |

---

**Score:** 9–10 = Domain mastered | 7–8 = Review flagged areas | Below 7 = Re-read Domain 4
