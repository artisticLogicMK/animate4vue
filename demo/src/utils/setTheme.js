const setThemeMode = () => {

  const setTheme = (mode) => { 
      // append document body class name with specified theme (dark/light) 
      // app uses tailwindcss 'class' dark mode => <body class="dark"> 
      document.documentElement.classList.remove("dark", "light") 
      document.documentElement.classList.add(mode) 
      document.querySelector('meta[name=theme-color]').setAttribute("content", mode == 'dark' ? "#171717" : "#ffffff") 
  } 
  
  // if theme item exist and is dark, & system dark mode on, set to dark theme 
  if (localStorage.theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) { 
      setTheme('dark') 
  } 
  // if theme item not set, remove dark theme 
  else { 
      setTheme('light') 
  }
   
}

export default setThemeMode