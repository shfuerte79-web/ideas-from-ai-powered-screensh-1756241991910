import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Ideas from: AI-Powered Screenshot to Text`,
  description: ````json
[
  {
    "title": "مترجم النصوص من الصور",
    "description": "أداة تستخدم الذكاء الاصطناعي لترجمة النصوص المستخرجة من الصور إلى لغات متعددة في الوقت الحقيقي.",
    "mvp_plan": "تطوير واجهة بسيطة لتحميل الصور، استخدام مكتبة OCR لاستخراج النصوص، ثم دمج واجهة برمجة التطبيقات لترجمة النصوص. يمكن استخدام أدوات مثل Google Translate API."
  },
  {
    "title": "مدير الملاحظات الذكي",
    "description": "أداة لتحويل لقطات الشاشة إلى ملاحظات منظمة وقابلة للبحث، مما يسهل الوصول إلى المعلومات المهمة.",
    "mvp_plan": "إنشاء واجهة لتحميل لقطات الشاشة، استخدام OCR لاستخراج النصوص، ثم تنظيمها في قاعدة بيانات بسيطة مع إمكانية البحث. يمكن استخدام مكتبة مثل SQLite لتخزين البيانات."
  },
  {
    "title": "تطبيق التعليقات التوضيحية الذكي",
    "description": "أداة تسمح للمستخدمين بإضافة تعليقات توضيحية على لقطات الشاشة المستخرجة، مما يسهل التعاون والمشاركة.",
    "mvp_plan": "تطوير واجهة لتحميل لقطات الشاشة، استخدام OCR لاستخراج النصوص، ثم إضافة خاصية التعليقات التوضيحية باستخدام مكتبة JavaScript مثل Fabric.js. يمكن تخزين التعليقات في قاعدة بيانات بسيطة."
  }
]
````,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}