import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store.ts";
import { setLanguage } from "../redux/languageSlice.ts";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const dispatch: AppDispatch = useDispatch();
  const lang = useSelector((state: RootState) => state.language.lang);

  const changeLanguage = (newLang: "ua" | "en") => {
    dispatch(setLanguage(newLang));
  };
  const { t } = useTranslation();
  return (
    <button
      className="button"
      onClick={() => {
        if (lang === "en") changeLanguage("ua");
        if (lang === "ua") changeLanguage("en");
      }}
    >
      {t("change_language")}
    </button>
  );
};

export default LanguageSwitcher;
