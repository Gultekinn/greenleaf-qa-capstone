# Test Summary Report — GreenLeaf Checkout Overhaul

## Executive Summary
The checkout overhaul sprint including guest checkout flow, promo code application, defect discovery, automated testing, backend database validation, and git traceability.
2 critical defect(s) remain open. Playwright guest checkout happy-path script completed. SQL validation confirmed an order row for capstone.guest@example.test. Release recommendation: **No-Go** until critical defects are fixed and verified.

## Audience
Product Owner and release committee

## Scope Tested
The checkout overhaul sprint including guest checkout flow, promo code application, defect discovery, automated testing, backend database validation, and git traceability.

## Critical Defects
Mobile checkout layout bug where Apply Promo overlaps Submit Order button on viewports below 768px, blocking checkout on mobile devices.

Promo code validation endpoint POST /api/promo/validate returns HTTP 500 Internal Server Error for code EXPIRED20 instead of expected 400 rejection.

## Derived Defect Register
- **GL-B01 (Critical)**: Mobile checkout — Apply Promo overlaps Submit Order below 768px viewport
- **GL-B02 (Critical)**: Promo API returns HTTP 500 for EXPIRED20 instead of graceful 400 rejection
  - Endpoint: `POST /api/promo/validate` returned HTTP 500

## Automation and Backend Validation
Playwright happy-path automated checkout test passed successfully, and SQL query verified backend database persistence for order row associated with capstone.guest@example.test.

- Playwright guest checkout happy-path script completed
- SQL validation confirmed an order row for capstone.guest@example.test

## Release Recommendation
No-Go recommendation until both critical defects (mobile UI overlap and HTTP 500 promo API) are resolved.

Recommendation: **No-Go** for production until GL-B01 (mobile overlap) and GL-B02 (EXPIRED20 HTTP 500) are resolved.

## Author Role
QA Lead
