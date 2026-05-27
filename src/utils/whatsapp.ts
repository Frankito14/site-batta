export function whatsappURL(msg: string, phone = "541150545987") {

    const PHONE_NUMBER = phone;
    const encodeMessage = encodeURIComponent(msg);
    return `https://api.whatsapp.com/send/?phone=${PHONE_NUMBER}&text=${encodeMessage}&type=phone_number&app_absent=0`;
}