# Используем официальный образ Python
FROM python:3.12

# Устанавливаем рабочую директорию
WORKDIR /code

# Копируем файл зависимостей
COPY ./requirements.txt /code/requirements.txt

# Устанавливаем зависимости
RUN pip install --no-cache-dir --upgrade -r requirements.txt

# Копируем основной код приложения
COPY . /code

EXPOSE 8000

# Команда по умолчанию
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
