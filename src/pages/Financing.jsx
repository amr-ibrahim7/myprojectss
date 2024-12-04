import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { TbArrowUpLeft, TbArrowUpRight } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchCities } from "../apis/cityService";
import { storeOrderForm } from "../apis/storeOrderService";
import MetaTags from "../components/MetaTags";
const Financing = ({ translations, language }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city_id: "",
    salary: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    city_id: "",
    salary: "",
  });

  useEffect(() => {
    const loadCities = async () => {
      try {
        const fetchedCities = await fetchCities(language);
        setCities(fetchedCities);
        // if (fetchedCities.length > 0) {
        //   setFormData((prev) => ({ ...prev, city_id: fetchedCities[0].id }));
        // }
      } catch (error) {
        // تعديل التوست هنا
        toast.error("لا يوجد مدينه");
      }
    };
    loadCities(language);
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^(05\d{8})$/;
    return re.test(phone);
  };

  const validateForm = () => {
    let tempErrors = {
      name: "",
      phone: "",
      email: "",
      city_id: "",
      salary: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = translations.pages.page_financing.name_required;
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = translations.pages.page_financing.email_required;
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      tempErrors.email = translations.pages.page_financing.email_invalid;
      isValid = false;
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = translations.pages.page_financing.phone_required;
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      tempErrors.phone = translations.pages.page_financing.phone_invalid;
      isValid = false;
    }

    if (!formData.city_id) {
      tempErrors.city_id = translations.pages.page_financing.city_required;
      isValid = false;
    }
    // Salary validation
    const salary = parseFloat(formData.salary);
    if (isNaN(salary) || salary < 1000 || salary > 100000) {
      tempErrors.salary = translations.pages.page_financing.salary_mustbe;
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // navigate("/thank-you");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    setIsLoading(true);

    try {
      // Simulate API call
      const message = await storeOrderForm(formData);
      setIsLoading(false);
      toast.success(message || "تم إرسال طلبك بنجاح", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        city_id: cities[0]?.id || "",
        salary: "",
      });
      // Navigate to thank you page
      setTimeout(() => {
        navigate("/thank-you");
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message || "حدث خطأ في الإرسال", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.error("Form submission error:", error);
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
          title: "Apply for Your Financing Now - Dar Al-Sundus Real Estate",
          description:
            "Take the first step towards making your property dream or project a reality with Dar Al-Sundus Real Estate's innovative financing solutions. Apply for your financing today.",
          keywords:
            "Dar Al-Sundus, Apply for Financing, Real Estate Financing, Property Loans, Project Financing, Saudi Real Estate, Financing Solutions",
          ogTitle: "Apply for Your Financing Now - Dar Al-Sundus Real Estate",
          ogDescription:
            "Take the first step towards making your property dream or project a reality with Dar Al-Sundus Real Estate's innovative financing solutions. Apply for your financing today.",
          twitterTitle:
            "Apply for Your Financing Now - Dar Al-Sundus Real Estate",
          twitterDescription:
            "Take the first step towards making your property dream or project a reality with Dar Al-Sundus Real Estate's innovative financing solutions. Apply for your financing today.",
        }
      : {
          title: "اطلب تمويلك الآن - شركة تراست العقارية",
          description:
            "ابدأ الخطوة الأولى نحو تحقيق حلمك العقاري أو مشروعك مع حلول التمويل المبتكرة من شركة تراست العقارية. قدم طلب التمويل الآن.",
          keywords:
            "شركة دار السندس, طلب تمويل, تمويل عقاري, قروض عقارية, تمويل مشاريع, عقارات السعودية, حلول تمويلية",
          ogTitle: "اطلب تمويلك الآن - شركة تراست العقارية",
          ogDescription:
            "ابدأ الخطوة الأولى نحو تحقيق حلمك العقاري أو مشروعك مع حلول التمويل المبتكرة من شركة تراست العقارية. قدم طلب التمويل الآن.",
          twitterTitle: "اطلب تمويلك الآن - شركة تراست العقارية",
          twitterDescription:
            "ابدأ الخطوة الأولى نحو تحقيق حلمك العقاري أو مشروعك مع حلول التمويل المبتكرة من شركة تراست العقارية. قدم طلب التمويل الآن.",
        };

  return (
    <div>
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
      <div className="bg-[url('/image/fin.webp')] bg-center bg-cover">
        <h1 className="container py-32 text-6xl font-bold text-black tracking-widest text-center lg:py-64">
          {translations.pages.page_financing.Steps_Towards}
        </h1>
      </div>
      {/* Financing Form */}
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {translations.pages.page_financing.Request_Financing}
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            {translations.pages.page_financing.Fill_out_the_form_below}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* Name */}
            <div className="mt-2.5">
              <label className="sr-only">
                {translations.pages.page_financing.name}
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                type="text"
                placeholder={translations.pages.page_financing.name}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-2">{errors.name}</p>
              )}
              <p className="text-sm text-gray-500 mt-2">
                {translations.pages.page_financing.Enter_full_name}
              </p>
            </div>

            {/* Phone Number */}
            <div className="mt-2.5">
              <label className="sr-only">
                {translations.pages.page_financing.phone}
              </label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                type="text"
                placeholder={translations.pages.page_financing.phone}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
              )}
              <p className="text-sm text-gray-500 mt-2">
                {translations.pages.page_financing.Enter_phone_number}
              </p>
            </div>
            {/* Email */}
            <div className="sm:col-span-2">
              <label className="sr-only">
                {translations.pages.page_financing.email}
              </label>
              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                placeholder={translations.pages.page_financing.email}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
              )}
              <p className="text-sm text-gray-500 mt-2">
                {translations.pages.page_financing.Enter_email}
              </p>
            </div>

            {/* City Dropdown */}
            <div className="sm:col-span-2">
              <label className="sr-only">
                {translations.pages.page_financing.city}
              </label>
              <select
                name="city_id"
                value={formData.city_id}
                onChange={handleInputChange}
                className="flex h-[55px] w-full rounded-full border bg-background px-8 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">
                  {translations.pages.page_financing.Select_City}
                </option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
              {errors.city_id && (
                <p className="text-red-500 text-sm mt-2">{errors.city_id}</p>
              )}
              <p className="text-sm text-gray-500 mt-2">
                {translations.pages.page_financing.Select_city}
              </p>
            </div>

            {/* Salary */}
            <div className="sm:col-span-2">
              <label className="sr-only">
                {translations.pages.page_financing.salary}
              </label>
              <Input
                type="number"
                name="salary"
                placeholder={translations.pages.page_financing.salary}
                value={formData.salary}
                onChange={handleInputChange}
              />
              {errors.salary && (
                <p className="text-red-500 text-sm mt-2">{errors.salary}</p>
              )}
              <p className="text-sm text-gray-500 mt-2">
                {translations.pages.page_financing.Enter_salary}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {translations.pages.page_financing.Sending}
                </>
              ) : (
                <>
                  {translations.pages.page_financing.Send_Request}
                  {arrowIcon}
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Financing;
