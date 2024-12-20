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
  const [errors, setErrors] = useState({
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
      } catch (error) {
        console.error("Cities loading error:", error);
      }
    };
    loadCities();
  }, [language]);

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
      email: "",
      phone: "",
      city_id: "",
      message: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = translations.pages.page_contact.name_required;
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = translations.pages.page_contact.email_required;
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      tempErrors.email = translations.pages.page_contact.email_invalid;
      isValid = false;
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = translations.pages.page_contact.phone_required;
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      tempErrors.phone = translations.pages.page_contact.phone_invalid;
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = translations.pages.page_contact.message_required;
      isValid = false;
    }

    if (!formData.city_id) {
      tempErrors.city_id = translations.pages.page_contact.city_required;
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear the specific error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const message = await submitContactForm(formData);
      setIsLoading(false);
      toast.success(message || "تم إرسال رسالتك بنجاح", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        city_id: cities[0]?.id || "",
        message: "",
      });

      // Optional: Show success message or redirect
      navigate("/");
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
      // Optionally handle specific error scenarios
      console.error("Submission error:", error);
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
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder={translations.pages.page_contact.name}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mt-2.5">
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="text"
              placeholder={translations.pages.page_contact.phone}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
          <div className="sm:col-span-2">
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder={translations.pages.page_contact.email}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <select
              name="city_id"
              value={formData.city_id}
              onChange={handleChange}
              className="flex h-[55px] w-full rounded-full border bg-background px-8 py-2 text-sm"
            >
              <option value="">
                {translations.pages.page_contact.Select_City}
              </option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
            {errors.city_id && (
              <p className="text-red-500 text-sm mt-1">{errors.city_id}</p>
            )}
          </div>
          <div className="sm:col-span-2">
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={translations.pages.page_contact.Shareـyourـquestion}
              rows={4}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
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
