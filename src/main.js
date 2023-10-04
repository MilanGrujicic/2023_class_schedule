// Use an object variable to define and store translations
const translations = {
    en: {
      header01: "A Class Schedule",
      header02: "Semester 1/2 2023",
      monday:"MONDAY",
      tuesday:"TUESDAY",
      wednesday:"WEDNESDAY",
      thursday:"THURSDAY",
      friday:"FRIDAY",
      math:"MATH",
      physics:"PHYSICS",
      biology:"BIOLOGY",
      biology2:"BIOLOGY",
      math2:"MATH",
      english:"ENGLISH",
      chemistry:"CHEMISTRY",
      physics2:"PHYSICS",
      chemistry2:"CHEMISTRY",
      lunch:"LUNCH",
      lunch2:"LUNCH",
      lunch3:"LUNCH",
      lunch4:"LUNCH",
      lunch5:"LUNCH",
      english2:"ENGLISH",
      chess:"CHESS PRACTICE",
      chess2:"CHESS PRACTICE",
      chess3:"CHESS PRACTICE",
      chess4:"CHESS PRACTICE",
      acting:"ACTING",
      acting2:"ACTING",
      footer:"Made by"
    },
    sp: {
      header01: "Un Horario De Clases",
      header02: "Semestre 1/2 2023",
      monday:"LUNES",
      tuesday:"MARTES",
      wednesday:"MIÉRCOLES",
      thursday:"JUEVES",
      friday:"VIERNES",
      math:"MATEMÁTICA",
      physics:"FISICA",
      biology:"BIOLOGIA",
      biology2:"BIOLOGIA",
      math2:"MATEMÁTICA",
      english:"INGLES",
      chemistry:"QUÍMICA",
      physics2:"FISICA",
      chemistry2:"QUÍMICA",
      lunch:"ALMUERZO",
      lunch2:"ALMUERZO",
      lunch3:"ALMUERZO",
      lunch4:"ALMUERZO",
      lunch5:"ALMUERZO",
      english2:"INGLES",
      chess:"PRACTICA DE AJADREZ",
      chess2:"PRACTICA DE AJADREZ",
      chess3:"PRACTICA DE AJADREZ",
      chess4:"PRACTICA DE AJADREZ",
      acting:"TEATRO",
      acting2:"TEATRO",
      footer:"Hecho por"
    }
  };
  
  // Locate the select dropdown
  const languageDropdown = document.getElementById("language-buttons");
  
  // Add an event listener on the select dropdown
  languageDropdown.addEventListener("change", () => {
    // Figure out which language was selected
    const selectedLanguage = languageDropdown.value;
    // Call the translateText function with the correct language
    translateText(selectedLanguage);
  });
  
  // Function to translate text
  function translateText(currentLanguage) {
    // Create an array of the IDs you want to translate
    const elementIDs = ["header01", "header02", "monday", "tuesday", "wednesday", "thursday", "friday", "math", "physics", "biology", "biology2", "math2", "english", "chemistry", "physics2", "chemistry2", "lunch", "lunch2", "lunch3", "lunch4", "lunch5", "english2", "chess", "chess2", "chess3", "chess4", "acting", "acting2", "footer"];
  
    // Loop through the array of IDs and replace the text
    for (let i = 0; i < elementIDs.length; i++) {
      // Get the name of the ID we want to change
      const id = elementIDs[i];
      // Locate the element on the page
      const element = document.getElementById(id);
      // Replace the text with the correct text from the translation object
      element.textContent = translations[currentLanguage][id];
    }
  }