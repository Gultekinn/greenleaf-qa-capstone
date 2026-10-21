# Review notes before publication

1. **Automation evidence conflict:** `evidence/phase-2/playwright_pass.txt` reports one failed test due to connection refusal, then a contradictory success line. Filename and screenshot alone do not establish a pass. Preserve this file as historical evidence; rerun with the application available and capture the actual exit code and output.
2. **Severity mismatch:** Original UI bug is Major / High. Generated summary calls both defects Critical. Confirm intended severity and revise the portfolio summary with rationale; do not silently rewrite historical evidence.
3. **Broken original evidence pointers:** `ui_bug.json` refers to `evidence/ui_bug.png`, which was not found. Available screenshot is `evidence/phase-1/bug_report_ui.png`. API response is now `evidence/phase-1/api_response.json`. Original JSON content is preserved.
4. **Execution versus design:** Three manual cases are documented. Their JSON does not contain per-case execution status, so no manual pass rate is claimed.
5. **SQL limits:** Saved output contains a matching order row. It does not independently prove that the row came from the exact Playwright run represented by the saved log.
6. **Authorship:** Test and report artifacts come from the completed course folders, which include starter material and generated outputs. Do not describe every line as independently authored. The application and local workflow/report generators are course infrastructure.
7. **Simulation disclosure:** Local Jira/Zephyr pages and local PR records demonstrate simulated workflows; they are not live SaaS tickets or GitHub pull requests.
8. **Screenshots:** Copied as historical evidence; their visual contents have not yet been individually audited.

## Intentionally excluded

Dependency folders, compiled output, SQLite runtime databases, nested Git repositories, local bare origins, redundant copies of tests, and course framework/application source. Originals remain in the Desktop folders.

## Next checks

Review screenshots, reconcile report wording, rerun the checkout test in a working lab environment, and validate the final publication package.

## Additional PDF review

Three overlapping GreenLeaf PDF summaries were supplied. They report successful runs but introduce mismatches in database engine, SQL columns/results, Playwright selectors, and cloud-tool/PR claims. They do not resolve the raw execution log conflict on their own. See the parent portfolio inventory for details. These PDFs are archived outside this proposed repository.

## Screenshot and workflow audit

- All four Phase 1 `.png` files contain HTML rather than PNG bytes. In this curated copy, their extensions are corrected to `.html`. They are simulated ticket/test views, not screenshots of the application under test.
- `playwright_pass.png` is a real image of an order confirmation screen ($4.99), not a test runner pass report. It supports a visible checkout outcome, but cannot establish runner success.
- The order ID displayed in the confirmation screenshot differs from the saved SQL row. These artifacts must not be presented as one correlated transaction.
- `sql_validation.png` is a rendered query/result view; the right edge of the query is clipped. The complete saved SQL and text result are available separately.
- Local PR JSON confirms PR #1, status open, linked to GL-101 (In Review). This differs from PDF references to PR #14 and a merged commit. Original JSON records are now included in `docs/local-workflow/`.
- Historical JSON evidence pointers are preserved. In this copy, the UI ticket view is `evidence/phase-1/bug_report_ui.html`; no underlying mobile-layout screenshot has yet been verified.

## Follow-up: database snapshot checked

The historical SQL export and screenshot contain different order IDs, but the supplied SQLite database contains the exact screenshot order `01M5DCJ26TM1YM3X59DWSVYZCN`. A fresh read on a working copy confirms email, total 4.99, and placed status. This resolves snapshot consistency; it does not establish a successful automated run. See `evidence/phase-2/database-review.json`.

## Defect injection context
Source inspection confirms capstone_module_2 enables G-PROMO-500 and G-PROMO-OVERLAP. These are intentionally seeded course defects. Reporting and investigating them demonstrates QA practice; it is not discovery in a production service.


## Latest status — live UI recheck

At 390 x 844 in installed Chrome, the mobile overlap did not reproduce: measured overlap area was 0 and hit-testing at the submit button center returned the submit button. The screenshot is `evidence/windows-rerun/mobile-checkout-390px.png`. This is an adapted Windows runtime using copied frontend build output, so this observation does not establish that the historical issue was fixed in the original lab. The UI-audit script returned exit 1 because its overlap reproduction condition was false; it was a diagnostic check, not an additional passing regression test.

At desktop width, submitting with empty name/email/address left the browser on checkout and HTML validity checks identified all three required fields as invalid. This verifies the required-field blocking behavior in this rerun, not the historical execution status of all three authored cases.
