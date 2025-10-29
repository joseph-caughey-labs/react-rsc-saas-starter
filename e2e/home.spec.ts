import { test, expect } from '@playwright/test';

test('homepage has title and link to dashboard', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/RSC SaaS Starter/);
  await expect(page.getByRole('link', { name: 'Go to Dashboard' })).toBeVisible();
});
