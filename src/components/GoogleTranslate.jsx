import { useEffect } from "react";

function GoogleTranslate() {
  useEffect(() => {
    const id =
      "google_translate_script";

    const initTranslate = () => {
      const container =
        document.getElementById(
          "google_translate_element"
        );

      if (!container) return;

      container.innerHTML = "";

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          layout:
            window.google.translate
              .TranslateElement
              .InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    // Script already loaded
    if (window.google?.translate) {
      setTimeout(initTranslate, 100);
      return;
    }

    // Callback
    window.googleTranslateElementInit =
      initTranslate;

    // Add script once
    if (
      !document.getElementById(id)
    ) {
      const script =
        document.createElement(
          "script"
        );

      script.id = id;

      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

      script.async = true;

      document.body.appendChild(
        script
      );
    }
  }, []);

  return (
    <div id="google_translate_element"></div>
  );
}

export default GoogleTranslate;