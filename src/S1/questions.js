// chentrvax HARXER: 3,4,17,19,20,21,22,25,27,28,31,32
const Questions = [
  {
    id: '1',
    text: 'یک دانشمند با گیاهی که گل­هایش شبیه رز و برگ­هایش شبیه شمعدانی است روبرو شده است. فرضیه­ی او این است که این گیاه دچار جهش ژنتیکی شده است. آیا او می­تواند بعد از فرضیه­سازی نتیجه­گیری کند؟ چه کاری باید انجام دهد؟',
  },
  {
    id: '2',
    text: 'یک دانشمند با گیاهی که گل­هایش شبیه رز و برگ­هایش شبیه شمعدانی است روبرو شده است. فرضیه­ی او این است که این گیاه دچار جهش ژنتیکی شده است. آیا او می­تواند بعد از فرضیه­سازی نتیجه­گیری کند؟ چه کاری باید انجام دهد؟',
    imgUrl: require('./q4.jpg'),
    fontSize: '30px',
    lineHeight: '40px',
  },
  {
    id: '3',
    text: 'یک سیب ۱۰۰ گرمی، چند کیلوگرم است؟',
  },
  {
    id: '4',
    text: 'علی برای خرید به میوه فروشی رفته و متوجه شده که همه­ی انارها ۲۰۰ گرم هستند. او ۵ کیلو انار لازم دارد. چند انار باید بردارد؟',
  },
  {
    id: '5',
    text: 'وزن یک جسم ۶۵۰ گرمی روی سطح زمین چند نیوتن است؟',
  },
  {
    id: '6',
    text: 'اگر شما به عنوان فضانورد روی مریخ فرود بیایید چند نیوتن وزن خواهید داشت؟',
  },
  {
    id: '7',
    text: '۶ متر چند سانتی متر و ۴ میلی متر چند متر است؟',
  },
  {
    id: '8',
    text: 'یکای اندازه گیری حجم و چگالی به ترتیب ---------- و ---------- است.',
    answers: [
      {
        text: 'cc,cc/g',
        correct: true,
      },
      {
        text: 'kg,m^3',
        correct: false,
      },
      {
        text: 'kg,kg/m^3',
        correct: false,
        // fontSize: '25px',
      },
      {
        text: 'cm^3,g/cm^3',
        correct: false,
      },
    ],
  },
  {
    id: '9',
    text: '',
  },
  {
    id: '10',
    text: 'با استفاده از پیمانه­ ای که  4cc حجم دارد، کدام یک از حجم­های زیر قابل اندازه­ گیری است؟',
    answers: [
      {
        text: '28cc',
        correct: true,
      },
      {
        text: '11cc',
        correct: false,
      },
      {
        text: '2cc',
        correct: false,
        // fontSize: '25px',
      },
      {
        text: '5cc',
        correct: false,
      },
    ],
  },
  {
    id: '11',
    text: '',
  },
  {
    id: '12',
    text: 'جسمی به جرم ۱۳۲۹ گرم و چگالی ۰/۰۳ گرم بر سانتی متر مکعب را در استوانه مدرج می­اندازیم. حجم آب درون استوانه چقدر افزایش می­یابد',
  },
  {
    id: '13',
    text: 'جدول زیر را کامل کنید.',
    imgUrl: require('./q13.jpg'),
  },
  {
    id: '14',
    text: 'عناصر زیر چند اتمی هستند؟',
    text2: 'اکسیژن ----- فسفر ----- ید ----- ازن -----	 هیدروژن ----- گوگرد -----',
  },
  {
    id: '15',
    text: 'مدل گلوله­ای مولکول­های زیر را رسم کنید.',
    text2: 'آب و کربن دی اکسید',
  },
  {
    id: '16',
    text: 'فاصله بین ذرات را در حالت­های گاز و جامد مقایسه کنید.',
  },
  {
    id: '17',
    text: 'جنبش ذرات گاز و مایع را مقایسه کنید.',
  },
  {
    id: '18',
    text: 'کدام یک از واکنش­های زیر گرماگیر هستند؟ (سه گزینه را انتخاب کنید)',
    text2: 'الف) تصعید,  ب) چگالش,  ج) ذوب',
    text3: 'د) انجماد, ه) تبخیر, و) میعان',
  },
  {
    id: '19',
    text: 'مواد زیر از کجا به دست می­آیند؟',
    text2: 'الف) شیشه: --------- ب) سیمان: --------- ج) گوگرد: --------- د) الماس: --------- ه) نمک خوراکی: ---------',
  },
  {
    id: '20',
    text: 'سختی ناخن، شیشه، صابون و الماس را مقایسه کنید',
    text2: '---------- > ---------- > ---------- > ----------',
  },
  {
    id: '21',
    text: 'در ساختن سیم­های برق فشار قوی از چه موادی استفاده می­شود؟ چرا؟',
  },
  {
    id: '22',
    text: 'عنصر آهن در معادن به صورت اکسید آنه یافت می­شود. از این ترکیب چگونه به فلز آهن می­رسیم؟',
  },
  {
    id: '23',
    text: 'تصور کنید شما می­خواهید ساختمانی با اسکلت آهنی بسازید، اما آهنی دارید خالص است که بسیار نرم است و زود زنگ می­زند. شما چه کار می­کنید؟',
  },
  {
    id: '24',
    text: 'آزمایشی را طراحی کنید که نشان دهد گازها جرم دارند.',
    time: 3000,
  },
  {
    id: '25',
    text: 'متن زیر را صحیح کنید.',
    text2:
      'عناصر به دو گروه مایعات و جامدات تقسیم می­شوند. گروه اول سطح براقی دارند، چکش خوار هستند، رسانای جریان برق هستند، این گروه همگی جامد می­باشند. اما گروه دیگر که همگی عایق هستند به جز کربن، از آب سبک­تر هستند و همچنین سطح براقی دارند، فلزات نامیده می­شوند.',
    text3:
      'عنصر به ماده­ای گفته می­شود که از یک یا چند نوع اتم ساخته شده باشد. اتم­ها از سه ذره بنیادی به نام­های نوترون و الکترون ساخته شده­اند که نوترون بار منفی و الکترون بار مثبت دارد.',
  },

];

export default Questions;
