# Domain 4: Communication and Network Security
**Exam Weight: 13%**

---

## The OSI Model — Still the Backbone of This Domain

Memorize both directions (top-down for design questions, bottom-up for troubleshooting). Mnemonic: **A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing.

| # | Layer | Data unit (PDU) | Examples | Attacks/devices |
|---|---|---|---|---|
| 7 | Application | Data | HTTP, FTP, SMTP, DNS | Application-layer attacks, WAF |
| 6 | Presentation | Data | SSL/TLS, encryption, encoding | — |
| 5 | Session | Data | NetBIOS, RPC, session establishment | Session hijacking |
| 4 | Transport | Segment | TCP, UDP | SYN flood, port scanning |
| 3 | Network | Packet | IP, ICMP, routing | Routers, IP spoofing, ping flood |
| 2 | Data Link | Frame | Ethernet, MAC, switches, ARP | Switches, ARP spoofing, MAC flooding |
| 1 | Physical | Bit | Cabling, hubs, NICs | Wiretapping, physical damage |

**TCP/IP model** collapses this to 4 layers (Application, Transport, Internet, Network Access) — a mapping question ("which OSI layers does TCP/IP's Application layer cover?") is common: TCP/IP Application = OSI Application + Presentation + Session.

---

## TCP vs. UDP

| | TCP | UDP |
|---|---|---|
| Connection | Connection-oriented (3-way handshake: SYN, SYN-ACK, ACK) | Connectionless |
| Reliability | Guaranteed delivery, ordering | Best-effort, no guarantee |
| Speed | Slower (overhead) | Faster (minimal overhead) |
| Use case | Web, email, file transfer — correctness matters | VoIP, streaming, DNS queries — speed matters more than a dropped packet |

> **Trap:** A SYN flood attack exploits the **TCP** 3-way handshake (half-open connections exhaust server resources) — this cannot happen against UDP, which has no handshake.

---

## Network Devices and Segmentation

| Device | Layer | Function |
|---|---|---|
| Hub | 1 | Repeats to all ports (broadcast domain = collision domain; effectively obsolete) |
| Switch | 2 | Forwards by MAC address; each port is its own collision domain |
| Router | 3 | Forwards by IP address; separates broadcast domains |
| Firewall | 3/4 (stateful) or 7 (next-gen/WAF) | Enforces access policy between zones |

**Firewall generations:** packet filter (stateless, rules on IP/port only) → stateful inspection (tracks connection state) → application/proxy (understands the protocol content) → next-generation (adds IPS, app awareness, user identity).

**Segmentation concepts:** VLANs (logical Layer 2 segmentation), subnetting, **DMZ** (a network segment between two firewalls that hosts public-facing services, isolating them from the internal network), **zero trust** (never trust by network location alone — verify every request regardless of source, replacing the old "trusted internal network" assumption).

---

## Secure Protocols — Replace the Insecure Version

A high-yield table: match legacy protocol → secure replacement and *why* the legacy one fails.

| Insecure | Secure replacement | Weakness fixed |
|---|---|---|
| Telnet | SSH | Cleartext credentials/session |
| FTP | SFTP / FTPS | Cleartext credentials/data |
| HTTP | HTTPS (TLS) | No encryption, no server authentication |
| SNMP v1/v2 | SNMPv3 | Cleartext community strings, no auth |
| SSL / early TLS | TLS 1.2+ | Known cryptographic weaknesses |

**IPsec** (network-layer VPN framework): **AH** (Authentication Header — integrity/authentication, no confidentiality) vs. **ESP** (Encapsulating Security Payload — confidentiality + integrity); **Transport mode** (payload encrypted, original IP header intact — host-to-host) vs. **Tunnel mode** (entire original packet encrypted and re-encapsulated — network-to-network, e.g. site-to-site VPN).

---

## Wireless Security

| Standard | Status |
|---|---|
| WEP | Broken — never a correct exam answer |
| WPA | Transitional fix for WEP, also weak (TKIP) |
| WPA2 | AES-CCMP, current baseline for most deployments |
| WPA3 | Current best — SAE (Simultaneous Authentication of Equals) replaces the PSK 4-way handshake vulnerability, forward secrecy |

---

## Voice, Multimedia, and Remote Access

- **VoIP risks**: eavesdropping, vishing, toll fraud, SIP-specific attacks — mitigate with segmentation and encrypted signaling/media (SRTP).
- **Remote access**: VPN (site-to-site or client-to-site), always paired with strong authentication (MFA) — a VPN alone only protects data in transit, not endpoint compromise.
- **Software-Defined Networking (SDN)**: separates the control plane (decides routing) from the data plane (forwards packets), enabling centralized, programmable network policy.
- **Software-Defined WAN (SD-WAN)**: applies SDN principles across WAN links for centralized, policy-based path selection.

---

## Common Network Attacks

| Attack | Mechanism | Primary defense |
|---|---|---|
| ARP spoofing | Forge ARP replies to redirect traffic (Layer 2, on-segment only) | Dynamic ARP inspection, port security |
| DNS poisoning/spoofing | Inject false DNS responses | DNSSEC, validate responses |
| MITM | Attacker sits between two parties, relays/alters traffic | Mutual TLS, certificate pinning |
| SYN flood | Exhaust half-open TCP connections | SYN cookies, rate limiting |
| DDoS | Overwhelm target with distributed traffic | Rate limiting, scrubbing services, CDN/anycast |
| Smurf | Spoofed ICMP echo to broadcast address, amplifying replies at victim | Disable IP-directed broadcasts |

---

## Quick Recall Table

| If the question says… | Think… |
|---|---|
| "3-way handshake exploited" | SYN flood (TCP only) |
| "Best-effort, no handshake, low latency" | UDP |
| "Forwards by MAC" | Switch (Layer 2) |
| "Forwards by IP" | Router (Layer 3) |
| "Isolated segment for public-facing services" | DMZ |
| "Confidentiality + integrity, IPsec" | ESP |
| "Integrity only, IPsec" | AH |
| "Whole packet encrypted, site-to-site" | Tunnel mode |
| "Current wireless best practice" | WPA3 |
| "Never trust by network location" | Zero trust |

