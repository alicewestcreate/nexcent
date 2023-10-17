import { customTheme as theme } from "@/app/theme"

const getThemeColor = (color:string) => {
    
    switch (color) {
        case 'primary':
          return theme.colors.primary;
        case 'secondary':
          return theme.colors.secondary;
        case 'info':
          return theme.colors.info;
        case 'black':
          return theme.colors.neutrals.black;
        case 'darkGrey':
          return theme.colors.neutrals.darkGrey;
        case 'grey':
          return theme.colors.neutrals.grey;
        case 'lightGrey':
          return theme.colors.neutrals.lightGrey;
        case 'greyBlue':
          return theme.colors.neutrals.greyBlue;
        case 'silver':
          return theme.colors.neutrals.silver;
        case 'white':
          return theme.colors.neutrals.white;
        default:
          return theme.colors.neutrals.darkGrey;
    }

}

export default getThemeColor