import { test, expect } from '@playwright/test';

test('ApproveDeny', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('admin@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Adoption Offer' }).click();
  await page.getByRole('button', { name: 'Approve' }).first().click();
  await expect(page.getByText('APPROVED').first()).toHaveText("APPROVED");
  await page.getByRole('button', { name: 'Deny' }).first().click();
  await expect(page.getByText('DENIED').first()).toHaveText("DENIED");
});

test('SignIn', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Sign Up' }).click();
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('admin@gmail.com');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').press('Control+a');
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByPlaceholder('Email').press('ArrowRight');
  await page.getByPlaceholder('Email').press('ArrowRight');
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByPlaceholder('Email').fill('admin@gmail.com');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Welcome to BE MY PET website!').click();
  await expect(page.getByText('Welcome to BE MY PET website!')).toHaveText("Welcome to BE MY PET website!");
});