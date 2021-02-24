Запусти команды в терминале и сделай отдельный скриншот результата выполнения каждой команды.

# Получаем и выводим весь список контакстов в виде таблицы (console.table)
node index.js --action="list"

![img.png](img_png/img.png)



# Получаем контакт по id
node index.js --action="get" --id=5

![img_1.png](img_png/img_1.png)




# Добавялем контакт
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"

![img_2.png](img_png/img_2.png)



# Удаляем контакт
node index.js --action="remove" --id=3

![img_3.png](img_png/img_3.png)