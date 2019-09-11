const dataLeftColumn = [
    {
        id: 1,
		artNo: "1004991",
		name: "Процессор AMD Athlon X4 840 OEM",
        description: `
            Процессор Intel Core i7-9700KF 9-го поколения, с кодовым названием микроархитектуры Coffee Lake-R. Предназначен для настольной платформы Intel LGA 1151v2. Принадлежит к семейству высокопроизводительных процессоров Core i7.
            Intel Core i7-9700KF производится по стандарту 14-нм техпроцесса, имеет 8 ядер, которые работают с штатной тактовой частотой 3.6 ГГц. Объем кэш-памяти 3 уровня равен 12 МБ. Имеет 2-х канальный контроллер памяти DDR4.
        `
    },
    {
        id: 2,
		artNo: "1145143",
		name: "Процессор AMD A6-9500 OEM",
        description: `
            Доступный процессор AMD Athlon X4 840 – модель с достойными техническими характеристиками, которая может стать основой мощного персонального компьютера. Он выполнен на архитектуре Steamroller и устанавливается в сокет FM2+. Основными элементами устройства являются кэш-память, повышающая скорость обработки команд, и четыре ядра Kaveri. Тактовая частота варьируется в зависимости от нагрузок и находится в диапазоне 3100 МГц – 3800 МГц.
            Для обеспечения двусторонней передачи информации между компонентами персонального компьютера и AMD Athlon X4 840 используются контроллер PCI-E 3.0 и шина QPI с пропускной способностью 5 ГТ/с. Обмен данными с модулями DDR3 осуществляется с помощью контроллера памяти, поддерживающего ОЗУ с частотой работы 1066 МГц – 2133 МГц.
            Функциональность процессора представлена технологиями PowerNow!, позволяющей понизить уровень энергопотребления, и виртуализации, благодаря которой Вы сможете запустить одновременно несколько операционных систем.
        `
    },
    {
        id: 3,
		artNo: "1214059",
		name: "Процессор Intel Celeron G4900 OEM",
        description: `
            Процессор AMD A6-9500 OEM оборудован сокетом AM4 и рассчитан на установку в домашнюю станцию средней мощности или функциональный компьютер офисного, учебного назначения. Обладая базовой тактовой частотой на уровне 3500 МГц, эта двухъядерная модель работает при разгоне по технологии Turbo Core на частоте 3800 МГц. Представленный в комплектации OEM процессор оснащен встроенным графическим ядром GPU Radeon R5, благодаря которому он уверенно справляется с обработкой графических данных.
            Процессор AMD A6-9500 OEM совместим с оперативной памятью типа DDR4. Максимально поддерживаемый объем ОЗУ у него составляет 64 ГБ. Модель с тепловыделением не более 65 Вт не нуждается в сложной и мощной системе охлаждения. Производительности этого устройства достаточно для эффективной работы с любым офисным софтом или запуска не самых ресурсоемких приложений и игр.
        `
    },
    {
        id: 4,
		artNo: "1410125",
		name: "Процессор AMD Athlon X4 840 OEM",
        description: `
            Процессор Intel Celeron G4900 OEM – хорошее решение для установки в рабочий компьютер. Он подойдет для офисных ПК и устройств, которые используются для повседневных задач. Производительности чипа хватит для большинства пользователей.
            Процессор Intel Celeron G4900 OEM выпускается с сокетом LGA 1151-v2. Обратите внимание на этот параметр, так как от него зависит совместимость чипа с системной платой. Тип поставки – OEM. Это значит, что покупатель получает только процессор, без дополнительной комплектации.
            Чип основан на архитектуре Coffee Lake. Он изготовлен по техпроцессу 14 нм, обладает сбалансированным потреблением энергии и выделением тепла. Процессор получил два ядра, а его базовая частота составляет 3.1 ГГц.
            В чип интегрировано графическое ядро Intel UHD Graphics 610. Ускоритель использует ресурсы оперативной памяти для хранения данных при работе, а его частота составляет 1050 МГц.
            Тепловыделение у процессора – 54 Вт. Учитывайте этот показатель при подборе подходящего кулера для охлаждения чипа. Корпус процессора может нагреваться до температуры 100 °C.
        `
    },
    {
        id: 5,
		artNo: "1572667",
		name: "Процессор AMD Ryzen 7 3700X OEM",
        description: `
            4-ядерный процессор Intel Xeon E3-1270 v6 OEM, базирующийся на архитектуре Kaby Lake, предназначен для установки в однопроцессорные сервера начального или среднего уровня. Совместимый сокет – LGA 1151. Процессор также будет полезен пользователям, которые хотят оборудовать надежную и производительную рабочую станцию корпоративного класса. При производстве устройства был использован 14-нанометровый техпроцесс.
            Процессор Intel Xeon E3-1270 v6 OEM оборудован кэш-памятью третьего уровня, объем которой равен 8 МБ. Объем кэша L2 – 1 МБ. Базовая частота процессора равна внушительным 3800 МГц. Максимальная частота в турборежиме более чем на 10 % выше: 4200 МГц.
            Процессор обладает совместимостью с памятью типов DDR3L и DDR4, в том числе – с модулями ECC. Интегрированное графическое ядро отсутствует. Не предусмотрено и наличие системы охлаждения, ведь процессор поставляется в комплектации OEM. При выборе кулера следует отталкиваться от показателя TDP процессора, равного 72 Вт.
        `
    },
    {
        id: 6,
		artNo: "1629630",
		name: "Процессор Intel Core i7-9700KF BOX",
        description: `
            8-ядерный процессор AMD Ryzen 7 3700X OEM – выбор профессионалов. Модель способна обеспечить уровень производительности, который достаточен для эффективной работы с любыми программами и с любыми объемами данных. Одной из сфер применения процессора являются компьютеры, ориентированные на ресурсоемкие игры.
            Процессор AMD Ryzen 7 3700X OEM характеризуется базовой частотой, равной 3600 МГц. Максимальная частота в турборежиме равна 4400 МГц. Устройство имеет свободный множитель. Объем кеш-памяти второго и третьего уровней равен 4 и 32 МБ соответственно.
            Процессор не имеет интегрированного графического ядра. Учитывая невероятно высокий уровень производительности устройства, данная особенность неудивительна: в большинстве случаев процессор нуждается в «дуэте» с мощной видеокартой. Объем памяти, используемой совместно с процессором, может достигать 128 ГБ. Частота памяти может варьироваться в пределах от 1600 до 3200 МГц. Процессор поставляется в комплектации OEM. Это значит, что выбор системы охлаждения предоставлен производителем пользователю. TDP модели составляет 65 Вт.
        `
    },
    {
        id: 7,
		artNo: "1729630",
		name: "Процессор AMD Ryzen 5 2600X OEM",
        description: `
            Лучшая Производительность Многозадачности В Своем Классе Для Настоящих Геймеров И Прогрессивных Разработчиков. Повышенная производительность. Невероятные технологии. Интеллектуальные процессоры Ryzen стали еще более умными.
            Процессор AMD Ryzen 5 2600X оперирует шестью ядрами с поддержкой многопоточности, оснащён 16 МБ кэш-памяти L3 и работает на частотах от 3,6 до 4,2 ГГц. Процессор, способный удовлетворить запросы как обычного, так и требовательного пользователя. Создан на 12-нм техпроцессе, большой кэш L3 объемом 16 Мб, поддерживает два канала памяти формата DDR4, значение тепловыделения 95W. Он имеет хорошую производительность в однопоточных и многопоточных задачах, а его возможности позволяют справиться практически с любыми задачами - офисными, графическими, игровыми. При этом благодаря интеллектуальной технологии Pure Power является энергоэффективным решением. Технология Precision Boost 2 регулирует производительность процессора в режиме реального времени для соответствия требованиям нагрузки ваших игр и приложений.
        `
    },
    {
        id: 8,
		artNo: "1829630",
		name: "Процессор Intel Core i5-9400F BOX",
        description: `
            6-ядерный процессор Intel Core i5-9400F BOX, для установки которого используется популярнейший сокет LGA 1151-v2, представляет из себя вычислительное устройство, которое может с высокой эффективностью функционировать в составе производительного системного блока универсального назначения. Процессор, базирующийся на ядре Coffee Lake R, произведен с использованием 14-нанометрового техпроцесса. Базовая частота модели равна 2900 МГц. В турборежиме частота более чем на 40 % выше: 4100 МГц. Процессор впечатляет размером кэша третьего уровня: величина этого показателя равна 9 МБ. Объем кэша L2 – 1.5 МБ.
            Процессор Intel Core i5-9400F BOX совместим с оперативной памятью DDR4, частота которой может изменяться в пределах от 1600 до 2666 МГц. Интегрированное графическое ядро отсутствует. Процессор характеризуется показателем TDP, равным 65 Вт. Максимальная температура корпуса устройства – 100 °C. Модель поставляется в коробочной комплектации, включающей в себя кулер. Процессор упакован в коробку узнаваемого дизайна: перед вами продукция Intel.
        `
    },
    {
        id: 9,
		artNo: "1929630",
		name: "Процессор AMD Ryzen 5 2600X BOX",
        description: `
            Лучшая Производительность Многозадачности В Своем Классе Для Настоящих Геймеров И Прогрессивных Разработчиков. Повышенная производительность. Невероятные технологии. Интеллектуальные процессоры Ryzen стали еще более умными.
            Процессор AMD Ryzen 5 2600X оперирует шестью ядрами с поддержкой многопоточности, оснащён 16 МБ кэш-памяти L3 и работает на частотах от 3,6 до 4,2 ГГц. Процессор, способный удовлетворить запросы как обычного, так и требовательного пользователя. Создан на 12-нм техпроцессе, большой кэш L3 объемом 16 Мб, поддерживает два канала памяти формата DDR4, значение тепловыделения 95W. Он имеет хорошую производительность в однопоточных и многопоточных задачах, а его возможности позволяют справиться практически с любыми задачами - офисными, графическими, игровыми. При этом благодаря интеллектуальной технологии Pure Power является энергоэффективным решением. Технология Precision Boost 2 регулирует производительность процессора в режиме реального времени для соответствия требованиям нагрузки ваших игр и приложений.
        `
    },
    {
        id: 10,
		artNo: "2029630",
		name: "Процессор Intel Core i3-9350KF BOX",
        description: `
            Процессор Intel Core i3-9350KF 9-го поколения, с кодовым названием микроархитектуры Coffee Lake-R. Предназначен для настольной платформы Intel LGA 1151v2. Принадлежит к семейству высокопроизводительных процессоров Core i3.
            Intel Core i3-9350KF производится по стандарту 14-нм техпроцесса, имеет 4 ядра, которые работают с тактовой частотой в режиме Boost до 4.6 ГГц. Объем кэш-памяти 3 уровня равен 8 МБ. Имеет 2-х канальный контроллер памяти DDR4.
        `
    },
    {
        id: 11,
		artNo: "2129630",
		name: "Процессор Intel Core i3-9350KF OEM",
        description: `
            Процессор Intel Core i3-9350KF 9-го поколения, с кодовым названием микроархитектуры Coffee Lake-R. Предназначен для настольной платформы Intel LGA 1151v2. Принадлежит к семейству высокопроизводительных процессоров Core i3.
            Intel Core i3-9350KF производится по стандарту 14-нм техпроцесса, имеет 4 ядра, которые работают с тактовой частотой в режиме Boost до 4.6 ГГц. Объем кэш-памяти 3 уровня равен 8 МБ. Имеет 2-х канальный контроллер памяти DDR4.
        `
    },
    {
        id: 12,
		artNo: "2229630",
		name: "Процессор Intel Core i5-7400 OEM",
        description: `
            Процессор Intel Core i5-7400 эффективен в сборке домашних и офисных компьютерных машин широкого назначения. Модель хорошо демонстрирует себя в игровых ПК. 4-ядерный процессор создан при использовании техпроцесса 14 нм. Базовая частота представленной модели равняется 3000 МГц. В турбо-режиме частота достигает впечатляющей отметки в 3500 МГц. Объем кэша L3 равняется 6 МБ.
            Встроенный графический чип Intel HD Graphics 630 процессора Intel Core i5-7400 характеризуется высоким уровнем производительности, достаточным для эффективного использования большого количества игр. Процессор отличается совместимостью с памятью типов DDR3L и DDR4. Максимальный объем памяти достигает 64 ГБ.
            Тепловыделение устройства не превышает 65 Вт. Максимальная температура корпуса равна 80 °C. Тип поставки процессора – OEM: вы сможете самостоятельно выбрать кулер.
        `
    },
    {
        id: 13,
		artNo: "2329630",
		name: "Процессор Intel Core i5-7500 OEM",
        description: `
            Процессор Intel Core i5-7500 основан на архитектуре Kaby Lake, и произведен по техпроцессу 14 нм. Модель характеризуется базовой частотой 3400 МГц. Максимальная частота в турборежиме – 3800 МГц. Процессор оснащен кэшем L3 с объемом 6 МБ.
            Модель станет центральным элементом производительных офисных рабочих станций и домашних компьютеров. Процессор имеет интегрированное графическое ядро Intel HD Graphics 630, возможности которого позволяют использовать насыщенные графикой игры. Встроенный контроллер PCI Express соответствует версии 3.0.
            Максимальное тепловыделение модели составляет 65 Вт. Корпус процессора может нагреваться до 100 °C. Процессор Intel Core i5-7500 поставляется в OEM-комплектации: кулер для установки вы сможете выбрать по своему усмотрению.
        `
    },
    {
        id: 14,
		artNo: "2429630",
		name: "Процессор Intel Core i5-8400 OEM",
        description: `
            Процессор Intel Core i5-8400 OEM – высокопроизводительный чип для установки в компьютеры. Он выпускается известной компанией, которая способна гарантировать качество своих комплектующих. Тип поставки – OEM, необходимые элементы и системы охлаждения приобретаются отдельно.
            При создании чипа применялась архитектура Coffee Lake. Удалось поднять производительность, при этом сохранить оптимальное энергопотребление и тепловыделение. Процессор состоит из шести ядер и поддерживает шесть потоков.
            Intel Core i5-8400 OEM оснащается 9 МБ кэша третьего уровня. Он обеспечивает полноценную работу чипа и позволяет раскрыть его потенциал. Тактовая частота – 2.8 ГГц. В турбо режиме данный параметр повышается до 4 ГГц на непродолжительное время. При увеличении нагрузки удается извлечь дополнительные ресурсы.
            Процессор может использоваться с оперативной памятью DDR4. Поддерживается до 64 ГБ ОЗУ. Частота работы плашек – 2666 МГц, чего достаточно для стабильного функционирования системы.
            В процессор встроен чип Intel HD Graphics 630. Интегрированный адаптер использует ОЗУ для хранения информации и хорошо справляется с обработкой графики. Сокет процессора – LGA 1151-v2.
        `
    },
    {
        id: 14,
		artNo: "2529630",
		name: "Процессор Intel Core i5-9400 OEM",
        description: `
            Процессор Intel Core i5-9400 9-го поколения, с кодовым названием микроархитектуры Coffee Lake-R. Предназначен для настольной платформы Intel LGA 1151-v2. Принадлежит к семейству высокопроизводительных процессоров Core i5.
            Intel Core i5-9400 производится по стандарту 14-нм техпроцесса, имеет 6 ядер, которые работают с штатной тактовой частотой 2.9 ГГц. Объем кэш-памяти 3 уровня равен 9 МБ. Имеет 2-х канальный контроллер памяти DDR4.
        `
    },
    {
        id: 15,
		artNo: "2629630",
		name: "Процессор Intel Core i5-9500F BOX",
        description: `
            Процессор Intel Core i5-9500F – чип со сбалансированной производительностью. Можно использовать его для создания различных сборок. При изготовлении применялся технологический процесс 14 нм. Он позволяет добиться небольшого потребления энергии и тепловыделения. Процессор выполнен с применением архитектуры Coffee Lake. Она позволила поднять производительность в сравнении с чипами прошлого поколения. Используется шесть ядер и шесть потоков для обработки информации.
        `
    },
    {
        id: 16,
		artNo: "2729630",
		name: "Процессор AMD Ryzen 5 3600 OEM",
        description: `
            6-ядерный процессор AMD Ryzen 5 3600 OEM порадует высоким уровнем производительности подавляющее большинство пользователей. Устройство будет уверенно себя чувствовать в составе мощной игровой системы. Базовая частота процессора равна 3600 МГц. Турбочастота – 4200 МГц. Важной особенностью процессора является очень большой объем кэша третьего уровня: величина этого показателя равна 32 МБ. Объем кэша L2 – 3 МБ.
            Процессор AMD Ryzen 5 3600 OEM не имеет встроенного графического ядра. Модель совместима с памятью DDR4, объем которой может достигать 128 ГБ. Минимально допустимая частота оперативной памяти – 1600 МГц. Максимально допустимая частота вдвое выше – 3200 МГц.
            Процессор не укомплектован системой охлаждения. Выбор кулера предоставлен производителем пользователю. Несмотря на высокий уровень эксплуатационных параметров, процессор отличается незначительным (лишь 65 Вт) показателем TDP. Для установки устройства используется сокет AM4.
        `
    },
]

const dataRightColumn = [
    {
        id: 17,
		artNo: "2829630",
		name: "Процессор AMD Ryzen 6 8600 OEM",
        description: `
            6-ядерный процессор AMD Ryzen 6 8600 OEM порадует высоким уровнем производительности подавляющее большинство пользователей. Устройство будет уверенно себя чувствовать в составе мощной игровой системы. Базовая частота процессора равна 3600 МГц. Турбочастота – 4200 МГц. Важной особенностью процессора является очень большой объем кэша третьего уровня: величина этого показателя равна 32 МБ. Объем кэша L2 – 3 МБ.
            Процессор AMD Ryzen 6 8600 OEM не имеет встроенного графического ядра. Модель совместима с памятью DDR4, объем которой может достигать 128 ГБ. Минимально допустимая частота оперативной памяти – 1600 МГц. Максимально допустимая частота вдвое выше – 3200 МГц.
            Процессор не укомплектован системой охлаждения. Выбор кулера предоставлен производителем пользователю. Несмотря на высокий уровень эксплуатационных параметров, процессор отличается незначительным (лишь 65 Вт) показателем TDP. Для установки устройства используется сокет AM4.
        `
    },
    {
        id: 18,
		artNo: "2929630",
		name: "Процессор AMD Ryzen 7 9600 OEM",
        description: `
            6-ядерный процессор AMD Ryzen 7 9600  OEM порадует высоким уровнем производительности подавляющее большинство пользователей. Устройство будет уверенно себя чувствовать в составе мощной игровой системы. Базовая частота процессора равна 3600 МГц. Турбочастота – 4200 МГц. Важной особенностью процессора является очень большой объем кэша третьего уровня: величина этого показателя равна 32 МБ. Объем кэша L2 – 3 МБ.
            Процессор AMD Ryzen 7 9600 OEM не имеет встроенного графического ядра. Модель совместима с памятью DDR4, объем которой может достигать 128 ГБ. Минимально допустимая частота оперативной памяти – 1600 МГц. Максимально допустимая частота вдвое выше – 3200 МГц.
            Процессор не укомплектован системой охлаждения. Выбор кулера предоставлен производителем пользователю. Несмотря на высокий уровень эксплуатационных параметров, процессор отличается незначительным (лишь 65 Вт) показателем TDP. Для установки устройства используется сокет AM4.
        `
    },
    {
        id: 19,
		artNo: "3029630",
		name: "Процессор AMD Ryzen 8 2600 OEM",
        description: `
            6-ядерный процессор AMD Ryzen 8 2600  OEM порадует высоким уровнем производительности подавляющее большинство пользователей. Устройство будет уверенно себя чувствовать в составе мощной игровой системы. Базовая частота процессора равна 3600 МГц. Турбочастота – 4200 МГц. Важной особенностью процессора является очень большой объем кэша третьего уровня: величина этого показателя равна 32 МБ. Объем кэша L2 – 3 МБ.
            Процессор AMD Ryzen 8 2600 OEM не имеет встроенного графического ядра. Модель совместима с памятью DDR4, объем которой может достигать 128 ГБ. Минимально допустимая частота оперативной памяти – 1600 МГц. Максимально допустимая частота вдвое выше – 3200 МГц.
            Процессор не укомплектован системой охлаждения. Выбор кулера предоставлен производителем пользователю. Несмотря на высокий уровень эксплуатационных параметров, процессор отличается незначительным (лишь 65 Вт) показателем TDP. Для установки устройства используется сокет AM4.
        `
    },
]

export {
    dataLeftColumn,
    dataRightColumn
}