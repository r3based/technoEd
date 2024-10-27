export interface CourseInterface {
    id: string;
    name: string;
    text: string;
    testId: string;
}

const courses: CourseInterface[] = [
    {
        id: '1',
        name: 'Корпоративная культура',
        text: `<p>Корпоративная культура – это система ценностей, убеждений, норм и практик, которые определяют, как сотрудники взаимодействуют друг с другом и с внешней средой. Она влияет на атмосферу в компании, производительность сотрудников и в целом на успех бизнеса.</p>
    <h2>Компоненты корпоративной культуры</h2>
    <p>Корпоративная культура включает в себя несколько ключевых компонентов:</p>
    <ul>
        <li><strong>Ценности</strong>: Основные принципы и убеждения, которые разделяют все члены команды.</li>
        <li><strong>Нормы поведения</strong>: Правила, регулирующие поведение сотрудников, как формальные, так и неформальные.</li>
        <li><strong>Общение</strong>: Способы, которыми сотрудники взаимодействуют друг с другом и с руководством.</li>
        <li><strong>Рабочая среда</strong>: Физическая и эмоциональная обстановка, в которой работают сотрудники.</li>
        <li><strong>Управление</strong>: Стиль руководства и подходы к управлению персоналом.</li>
    </ul>
    <h2>Значение корпоративной культуры</h2>
    <p>Корпоративная культура играет важную роль в формировании имиджа компании и её конкурентоспособности. Сильная корпоративная культура способствует:</p>
    <ul>
        <li><strong>Увеличению вовлеченности сотрудников</strong>: Когда сотрудники разделяют ценности компании, они более мотивированы и преданы своему делу.</li>
        <li><strong>Улучшению коммуникации</strong>: Четкие нормы и ценности помогают создать открытое и доверительное общение между всеми уровнями организации.</li>
        <li><strong>Снижению текучести кадров</strong>: Компании с сильной корпоративной культурой чаще удерживают талантливых сотрудников.</li>
        <li><strong>Увеличению продуктивности</strong>: Позитивная рабочая атмосфера способствует лучшим результатам и эффективности.</li>
    </ul>
    <h2>Формирование корпоративной культуры</h2>
    <p>Формирование корпоративной культуры – это процесс, который требует времени и усилий. Вот несколько шагов, которые помогут создать и развить корпоративную культуру:</p>
    <ul>
        <li><strong>Определение ценностей</strong>: Четкое определение и артикуляция основных ценностей компании.</li>
        <li><strong>Обучение и развитие</strong>: Обеспечение сотрудников необходимыми ресурсами для развития и понимания корпоративной культуры.</li>
        <li><strong>Обратная связь</strong>: Регулярное получение отзывов от сотрудников о состоянии корпоративной культуры и принятие мер по улучшению.</li>
        <li><strong>Признание достижений</strong>: Поощрение сотрудников за соблюдение корпоративных ценностей и норм.</li>
    </ul>
    <h2>Заключение</h2>
    <p>Корпоративная культура – это неотъемлемая часть успеха любой организации. Она влияет на все аспекты работы компании и является основой для построения доверительных отношений между сотрудниками. Создание и поддержание сильной корпоративной культуры требует постоянного внимания, но результаты этого процесса могут существенно повысить эффективность и успешность бизнеса.</p>`,
        testId: 'test1',
    },
    {
        id: '2',
        name: 'Документооборот',
        text: `<p>Документооборот — это система управления документами, охватывающая все стадии их жизненного цикла: создание, обработка, хранение и уничтожение. В сфере трудовых отношений важнейшими аспектами документооборота являются оформление больничных листов, отпусков, а также различных справок и заявлений. Эффективный документооборот позволяет минимизировать риски ошибок и упрощает работу как сотрудников, так и кадровых служб.</p>
    <h2>Оформление больничного листа</h2>
    <p>При заболевании сотрудник обязан уведомить работодателя о своей нетрудоспособности. Для официального оформления больничного листа работник должен получить соответствующий документ от врача, который подтверждает его состояние. Больничный лист должен содержать следующие данные:</p>
    <ul>
        <li>ФИО пациента.</li>
        <li>Даты начала и окончания нетрудоспособности.</li>
        <li>Подпись и печать врача.</li>
    </ul>
    <p>После получения больничного листа работник передает его в кадровую службу или бухгалтерию. Важно, чтобы документ был оформлен правильно, так как от этого зависит получение выплат по больничным. Кадровик проверяет документ на наличие необходимых реквизитов и регистрирует его в специальном журнале.</p>
    <h2>Оформление отпуска</h2>
    <p>Оформление отпусков также требует соблюдения определенной процедуры. Сотрудник должен заранее уведомить работодателя о намерении взять отпуск, подав заявление. В заявлении указываются:</p>
    <ul>
        <li>Период отпуска.</li>
        <li>Причина его оформления (например, ежегодный, учебный или по уходу за ребенком).</li>
    </ul>
    <p>После подачи заявления кадровая служба проверяет, может ли сотрудник взять отпуск в указанный период, и, при отсутствии препятствий, согласовывает его. Затем создается приказ об отпуске, который подписывается руководителем и передается в бухгалтерию для расчета отпускных выплат.</p>
    <h2>Документы, связанные с трудовой деятельностью</h2>
    <p>Кроме больничных листов и отпусков, в документообороте важную роль играют и другие документы, такие как:</p>
    <ul>
        <li><strong>Справки</strong>: например, о доходах или об отсутствии задолженности.</li>
        <li><strong>Приказы</strong>: о переводах, увольнениях и других кадровых изменениях.</li>
        <li><strong>Заявления</strong>: о различных предоставлениях, например, о материальной помощи.</li>
    </ul>
    <h2>Заключение</h2>
    <p>Корректное оформление документооборота в компании — залог не только правомерного использования кадровых ресурсов, но и сохранения отношений между работниками и руководством. Системный подход к обработке и хранению документов позволяет значительно снизить риски и повысить эффективность работы организации.</p>`,
        testId: 'test2',
    },
    {
        id: '3',
        name: 'Система Scrum',
        text: `<p>Scrum — это фреймворк для управления проектами, который используется преимущественно в разработке программного обеспечения. Он позволяет командам работать над сложными проектами, обеспечивая прозрачность, адаптивность и непрерывное улучшение процессов. Scrum основан на принципах Agile и предназначен для быстрой доставки ценности клиентам.</p>
    <h2>Основные элементы Scrum</h2>
    <p>Система Scrum включает в себя несколько ключевых компонентов:</p>
    <ul>
        <li><strong>Роли:</strong> В Scrum определены три основные роли: Владелец продукта (Product Owner), Команда разработки (Development Team) и Скрам-мастер (Scrum Master). Владелец продукта отвечает за формулирование требований и приоритетов, Скрам-мастер обеспечивает соблюдение процессов Scrum, а команда разработки занимается реализацией задач.</li>
        <li><strong>Артефакты:</strong> К основным артефактам Scrum относятся Бэклог продукта (Product Backlog), Бэклог спринта (Sprint Backlog) и Инкремент (Increment). Бэклог продукта — это список всех требований к продукту, а Бэклог спринта — это список задач, которые команда обязуется выполнить в текущем спринте.</li>
        <li><strong>События:</strong> Scrum включает в себя несколько событий: Спринт (Sprint), Планирование спринта (Sprint Planning), Ежедневный Скрам (Daily Scrum), Обзор спринта (Sprint Review) и Ретроспектива спринта (Sprint Retrospective). Спринт — это фиксированный период (обычно 2-4 недели), в течение которого команда работает над задачами.</li>
    </ul>
    <h2>Процесс Scrum</h2>
    <p>Процесс Scrum начинается с формирования Бэклога продукта, который содержит все требования к продукту. Затем команда проводит Планирование спринта, на котором выбирает задачи из Бэклога продукта для выполнения в течение предстоящего спринта.</p>
    <p>Каждый день команда проводит Ежедневный Скрам, на котором обсуждаются достижения, препятствия и планы на день. В конце спринта проходит Обзор, на котором команда демонстрирует выполненные задачи, и Ретроспектива, на которой обсуждаются уроки, извлеченные за время спринта.</p>

    <h2>Преимущества Scrum</h2>
    <p>Система Scrum имеет множество преимуществ, среди которых:</p>
    <ul>
        <li><strong>Гибкость:</strong> Scrum позволяет быстро адаптироваться к изменяющимся требованиям и приоритетам клиентов.</li>
        <li><strong>Прозрачность:</strong> Регулярные встречи и отчетность обеспечивают видимость прогресса для всех участников проекта.</li>
        <li><strong>Улучшение качества:</strong> Постоянная обратная связь и ретроспектива помогают команде улучшать процессы и повышать качество продукта.</li>
    </ul>

    <h2>Заключение</h2>
    <p>Scrum — это мощный инструмент для управления проектами, который позволяет командам эффективно справляться с сложностями и динамичностью современного рынка. Применение Scrum способствует созданию высококачественных продуктов, которые удовлетворяют потребности клиентов, благодаря своей гибкости и ориентированности на командную работу.</p>`,
        testId: 'test2',
    },
    {
        id: '4',
        name: 'Активность в команде',
        text: `<p>Участие в жизни команды — это не только ваше право, но и обязанность. Будьте активными участниками мероприятий, таких как тимбилдинги, собрания и обсуждения проектов. Эти мероприятия не только укрепляют коллективный дух, но и способствуют улучшению коммуникации между сотрудниками. Участвуя в общих делах, вы создаете атмосферу сотрудничества, которая положительно сказывается на общей эффективности работы.</p>
    <h2>Открытость для общения</h2>
    <p>Открытость в общении — ключевой фактор успешной работы в команде. Делитесь своими идеями, задавайте вопросы и предлагайте решения. Активное участие в обсуждениях помогает каждому члену команды чувствовать себя ценным и нужным. Кроме того, это способствует созданию доверительной атмосферы, в которой каждый может свободно выражать свои мысли и предложения.</p>
    <h2>Вежливость — залог успеха!</h2>
    <p>Вежливость в коллективе — это не просто манера общения, это основа продуктивных взаимоотношений. Используйте простые, но важные формулы: <strong>"пожалуйста"</strong>, <strong>"спасибо"</strong>, <strong>"извините"</strong>. Эти слова могут кардинально изменить атмосферу в офисе. Вежливое обращение способствует созданию положительного имиджа и укрепляет дружеские связи между сотрудниками. Чем чаще мы используем эти простые слова, тем легче становится общение, и тем меньше недопонимания возникает в команде.</p>
    <h2>Признание труда коллег</h2>
    <p>Не забывайте замечать успехи своих соратников. Признание труда коллег — это мощный инструмент для повышения мотивации и создания положительного климата в команде. Когда вы отмечаете достижения других, вы не только укрепляете доверие, но и способствуете командной энергетике. Это создаёт культуру поддержки, где каждый чувствует свою значимость и ценность.</p>
    <h2>Избегайте пересечения зон ответственности</h2>
    <p>Важно уважать границы и зоны ответственности каждого члена команды. Избегайте вмешательства в чужие дела, если это не требуется. Это не только поможет предотвратить конфликты, но и создаст атмосферу взаимного уважения и доверия. Когда каждый понимает свою роль и обязанности, работа в команде становится более слаженной и эффективной.</p>
    <h2>Заключение</h2>
    <p>Будьте активными участниками своей команды, проявляйте вежливость и признавайте труд коллег. Эти шаги укрепляют позитивный коллективный дух и способствуют созданию атмосферы сотрудничества и поддержки. Работая вместе, мы можем достигать больших результатов и создавать успешные проекты, основанные на доверии и взаимопонимании.</p>`,
        testId: 'test2',
    },
    {
        id: '5',
        name: 'Взаимодействие с командой',
        text: `<p>В современном мире успешное взаимодействие в рабочей среде играет ключевую роль в достижении организационных целей. Одним из самых важных аспектов этого взаимодействия является коммуникация. Без эффективного обмена информацией между сотрудниками невозможно создать продуктивную атмосферу, способствующую выполнению задач и реализации проектов.</p>
    <h2>Основы успешной коммуникации</h2>
    <p>Коммуникация включает в себя не только передачу информации, но и активное слушание. Это означает, что для достижения понимания между коллегами важно не просто слышать, что говорит собеседник, но и осмысленно воспринимать его слова. Одним из приемов, способствующих активному слушанию, является задавание уточняющих вопросов. Это позволяет не только прояснить информацию, но и показать собеседнику, что его мнение важно и ценится.</p>
    <h2>Препятствия в общении</h2>
    <p>Недопонимание часто возникает из-за сложных терминов и жаргона, которые могут быть неясны всем участникам общения. Для успешного взаимодействия необходимо использовать ясные и простые формулировки. Ясность и краткость в выражении мыслей помогут избежать путаницы и сделают общение более эффективным. Долгие монологи и отсутствие обратной связи могут привести к тому, что важные моменты будут упущены.</p>
    <h2>Признание и уважение</h2>
    <p>Еще одним важным аспектом успешного взаимодействия является признание труда и усилий коллег. Уважение и поддержка внутри команды укрепляют доверие и способствуют созданию позитивного климата. Признание достижений и успешных шагов сотрудников не только повышает мотивацию, но и способствует улучшению командной динамики. Когда члены команды ощущают свою ценность, это приводит к повышению общей производительности.</p>
    <h2>Поддержка в коллективе</h2>
    <p>Важную роль в успешной коммуникации играет и эмоциональная поддержка. Умение выслушать, оказать поддержку и помочь коллеге в сложной ситуации создает крепкие рабочие отношения. Эмоциональный интеллект, способность понимать и учитывать чувства других, является важным элементом успешного взаимодействия.</p>
    <h2>Эффективные практики</h2>
    <p>Чтобы сделать общение более эффективным, следует использовать краткие и последовательные предложения. Это помогает сосредоточиться на главной идее и избежать перегрузки информацией. Кроме того, важно избегать прерываний и конкуренции в разговоре. Каждый участник должен иметь возможность высказать свою точку зрения, и это необходимо для создания атмосферы уважения.</p>
    <h2>Заключение</h2>
    <p>В заключение, успешное взаимодействие в рабочей среде требует постоянного внимания к коммуникации и межличностным отношениям. Эффективное общение, активное слушание, признание заслуг и поддержка коллег — все эти факторы формируют гармоничную и продуктивную атмосферу. Важно помнить, что именно от нашего взаимодействия зависит не только успех отдельных сотрудников, но и всей команды в целом. Создавая пространство для открытого общения и уважения, мы можем значительно улучшить результаты работы и достигать высоких целей.</p>`,
        testId: 'test2',
    },
];

/**
 * Fetch all courses or a specific course by ID.
 * @param id Optional course ID. If provided, fetches the specific course.
 * @returns Promise<Course[]> if no ID is provided, otherwise Promise<Course | null>
 */
export const getTheory = async (id?: string): Promise<CourseInterface[] | CourseInterface | null> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (id) {
        const course = courses.find((course) => course.id === id);
        return course || null;
    }

    return courses;
};