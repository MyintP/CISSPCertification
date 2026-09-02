# The CISSP Mindset Guide

## Think Like a Manager, Not a Technician

This is one of the single most useful things to internalize before sitting the exam. CISSP is not a technical certification in the traditional sense — it's a **managerial and governance** certification that validates your ability to think strategically about security across an entire organization. See also `docs/exam-overview.md` and `resources/exam-traps.md` for the same theme applied domain-by-domain.

---

## The Manager Filter

Before selecting any answer, run it through this filter:

> "Is this what a **CISO** or **senior security manager** would do — not what a sysadmin would do?"

| Scenario | Technician thinks | Manager thinks |
|---|---|---|
| Employee shares their password | "Lock the account immediately" | "Update the acceptable use policy and run security awareness training" |
| New vulnerability found | "Patch it now" | "Assess risk, follow change management, patch through approved channels" |
| Suspicious network traffic | "Block the IP" | "Investigate through proper incident response procedure, document findings" |
| Request to bypass security for a VIP | "OK, it's the CEO" | "No — policy applies to everyone; document the request and escalate if needed" |

---

## The Priority Hierarchy

When multiple answers seem correct, apply this hierarchy, roughly in order:

```
1. People safety, always first
2. Senior management support / governance
3. Policy and procedures
4. Risk assessment / BIA
5. Training and awareness
6. Technical controls
7. A specific technical solution
```

**Example:** "A new system is being deployed. What should happen FIRST?" — not "configure the firewall," not "run a vulnerability scan," but "ensure management has approved and classified the system, defined security requirements, and that a risk assessment has been conducted."

---

## How to Read a CISSP Question

1. **Identify what is really being asked.** Strip away the scenario dressing to find the core question.
2. **Watch for keywords**: *first, best, most, primary, immediate, CISO, senior manager, policy, risk.*
3. **Eliminate the obviously wrong answers** to narrow to two, then apply the Manager Filter.
4. **Choose the answer with the highest strategic value** — governance and policy generally outrank a specific technology.

---

## Common Answer Patterns

**When the answer involves a "first step,"** it's almost always one of:
- Obtain management support/approval
- Conduct a risk assessment
- Define scope
- Review or update policy

**When the question involves an incident,** the correct sequence almost always follows the Domain 7 lifecycle: contain the damage (without destroying evidence) → notify appropriate parties → eradicate → recover → document lessons learned.

**When the question involves a new control,** ask: has a risk assessment been done? Has management approved it? Has policy been updated? These come *before* implementation.

**When two answers both seem correct,** choose the one that is proactive rather than reactive, addresses the root cause rather than the symptom, and leans on policy/governance rather than a specific technology.

---

## The Avoid List

Answers that are almost never correct on the CISSP exam:

- "Do it immediately, without approval"
- "Implement the technical control first, then update policy"
- "The CISO makes all the decisions alone" (senior management holds ultimate responsibility)
- "Ignore the risk" (a risk must always be mitigated, transferred, avoided, or formally accepted — never simply ignored)
- "The penetration tester doesn't need written consent" (Rules of Engagement are always required first)
- "Two passwords count as MFA" (same factor category — not true multi-factor)
