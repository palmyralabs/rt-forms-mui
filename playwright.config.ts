import { defineConfig, devices } from "@playwright/experimental-ct-react";

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000000, 
  expect: {
    timeout: 5000, 
  },
  reporter: [['list'], ['html']], 
  use: {
    baseURL: 'http://localhost:3000', 
    headless: false, 
  },
  projects: [
    {
      name: 'chromium', 
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});