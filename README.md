# **В JavaScript есть следующие типы операторов.**:

- Операторы присваивания
- Операторы сравнения
- Арифметические операторы
- Битовые (поразрядные) операторы
- Логические операторы
- Строковые операторы
- Условный (тернарный) оператор
- Оператор запятая
- Унарные операторы
- Операторы отношения
- Приоритет операторов

JavaScript поддерживает бинарные и унарные операторы, а также ещё один специальный тернарный оператор - условный оператор.

## **Операторы присваивания**

В результате операции присваивания операнду слева от оператора присваивания (en-US) (знак "=") устанавливается значение , которое берётся из правого операнда. Основным оператором присваивания является =, он присваивает значение правого операнда операнду, находящемуся слева. Таким образом, выражение x = y означает, что x присваивается значение y.

Существуют также составные операторы присваивания, которые используются для сокращённого представления операций, описанных в следующей таблице:

| Имя                                       | Сокращённый оператор | Смысл       |
| ----------------------------------------- | -------------------- | ----------- |
| Присваивание со сложением                 | x += y               | x = x + y   |
| Присваивание с вычитанием                 | x -= y               | x = x - y   |
| Присваивание с умножением                 | x \*= y              | x = x \* y  |
| Присваивание с делением                   | x /= y               | x = x / y   |
| Присваивание по модулю                    | x %= y               | x = x % y   |
| Присваивание с левым сдвигом              | x <<= y              | x = x << y  |
| Присваивание с правым сдвигом             | x >>= y              | x = x >> y  |
| Присваивание с беззнаковым сдвигом вправо | x >>>= y             | x = x >>> y |
| Присваивание с побитовым AND              | x &= y               | x = x & y   |
| Присваивание с побитовым XOR              | x ^= y               | x = x ^ y   |
| Присваивание с побитовым OR               | x| = y             | x = x | y |

## **Операторы сравнения**

Операторы сравнения позволяют сравнивать два значения. В качестве результата они возвращают _true_, если значения равны, или _false_ в противном случае. Операнды могут быть числами, строками, логическими величинами или объектами. Строки сравниваются на основании стандартного лексикографического порядка, используя Unicode-значения. В большинстве случаев, если операнды имеют разный тип, то JavaScript пробует преобразовать их в тип, подходящий для сравнения. Такое поведение обычно происходит при сравнении числовых операндов. Единственным исключением из данного правила является сравнение с использованием операторов === и !==, которые производят строгое сравнение на равенство или неравенство. Эти операторы не пытаются преобразовать операнды перед их сравнением.

| Оператор | Описание                                                                                                                      | Использование |
| -------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------- |
| ==       | Равно: возвращает true, если операнды равны. В остальных случаях false.                                                       | x == y        |
| !=       | Не равно: возвращает true, если операнды не равны. В остальных случаях false.                                                 | x != y        |
| ===      | Строгое равно: возвращает true, если операнды равны и принадлежат одному типу. В остальных случаях false.                     | x === y       |
| !==      | Строгое не равно: возвращает true, если операнды не равны, или равны, но принадлежат разным типам. В остальных случаях false. | x !== y       |
| >        | Больше чем: возвращает true, если правый операнд больше, чем левый. В остальных случаях false.                                | x > y         |
| >=       | Больше или равно: возвращает true, если правый операнд больше левого или равен ему. В остальных случаях false.                | x >= y        |
| <        | Меньше чем: возвращает true, если правый операнд меньше, чем левый. В остальных случаях false.                                | x < y         |
| <=       | Меньше или равно: возвращает true, если правый операнд меньше левого или равен ему. В остальных случаях false.                | x <= y        |

## **Арифметические операторы**

    Арифметические операторы  используют в качестве своих операндов числа (также литералы или переменные) и в качестве результата возвращают одно числовое значение. Стандартными арифметическими операторами являются сложение (+), вычитание (-), умножение (*), и деление (/).

| Оператор         | Назван                                                                                                   | Использование                       |
| ---------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| +                | Сложение                                                                                                 | x + y                               |
| -                | Вычитание                                                                                                | x - y                               |
| \*               | Умножение                                                                                                | x \* y                              |
| /                | Деление                                                                                                  | x/y                                 |
| %                | Взятие остатка от деления.Бинарный оператор. Возвращает целочисленный остаток от деления двух операндов. | x%y                                 |
| ++               | Инкремент (увеличивает на 1).Унарный оператор                                                            | ++x или x++                         |
| --               | Декремент (уменьшает на 1).Унарный оператор                                                              | --x или x--                         |
| \*\*             | Возведение в степень                                                                                     | x\*\*y                              |
| Унарный минус -  | Унарный оператор. Возвращает отрицательное значение своего операнда.                                     | Если x равно 3, тогда -x вернёт -3. |
| Унарный плюс (+) | Унарный оператор. Пытается конвертировать операнд в число, если он ещё не оно.                           | +"3" вернёт 3. +true вернёт 1.      |

## **Битовые (поразрядные) операторы**

Битовые операторы обрабатывают свои операнды как последовательности из 32 бит (нулей и единиц), а не как десятичные, шестнадцатеричные или восьмеричные числа. Например, десятичное число 9 имеет двоичное представление 1001. Битовые операторы выполняют операции над таким двоичным представлением, но результат возвращают как обычное числовое значение JavaScript.

| Оператор  | Описание                                                                                                                                                      | Использование |
| --------  | --------------------------------------------------------------------------------------------------------------------------------------------------------------| ------------- |
| &         | Побитовое**AND(и)**:возвращает единицу в каждой битовой позиции, для которой соответствующие биты обеих операндов являются единицами.                            | a & b  |
| ||        | Побитовое**OR(или)**:возвращает единицу в каждой битовой позиции, для которой один из соответствующих битов или оба бита операндов являются единицами.         | a | b  |
| ^         | Побитовое **XOR( исключающее или)**: возвращает единицу в каждой битовой позиции, для которой только один из соответствующих битов операндов является единицей.   | a ^ b  |
| ~         | Побитовое**NOT(не)**:заменяет биты операнда на противоположные.                                                                                                   | a ~ b   |
| <<        | **LEFT SHIFT(левый сдвиг)**:сдвигает a в двоичном представлении на b бит влево, добавляя справа нули                                                              | a << b  |
| >>        | **RIGHT SHIFT(правый сдвиг)**с переносом знака: сдвигает a в двоичном представлении на b бит вправо, отбрасывая сдвигаемые биты.                                  | a >> b  |
| >>>       | **ZERO-FILL RIGHT SHIFT Сдвиг вправо**с заполнением нулями:сдвигает a в двоичном представлении на b бит вправо, отбрасывая сдвигаемые биты и добавляя слева нули. | a >>> b |

## **Логические операторы в JavaScript**

    Логические операторы выполняют логические операции и возвращают логическое значение true или false.

| Оператор | Описание                                                                                 | Использование |
| -------- | ---------------------------------------------------------------------------------------- | ------------- | 
| &&       | Логическое И: возвращает true, если оба операнда true. В остальных случаях false.        | x && y        |
| ||       | Логическое ИЛИ: возвращает false, если оба операнда false. В остальных случаях true.     | x  y          |
| !        | Логическое НЕ: возвращает true, если операнд false. Возвращает false, если операнд true. | !x.           |
 
Так как логические выражения вычисляются слева направо, они проверяются на возможность выполнения сокращённой оценки с использованием следующих правил:

_false && anything_ - сокращение с результатом false.
_true || anything_- сокращение с результатом true.
Правила логики гарантируют, что данные вычисления всегда корректны. Обратите внимание, что часть "anything" представленных выше выражений не вычисляется, таким образом удаётся избежать любых побочных эффектов вычисления данной части.

## **Строковые операторы**

Со строками можно использовать операторы сравнения и оператор конкатенации +. Он позволяет объединяет две строки и возвращает третью строку — объединение двух строк-операндов.

## **Условный (тернарный) оператор**

Условный оператор является единственным оператором JavaScript, который использует три операнда. Оператор принимает одно из двух значений в зависимости от заданного условия

### **Оператор запятая**

Оператор запятая (,) просто вычисляет оба операнда и возвращает значение последнего операнда. Данный оператор в основном используется внутри цикла for, что позволяет при каждом прохождении цикла одновременно обновлять значения нескольких переменных.

## **Унарные операторы**

Унарная операция - операция только с одним операндом.

| Оператор | Описание                                                                        | Использование                             |
| -------- | ------------------------------------------------------------------------------- | ----------------------------------------- |
| ,        | Вычисляет несколько операндов и возвращает значение последнего операнда.        | let a = (1, 3 , 4); // 4                  |
| ?:       | Возвращает заданное значение в зависимости от условия                           | (5 > 3) ? "верно" : "неверно"; // "верно" |
| delete   | Удаляет объект, свойство объекта, или элемент массива с заданным индексом.      | delete x                                  |
| typeof   | Возвращает строку обозначающую тип невычисленного операнда.                     | typeof 3 // "number"                      |
| void     | Определяет выражение, которое должно быть вычислено без возвращения результата. | void(x)                                   |

## **Операторы отношения**

Оператор отношения сравнивает свои операнды и возвращает результат сравнения в виде булева значения.

| Оператор   | Описание                                                                 | Использование                    |
| ---------- | ------------------------------------------------------------------------ | -------------------------------- |
| in         | Возвращает true, если указанный объект имеет указанное свойство.         | propNameOrNumber in objectName   |
| instanceof | Возвращает true, если заданный объект является объектом указанного типа. | objectName instanceof objectType |

Приоритет операторов
Приоритет операторов определяет порядок их выполнения при вычислении выражения. Вы можете влиять на приоритет операторов с помощью скобок.

**Приведённая ниже таблица описывает приоритет операторов от наивысшего до низшего.**

| Тип оператора                      | Операторы                            |
| ---------------------------------- | ------------------------------------ | 
| свойство объекта                   | . []                                 |
| вызов, создание экземпляра объекта | () new                               |
| отрицание, инкремент               | ! ~ - + ++ -- typeof void delete     |
| умножение, деление                 | \* / %                               |
| сложение, вычитание                | + -                                  |
| побитовый сдвиг                    | << >> >>>                            |
| сравнение, вхождение               | < <= > >= in instanceof              |
| равенство                          | == != === !==                        |
| битовое-и                          | &                                    |
| битовое-исключающее-или            | ^                                    |
| битовое-или                        | |\                                    |
| логическое-и                       | &&                                   |
| логическое-или                     | \|\|                                   |
| условный (тернарный) оператор      | ?:                                   |
| присваивание                       |= += -= \*= /= %= <<= >>= >>>= &= ^=|= |
| запятая                            | ,                                     |

### **_Оператор this_**

Используйте ключевое слово this для указания на текущий объект. В общем случае this указывает на вызываемый объект, которому принадлежит данный метод.

### **_Оператор группировки_**

Оператор группировки "скобки" ( ) контролирует приоритет вычислений в выражениях.

### **_Оператор расширения_**

Оператор расширения позволяет выражению расширяться в местах с множеством аргументов (для вызовов функций) или множестве элементов (для массивов).

# Динамическая типизация

Динамическая типизация — это концепция программирования, которая позволяет объектам в языке программирования изменять свой тип во время выполнения программы. Это означает, что тип переменной может быть определен на основе ее значения в данный момент времени, а не заранее статически, как в случае с языками статической типизации.

В динамически типизированных языках программирования, таких как JavaScript, Python или Ruby, объявление переменной не требует указания типа данных. Переменные могут принимать значения различных типов в разные моменты времени во время выполнения программы. Например, переменная может один раз содержать строку, а затем принимать значение числа или объекта.

Динамическая типизация предоставляет гибкость при разработке программ и упрощает написание кода. Она позволяет разработчикам управлять типами данных на лету, не требуя предварительного указания типов при объявлении переменных. Это делает язык программирования более гибким и удобным для использования.

Однако, динамическая типизация может приводить к ошибкам и потенциально затруднять обнаружение ошибок во время компиляции. Также она может снижать производительность программы, поскольку определение типов выполняется на этапе выполнения, а не на этапе компиляции.

Тем не менее, динамическая типизация является мощным инструментом для программирования и используется во множестве популярных языков программирования для создания различных видов приложений.
