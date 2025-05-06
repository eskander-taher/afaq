import { ServiceType } from '../types';

export const services: ServiceType[] = [
  {
    id: 1,
    title: "الفنادق الفاخرة",
    description: "مجموعة متنوعة من أفخم الفنادق في موسكو، من فنادق 5 نجوم إلى الشقق الفندقية الراقية",
    icon: "hotel",
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details: {
      categories: [
        {
          name: "فنادق خمسة نجوم - أسعار مميزة",
          items: [
            "إنتركونتيننتال",
            "بيتر ون",
            "ماريوت امبريال بلازا",
            "سويس اوتيل",
            "ستاندارت",
            "نجوم أربات",
            "موفنبيك",
            "راديسون كولكشن"
          ]
        },
        {
          name: "فنادق خمسة نجوم - الساحة الحمراء",
          items: [
            "سانت ريجس",
            "مترابول",
            "فور سيدون",
            "ردز كالتون",
            "ارارات حياة"
          ]
        },
        {
          name: "شقق فندقية",
          items: ["انترمارك"]
        }
      ]
    }
  },
  {
    id: 2,
    title: "المغامرات والأنشطة الخارجية",
    description: "تجارب مثيرة في الهواء الطلق من ركوب الخيل إلى الدراجات العملاقة والسفاري",
    icon: "compass",
    image: "https://images.pexels.com/photos/4577791/pexels-photo-4577791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details: {
      activities: [
        "ركوب الخيل",
        "الدراجات العملاقة",
        "دبابات سفاري",
        "التصوير والعب مع الهاسكي",
        "ركوب عربة الهاسكي",
        "الدراجات الصغيرة",
        "الزبلاين على النهر",
        "التلفريك ذهاب وعودة"
      ]
    }
  },
  {
    id: 3,
    title: "الترفيه والعروض",
    description: "عروض ترفيهية متنوعة من الدلافين إلى السيرك الروسي والباليه",
    icon: "ticket",
    image: "https://images.pexels.com/photos/3152124/pexels-photo-3152124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details: {
      shows: [
        "عرض الدلافين",
        "اكفاريوم",
        "السرك الروسي",
        "جولة الكروز النهرية",
        "أوبرا (حسب التوفر)",
        "باليه (حسب التوفر)"
      ]
    }
  },
  {
    id: 4,
    title: "تجارب مميزة",
    description: "تجارب فريدة من نوعها من الطيران بالهليكوبتر إلى التصوير مع الحيوانات",
    icon: "star",
    image: "https://images.pexels.com/photos/2954199/pexels-photo-2954199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details: {
      experiences: [
        "الهليكوبتر",
        "المنطاد",
        "دريفت سيارات حقيقية",
        "التصوير مع النمر",
        "التصوير مع الدب في ملابس تراثية روسية"
      ]
    }
  },
  {
    id: 5,
    title: "الأماكن الترفيهية",
    description: "مجموعة متنوعة من الوجهات الترفيهية العائلية",
    icon: "palmtree",
    image: "https://images.pexels.com/photos/136412/pexels-photo-136412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details: {
      attractions: [
        "المعسكر الحربي",
        "حديقة الحيوان",
        "دريم لاند",
        "مصنع الايسكريم",
        "بانوراما 360",
        "حديقة الغزلان الريفية",
        "الزحليقة"
      ]
    }
  },
  {
    id: 6,
    title: "خدمات إضافية",
    description: "خدمات متكاملة لراحتك من الاستقبال والتوديع إلى الخدمات البنكية والإرشاد السياحي",
    icon: "helping-hand",
    image: "https://images.pexels.com/photos/1246953/pexels-photo-1246953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details: {
      services: [
        "استقبال وتوديع",
        "خدمات بنكية",
        "ارشاد سياحي"
      ]
    }
  }
];