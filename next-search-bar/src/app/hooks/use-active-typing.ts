import { useState, useEffect } from "react";

export function useActiveTyping(delay: number = 1000) {
  const [buffer, setBuffer] = useState(""); // Буфер для символов
  const [typedText, setText] = useState(""); // Итоговый текст
  const [lastKeyTime, setLastKeyTime] = useState<number | null>(null); // Время последнего нажатия

  const clearTypedText = () => {
    setText(""); // Очищаем итоговый текст
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.length === 1) {
        // Игнорируем специальные клавиши
        const now = Date.now();

        // Если пауза между нажатиями превышает delay, сбросить буфер
        if (lastKeyTime && now - lastKeyTime > delay) {
          setBuffer("");
        }

        const newBuffer = buffer + e.key; // Добавляем символ в буфер
        setLastKeyTime(now); // Обновляем время последнего нажатия

        // Если пользователь ввёл 4 символа подряд
        if (newBuffer.length === 4) {
          setText(newBuffer); // Сохраняем текст
          setBuffer(""); // Сбрасываем буфер после записи
        } else {
          setBuffer(newBuffer); // Обновляем буфер
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [buffer, lastKeyTime, delay]);

  return { typedText, clearTypedText }; // Возвращаем текст и функцию очистки
}
