// when page loads, check if user has previously selected a language
window.onload = () => {
  // get language from config, default to nl
  const savedLang = localStorage.getItem('preferredLang') || 'nl';
  setLanguage(savedLang);
};

function setLanguage(lang) {
  // language value must be of form specified by BCP 47 language tag

  console.log(`Switching page language to ${lang}`)
  
  // Also update the document header
  document.documentElement.lang = lang;
  
  // and save to localstorage so on page reloads/page changes it persists
  localStorage.setItem('preferredLang', lang);

  // set css varaibles that conctrol which elements gets displayed.
  // Both dutch and english content are both present on pageload
  set_language_css_variable(lang)
}

function set_language_css_variable(lang) {
  const root = document.documentElement;

  if (lang === "nl") {
    root.style.setProperty("--display-state-nl", "block");
    root.style.setProperty("--display-state-en", "none");
  } else if (lang === "en") {
    root.style.setProperty("--display-state-nl", "none");
    root.style.setProperty("--display-state-en", "block");
  } else {
    console.log("Unsupported language selection. How did this happen?")
  }

}