import { Resend } from "resend";
export const resend = () => new Resend(process.env.RESEND_API_KEY);
export const FROM = process.env.FORMS_FROM_EMAIL || "African Food Summit & Expo <summit@afrifoodnetwork.com>";
export const INBOX = process.env.FORMS_INBOX || "summit@afrifoodnetwork.com";
