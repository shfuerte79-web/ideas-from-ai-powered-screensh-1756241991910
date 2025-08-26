export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: AI-Powered Screenshot to Text
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
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
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}