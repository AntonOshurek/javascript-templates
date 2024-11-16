"use client";

import { ChangeEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { i18n } from "../../../i18n-config";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname?.split("/")[1] || i18n.defaultLocale;

  const redirectedPathname = (evt: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = evt.target.value;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (!pathname) {
      router.push(`/${newLocale}`);
      return;
    }

    // Удаляем текущую локаль из пути
    const segments = pathname.split("/").filter(Boolean); // Разделяем путь на части, убирая пустые сегменты
    if (i18n.locales.includes(segments[0] as (typeof i18n.locales)[number])) {
      segments.shift(); // Убираем текущую локаль
    }

    // Создаём новый путь с новой локалью
    const newPath = `/${newLocale}/${segments.join("/")}`;
    router.push(newPath);

    router.refresh();
  };

  return (
    <div>
      <p>Locale switcher:</p>

      <select onChange={redirectedPathname} value={currentLocale}>
        {i18n.locales.map((locale) => {
          return (
            <option value={locale} key={locale}>
              {locale}
            </option>
          );
        })}
      </select>
    </div>
  );
}
