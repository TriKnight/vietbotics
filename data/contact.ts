import type { Lang } from "./applications";

export const contactFormCopy: Record<
  Lang,
  {
    heading: string;
    subheading: string;
    name: string;
    email: string;
    company: string;
    phone: string;
    message: string;
    messagePlaceholder: string;
    optional: string;
    submit: string;
    sending: string;
    successTitle: string;
    successBody: string;
    error: string;
    close: string;
  }
> = {
  en: {
    heading: "Tell us about your project",
    subheading: "Share a few details and an OpenMind Robotics engineer will get back to you within one business day.",
    name: "Full name",
    email: "Work email",
    company: "Company",
    phone: "Phone",
    message: "How can we help?",
    messagePlaceholder: "Describe your application, robots, parts or cycle-time goals…",
    optional: "optional",
    submit: "Send request",
    sending: "Sending…",
    successTitle: "Thank you!",
    successBody: "Your request has been sent. Our team will contact you shortly.",
    error: "Something went wrong. Please try again or email us directly at",
    close: "Close",
  },
  vn: {
    heading: "Chia sẻ về dự án của bạn",
    subheading: "Để lại một vài thông tin, kỹ sư của OpenMind Robotics sẽ phản hồi bạn trong vòng một ngày làm việc.",
    name: "Họ và tên",
    email: "Email công việc",
    company: "Công ty",
    phone: "Số điện thoại",
    message: "Chúng tôi có thể giúp gì?",
    messagePlaceholder: "Mô tả ứng dụng, robot, chi tiết hoặc mục tiêu thời gian chu kỳ của bạn…",
    optional: "không bắt buộc",
    submit: "Gửi yêu cầu",
    sending: "Đang gửi…",
    successTitle: "Cảm ơn bạn!",
    successBody: "Yêu cầu của bạn đã được gửi. Đội ngũ của chúng tôi sẽ liên hệ với bạn sớm.",
    error: "Đã có lỗi xảy ra. Vui lòng thử lại hoặc gửi email trực tiếp tới",
    close: "Đóng",
  },
};
