
import img1 from './components/assets/card/1.jpg'
import img2 from './components/assets/card/2.jpg'
import img3 from './components/assets/card/3.jpg'
import img4 from './components/assets/card/4.jpg'
import img5 from './components/assets/card/5.jpg'
import img6 from './components/assets/card/6.jpg'
import img7 from './components/assets/card/7.jpg'
import img8 from './components/assets/card/8.jpg'
import img9 from './components/assets/card/9.jpg'
import img10 from './components/assets/card/10.jpg'
import img11 from './components/assets/card/11.jpg'
import img12 from './components/assets/card/12.jpg'
import img13 from './components/assets/card/13.jpg'
import img14 from './components/assets/card/14.jpg'
import img15 from './components/assets/card/15.jpg'
import img16 from './components/assets/card/16.jpg'
import img17 from './components/assets/card/17.jpg'
import img18 from './components/assets/card/18.jpg'



import m1 from './components/assets/manage/card1.jpg'
import m2 from './components/assets/manage/card2.jpg'
import m3 from './components/assets/manage/card3.jpeg'
import m4 from './components/assets/manage/card4.jpeg'
import m5 from './components/assets/manage/card5.jpg'
import { useTranslation } from 'react-i18next'
import React from 'react'
import c1 from './components/assets/Course/tur.jpeg'
import c2 from './components/assets/Course/arab.jpg'
import c3 from './components/assets/Course/drive.png'
import c4 from './components/assets/Course/en.avif'
import c5 from './components/assets/Course/kg.jpg'
import c6 from './components/assets/Course/ru.jpg'
import c7 from './components/assets/Course/korea.png'




const Rectors = [
    {
        name: "Арбаев Султан",
        titul: "директор",
        age: "1941 - 1944",
        img: img1,
    },
    {
        name: "Молдобаев Буржук",
        titul: "директор",
        age: "1944-1947",
        img: img2,
    }, {
        name: "Бекжанов Абдразак",
        titul: "директор",
        age: "1947-1950",
        img: img3,
    }, {
        name: "Юсупов Суйундук",
        titul: "директор",
        age: "1951-1955",
        img: img4,
    }, {
        name: "Токтогонов Султан",
        titul: "директор",
        age: "1955-1956",
        img: img5,
    }, {
        name: "Малабаев Мурзабек",
        titul: "директор",
        age: "1957-1958",
        img: img6,
    }, {
        name: "Маматюсупов Абдраман",
        titul: "директор",
        age: "1958-1961",
        img: img7,
    }, {
        name: "Айнекенов Ринат",
        titul: "ректор",
        age: "1962-1967",
        img: img8,
    }, {
        name: "Саламатов Жолдон",
        titul: "ректор",
        age: "1967-1972",
        img: img9,
    }, {
        name: "Касымалиев Бейшеналы",
        titul: "ректор",
        age: "1972-1976",
        img: img10,
    }, {
        name: "Конурбаев Эрик",
        titul: "ректор",
        age: "1976-1983",
        img: img11,
    },
    {
        name: "Ажимудинов Токон",
        titul: "ректор",
        age: "1983-1988",
        img: img12,
    },
    {
        name: "Жусаев Жолдош",
        titul: "ректор",
        age: "1988-1998",
        img: img13,
    },
    {
        name: "Кидибаев Мустафа",
        titul: "ректор",
        age: "1998-2004",
        img: img14,
    },
    {
        name: "Иманбаев Аскар",
        titul: "ректор",
        age: "2004-2005",
        img: img15,
    },
    {
        name: "Токтосопиев Алымбай",
        titul: "ректор",
        age: "2005-2010",
        img: img16,
    },
    {
        name: "Осмонов Оскон",
        titul: "ректор",
        age: "2010-2010",
        img: img17,
    },
    {
        name: "Абдылдаев Курманбек",
        titul: "ректор",
        age: "2010-2020",
        img: img18,
    },
]

const Management = [
    {
        name:'Иманбаев Аскарбек Асангазиевич',
        edu:"Кандидат педагогических наук, доцент",
        email:"rector@iksu.kg",
        who:"Ректор", 
        avatar:m1
    },
    {
        name:"Токтакунов Жолдошбек Шамуканбетович",
        edu:"Кандидат технических наук, доцент",
        email:"zholdoshbek.toktakunov@iksu.kg",
        who:"Проректор по учебной работе",
        avatar:m2
    },
    {
        name:"Ишенбекова Нургул Турсунгазиевна",
        edu:"",
        email:"n.ishenbekova@iksu.kg",
        who:"Проректор по науке и инновации",
        avatar:m3
    },
    {
        name:"Сулайманова Наргиза Асеиновна",
        edu:"",
        email:"sulaymanova@iksu.kg",
        who:"Проректор по государственному языку",
        avatar:m4
    },
    {
        name:"Асирдинова Толкун Жолдошовна",
        edu:"",
        email:"tolkun-1975@mail.ru",
        who:"Председатель профсоюзного комитета",
        avatar:m5
    }
]

  export const Frames = [
    {
        name:'frameCard.f1',
        url:"/frame/f1",
    },
    {
        name:'frameCard.f2',
        url:"/frame/f2",
        
    },
    {
        name:'frameCard.f3',
        url:"/frame/f3",
        
    },
    {
        name:'frameCard.f4',
        url:"/frame/f4",
        
    },
    {
        name:'frameCard.f5',
        url:"/frame/f5",
        
    },
    {
        name:'frameCard.f6',
        url:"/frame/f6",
        
    },
    {
        name:'frameCard.f7',
        url:"/frame/f7",
        
    },
    {
        name:'frameCard.f8',
        url:"/frame/f8",
        
    },
    {
        name:'frameCard.f9',
        url:"/frame/f9",
        
    },

    {
        name:'frameCard.f10',
        url:"/frame/f10",
        
    },
    {
        name:'frameCard.f11',
        url:"/frame/f11",
        
    },
    {
        name:'frameCard.f12',
        url:"/frame/f12",
        
    },
    {
        name:'frameCard.f13',
        url:"/frame/f13",
        
    }, 
] 
   
  

const FramesMain = [
    {
        main:" учебный отдел",  
        name:"Сартпаев Эркинбек Келгенбаевич",
        address:"Абдрахманов көч. 103, ЫМУ II корпус, №210 кабинет",
        phone:"+996 3922 51497",
        email:"okuubolum@iksu.kg",
        text:"Окуу бөлүмү – ЫМУнун структуралык бөлүмү катары кызмат кылат. Бул бөлүм мамлекеттик билим берүү стандарттарынын, окуу программаларынын, окуу пландарынын жана башка Кыргыз Республикасынын жогорку билим берүү системасынын окуу-методикалык, нормативдик документтеринин негизинде окуу процессин уюштуруу, пландаштырууну көзөмөлдөө, координациялоо жана азыркы күндүн талабындагы окутуунун технологияларын киргизүү функциясын аткарат.",
        path:"/frame/f1"
    },
    {
        main:"бухгалтерия",
        name:"Токтогулов Мундуз Исаевич",
        address:"ул. Абдрахманова, 103 II корпус ИГУ, каб.№ 206",
        phone:"+996 3922 50877",
        email:"munduz.t@iksu.kg",
        path:"/frame/f2",
        text:"правильную и рациональную организацию бухгалтерского учета, отвечающую требованиям оперативного руководства деятельностью Университета, и строгое соблюдение установленных правил ведения учета."
    }, 
    {
        main:"планово экономический отдел",
        name:"Сманова Нургуль Сартбаевна",
        address:"ул. Абдрахманова, 103 II корпус ИГУ, каб.№",
        phone:"+996 3922 50938",
        email:"smanova.66@mail.ru",
        path:"/frame/f3",
        text:"Планово-финансовый отдел (ПФО) является самостоятельным структурным подразделением ИГУ, призванный осуществлять экономическое планирование деятельности и повышение экономической эффективности использования имеющихся  финансовых ресурсов. Планово-финансовый отдел подчиняется непосредственно ректору ИГУ. В своей деятельности планово-финансовый отдел руководствуется Законом об образовании КР,постановлениями и распоряжениями Жогорку Кенеша и правительства КР, Указами президента КР, приказами и распоряжениями Министерства образования и науки КР,Министерства финансов КР, Положением о ВУЗе КР, Уставом ИГУ, приказами и распоряжениями ректора университета и другими нормативными актами.",

    },
    {
        main:"отдел международных связей",
        name:"",
        address:"",
        phone:"",
        email:"",
        path:"/frame/f4",
        text:"Международная деятельность, реализуемая университетом, является одним из важнейших направлений, способствующих решению основных задач, поставленных перед университетом – подготовке высококвалифицированных специалистов, разработке приоритетных направлений науки. Задачи международной деятельности определяются требованиями, предъявляемыми к высшей школе на современном этапе, с учетом проводящийся реформы высшего образования и развития Болонского процесса. Она ориентирована на ускорение обмена знаниями и технологиями, развитие новаторских форм образования и науки на основе изучения зарубежного опыта. Развитие международной деятельности в ИГУ направлено на повышение качества образовательной подготовки студентов, а также рейтинга университета в Кыргызстане и за рубежом."
    },
    {
        main:"общий отдел", 
        name:"Иязбекова Саадат Асанкадыровна",
        address:"ул. Абдрахманова, 103 II корпус ИГУ, каб.№ 214",
        phone:"+996 3922 52738",
        email:"iyazbekova.s@iksu.kg",
        path:"/frame/f5",
        text:"Общий отдел является структурным подразделением Иссык-Кульского государственного университета им. К. Тыныстанова и в своей деятельности руководствуется: -действующим законодательством Кыргызской Республики; – постановлениями Правительства Кыргызской Республики; – решениями Коллегии Министерства образования и науки и Кыргызской Республики; – положениями Единой государственной системы делопроизводства; – указаниями   Главного   архивного   управления   при   Правительстве Кыргызской Республики; – инструкциями по ведению делопроизводства."
    },
    {
        main:"архив",
        name:"Гриценко Вера Петровна",
        address:" г.Каракол, ул. Тыныстанова 45",
        phone:"+996 3922 52725",
        email:"",
        text:"",
        path:"/frame/f6",
    },
    {
        main:" отдел информационных технологий и ремонт компьютерной техники",
        name:"Эгембердиев Айбек",
        address:"ул., Абдрахманова 103, II корпус каб., 216",
        phone:"+996 (508) 736700",
        email:"egemberdiev@iksu.kg",
        path:"/frame/f7",
        text:"Отдел ИТиРКТ обеспечивает техническое и программное обслуживания компьютерной (более 540 единиц) и другой оргтехники (более 150 видов), находящейся в ИГУ, устанавливает операционные системы, драйверы периферийных устройств и офисные программы, обеспечивает бесперебойный интернет и работу разработанной ими локальной сети ИГУ."
    },
    {
        main:" отдел науки и инновации",
        name:'Ишенбекова Нургул Турсунгазиевна',
        address:"г. Каракол, ул. Ю. Абдрахманова, 103 II корпус ИГУ, каб.№ 305",
        phone:"+996 771 265 400",
        email:"interiksu@gmail.com",
        path:"/frame/f8",
        text:"осуществляет общее руководство деятельностью ОНиИ, в соответствии с планами научной деятельности ИГУ; осуществляет учебно-методическое сопровождение деятельности аспирантов; координирует работу совета молодых ученых ИГУ; разрабатывает нормативную документацию отдела; обеспечивает переписку с государственными и общественными службами по научной деятельности; рассматривает заявки по гранту ИГУ на научные исследования на соответствие их утвержденному Положению и формам установленного образца; готовит планы проведения конференций, «круглых столов», семинаров и других научных мероприятий; осуществляет информационное обеспечение структурных подразделений о внутри вузовских, республиканских и международных мероприятиях в области науки; организует подготовку итогового годового отчета о научной деятельности для обсуждения на заседаниях Ученого совета ИГУ; готовит сводные отчеты о научной деятельности ИГУ в МОН КР; готовит информационные отчеты о научной деятельности ИГУ в органы статистики и другие организации."
    },
    {
        main:" отдел  кадров",
        name:"Чортонова Курманжан Усенкуловна",
        address:"ул. Абдрахманова, 103, II корпус ИГУ, каб.№ 205",
        phone:"+996 3922 52385",
        email:"",
        path:"/frame/f9",
        text:"Отдел кадров в соответствии с Уставом университета является самостоятельным подразделением и подчиняется своей практической работе ректору университета. Своей деятельностью отдел кадров руководствуется решениями коллегии Министерства образования и науки Кыргызской Республики, Постановлениями правительства Кыргызской Республики, приказами и указами ректора. Работу об увольнении и принятии проводит совместно с руководителями учебной части, деканатов, кафедр, отделов и других служб университета. Отдел кадров комплектуется преимущественно работниками с высшим образованием, имеющим опыт работы с кадрами."
    },{
        main:"административно хозяйственный отдел ",
        name:"Дербишев Казакбай Аалиевич",
        address:" ул. Абдрахманова, 103 II корпус ИГУ, каб.№ 311,",
        phone:"+996 3922 50203",
        email:"",
        path:"/frame/f10",
        text:"Отдел государственных закупок является структурным подразделением Иссык-Кульского государственного университета им.К.Тыныстанова. В своей деятельности отдел строго руководствуется законом КР «О государственных закупках» от 3 апреля 2015 года., за №72., а также Нормативно правовыми актами Правительства КР в сфере государственных закупок, положением о правилах проведения электронных государственных закупок, Методической инструкцией по оценке Конкурсных заявок утвержденные приказом Министерства КР №103-104 (2574-2574) от 23 октября 2015 года."

    },
    {
        main:"отдел  по государственному языку и молодежной политики",
        name:"Сулайманова Наргиза Асеиновна",
        address:"ул. Адрахманова 103 II корпус каб., 306",
        phone:'996(709) 860018',
        email:"gos.yazyk@iksu.kg",
        path:"/frame/f11",
        text:"Отдел осуществляет формирование единой политики развития государственного языка в ИГУ им.К.Тыныстанова. Координирует и контролирует деятельность  структурных подразделений университета по реализации Закона Кыргызской Республики  “О государственном языке Кыргызской Республики ”  и развитию государственного языка. Обеспечивает интеллектуальную, духовную, культурную, профессиональную среду и личностный рост студентов, создает оптимальные условия для развития у них творчества, инициативы  содержательного досуга и формирования здорового образа жизни;"


    },
    {
        main:" отдел  информатизации образования ",
        name:"Закиряев Кубанычбек Эсейович",
        address:"Адрес: Абдрахманова, 103 II корпус, каб. № ,II этаж",
        phone:"+996 3922 52709",
        email:"",
        path:"/frame/f12",
        text:""
    },
    {
        main:"отдел по специальной и мобилизационно работе",
        name:"Мамытов Жыргал Сатыкеевич",
        address:"ул. Абдрахманова 103, 2 корпус ИГУ, каб. 219",
        phone:"+996 3922 50124",
        email:"Mamytovjirgal2808@gmail.com",
        path:"/frame/f13",
        text:"проверять у всех инженерно-технических работников, рабочих и служащих при оформлении на работу наличие воинских документов и принадлежность к воинскому учету. Лиц, не имеющих воинских документов и не состоящих на учете, немедленно направлять в военные комиссариаты для получения соответствующих документов, постановки на воинский учет и сообщать о них в военный комиссариат"
    }
]




const CourseCard = [
    {
        name:"курсы турецкого языка",
        img:c1
    }, 
    
    {
        name:"курсы английского языка",
        img:c4

    }, 
    {
        name:" курсы арабского языка",
        img:c2

    }, 
    {
        name:"курсы корейского языка",
        img:c7

    }, 
    {
        name:" курсы обучения русского языка",
        img:c6

    }, 
    {
        name:" курсы обучения кыргызского языка",
        img:c5

    }, 
    {
        name:"курсы по подготовке водителей",
        img:c3

    }, 
]





export {Rectors, Management,FramesMain, CourseCard}