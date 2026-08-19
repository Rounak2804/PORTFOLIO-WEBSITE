# Graph Report - PORTFOLIO WEBSITE  (2026-08-19)

## Corpus Check
- Corpus is ~4,736 words - fits in a single context window. You may not need a graph.

## Summary
- 24 nodes · 36 edges · 6 communities (5 shown, 1 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Portfolio Presence & Socials
- Developer Identity & Education
- Competitive Programming
- Technical Skills & Web Dev
- Graphify Tooling

## God Nodes (most connected - your core abstractions)
1. `Portfolio Website (index.html)` - 15 edges
2. `Rounak Raj (Developer)` - 11 edges
3. `Skills and Technical Toolkit Section` - 4 edges
4. `Data Structures and Algorithms Skills` - 4 edges
5. `LeetCode Profile 265 Solved` - 4 edges
6. `CodeChef Profile 120 Solved` - 4 edges
7. `Education and Credentials Section` - 3 edges
8. `IBM Professional Technical Certification` - 3 edges
9. `IBM Certificate PDF` - 3 edges
10. `Parul Institute of Technology` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Portfolio Website (index.html)` --references--> `CodeChef Icon PNG`  [EXTRACTED]
  index.html → codechef-icon.png
- `Portfolio Website (index.html)` --references--> `Rounak Raj Professional Resume`  [EXTRACTED]
  index.html → Rounak_Raj_Professional_Resume.pdf
- `Portfolio Website (index.html)` --references--> `LeetCode Icon PNG`  [EXTRACTED]
  index.html → leetcode-icon.png
- `Portfolio Website (index.html)` --references--> `IBM Certificate PDF`  [EXTRACTED]
  index.html → Rounak_IBM_Certificate.pdf
- `Rounak Raj (Developer)` --references--> `Rounak Raj Professional Resume`  [EXTRACTED]
  index.html → Rounak_Raj_Professional_Resume.pdf

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Rounak Competitive Programming Presence** — index_leetcode_profile, index_codechef_profile, index_dsa_skills [EXTRACTED 1.00]
- **Portfolio Main Navigation Sections** — index_hero_section, index_about_section, index_skills_section, index_projects_section, index_education_section, index_contact_section [EXTRACTED 1.00]

## Communities (6 total, 1 thin omitted)

### Community 0 - "Portfolio Presence & Socials"
Cohesion: 0.29
Nodes (8): About Section, Contact and CTA Section, Hero Section, LeetCode Profile 265 Solved, LinkedIn Profile, Portfolio Website (index.html), Projects Section, LeetCode Icon PNG

### Community 1 - "Developer Identity & Education"
Cohesion: 0.38
Nodes (7): Education and Credentials Section, GitHub Profile Rounak2804, IBM Professional Technical Certification, Parul Institute of Technology, Rounak Raj (Developer), IBM Certificate PDF, Rounak Raj Professional Resume

### Community 2 - "Competitive Programming"
Cohesion: 0.67
Nodes (3): CodeChef Icon PNG, CodeChef Profile 120 Solved, Data Structures and Algorithms Skills

### Community 3 - "Technical Skills & Web Dev"
Cohesion: 0.67
Nodes (3): Java Programming OOP Core, Skills and Technical Toolkit Section, Web Development Skills

## Knowledge Gaps
- **7 isolated node(s):** `Graphify Knowledge Graph Rule`, `Graphify Workflow`, `Hero Section`, `About Section`, `Projects Section` (+2 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Portfolio Website (index.html)` connect `Portfolio Presence & Socials` to `Developer Identity & Education`, `Competitive Programming`, `Technical Skills & Web Dev`?**
  _High betweenness centrality (0.482) - this node is a cross-community bridge._
- **Why does `Rounak Raj (Developer)` connect `Developer Identity & Education` to `Portfolio Presence & Socials`, `Competitive Programming`, `Technical Skills & Web Dev`?**
  _High betweenness centrality (0.221) - this node is a cross-community bridge._
- **Why does `Skills and Technical Toolkit Section` connect `Technical Skills & Web Dev` to `Portfolio Presence & Socials`, `Competitive Programming`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Data Structures and Algorithms Skills` (e.g. with `CodeChef Profile 120 Solved` and `LeetCode Profile 265 Solved`) actually correct?**
  _`Data Structures and Algorithms Skills` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Graphify Knowledge Graph Rule`, `Graphify Workflow`, `Hero Section` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._