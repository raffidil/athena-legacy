// chentrvax HARXER: 3,4,17,19,20,21,22,25,27,28,31,32
const Questions = [
  {
    id: 'Գ1',
    text: 'Ի՞նչ  են  նշանակում՝ It costs arms and legs',
    answers: [
      {
        text: 'շատ թանկ',
        correct: true,
      }, {
        text: 'էժան',
        correct: false,
      }, {
        text: 'ընկերանալ',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'խաշ ուտել',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ2',
    text: 'Ի՞նչ  են  նշանակում՝  Hit the book',
    answers: [
      {
        text: 'դաս  պարապել',
        correct: true,
      }, {
        text: 'գիրքը պատռել',
        correct: false,
      }, {
        text: 'գրքով ծեծել',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'դաս չը պարապել',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ3',
    text: 'Ի՞նչ  են  նշանակում՝ He is made of mony',
    answers: [
      {
        text: 'մեծահարուստ',
        correct: true,
        fontSize: '27px',
      }, {
        text: 'դրամասէր',
        correct: false,
      }, {
        text: 'աշխատասէր',
        correct: false,
        fontSize: '27px',
      }, {
        text: 'հպարտ',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ4',
    text: 'Ի՞նչ  են  նշանակում՝ When Pig flys',
    answers: [
      {
        text: 'երբէք',
        correct: true,
      }, {
        text: 'մորթած խոզ',
        correct: false,
      }, {
        text: 'խոզի բուդ',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'օդաչու',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ5',
    text: 'Ի՞նչ  են  նշանակում՝ fat chance',
    answers: [
      {
        text: 'հնարաւոր չէ',
        correct: true,
      }, {
        text: 'մեծ բախտ ունեցող',
        correct: false,
      }, {
        text: 'գեր',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'հնարա- ւորութիւն',
        correct: false,
        ծծfontSize: '25px',
      },
    ],
  },
  {
    id: 'Գ6',
    text: 'Ի՞նչ է կոչւում  առաջին գունաւոր  մուլտ ֆիլմը։',
    answers: [
      {
        text: 'Սպիտակաձյունիկը և 7 թզուկները',
        correct: true,
        fontSize: '21px',
      }, {
        text: 'Միկի Մաուս',
        correct: false,
      }, {
        text: 'Փոքրիկ Բոսը',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'Թոմն ու Ջերին',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ7',
    text: 'Ինչպէս   է  գրւում համաշխարհային  Հիգիենայի  (بهداشت جهانی) համառօտագրութիւնը:',
    answers: [
      {
        text: 'WHO',
        correct: true,
      }, {
        text: 'WTO',
        correct: false,
      }, {
        text: 'IMF',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'ECO',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ8',
    text: 'Ո՞ր  երկիրն է  համարւում  ամենաշատ   ըմպելիքներ  արտադրղ երկիրը :',
    answers: [
      {
        text: 'Ամերիկա',
        correct: true,
      }, {
        text: 'Չինաստան',
        correct: false,
      }, {
        text: 'Հայաստան',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'Ռուսաստան',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ9',
    text: 'Ո՞ր քաղաքն է Աւստրալիայի մայրաքաղաքը:',
    answers: [
      {
        text: 'Կանբերրա',
        correct: true,
      }, {
        text: 'Լոնդոն',
        correct: false,
      }, {
        text: 'Սիդնէյ',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'Մելբորն',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ10',
    text: 'Ո՞ր քաղաքն է   կանադայի մայրաքաղաքը:',
    answers: [
      {
        text: 'Օթաւա',
        correct: true,
      }, {
        text: 'Տորենտօ',
        correct: false,
      }, {
        text: 'Ալասկա',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'Վանկովեր',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ11',
    text: 'Ո՞ր Օվկիանոսում են գտնւում  Հաւայի կղզիները:',
    answers: [
      {
        text: 'Խաղաղ օվկիանոսում',
        correct: true,
        fontSize: '27px',
      }, {
        text: 'Ատլանտիկ  օվկիանոսում',
        correct: false,
        fontSize: '27px',
      }, {
        text: 'Հնդկական',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'Հիւսիսային սառցեալ',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ12',
    text: 'Ո՞ր տեղ է գտնւում  ժամացոյցի ամենամեծ բուրգը :',
    answers: [
      {
        text: 'Անգլիայում',
        correct: true,
      }, {
        text: 'Սինգապուրում',
        correct: false,
        fontSize: '27px',
      }, {
        text: 'Ամերիկայում',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'Բարզիլիաում',
        correct: false,
        fontSize: '27px',
      },
    ],
  },
  {
    id: 'Գ13',
    text: 'ի՞նչ է կոչւում Եկիպտոսի դրամը:',
    answers: [
      {
        text: 'փոնդ',
        correct: true,
      }, {
        text: 'դոլար',
        correct: false,
      }, {
        text: 'Եկիպտոսի դոլար',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'դերհամ',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ14',
    text: 'Ո՞րն է տիեզերք  առաքւած առաջին ըմպելիք:',
    answers: [
      {
        text: 'Կոկակոլա',
        correct: true,
      }, {
        text: 'Փեփսի',
        correct: false,
      }, {
        text: 'Վոտքա',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'Ռեդ բուլ',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ15',
    text: 'Ո՞ր երկրի արտադրանքն է եղել՝  առաջին գունաւոր հեռուստացոյցը :',
    answers: [
      {
        text: 'Ամերիկաի',
        correct: true,
      }, {
        text: 'Ճապոնիայի',
        correct: false,
      }, {
        text: 'Կորիայի',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'Գերմանիայի',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ16',
    text: 'Ո՞վ է առաջին տիեզերագնացը:',
    answers: [
      {
        text: 'Հիւրի Գագարի',
        correct: true,
      }, {
        text: 'Ադամ Սմիթը',
        correct: false,
      }, {
        text: 'Արմստրանգը',
        correct: false,
        fontSize: '28px',
      }, {
        text: 'Մաթ Սմիթ',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ17',
    text: 'Ի՞նչ է կոչւում CPU-ի արագութեան չափման միաւորը:',
    answers: [
      {
        text: 'Հերթզ',
        correct: true,
      }, {
        text: 'Բայթ',
        correct: false,
      }, {
        text: 'Վաթ',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'Օհմ',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ18',
    text: 'Հետեւեալ ծրագրերից ո՞ր մէկը  չի պականում Office -ին։',
    answers: [
      {
        text: 'Internet Explorer',
        correct: true,
      }, {
        text: 'Access',
        correct: false,
      }, {
        text: 'Exel',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'Word',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ19',
    text: 'Չինաստանի ազգաբնակչութեան թիւը քանի՞ է :',
    answers: [
      {
        text: '1.3- միլիարդ',
        correct: true,
      }, {
        text: '1- միլիարդ',
        correct: false,
      }, {
        text: '80- միլիոն',
        correct: false,
        //fontSize: '25px',
      }, {
        text: '7- միլիարդ',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ20',
    text: 'Մարմնի ,ո՞ր հատւածն է ապահովում արիւնը:',
    answers: [
      {
        text: 'ոսկրածուծը',
        correct: true,
      }, {
        text: 'ուղեղը',
        correct: false,
      }, {
        text: 'սիրտը',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'եռիկամը',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ21',
    text: 'Աչքի բիբը (مردمک) Լոյսի դիմաց ի՞նչ փոփոխութեան է ենթարկւում:',
    answers: [
      {
        text: 'հաւաքւում է',
        correct: true,
      }, {
        text: 'լայնանում է',
        correct: false,
      }, {
        text: 'բոլորովին փակւում է',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'փոփոխութեան չի ենթարկւում',
        correct: false,
        fontSize: '25px',
      },
    ],
  },
  {
    id: 'Գ22',
    text: 'Մազերի կառուցւածքի ամենաշատ մասը, Ի՞նչ սննդանիւթից է կազմւած:',
    answers: [
      {
        text: 'սպիտակոյցից (پروتین)',
        correct: true,
        fontSize: '28px',
      }, {
        text: 'կալցիոմից',
        correct: false,
      }, {
        text: 'մանեզիոմից',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'վիտամիններից',
        correct: false,
        fontSize: '27px',
      },
    ],
  },
  {
    id: 'Գ23',
    text: 'Ի՞նչ գոյնի է ծովի Մարախի (Մէյգուի) արիւնը:',
    answers: [
      {
        text: 'կապոյտ',
        correct: true,
      }, {
        text: 'կարմիր',
        correct: false,
      }, {
        text: 'դեղին',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'սեւ',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ24',
    text: 'Ջուրը գլխուղեղի քանի՞ տոկոսն է կազմում։',
    answers: [
      {
        text: '79',
        correct: true,
      }, {
        text: '30',
        correct: false,
      }, {
        text: '5',
        correct: false,
        //fontSize: '25px',
      }, {
        text: '50',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ25',
    text: 'Ո՞ր կենդանին  է,որ զուրկ է ձայնալարերից:',
    answers: [
      {
        text: 'ընձուխտ',
        correct: true,
      }, {
        text: 'դելֆին',
        correct: false,
      }, {
        text: 'մրջիւն',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'չղչիկ',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ26',
    text: 'Կենդանի ,որի  սիրտը գտնւում է գլխում:',
    answers: [
      {
        text: 'մէյգու',
        correct: true,
      }, {
        text: 'մրջիւն',
        correct: false,
      }, {
        text: 'օձ',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'ընձուխտ',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ27',
    text: 'ի՞նչէ կոչւում արեան շաքարը:',
    answers: [
      {
        text: 'գլուկոզ',
        correct: true,
      }, {
        text: 'սելոլոզ',
        correct: false,
      }, {
        text: 'լակթոզ',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'գլութեն',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ28',
    text: 'Այս վիտամինի պակասը , ոսկրացաւի պատճառ է դառնում:',
    answers: [
      {
        text: 'D',
        correct: true,
      }, {
        text: 'B2',
        correct: false,
      }, {
        text: 'C',
        correct: false,
        //fontSize: '25px',
      }, {
        text: 'A',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ29',
    text: 'Ո՞ւմ գրչին է պատկանում ՝ Երեք հրացանակիրներ վէպը:',
      answers: [
        {
          text: 'Ալեքսանդր Դիւմաի',
          correct: true,
        }, {
          text: 'Քուբի Բրայանթի',
          correct: false,
        }, {
          text: 'Վիկտոր Հոգոի',
          correct: false,
        }, {
          text: 'Ալեքսանդր Մակեդոնացու',
          correct: false,
          fontSize: '27px',
      },
    ],
  },
  {
    id: 'Գ30',
    text: 'Ի՞նչ անւանակոչում ունի Արգենտինա երկիրը:',
      answers: [
        {
          text: 'Արծաթի երկիր',
          correct: true,
        }, {
          text: 'Ոսկու հանք',
          correct: false,
        }, {
          text: 'Սոված երկիր',
          correct: false,
        }, {
          text: 'Կապոյտ երկիր',
          correct: false,
      },
    ],
  },
  {
    id: 'Գ31',
    text: 'Ո՞րն է խաղաղութեան խորհրդանիշ ծառը:',
      answers: [
        {
          text: 'Ձիթենի',
          correct: true,
        }, {
          text: 'Սոճի',
          correct: false,
        }, {
          text: 'Ուռենի',
          correct: false,
        }, {
          text: 'Բոնսայ',
          correct: false,
      },
    ],
  },
  {
    id: 'Գ32',
    text: 'Ո՞ւմ գրչին է պատկանում «Սպանւած աղաւնի» վէպը:',
      answers: [
        {
          text: 'Նարդոսի',
          correct: true,
        }, {
          text: 'Գէորգ Էմինի',
          correct: false,
        }, {
          text: 'Աւետիս Ահարոնեանի',
          correct: false,
          fontSize: '30px',
        }, {
          text: 'Չարենցի',
          correct: false,
      },
    ],
  },
  {
    id: 'Գ33',
    text: 'Ո՞ր երկրի դրոշն է, որ ուղղանկիւն չէ:',
      answers: [
        {
          text: 'Նեպալի',
          correct: true,
        }, {
          text: 'Կրովասիի',
          correct: false,
        }, {
          text: 'Անգլիաի',
          correct: false,
        }, {
          text: 'Սերբիայի',
          correct: false,
      },
    ],
  },
  {
    id: 'Գ34',
    text: 'Մէկ մայլը, քանի՞ կիլոմետր է:',
      answers: [
        {
          text: '1.906',
          correct: false,
        }, {
          text: '1.960',
          correct: false,
        }, {
          text: '1.609',
          correct: true,
        }, {
          text: '1.690',
          correct: false,
      },
    ],
  },
  {
    id: 'Գ35',
    text: 'Ո՞րն է ամենաշատ վիտամին C պարունակող միրգը:',
    answers: [
      {
        text: 'Կիվին',
        correct: true,
      }, {
        text: 'Նարինջը',
        correct: false,
      }, {
        text: 'Խնձորը',
        correct: false,
      }, {
        text: 'Կիտրոնը',
        correct: false,
      },
    ],
  },
  {
    id: 'Գ36',
    text: 'Ո՞վ է Լեռնային Ղարաբաղի Հանրապետութեան նախագահը:',
      answers: [
        {
          text: 'Բակօ Սահակեան',
          correct: true,
        }, {
          text: 'Վարդան Արամեան',
          correct: false,
        }, {
          text: 'Լեւոն Մկրտչեան',
          correct: false,
        }, {
          text: 'Սպարտակ Թորոսեան',
          correct: false,
      },
    ],
  },
  {
    id: 'Գ37',
    text: 'Հայկական բանակի կազմաւորման օրն է',
      answers: [
        {
          text: 'Յունւարի 28',
          correct: true,
        }, {
          text: 'Փետրւարի  18',
          correct: false,
          fontSize: '29px',
        }, {
          text: 'Փետրւարի 28',
          correct: false,
        }, {
          text: 'Յունւարի 18',
          correct: false,
      },
    ],
  },
  {
    id: 'Գ38',
    text: 'Ու՞մ է պատկանում «Սամւել» վէպ։',
      answers: [
        {
          text: 'Րաֆֆի',
          correct: true,
        }, {
          text: 'Գ. Էմին',
          correct: false,
        }, {
          text: 'Պ. Սևակ',
          correct: false,
        }, {
          text: 'Ա. Իսահակեան',
          correct: false,
      },
    ],
  },
  {
    id: 'Գ39',
    text: 'Եկեղեցում Մէկ օրւան ընթացքում տարբեր ժամերին կատարւող հասարակաց աղօթքը կոչւում է՝',
      answers: [
        {
          text: 'Ժամերգութիւն',
          correct: true,
          fontSize: '27px',
        }, {
          text: 'Հաղորդութիւն',
          correct: false,
          fontSize: '27px',
        }, {
          text: 'Աղօթք',
          correct: false,
        }, {
          text: 'Պատարագ',
          correct: false,
      },
    ],
  },
  {
    id: 'Գ40',
    text: '   ',
    text: 'Շուշիի ազատագրման օրն է',
    answers: [
      {
        text: 'Մայիսի 9',
        correct: true,
      }, {
        text: 'Մարտի 2',
        correct: false,
      }, {
        text: 'Մայիսի 5',
        correct: false,
      }, {
        text: 'Մարտի 1',
        correct: false,
      },
    ],
  },















  //
  //
  //
  //
  //
  //
  //
  //
  // {
  //   id: 'Գ1',
  //   text: 'ի՞նչ նիւթ են պարունակում  թռչունի փետուրները:',
  //   answers: [
  //     {
  //       text: 'կրեատին',
  //       correct: true,
  //     }, {
  //       text: 'Կալցիոմ',
  //       correct: false,
  //     }, {
  //       text: 'Սննդաթելիկներ (Ֆիբր)',
  //       correct: false,
  //       fontSize: '25px',
  //     }, {
  //       text: 'Դոնդող (Ժելատին)',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ2',
  //   text: 'Ի՞ նչ անունով է յայտնի  Շւեցարիան:',
  //   answers: [
  //     {
  //       text: 'Ժամացոյցի երկիր',
  //       correct: true,
  //     }, {
  //       text: 'Հազար կղզի',
  //       correct: false,
  //     }, {
  //       text: 'դրախտի երկիր',
  //       correct: false,
  //     }, {
  //       text: 'Արծաթի երկիր',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ3',
  //   text: 'Ո՞ր երկրից է ծագել երաժշտութիւնը:',
  //   answers: [
  //     {
  //       text: 'Չինաստան',
  //       correct: true,
  //     }, {
  //       text: 'Հայաստան',
  //       correct: false,
  //     }, {
  //       text: 'Անգլիա',
  //       correct: false,
  //     }, {
  //       text: 'Ամերիկա',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ4',
  //   text: 'Ո՞ւմ գրչին է պատկանում ՝ Երեք հրացանակիրներ վէպը:',
  //   answers: [
  //     {
  //       text: 'Ալեքսանդր Դիւմաի',
  //       correct: true,
  //     }, {
  //       text: 'Քուբի Բրայանթի',
  //       correct: false,
  //     }, {
  //       text: 'Վիկտոր Հոգոի',
  //       correct: false,
  //     }, {
  //       text: 'Ալեքսանդր Մակեդոնացու',
  //       correct: false,
  //       fontSize: '28px',
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ5',
  //   text: 'Աշխարահռչակ ո՞ր երաժիշտ եւ երգահան էր խլականջ:',
  //   answers: [
  //     {
  //       text: 'Բեթհովեն',
  //       correct: true,
  //     }, {
  //       text: 'Բախ',
  //       correct: false,
  //     }, {
  //       text: 'Կոմիտաս',
  //       correct: false,
  //     }, {
  //       text: 'Եաննի',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ6',
  //   text: 'Ի՞նչ անւանակոչում ունի Արգենտինա երկիրը:',
  //   answers: [
  //     {
  //       text: 'Արծաթի երկիր',
  //       correct: true,
  //     }, {
  //       text: 'Ոսկու հանք',
  //       correct: false,
  //     }, {
  //       text: 'Սոված երկիր',
  //       correct: false,
  //     }, {
  //       text: 'Կապոյտ երկիր',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ7',
  //   text: 'Ո՞վ է յայտնաբերել Ռադիոմ քիմիական տարը:',
  //   answers: [
  //     {
  //       text: 'Մարի Կիւրի',
  //       correct: true,
  //     }, {
  //       text: 'Մրայա Քերի',
  //       correct: false,
  //     }, {
  //       text: 'Կատրին Կոլման',
  //       correct: false,
  //     }, {
  //       text: 'Մարիա  Թելկես',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ8',
  //   text: 'Ո՞րն է Ասիայի ամենաթանկ քաղաքը:',
  //   answers: [
  //     {
  //       text: 'Տոկիօն',
  //       correct: true,
  //     }, {
  //       text: 'Չելսին',
  //       correct: false,
  //     }, {
  //       text: 'Մոսկւան',
  //       correct: false,
  //     }, {
  //       text: 'Սիդնէյը',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ9',
  //   text: 'Ո՞րն է աշխարհի ամենաերկար գետը:',
  //   answers: [
  //     {
  //       text: 'Նեղոս (Նիլ)',
  //       correct: true,
  //     }, {
  //       text: 'Ամազոն',
  //       correct: false,
  //     }, {
  //       text: 'Եփրատ',
  //       correct: false,
  //     }, {
  //       text: 'Միսիսիպի',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ10',
  //   text: 'Ի՞նչ է կոչւում Բելառուսի դրամական միաւորը:',
  //   answers: [
  //     {
  //       text: 'Ռուբլի',
  //       correct: true,
  //     }, {
  //       text: 'Եւրօ',
  //       correct: false,
  //     }, {
  //       text: 'Լիրա',
  //       correct: false,
  //     }, {
  //       text: 'Դրախմա',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ11',
  //   text: 'Ո՞ր երկրում չկայ պետական կինոթատրոն:',
  //   answers: [
  //     {
  //       text: 'Սաուդիան Արաբիա',
  //       correct: true,
  //     }, {
  //       text: 'Մակեդոնիա',
  //       correct: false,
  //     }, {
  //       text: 'Ամերիկա',
  //       correct: false,
  //     }, {
  //       text: 'Վրաստան',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ12',
  //   text: 'Ո՞րն է խաղաղութեան խորհրդանիշ ծառը:',
  //   answers: [
  //     {
  //       text: 'Ձիթենի',
  //       correct: true,
  //     }, {
  //       text: 'Սոճի',
  //       correct: false,
  //     }, {
  //       text: 'Ուռենի',
  //       correct: false,
  //     }, {
  //       text: 'Բոնսայ',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ13',
  //   text: 'Մարդու աչքի ոսպնեակը քանի մեգափիկսել է:',
  //   answers: [
  //     {
  //       text: '576',
  //       correct: true,
  //     }, {
  //       text: '1024',
  //       correct: false,
  //     }, {
  //       text: '124',
  //       correct: false,
  //     }, {
  //       text: '1,000,000',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ14',
  //   text: 'Օլիմպիական խաղերում քանի՞ մեդալ է շահել Ամերիկացի լեգենդար լողորդ՝ Մայքլ Ֆելփսը:',
  //   answers: [
  //     {
  //       text: '23',
  //       correct: true,
  //     }, {
  //       text: '18',
  //       correct: false,
  //     }, {
  //       text: '8',
  //       correct: false,
  //     }, {
  //       text: '14',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ15',
  //   text: 'Սեղանի թենիսի գնդակի քաշը քանի՞ գրամ է:',
  //   answers: [
  //     {
  //       text: '2.72',
  //       correct: true,
  //     }, {
  //       text: '1',
  //       correct: false,
  //     }, {
  //       text: '2.50',
  //       correct: false,
  //     }, {
  //       text: '4',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ16',
  //   text: 'Ի՞նչէ կոչւում միջազգային օլիմպիական կոմիտէն:',
  //   answers: [
  //     {
  //       text: 'I.O.C',
  //       correct: true,
  //     }, {
  //       text: 'I.A.A.F.',
  //       correct: false,
  //     }, {
  //       text: 'I.J.F.',
  //       correct: false,
  //     }, {
  //       text: 'I.S.F.',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ17',
  //   text: 'Հայ Առաքելական Եկեղեցու Սուրբ խորհուրդները Քանի՞սն են:',
  //   answers: [
  //     {
  //       text: '7',
  //       correct: true,
  //     }, {
  //       text: '9',
  //       correct: false,
  //     }, {
  //       text: '5',
  //       correct: false,
  //     }, {
  //       text: '12',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ18',
  //   text: 'Հայ Առաքելական Եկեղեցում Կատարւող, Խաւարման Կարգը Խորհրդանշում է՝',
  //   fontSize: '40px',
  //   answers: [
  //     {
  //       text: 'Քրիստոսի Խաչելութիւնը',
  //       correct: true,
  //       fontSize: '27px',
  //     }, {
  //       text: 'Գէթսեմանիում Քրիստոսի վերջին աղօթքը',
  //       correct: false,
  //       fontSize: '27px',
  //     }, {
  //       text: 'Քրիստոսի մահը և թաղումը',
  //       correct: false,
  //       fontSize: '27px',
  //     }, {
  //       text: 'Վերջին ընթրիք',
  //       correct: false,
  //       fontSize: '27px',
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ19',
  //   text: 'Եկեղեցում Մէկ օրւան ընթացքում տարբեր ժամերին կատարւող հասարակաց աղօթքը կոչւում է՝',
  //   answers: [
  //     {
  //       text: 'Ժամերգութիւն',
  //       correct: true,
  //       fontSize: '27px',
  //     }, {
  //       text: 'Հաղորդութիւն',
  //       correct: false,
  //       fontSize: '27px',
  //     }, {
  //       text: 'Աղօթք',
  //       correct: false,
  //     }, {
  //       text: 'Պատարագ',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ20',
  //   text: 'Քանի՞ րոպէանոց խաղամասերից է բաղկացած հանդբոլ մարզաձեւը:',
  //   answers: [
  //     {
  //       text: '2x30',
  //       correct: true,
  //     }, {
  //       text: '2x40',
  //       correct: false,
  //     }, {
  //       text: '2x20',
  //       correct: false,
  //     }, {
  //       text: '2x15',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ21',
  //   text: 'Ի՞նչ է նշանակում «Pull up stakes»:',
  //   answers: [
  //     {
  //       text: 'Տեղափոխւել',
  //       correct: true,
  //       fontSize: '27px',
  //     }, {
  //       text: 'Հրիր սթէյքը',
  //       correct: false,
  //     }, {
  //       text: 'Սթէյքը ուտել',
  //       correct: false,
  //     }, {
  //       text: 'Ուշադրութիւն դարձնել',
  //       correct: false,
  //       fontSize: '27px',
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ21',
  //   text: 'Ի՞նչ է նշանակում «Dollar for dollar»:',
  //   answers: [
  //     {
  //       text: 'Փողտ իզուր մի ծախսիր',
  //       correct: true,
  //     }, {
  //       text: 'Փողին փող չի ասում',
  //       correct: false,
  //     }, {
  //       text: 'Փողոտ մարդ',
  //       correct: false,
  //     }, {
  //       text: 'Փող, փողի համար',
  //       correct: false,
  //     },
  //   ],
  // },
  //
  //
  //
  //
  // //
  // {
  //   id: 'Գ14',
  //   text: 'Ո՞ւմ գրչին է պատկանում «Սպանւած աղաւնի» վէպը:',
  //   answers: [
  //     {
  //       text: 'Նարդոսի',
  //       correct: true,
  //     }, {
  //       text: 'Գէորգ Էմինի',
  //       correct: false,
  //     }, {
  //       text: 'Աւետիս Ահարոնեանի',
  //       correct: false,
  //       fontSize: '30px',
  //     }, {
  //       text: 'Չարենցի',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ15',
  //   text: 'Ո՞րն է ծովային ամենախելացի կենդանին:',
  //   answers: [
  //     {
  //       text: 'Դելֆինը',
  //       correct: true,
  //     }, {
  //       text: 'Կետը (նահանգ)',
  //       correct: false,
  //     }, {
  //       text: 'Շնաձուկ (Քուսէ)',
  //       correct: false,
  //     }, {
  //       text: 'Ութոտնուկ',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ16',
  //   text: 'Ո՞ր երկրի դրոշն է, որ ուղղանկիւն չէ:',
  //   answers: [
  //     {
  //       text: 'Նեպալի',
  //       correct: true,
  //     }, {
  //       text: 'Կրովասիի',
  //       correct: false,
  //     }, {
  //       text: 'Անգլիաի',
  //       correct: false,
  //     }, {
  //       text: 'Սերբիայի',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ17',
  //   text: 'Ո՞ր երկրում է գտնւում աշխարհի ամենահին եկեղեցին:',
  //   answers: [
  //     {
  //       text: 'Իրանում',
  //       correct: true,
  //     }, {
  //       text: 'Հայաստանում',
  //       correct: false,
  //       fontSize: '28px',
  //     }, {
  //       text: 'Իտալիայում',
  //       correct: false,
  //     }, {
  //       text: 'Ֆրանսիայում',
  //       correct: false,
  //       fontSize: '28px',
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ18',
  //   text: 'Ի՞նչ է խորհրդանշում «Թաջ մահալ» դամբարանը:',
  //   answers: [
  //     {
  //       text: 'Սէր',
  //       correct: true,
  //     }, {
  //       text: 'Ազատութիւն',
  //       correct: false,
  //     }, {
  //       text: 'Ուժ',
  //       correct: false,
  //     }, {
  //       text: 'Միասնութիւն',
  //       correct: false,
  //       fontSize: '30px',
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ19',
  //   text: 'Մէկ մայլը, քանի՞ կիլոմետր է:',
  //   answers: [
  //     {
  //       text: '1.906',
  //       correct: false,
  //     }, {
  //       text: '1.960',
  //       correct: false,
  //     }, {
  //       text: '1.609',
  //       correct: true,
  //     }, {
  //       text: '1.690',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ20',
  //   text: 'Ո՞ր երկիրն է ,որ շրջանառութեան մէջ է դրել առաջին թղթադրամը:',
  //   answers: [
  //     {
  //       text: 'Չինաստանը',
  //       correct: true,
  //     }, {
  //       text: 'Իրանը',
  //       correct: false,
  //     }, {
  //       text: 'Անգլիան',
  //       correct: false,
  //     }, {
  //       text: 'Բենգլադեշը',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ21',
  //   text: 'Ո՞ր երկրների միջեւ է եղել՝ 100 տարի տեւող պատերազմը:',
  //   answers: [
  //     {
  //       text: 'Ֆրանսիա- Անգլիա',
  //       correct: true,
  //     }, {
  //       text: 'Ֆրանսիա- Գերմանիա',
  //       correct: false,
  //     }, {
  //       text: 'Ռուսաստան- Շւեդիա',
  //       correct: false,
  //     }, {
  //       text: 'Իտալիա- Հունգարիա',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ22',
  //   text: 'Ո՞րն է ամենաշատ վիտամին C պարունակող միրգը:',
  //   answers: [
  //     {
  //       text: 'Կիվին',
  //       correct: true,
  //     }, {
  //       text: 'Նարինջը',
  //       correct: false,
  //     }, {
  //       text: 'Խնձորը',
  //       correct: false,
  //     }, {
  //       text: 'Կիտրոնը',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ23',
  //   text: 'Ո՞վ է Լեռնային Ղարաբաղի Հանրապետութեան նախագահը:',
  //   answers: [
  //     {
  //       text: 'Բակօ Սահակեան',
  //       correct: true,
  //     }, {
  //       text: 'Վարդան Արամեան',
  //       correct: false,
  //     }, {
  //       text: 'Լեւոն Մկրտչեան',
  //       correct: false,
  //     }, {
  //       text: 'Սպարտակ Թորոսեան',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ24',
  //   text: 'Հայկական բանակի կազմաւորման օրն է',
  //   answers: [
  //     {
  //       text: 'Յունւարի 28',
  //       correct: true,
  //     }, {
  //       text: 'Փետրւարի  18',
  //       correct: false,
  //       fontSize: '29px',
  //     }, {
  //       text: 'Փետրւարի 28',
  //       correct: false,
  //     }, {
  //       text: 'Յունւարի 18',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ25',
  //   text: 'Դոնալդ Թրամփը, ԱՄՆ-ի քանիերրորդ նախագահն է:',
  //   answers: [
  //     {
  //       text: '45',
  //       correct: true,
  //     }, {
  //       text: '52',
  //       correct: false,
  //     }, {
  //       text: '41',
  //       correct: false,
  //     }, {
  //       text: '43',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ26',
  //   text: 'Շուշիի ազատագրման օրն է',
  //   answers: [
  //     {
  //       text: 'Մայիսի 9',
  //       correct: true,
  //     }, {
  //       text: 'Մարտի 2',
  //       correct: false,
  //     }, {
  //       text: 'Մայիսի 5',
  //       correct: false,
  //     }, {
  //       text: 'Մարտի 1',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ27',
  //   text: 'Ո՞ր երկրում է ստեղծւել շախմատ խաղատեսակը:',
  //   answers: [
  //     {
  //       text: 'Հնդկաստան',
  //       correct: true,
  //     }, {
  //       text: 'Իրան',
  //       correct: false,
  //     }, {
  //       text: 'Ռուսաստան',
  //       correct: false,
  //     }, {
  //       text: 'Ամերիկա',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ28',
  //   text: 'Ո՞ր ծրագիրը Microsoft հիմնարկութեանը չի պատկանում։',
  //   answers: [
  //     {
  //       text: 'Libre Office',
  //       correct: true,
  //     }, {
  //       text: 'Skype',
  //       correct: false,
  //     }, {
  //       text: 'Visual Studio',
  //       correct: false,
  //     }, {
  //       text: 'Cortana',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ29',
  //   text: 'Ո՞րն է Կանադաի մայրաքաղաքը։',
  //   answers: [
  //     {
  //       text: 'Օտտավա',
  //       correct: true,
  //     }, {
  //       text: 'Տորոնտո',
  //       correct: false,
  //     }, {
  //       text: 'Մոնրեալ',
  //       correct: false,
  //     }, {
  //       text: 'Վանկուվեր',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ30',
  //   text: 'Ի՞նչ է նշանակում WWW։',
  //   answers: [
  //     {
  //       text: 'World Wide Web',
  //       correct: true,
  //     }, {
  //       text: 'Wide & Wet Web',
  //       correct: false,
  //     }, {
  //       text: 'Wild Weird Web',
  //       correct: false,
  //     }, {
  //       text: 'World Working Web',
  //       correct: false,
  //     },
  //   ],
  // },
  // // {
  //   id: 'Գ31',
  //   text: 'Ո՞րն հունական դիցաբանութեան աստւածներից չէ։',
  //   answers: [
  //     {
  //       text: 'Պերսևս (Perseus)',
  //       correct: true,
  //     }, {
  //       text: 'Աֆրոդիտե (Aphrodite)',
  //       correct: false,
  //     }, {
  //       text: 'Ապոլլոն (Apollo)',
  //       correct: false,
  //     }, {
  //       text: 'Պոսեյդոն (Poseidon)',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ32',
  //   text: 'Ու՞մ է պատկանում «Սամւել» վէպ։',
  //   answers: [
  //     {
  //       text: 'Րաֆֆի',
  //       correct: true,
  //     }, {
  //       text: 'Գ. Էմին',
  //       correct: false,
  //     }, {
  //       text: 'Պ. Սևակ',
  //       correct: false,
  //     }, {
  //       text: 'Ա. Իսահակեան',
  //       correct: false,
  //     },
  //   ],
  // },
  // {
  //   id: 'Գ33',
  //   text: 'Ի՞նչ է նշանակում «Semester»:',
  //   answers: [
  //     {
  //       text: 'Կիսամեակ',
  //       correct: true,
  //     }, {
  //       text: 'քառամեակ',
  //       correct: false,
  //     }, {
  //       text: 'եռամեակ',
  //       correct: false,
  //     }, {
  //       text: 'ամեակ',
  //       correct: false,
  //     },
  //   ],
  // },

];

export default Questions;
