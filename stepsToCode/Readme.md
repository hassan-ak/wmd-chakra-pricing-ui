# Steps to code Pricing UI with Chakra and NextJS

### 1. Create Next app

- Create a simple next13 app with experimental app directory using following command

  ```cmd
  npx create-next-app@latest --experimental-app
  ```

- When app is installed, run using following command

  ```cmd
  npm run dev
  ```

### 2. CleanUp working directory

- Newly created next app comes with pre-defined data, we need to clean up the working directory for that delete follwoing files

  ```
  ./app/global.css
  ./app/page.modules.css
  ```

- Delete style imports from `./app/layout.tsx` and delete un-necessary comments
- Replace `./public/favicon.ico` to update app logo and update `./app/head.tsx` to edit app title and app descripton
- Update `./app/page.tsx` with following code

  ```tsx
  export default function Home() {
    return <>Pricing UI</>;
  }
  ```
