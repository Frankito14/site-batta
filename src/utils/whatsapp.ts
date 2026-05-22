export function whatsappURL(msg: string) {
    const PHONE_NUMBER = "541150545987";
    const encodeMessage = encodeURIComponent(msg);
    return `https://api.whatsapp.com/send/?phone=${PHONE_NUMBER}&text=${encodeMessage}&type=phone_number&app_absent=0`;
}