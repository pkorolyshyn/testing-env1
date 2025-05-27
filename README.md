# Testing Env 1 — Lightweight ngx-admin for Cypress Testing

This project is a **lightweight and simplified version** of [akveo/ngx-admin](https://github.com/akveo/ngx-admin), created specifically to support [Cypress Ultimate Architecture](https://github.com/pkorolyshyn/cypress-ultimate-architecture).

The goal is to provide a minimal, realistic application that Cypress can run tests against without the clutter of not relevant features.

---

## ✨ What's Inside

We've removed most of the original ngx-admin modules to keep things focused and maintainable. On the app sidebar, you'll find next features:

- **E-commerce** – Your main playground for Cypress test scenarios
- **Dialog**
- **Calendar**
- **Echarts**
- **Smart Table**
- **Auth**

---

## 🚀 Live Demo

This app is deployed using [GitHub Actions workflow](https://github.com/pkorolyshyn/testing-env1/blob/main/.github/workflows/customDeploy.yml) and available at:

🔗 [https://pkorolyshyn.github.io/testing-env1](https://pkorolyshyn.github.io/testing-env1)

---

## 🛠 Run Locally

Clone and run the app in just one command:

```bash
git clone https://github.com/pkorolyshyn/testing-env1.git
cd testing-env1
npm install --legacy-peer-deps
npm start
```
ℹ️ We use `--legacy-peer-deps` because the project relies on older Angular packages that would otherwise trigger dependency resolution errors.

Once started, open your browser and go to:
```bash
http://localhost:4200
```
Now you're free to explore and modify the app to fit your Cypress testing needs.

## 📁 Related Projects
* [Cypress Ultimate Architecture](https://github.com/pkorolyshyn/cypress-ultimate-architecture)
* [Testing Env 2](https://github.com/pkorolyshyn/testing-env2)