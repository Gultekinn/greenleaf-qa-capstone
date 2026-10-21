import { test, expect } from '@playwright/test';

test('guest checkout happy path without expired promo', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('catalog-section').waitFor();
  await page.getByTestId('add-to-cart-btn-p-apples').click();
  await page.getByTestId('nav-cart').click();
  await page.getByTestId('proceed-to-checkout-btn').click();
  await page.getByTestId('checkout-name-input').fill('Test User');
  await page.getByTestId('checkout-email-input').fill('capstone.guest@example.test');
  await page.getByTestId('checkout-address-input').fill('123 Main Street');
  await page.getByTestId('checkout-submit-btn').click();
  
  await page.getByTestId('success-order-id').waitFor();
  
  // Şəkli yenidən çəkirik
  await page.screenshot({ path: 'evidence/playwright_pass.png' });

  const orderId = await page.getByTestId('success-order-id').textContent();
  expect(orderId).toBeTruthy();
});