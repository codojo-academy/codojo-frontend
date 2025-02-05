import { InlineWidget } from "react-calendly";

const SecondPage = (formData) => {
    const calendlyUrl = `https://calendly.com/codojo05/demo-session?name=${encodeURIComponent(
        formData.parent_name)}&email=${encodeURIComponent(formData.parent_email)}`;

    return <InlineWidget url={calendlyUrl} />;
};

export default SecondPage;
