# GreenLeaf Checkout Overhaul — Reviewed QA Summary

## Context and environment

Educational capstone using a course-provided mock application with deliberately seeded defects. Historical lab artifacts are retained alongside a separate verification performed on 2026-10-21 in Windows, Node 24.15.0, installed Google Chrome and better-sqlite3 12.11.1 (adapted from lab dependency 11.10.0). No production release occurred.

## Scope

Three documented manual test cases, two original bug reports, one submitted Playwright checkout script, one SQL validation query and a simulated local PR/story link.

## Current verified results

| Check | Result | Evidence |
| --- | --- | --- |
| Original Playwright checkout test | 1 passed, exit 0; test code unchanged | windows-rerun/playwright-run.txt |
| Order persistence | Guest order found with total 4.99 and status placed after the run | windows-rerun/results.json |
| Expired promo EXPIRED20 | HTTP 500 reproduced; expected graceful 4xx rejection | windows-rerun/results.json |
| Required fields | Empty name, email and address invalid; checkout submission blocked | windows-rerun/ui-audit.json |
| Mobile overlap at 390 x 844 | Not reproduced; overlap area 0 and submit control reachable | windows-rerun/ui-audit.json and mobile-checkout-390px.png |
| Local traceability | PR #1 open, GL-101 In Review; simulated local records | docs/local-workflow/ |

Evidence paths beginning windows-rerun are relative to `evidence/`.

## Historical evidence and discrepancies

The earlier runner text records a failed connection attempt followed by a contradictory success line. New passing evidence is stored separately. The historical database snapshot was also checked and contains the exact order shown in the historical confirmation image.

The original mobile bug record is Major / High; generated reports elevated it to Critical. Its historical report is retained, while the current adapted-runtime reproduction status is explicitly not reproduced. Local HTML ticket views were incorrectly named PNG in the supplied folders; curated extensions are corrected.

Alternative PDF summaries include tool, SQL, and PR claims that conflict with source files. The reviewed portfolio uses SQLite and local simulated Jira/Zephyr/PR workflows, not claims of verified PostgreSQL, BrowserStack or live GitHub integrations.

## Release recommendation

No-Go for the simulated release because the expired promo HTTP 500 remains reproducible. Investigate the historical mobile issue in the original lab environment and confirm build/config parity before closing it. A passing checkout happy path does not establish full regression coverage.

## Limits

One E2E test is automated. No overall manual-suite pass rate is claimed. The UI audit is a new diagnostic script created during portfolio preparation, not original coursework. Its exit 1 reflects that the expected overlap was not reproduced. The course application is not distributed in this repository.
