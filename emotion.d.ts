// import "@emotion/react";
// import { customTheme } from "./app/theme";
// declare module "@emotion/react" {
//   export interface customTheme {
//   }
// }
// export { customTheme };



import '@emotion/react'; // it's important to use ThemeProvider
declare module '@emotion/react' {
  export interface CustomTheme {
    color: string;
  }
}