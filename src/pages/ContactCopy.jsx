import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { TbArrowUpLeft, TbArrowUpRight } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchCities } from "../apis/cityService";
import { submitContactForm } from "../apis/contactService";
import MetaTags from "../components/MetaTags";

export default function Contact({ translations, language }) {
  const navigate = useNavigate();
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city_id: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadCities = async () => {
      try {
        const citiesList = await fetchCities(language);
        setCities(citiesList);
        if (citiesList.length > 0) {
          setFormData((prev) => ({ ...prev, city_id: citiesList[0].id }));
        }
      } catch (error) {
        // تعديل التوست هنا
        toast.error("لا يوجد مدينه");
      }
    };
    loadCities();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // دالة للتحقق من صحة البريد الإلكتروني
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // دالة للتحقق من صحة رقم الهاتف (مثال للتحقق من الهاتف السعودي)
  const validatePhone = (phone) => {
    const re = /^(05\d{8})$/;
    return re.test(phone);
  };

  // دالة التحقق من صحة النموذج
  const validateForm = () => {
    // التحقق من عدم وجود حقول فارغة
    if (!formData.name.trim()) {
      toast.error(translations.pages.page_contact.name_required);
      return false;
    }

    if (!formData.email.trim()) {
      toast.error(translations.pages.page_contact.email_required);
      return false;
    }

    if (!validateEmail(formData.email)) {
      toast.error(translations.pages.page_contact.email_invalid);
      return false;
    }

    if (!formData.phone.trim()) {
      toast.error(translations.pages.page_contact.phone_required);
      return false;
    }

    if (!validatePhone(formData.phone)) {
      toast.error(translations.pages.page_contact.phone_invalid);
      return false;
    }

    if (!formData.message.trim()) {
      toast.error(translations.pages.page_contact.message_required);
      return false;
    }

    if (!formData.city_id) {
      toast.error(translations.pages.page_contact.city_required);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // التحقق من صحة النموذج قبل الإرسال
    if (!validateForm()) {
      return; // إيقاف العملية إذا فشل التحقق
    }
    setIsLoading(true);

    // توست قيد التحميل
    const loadingToast = toast.loading("جاري إرسال رسالتك...", {
      position: "bottom-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    try {
      const message = await submitContactForm(formData);

      // إغلاق توست التحميل
      toast.dismiss(loadingToast);
      setIsLoading(false);

      // توست النجاح
      toast.success(message || "تم إرسال رسالتك بنجاح", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // إعادة تعيين البيانات
      setFormData({
        name: "",
        email: "",
        phone: "",
        city_id: cities[0]?.id || "",
        message: "",
      });

      // التوجيه إلى الصفحة الرئيسية
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      // إغلاق توست التحميل
      toast.dismiss(loadingToast);
      setIsLoading(false);

      // توست الخطأ
      toast.error(error.message || "حدث خطأ في الإرسال", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  const arrowIcon =
    language === "en" ? (
      <TbArrowUpRight className="w-5 h-5 mr-2" />
    ) : (
      <TbArrowUpLeft className="w-5 h-5 ml-2" />
    );

  const metaTags =
    language === "en"
      ? {
          title: "Contact Us - TRUST Real Estate",
          description:
            "Get in touch with TRUST Real Estate for inquiries or assistance regarding property financing and investments in Saudi Arabia.",
        }
      : {
          title: "اتصل بنا - شركة تراست العقارية",
          description:
            "تواصل مع شركة تراست العقارية للاستفسارات أو للحصول على المساعدة بشأن تمويل العقارات والاستثمار في السعودية.",
        };

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <MetaTags
        title={metaTags.title}
        description={metaTags.description}
        keywords={metaTags.keywords}
        ogTitle={metaTags.ogTitle}
        ogDescription={metaTags.ogDescription}
        twitterTitle={metaTags.twitterTitle}
        twitterDescription={metaTags.twitterDescription}
      />

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {translations.pages.page_contact.Get_in_touch}
        </h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          {translations.pages.page_contact.Whether_you_have_questions}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="mt-2.5">
            {" "}
            <label className="sr-only">
              {" "}
              {translations.pages.page_contact.name}
            </label>{" "}
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              required
              placeholder={translations.pages.page_contact.name}
            />
          </div>
          <div className="mt-2.5">
            <label className="sr-only">
              {translations.pages.page_contact.phone}
            </label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="text"
              required
              placeholder={translations.pages.page_contact.phone}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="sr-only">
              {" "}
              {translations.pages.page_contact.email}
            </label>
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
              placeholder={translations.pages.page_contact.email}
            />
          </div>

          {/* City Dropdown */}
          <div className="sm:col-span-2">
            <label className="sr-only">
              {translations.pages.page_contact.city}
            </label>
            <select
              name="city_id"
              value={formData.city_id}
              onChange={handleChange}
              className="flex h-[55px] w-full rounded-full border bg-background px-8 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="sr-only">
              {translations.pages.page_contact.message}
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder={`${translations.pages.page_contact.Shareـyourـquestion}....`}
              rows={4}
            />
          </div>
          <Button
            type="submit"
            className="flex w-full items-center px-8 py-3"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {translations.pages.page_contact.Sending}
              </>
            ) : (
              <>
                {translations.pages.page_contact.Send}
                {arrowIcon}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
