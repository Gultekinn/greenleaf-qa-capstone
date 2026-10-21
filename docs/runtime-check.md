# Local runtime check — 2026-10-21

The supplied app was prepared for Linux. Loading its existing better-sqlite3 native module under Windows Node fails with "not a valid Win32 application". The @shared/config-loader and @shared/defect-framework workspace package links are also missing in the copied node_modules folder. WSL enumeration was unavailable in this session.

No application dependency was installed or rebuilt, and no new browser test result is claimed. A compatible dependency install in a separate working copy, or access to the original lab runtime, is needed for a live rerun.

The submitted SQL was executed using Python SQLite on a temporary copy of the supplied database, including its WAL files. Results are in `evidence/phase-2/database-review.json`. Source database files were not opened for mutation. This checks the supplied database snapshot only; it is separate from the original run and from UI automation.

## Follow-up: adapted runtime succeeded

Dependencies were installed in `tmp/greenleaf-runtime`, with package lifecycle scripts initially disabled. Rebuilding better-sqlite3 11.10.0 failed because no matching prebuilt binary or Visual Studio C++ build tools were available. Only the temporary workspace dependency was changed to 12.11.1; its native installation succeeded. The copied prebuilt application started with LAB_ID=capstone_module_2. A separate Playwright config selected installed Chrome. The unchanged test passed with exit code 0. The application and dependency changes were not added to the portfolio source or original Desktop lab.
